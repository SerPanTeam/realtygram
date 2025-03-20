"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send, RefreshCw, X, Download } from "lucide-react"
import { formatImageUrl } from "@/lib/image-utils"
import { useAuth } from "@/lib/auth-context"
import { profileApi } from "@/lib/api"
import { chatService } from "@/lib/chat-service"
import type { Profile, ChatMessage } from "@/lib/types"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Skeleton } from "@/components/ui/skeleton"

interface ChatConversationProps {
  recipientUsername: string
  onBack?: () => void
  isMobile?: boolean
}

export function ChatConversation({ recipientUsername, onBack, isMobile = false }: ChatConversationProps) {
  const [recipient, setRecipient] = useState<Profile | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [connected, setConnected] = useState(false)
  const [fetchingMessages, setFetchingMessages] = useState(false)
  const [accessDenied, setAccessDenied] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { user } = useAuth()
  const [roomId, setRoomId] = useState<string>("")
  const messagesRef = useRef<ChatMessage[]>([]) // Reference to keep track of messages

  // Load recipient profile
  useEffect(() => {
    const loadRecipient = async () => {
      if (!user?.token) return

      setLoading(true)
      try {
        // Пробуем получить профиль по имени пользователя
        try {
          const { profile } = await profileApi.get(recipientUsername, user.token)
          setRecipient(profile)

          // Generate room ID once we have both users
          if (user && profile) {
            const newRoomId = chatService.constructor.generateRoomId(user.id, profile.id)

            // Проверяем, является ли пользователь участником переписки
            if (!chatService.isUserParticipant(user.id, newRoomId)) {
              console.error("Access denied: User is not a participant of this conversation")
              setAccessDenied(true)
              setLoading(false)
              return
            }

            setRoomId(newRoomId)

            // Установим ID текущего пользователя и токен в chatService
            chatService.setCurrentUser(user.id)
            chatService.setToken(user.token)
          }
        } catch (error) {
          console.error("Error loading recipient profile:", error)

          // Если не удалось получить профиль, создаем базовый профиль
          // Это позволит продолжить работу чата даже без полных данных профиля
          const basicProfile: Profile = {
            id: 0, // Временный ID, будет обновлен позже
            username: recipientUsername,
            bio: "",
            img: "",
            following: false,
          }
          setRecipient(basicProfile)

          // Пробуем получить ID пользователя через поиск
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/users/search?username=${encodeURIComponent(recipientUsername)}`,
              {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                  "Content-Type": "application/json",
                },
              },
            )

            if (response.ok) {
              const data = await response.json()
              if (data.users && data.users.length > 0) {
                const foundUser = data.users.find((u: any) => u.username === recipientUsername)
                if (foundUser) {
                  setRecipient(foundUser)

                  // Generate room ID with the found user
                  const newRoomId = chatService.constructor.generateRoomId(user.id, foundUser.id)

                  // Проверяем, является ли пользователь участником переписки
                  if (!chatService.isUserParticipant(user.id, newRoomId)) {
                    console.error("Access denied: User is not a participant of this conversation")
                    setAccessDenied(true)
                    setLoading(false)
                    return
                  }

                  setRoomId(newRoomId)
                }
              }
            }
          } catch (searchError) {
            console.error("Error searching for user:", searchError)
          }

          // Если не удалось найти пользователя, создаем временный roomId
          if (!roomId) {
            // Используем username как временный ID
            const tempId = recipientUsername.charCodeAt(0) * 1000 + recipientUsername.length
            const newRoomId = chatService.constructor.generateRoomId(user.id, tempId)

            // Проверяем, является ли пользователь участником переписки
            if (!chatService.isUserParticipant(user.id, newRoomId)) {
              console.error("Access denied: User is not a participant of this conversation")
              setAccessDenied(true)
              setLoading(false)
              return
            }

            setRoomId(newRoomId)
          }
        }

        // Установим ID текущего пользователя и токен в chatService
        chatService.setCurrentUser(user.id)
        chatService.setToken(user.token)
      } catch (error) {
        console.error("Error in loadRecipient:", error)
      } finally {
        setLoading(false)
      }
    }

    loadRecipient()
  }, [recipientUsername, user])

  // Connect to chat service and join room
  useEffect(() => {
    if (!user || !roomId || accessDenied) return

    let mounted = true
    const chatInitialized = { current: false }

    const initializeChat = async () => {
      try {
        // Проверка доступа: убедимся, что текущий пользователь является участником переписки
        if (!chatService.isUserParticipant(user.id, roomId)) {
          console.error("Access denied: User is not a participant of this conversation")
          setAccessDenied(true)
          return
        }

        // Connect to chat service
        await chatService.connectToSocket(roomId, (message) => {
          if (!mounted) return

          // Only process messages for this room
          if (message.roomId !== roomId) return

          // Use functional update to ensure atomic state updates
          setMessages((prevMessages) => {
            // Проверяем, есть ли это сообщение в списке ожидающих
            const pendingIndex = prevMessages.findIndex(
              (m) =>
                // Проверяем по clientMessageId
                (message.clientMessageId && m.clientMessageId === message.clientMessageId) ||
                // Или по содержимому и отправителю/получателю
                (m.content === message.content &&
                  m.senderId === message.senderId &&
                  m.recipientId === message.recipientId &&
                  m.pending === true),
            )

            // Если нашли ожидающее сообщение, обновляем его статус
            if (pendingIndex >= 0) {
              const newMessages = [...prevMessages]
              newMessages[pendingIndex] = {
                ...message,
                pending: false,
              }
              messagesRef.current = newMessages

              // Сохраняем в localStorage
              chatService.saveMessagesToLocalStorage(roomId, newMessages)

              return newMessages
            }

            // Проверяем на дубликаты
            const isDuplicate = prevMessages.some((m) => {
              // Проверяем по ID
              if (message.id && m.id === message.id) return true

              // Проверяем по clientMessageId
              if (message.clientMessageId && m.clientMessageId === message.clientMessageId) return true

              // Проверяем по содержимому, отправителю/получателю и примерному времени
              if (
                m.content === message.content &&
                m.senderId === message.senderId &&
                m.recipientId === message.recipientId
              ) {
                const timeDiff = Math.abs(new Date(m.createdAt).getTime() - new Date(message.createdAt).getTime())
                if (timeDiff < 5000) return true
              }

              return false
            })

            // Если дубликат, не добавляем
            if (isDuplicate) {
              return prevMessages
            }

            // Добавляем новое сообщение
            const newMessages = [...prevMessages, message]
            messagesRef.current = newMessages

            // Сохраняем в localStorage
            chatService.saveMessagesToLocalStorage(roomId, newMessages)

            return newMessages
          })
        })

        if (!mounted) return

        // Set connection status
        setConnected(true)

        // Join the room
        chatInitialized.current = true

        // Explicitly request message history from the new REST API endpoint
        // Fetch messages from the API
        const apiMessages = await chatService.fetchMessagesFromAPI(roomId)

        if (apiMessages && apiMessages.length > 0) {
          // Нормализуем сообщения
          const normalizedMessages = apiMessages.map((message) => {
            // Проверяем и исправляем senderId и recipientId
            if (!message.senderId && message.sender) {
              message.senderId = message.sender.id
            }
            if (!message.recipientId && message.recipient) {
              message.recipientId = message.recipient.id
            }

            // Убеждаемся, что roomId установлен
            return {
              ...message,
              roomId: roomId,
              // Преобразуем senderId и recipientId в числа
              senderId: Number(message.senderId),
              recipientId: Number(message.recipientId),
            }
          })

          // Удаляем дубликаты
          const uniqueMessages = removeDuplicates(normalizedMessages)
          setMessages(uniqueMessages)
          messagesRef.current = uniqueMessages

          // Сохраняем в localStorage
          chatService.saveMessagesToLocalStorage(roomId, uniqueMessages)
        } else {
          // If no messages from API, try local storage
          const localMessages = chatService.getMessagesFromLocalStorage(roomId)

          if (localMessages.length > 0) {
            // Нормализуем сообщения из localStorage
            const normalizedMessages = localMessages.map((message) => {
              return {
                ...message,
                roomId: roomId,
                // Преобразуем senderId и recipientId в числа
                senderId: Number(message.senderId),
                recipientId: Number(message.recipientId),
              }
            })

            const uniqueMessages = removeDuplicates(normalizedMessages)
            setMessages(uniqueMessages)
            messagesRef.current = uniqueMessages
          }
        }
      } catch (error) {
        console.error("Error initializing chat:", error)
        setConnected(false)

        // If failed to initialize chat, try to get messages from localStorage
        const localMessages = chatService.getMessagesFromLocalStorage(roomId)

        if (localMessages.length > 0) {
          setMessages(localMessages)
          messagesRef.current = localMessages
        }
      }
    }

    // Initialize chat immediately
    initializeChat()

    return () => {
      mounted = false
      chatService.disconnectFromSocket()
    }
  }, [user, recipient, roomId, accessDenied])

  // Helper function to remove duplicate messages
  const removeDuplicates = useCallback((messages: ChatMessage[]): ChatMessage[] => {
    const uniqueMessages: ChatMessage[] = []
    const messageMap = new Map<string, boolean>()

    messages.forEach((message) => {
      // Create a unique key for each message
      let messageKey: string

      if (message.clientMessageId) {
        messageKey = `client_${message.clientMessageId}`
      } else if (message.id) {
        messageKey = `id_${message.id}`
      } else {
        messageKey = `content_${message.senderId}_${message.recipientId}_${message.content}_${message.createdAt}`
      }

      // If we haven't seen this message before, add it
      if (!messageMap.has(messageKey)) {
        messageMap.set(messageKey, true)
        uniqueMessages.push(message)
      }
    })

    // Sort by date
    return uniqueMessages.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
  }, [])

  // Scroll to bottom on initial load and when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!user || !recipient || !newMessage.trim() || !roomId) return

    const messageContent = newMessage.trim()
    setNewMessage("")
    setSending(true)

    try {
      // Create a unique client ID for the message
      const clientMessageId = `client_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

      // Create a temporary message to show immediately
      const tempMessage: ChatMessage = {
        id: 0, // Temporary ID
        content: messageContent,
        senderId: user.id,
        recipientId: recipient.id,
        roomId: roomId,
        createdAt: new Date().toISOString(),
        read: false,
        clientMessageId: clientMessageId,
        pending: true,
      }

      // Add the temporary message to the UI
      setMessages((prev) => {
        const newMessages = [...prev, tempMessage]
        messagesRef.current = newMessages

        // Save to localStorage
        chatService.saveMessagesToLocalStorage(roomId, newMessages)

        return newMessages
      })

      // Scroll to the new message
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)

      // Send the message to the server
      chatService.sendMessage({
        roomId,
        senderId: user.id,
        recipientId: recipient.id,
        content: messageContent,
        clientMessageId: clientMessageId,
      })

      // Автоматически обновляем статус сообщения через 3 секунды, если не получили подтверждение
      setTimeout(() => {
        setMessages((prevMessages) => {
          const pendingIndex = prevMessages.findIndex(
            (m) => m.clientMessageId === clientMessageId && m.pending === true,
          )

          if (pendingIndex >= 0) {
            const newMessages = [...prevMessages]
            newMessages[pendingIndex] = {
              ...newMessages[pendingIndex],
              pending: false,
            }

            // Сохраняем обновленные сообщения в localStorage
            chatService.saveMessagesToLocalStorage(roomId, newMessages)

            return newMessages
          }

          return prevMessages
        })
      }, 3000)

      // Focus the input field
      inputRef.current?.focus()
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error sending message",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSending(false)
    }
  }

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      router.push("/messages")
    }
  }

  // Принудительное обновление сообщений из API
  const refreshMessages = async () => {
    if (!roomId) return

    setFetchingMessages(true)
    try {
      // Запрашиваем сообщения напрямую из API
      const apiMessages = await chatService.fetchMessagesFromAPI(roomId)

      if (apiMessages && apiMessages.length > 0) {
        // Нормализуем сообщения
        const normalizedMessages = apiMessages.map((message) => ({
          ...message,
          roomId: roomId,
        }))

        // Обновляем состояние
        const uniqueMessages = removeDuplicates(normalizedMessages)
        setMessages(uniqueMessages)
        messagesRef.current = uniqueMessages

        // Сохраняем в localStorage
        chatService.saveMessagesToLocalStorage(roomId, uniqueMessages)

        toast({
          title: "Messages refreshed",
          description: `Retrieved ${uniqueMessages.length} messages from the server`,
        })
      } else {
        toast({
          title: "No messages found",
          description: "No messages found in the database",
        })
      }
    } catch (error) {
      console.error("Error refreshing messages:", error)
      toast({
        title: "Error refreshing messages",
        description: "Failed to refresh messages from the server",
        variant: "destructive",
      })
    } finally {
      setFetchingMessages(false)
    }
  }

  // Очистка истории сообщений
  const clearChatHistory = () => {
    chatService.clearMessagesToLocalStorage(roomId)
    setMessages([])
    toast({
      title: "Chat history cleared",
      description: "All message history has been cleared from localStorage",
    })
  }

  // Show loading state
  if (loading) {
    return (
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-[#dbdbdb] flex items-center justify-between">
          {isMobile && (
            <Button variant="ghost" size="icon" className="mr-2" disabled>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <div className="flex items-center">
            <Skeleton className="h-10 w-10 rounded-full mr-3" />
            <div>
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4">
          <div className="flex justify-start">
            <Skeleton className="h-8 w-8 rounded-full mr-2" />
            <Skeleton className="h-12 w-48 rounded-2xl" />
          </div>
          <div className="flex justify-end">
            <Skeleton className="h-12 w-48 rounded-2xl" />
          </div>
          <div className="flex justify-start">
            <Skeleton className="h-8 w-8 rounded-full mr-2" />
            <Skeleton className="h-12 w-36 rounded-2xl" />
          </div>
        </div>

        <div className="p-4 border-t border-[#dbdbdb]">
          <Skeleton className="h-10 w-full rounded-full" />
        </div>
      </div>
    )
  }

  // Show access denied message
  if (accessDenied) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-4">
        <h3 className="text-lg font-semibold mb-2">Access Denied</h3>
        <p className="text-[#737373] text-center mb-4">You don't have permission to view this conversation.</p>
        <Button onClick={handleBack}>Back to Messages</Button>
      </div>
    )
  }

  // Show error if recipient not found
  if (!recipient) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-4">
        <h3 className="text-lg font-semibold mb-2">User not found</h3>
        <p className="text-[#737373] text-center mb-4">
          The user you're trying to message doesn't exist or is not available.
        </p>
        <Button onClick={handleBack}>Back to Messages</Button>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col pb-16 md:pb-0">
      {/* Header */}
      <div className="p-4 border-b border-[#dbdbdb] flex items-center justify-between">
        <div className="flex items-center">
          {isMobile && (
            <Button variant="ghost" size="icon" className="mr-2" onClick={handleBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={formatImageUrl(recipient.img)} alt={recipient.username} />
            <AvatarFallback>{recipient.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold">{recipient.username}</h3>
            <p className="text-xs text-[#737373]">{recipient.bio || `@${recipient.username}`}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={refreshMessages} disabled={fetchingMessages}>
                  {fetchingMessages ? <RefreshCw className="h-5 w-5 animate-spin" /> : <Download className="h-5 w-5" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh Messages from Server</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={clearChatHistory}>
                  <X className="h-5 w-5 text-red-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clear Chat History</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Connection status */}
      {!connected && (
        <div className="bg-yellow-50 p-2 text-center text-sm text-yellow-700">
          Working in offline mode. Messages will be sent when connection is restored.
        </div>
      )}

      {/* Fetching messages indicator */}
      {fetchingMessages && (
        <div className="bg-blue-50 p-2 text-center text-sm text-blue-700 flex items-center justify-center">
          <RefreshCw className="h-4 w-4 mr-1 animate-spin" />
          Fetching messages from server...
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 pb-2 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-4">
            <Avatar className="h-16 w-16 mb-4">
              <AvatarImage src={formatImageUrl(recipient.img)} alt={recipient.username} />
              <AvatarFallback>{recipient.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-lg mb-1">{recipient.username}</h3>
            <p className="text-[#737373] mb-4">{recipient.bio || `@${recipient.username}`}</p>
            <p className="text-sm text-[#737373] mb-4">
              This is the beginning of your conversation. Discuss property details, schedule viewings, or negotiate
              terms professionally.
            </p>
            <p className="text-sm font-medium">Type a message below to start chatting</p>
          </div>
        ) : (
          messages.map((message, index) => {
            // Определяем, является ли текущий пользователь отправителем сообщения
            const isCurrentUserSender = user && Number(message.senderId) === Number(user.id)

            return (
              <div
                key={`${message.clientMessageId || message.id || index}-${message.createdAt}`}
                className={cn("flex", isCurrentUserSender ? "justify-end" : "justify-start")}
              >
                {!isCurrentUserSender && (
                  <Avatar className="h-8 w-8 mr-2 self-end mb-1">
                    <AvatarImage src={formatImageUrl(recipient.img)} alt={recipient.username} />
                    <AvatarFallback>{recipient.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                )}
                <div className="max-w-[70%]">
                  <div
                    className={cn(
                      "p-3 rounded-2xl text-sm",
                      isCurrentUserSender ? "bg-[#4d00ff] text-white" : "bg-[#efefef]",
                      message.pending && "opacity-70",
                    )}
                  >
                    <p>{message.content}</p>
                  </div>
                  <div className={cn("text-xs text-[#737373] mt-1", isCurrentUserSender ? "text-right" : "")}>
                    {new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    {message.pending && " (sending...)"}
                  </div>
                </div>
              </div>
            )
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-[#dbdbdb]">
        <div className="flex items-center rounded-full border border-[#dbdbdb] bg-white px-4 py-2">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
          />
          <Button
            type="submit"
            variant="ghost"
            size="sm"
            className={cn(
              "text-[#0095f6] font-medium",
              (!newMessage.trim() || sending) && "opacity-50 cursor-not-allowed",
            )}
            disabled={!newMessage.trim() || sending}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}

