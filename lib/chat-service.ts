import type { Message } from "./types"
import io, { type Socket } from "socket.io-client"

class ChatService {
  private socket: Socket | null = null
  private currentUserId: number | null = null
  private apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.panchenko.work"
  private token: string | null = null
  private messageListeners: ((message: Message) => void)[] = []

  // Статический метод для генерации roomId
  static generateRoomId(userId1: number, userId2: number): string {
    return `room_${Math.min(userId1, userId2)}_${Math.max(userId1, userId2)}`
  }

  // Устанавливаем текущего пользователя
  setCurrentUser(userId: number) {
    this.currentUserId = userId
  }

  // Устанавливаем токен авторизации
  setToken(token: string) {
    this.token = token
  }

  // Регистрируем обработчик сообщений
  onMessage(callback: (message: Message) => void) {
    this.messageListeners.push(callback)

    // Возвращаем функцию для отписки
    return () => {
      this.messageListeners = this.messageListeners.filter((listener) => listener !== callback)
    }
  }

  // Подключение к WebSocket
  async connectToSocket(roomId: string, onMessageReceived: (message: Message) => void) {
    try {
      // Проверяем, имеет ли пользователь доступ к этой переписке
      if (this.currentUserId && !this.isUserParticipant(this.currentUserId, roomId)) {
        console.error("Access denied: User is not a participant of this conversation")
        return Promise.reject(new Error("Access denied"))
      }

      if (this.socket) {
        this.socket.disconnect()
      }

      this.socket = io(this.apiUrl, {
        transports: ["websocket"],
        extraHeaders: this.token
          ? {
              Authorization: `Bearer ${this.token}`,
            }
          : {},
      })

      return new Promise<void>((resolve, reject) => {
        if (!this.socket) {
          reject(new Error("Socket not initialized"))
          return
        }

        this.socket.on("connect", () => {
          this.socket?.emit("joinRoom", { roomId })
          resolve()
        })

        this.socket.on("connect_error", (error) => {
          console.error("WebSocket connection error:", error)
          reject(error)
        })

        this.socket.on("receiveMessage", (message: Message) => {
          // Проверяем, является ли текущий пользователь участником этого сообщения
          if (
            this.currentUserId &&
            message.senderId !== this.currentUserId &&
            message.recipientId !== this.currentUserId
          ) {
            console.error("Received message for another conversation, ignoring")
            return
          }

          onMessageReceived(message)

          // Уведомляем всех слушателей о новом сообщении
          this.messageListeners.forEach((listener) => {
            try {
              listener(message)
            } catch (error) {
              console.error("Error in message listener:", error)
            }
          })
        })

        this.socket.on("messageError", (error) => {
          console.error("Message error:", error)
        })
      })
    } catch (error) {
      console.error("Error connecting to socket:", error)
      return Promise.resolve() // Return resolved promise to prevent errors
    }
  }

  // Отключение от WebSocket
  disconnectFromSocket() {
    if (this.socket) {
      try {
        this.socket.disconnect()
      } catch (error) {
        console.error("Error disconnecting socket:", error)
      }
      this.socket = null
    }
  }

  // Отправка сообщения через WebSocket
  async sendMessage(message: Message): Promise<boolean> {
    try {
      // Проверяем, является ли текущий пользователь отправителем сообщения
      if (this.currentUserId && message.senderId !== this.currentUserId) {
        console.error("Access denied: User is not the sender of this message")
        return false
      }

      return new Promise<boolean>((resolve) => {
        if (!this.socket || !this.socket.connected) {
          this.sendMessageViaREST(message)
            .then(() => resolve(true))
            .catch((error) => {
              console.error("Failed to send message via REST API:", error)
              resolve(false)
            })
          return
        }

        this.socket.emit(
          "sendMessage",
          {
            roomId: message.roomId,
            senderId: message.senderId,
            recipientId: message.recipientId,
            content: message.content,
            clientMessageId: message.clientMessageId,
          },
          (response: any) => {
            if (response && response.error) {
              console.error("Error sending message via WebSocket:", response.error)
              // Пробуем отправить через REST API как запасной вариант
              this.sendMessageViaREST(message)
                .then(() => resolve(true))
                .catch((error) => {
                  console.error("Failed to send message via REST API:", error)
                  resolve(false)
                })
            } else {
              resolve(true)
            }
          },
        )

        // Также пробуем сохранить через REST API для надежности
        this.sendMessageViaREST(message).catch((error) => {
          console.warn("Failed to save message via REST API:", error)
          // Не отклоняем промис, так как это дополнительная отправка
        })
      })
    } catch (error) {
      console.error("Error in sendMessage:", error)
      return false
    }
  }

  // Отправка сообщения через REST API
  async sendMessageViaREST(message: Message): Promise<boolean> {
    try {
      // Проверяем, является ли текущий пользователь отправителем сообщения
      if (this.currentUserId && message.senderId !== this.currentUserId) {
        console.error("Access denied: User is not the sender of this message")
        return false
      }

      // Пробуем несколько эндпоинтов для повышения надежности
      const endpoints = [`${this.apiUrl}/chat/messages`, `${this.apiUrl}/messages`, `${this.apiUrl}/api/chat/messages`]

      let success = false
      let lastError = null

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
            },
            body: JSON.stringify({ message }),
          })

          if (response.ok) {
            success = true
            break
          } else {
            console.warn(`Endpoint ${endpoint} returned status ${response.status}`)
          }
        } catch (error) {
          lastError = error
          console.warn(`Failed to send message to ${endpoint}:`, error)
        }
      }

      if (!success && lastError) {
        throw lastError
      }

      return success
    } catch (error) {
      console.error("Error sending message via REST API:", error)
      return false
    }
  }

  // Метод для проверки, является ли пользователь участником переписки
  isUserParticipant(userId: number, roomId: string): boolean {
    if (!userId || !roomId) return false

    // Извлекаем ID участников из roomId
    // Формат roomId: "room_{userId1}_{userId2}", где userId1 < userId2
    const parts = roomId.split("_")
    if (parts.length !== 3) return false

    const participant1 = Number.parseInt(parts[1])
    const participant2 = Number.parseInt(parts[2])

    // Проверяем, является ли пользователь одним из участников
    return userId === participant1 || userId === participant2
  }

  // Получение сообщений из API
  async fetchMessagesFromAPI(roomId: string): Promise<Message[]> {
    try {
      // Проверяем, имеет ли пользователь доступ к этой переписке
      if (this.currentUserId && !this.isUserParticipant(this.currentUserId, roomId)) {
        console.error("Access denied: User is not a participant of this conversation")
        return []
      }

      // Используем только проверенный эндпоинт
      const endpoint = `${this.apiUrl.replace(/\/$/, "")}/chat/rooms/${roomId}/messages`

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
        },
      })

      if (!response.ok) {
        console.warn(`Endpoint ${endpoint} returned status ${response.status}`)
        // Сразу возвращаем пустой массив вместо попыток использовать другие эндпоинты
        return []
      }

      const data = await response.json()

      // Проверяем различные форматы ответа
      let messages: any[] = []

      if (Array.isArray(data)) {
        // Если ответ - это массив
        messages = data
      } else if (data.messages && Array.isArray(data.messages)) {
        // Если ответ - это объект с полем messages
        messages = data.messages
      } else {
        console.warn("Unexpected API response format:", data)
        return []
      }

      // Фильтруем сообщения, чтобы показывать только те, в которых пользователь является участником
      const filteredMessages = messages.filter((msg) => {
        const senderId = msg.senderId || (msg.sender && msg.sender.id)
        const recipientId = msg.recipientId || (msg.recipient && msg.recipient.id)

        return this.currentUserId && (senderId == this.currentUserId || recipientId == this.currentUserId)
      })

      // Преобразуем сообщения в нужный формат
      return filteredMessages.map((msg) => this.convertApiMessageToMessage(msg, roomId))
    } catch (error) {
      console.error("Error fetching messages from API:", error)
      return []
    }
  }

  // Получение сообщений
  async getMessages(roomId: string, currentUserId: number, recipientId: number): Promise<Message[]> {
    try {
      // Проверяем, имеет ли пользователь доступ к этой переписке
      if (!this.isUserParticipant(currentUserId, roomId)) {
        console.error("Access denied: User is not a participant of this conversation")
        return []
      }

      // Сначала пробуем получить из API
      const apiMessages = await this.fetchMessagesFromAPI(roomId)

      if (apiMessages && apiMessages.length > 0) {
        // Нормализуем сообщения и сохраняем в localStorage
        const normalizedMessages = this.normalizeMessages(apiMessages, roomId, currentUserId, recipientId)
        this.saveMessagesToLocalStorage(roomId, normalizedMessages)
        return normalizedMessages
      }

      // Если из API не получилось, берем из localStorage
      return this.getMessagesFromLocalStorage(roomId)
    } catch (error) {
      console.error("Error getting messages:", error)
      // В случае ошибки возвращаем сообщения из localStorage
      return this.getMessagesFromLocalStorage(roomId)
    }
  }

  // Нормализация сообщений (исправление полей, если они отсутствуют)
  normalizeMessages(messages: any[], roomId: string, currentUserId: number, recipientId: number): Message[] {
    return messages
      .filter((msg) => {
        // Пропускаем сообщения без необходимых полей
        if (!msg.content) {
          console.warn("Skipping message without content:", msg)
          return false
        }

        // Проверяем, является ли текущий пользователь участником этого сообщения
        const senderId = this.getSenderId(msg, currentUserId, recipientId)
        const msgRecipientId = this.getRecipientId(msg, currentUserId, recipientId)

        if (senderId !== currentUserId && msgRecipientId !== currentUserId) {
          console.warn("Skipping message - user is not a participant:", msg)
          return false
        }

        return true
      })
      .map((msg) => {
        // Нормализуем формат сообщения
        const normalizedMsg: Message = {
          id: msg.id?.toString() || Date.now().toString(),
          content: msg.content || "",
          roomId: msg.roomId || roomId,
          createdAt: msg.createdAt || new Date().toISOString(),
          // Восстанавливаем senderId и recipientId, если они отсутствуют
          senderId: this.getSenderId(msg, currentUserId, recipientId),
          recipientId: this.getRecipientId(msg, currentUserId, recipientId),
        }
        return normalizedMsg
      })
  }

  // Получение senderId из сообщения или восстановление из контекста
  private getSenderId(msg: any, currentUserId: number, recipientId: number): number {
    // Если есть прямое поле senderId, используем его
    if (msg.senderId !== undefined && msg.senderId !== null) {
      return Number(msg.senderId)
    }

    // Если есть sender.id, используем его
    if (msg.sender && msg.sender.id !== undefined) {
      return Number(msg.sender.id)
    }

    // Если есть recipientId и это не текущий пользователь, значит отправитель - текущий пользователь
    if (msg.recipientId !== undefined && Number(msg.recipientId) !== currentUserId) {
      return currentUserId
    }

    // Если ничего не помогло, предполагаем, что это либо текущий пользователь, либо собеседник
    // на основе других данных (например, если сообщение отправлено "мной", то senderId = currentUserId)
    if (msg.isMine || msg.isFromMe) {
      return currentUserId
    }

    // В крайнем случае, если ничего не помогло, возвращаем recipientId как запасной вариант
    return recipientId
  }

  // Получение recipientId из сообщения или восстановление из контекста
  private getRecipientId(msg: any, currentUserId: number, recipientId: number): number {
    // Если есть прямое поле recipientId, используем его
    if (msg.recipientId !== undefined && msg.recipientId !== null) {
      return Number(msg.recipientId)
    }

    // Если есть recipient.id, используем его
    if (msg.recipient && msg.recipient.id !== undefined) {
      return Number(msg.recipient.id)
    }

    // Если есть senderId и это не текущий пользователь, значит получатель - текущий пользователь
    if (msg.senderId !== undefined && Number(msg.senderId) !== currentUserId) {
      return currentUserId
    }

    // Если ничего не помогло, предполагаем, что это либо текущий пользователь, либо собеседник
    if (msg.isMine || msg.isFromMe) {
      return recipientId
    }

    // В крайнем случае, если ничего не помогло, возвращаем currentUserId как запасной вариант
    return currentUserId
  }

  // Сохранение сообщений в localStorage
  saveMessagesToLocalStorage(roomId: string, messages: Message[]) {
    try {
      localStorage.setItem(`chat_messages_${roomId}`, JSON.stringify(messages))
    } catch (error) {
      console.error("Error saving messages to localStorage:", error)
    }
  }

  // Получение сообщений из localStorage
  getMessagesFromLocalStorage(roomId: string): Message[] {
    try {
      // Проверяем, имеет ли пользователь доступ к этой переписке
      if (this.currentUserId && !this.isUserParticipant(this.currentUserId, roomId)) {
        console.error("Access denied: User is not a participant of this conversation")
        return []
      }

      const messagesJson = localStorage.getItem(`chat_messages_${roomId}`)
      if (messagesJson) {
        const messages = JSON.parse(messagesJson)

        // Фильтруем сообщения, чтобы показывать только те, в которых пользователь является участником
        return messages.filter((msg: Message) => {
          return this.currentUserId && (msg.senderId == this.currentUserId || msg.recipientId == this.currentUserId)
        })
      }
    } catch (error) {
      console.error("Error getting messages from localStorage:", error)
    }
    return []
  }

  // Очистка сообщений из localStorage
  clearMessagesToLocalStorage(roomId: string) {
    try {
      localStorage.removeItem(`chat_messages_${roomId}`)
    } catch (error) {
      console.error("Error clearing messages from localStorage:", error)
    }
  }

  // Добавим новый метод для преобразования сообщений из API
  private convertApiMessageToMessage(apiMessage: any, roomId: string): Message {
    try {
      // Проверяем структуру данных из API

      // Извлекаем senderId и recipientId из объектов sender и recipient
      let senderId = apiMessage.senderId
      let recipientId = apiMessage.recipientId

      // Если senderId и recipientId не числа, а объекты sender и recipient
      if (!senderId && apiMessage.sender && typeof apiMessage.sender === "object") {
        senderId = apiMessage.sender.id
      }

      if (!recipientId && apiMessage.recipient && typeof apiMessage.recipient === "object") {
        recipientId = apiMessage.recipient.id
      }

      // Проверяем, что senderId и recipientId определены
      if (!senderId || !recipientId) {
        console.warn("Message missing senderId or recipientId:", apiMessage)
        // Используем значения по умолчанию, если не удалось извлечь
        senderId = senderId || this.currentUserId || 0
        recipientId = recipientId || 0
      }

      // Преобразуем в числа для безопасности
      senderId = Number(senderId)
      recipientId = Number(recipientId)

      // Проверяем, является ли текущий пользователь участником этого сообщения
      if (this.currentUserId && senderId !== this.currentUserId && recipientId !== this.currentUserId) {
        console.warn("Skipping message - user is not a participant:", apiMessage)
        throw new Error("User is not a participant of this message")
      }

      return {
        id: apiMessage.id?.toString() || Date.now().toString(),
        content: apiMessage.content || "",
        roomId: apiMessage.roomId || roomId,
        createdAt: apiMessage.createdAt || new Date().toISOString(),
        senderId: senderId,
        recipientId: recipientId,
        read: apiMessage.read || false,
      }
    } catch (error) {
      console.error("Error converting API message:", error)
      // Return a default message object to prevent errors
      return {
        id: Date.now().toString(),
        content: apiMessage.content || "Error displaying message",
        roomId: roomId,
        createdAt: new Date().toISOString(),
        senderId: 0,
        recipientId: 0,
        read: false,
      }
    }
  }

  // Альтернативный метод загрузки чатов
  loadChatsAlternative = async (user: any, addSampleChat: any) => {
    if (!user?.token) return

    try {
      // Пробуем получить сообщения через эндпоинт chat/messages вместо /messages
      const response = await fetch("https://api.panchenko.work/chat/messages", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      // Остальной код обработки данных...
    } catch (error) {
      console.error("Error loading chats alternative:", error)
      // Если и этот метод не сработал, сразу добавляем пример чата
      // без попыток использовать другие эндпоинты
      addSampleChat()
    }
  }
}

export const chatService = new ChatService()

