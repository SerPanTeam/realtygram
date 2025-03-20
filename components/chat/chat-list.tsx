"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, RefreshCw } from "lucide-react"
import { formatImageUrl } from "@/lib/image-utils"
import { useAuth } from "@/lib/auth-context"
import { profileApi } from "@/lib/api"
import { chatService } from "@/lib/chat-service"
import type { Profile, ChatMessage } from "@/lib/types"

interface ChatListProps {
  selectedUserId?: string
  onSelectUser: (userId: string) => void
}

interface ChatListItem {
  profile: Profile
  lastMessage?: ChatMessage
  unreadCount: number
}

export function ChatList({ selectedUserId, onSelectUser }: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [recentChats, setRecentChats] = useState<ChatListItem[]>([])
  const [searchResults, setSearchResults] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { user } = useAuth()

  // Функция для загрузки чатов напрямую с сервера
  const loadChatsFromServer = async () => {
    if (!user?.token) return

    setRefreshing(true)
    setError(null)

    try {
      // Прямой запрос к API для получения списка чатов
      const response = await fetch("https://api.panchenko.work/chat/conversations", {
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

      // Обработка полученных данных
      const chatItems: ChatListItem[] = []

      // Если API вернул массив чатов
      if (Array.isArray(data.conversations)) {
        for (const conversation of data.conversations) {
          try {
            // Определяем ID собеседника (не текущего пользователя)
            const otherUserId =
              conversation.otherUser ||
              (conversation.participants && conversation.participants.find((id: number) => id !== user.id))

            if (!otherUserId) {
              console.error("Could not determine other user ID for conversation:", conversation)
              continue
            }

            // Проверяем, является ли текущий пользователь участником этого чата
            const roomId =
              conversation.roomId || `room_${Math.min(user.id, otherUserId)}_${Math.max(user.id, otherUserId)}`

            // Проверка участия пользователя в чате
            if (!chatService.isUserParticipant(user.id, roomId)) {
              continue
            }

            // Создаем профиль собеседника из имеющихся данных
            const profile: Profile = {
              id: otherUserId,
              username: conversation.otherUsername || `user_${otherUserId}`,
              bio: "",
              img: "",
              following: false,
            }

            // Создаем элемент чата
            chatItems.push({
              profile,
              lastMessage: conversation.lastMessage,
              unreadCount: conversation.unreadCount || 0,
            })
          } catch (error) {
            console.error(`Error processing conversation:`, error)
          }
        }
      }

      // Если получили чаты, обновляем состояние
      if (chatItems.length > 0) {
        setRecentChats(chatItems)
      } else {
        // Если чатов нет, пробуем получить через другой метод
        await loadChatsAlternative()
      }
    } catch (error) {
      console.error("Error loading chats from server:", error)
      setError("Не удалось загрузить список чатов. Пожалуйста, попробуйте позже.")
      // В случае ошибки пробуем альтернативный метод
      await loadChatsAlternative()
    } finally {
      setRefreshing(false)
      setLoading(false)
    }
  }

  // Альтернативный метод загрузки чатов
  const loadChatsAlternative = async () => {
    if (!user?.token) return

    try {
      // Используем только доступный эндпоинт
      const response = await fetch("https://api.panchenko.work/chat/messages", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        // Если эндпоинт недоступен, сразу переходим к добавлению примера чата
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      // Группируем сообщения по собеседникам
      const messagesByUser = new Map<number, { messages: ChatMessage[]; profile?: any }>()

      // Проверяем структуру данных - может быть массив напрямую или в свойстве messages
      const messages = Array.isArray(data) ? data : data.messages || []

      if (messages.length > 0) {
        for (const message of messages) {
          // Проверяем, что у сообщения есть необходимые поля
          let senderId = message.senderId
          let recipientId = message.recipientId
          let senderProfile = null
          let recipientProfile = null

          // Извлекаем данные из объектов sender и recipient, если они есть
          if (!senderId && message.sender) {
            senderId = message.sender.id
            senderProfile = message.sender
          }
          if (!recipientId && message.recipient) {
            recipientId = message.recipient.id
            recipientProfile = message.recipient
          }

          // Пропускаем сообщения без senderId или recipientId
          if (!senderId || !recipientId) {
            console.warn("Skipping message without sender or recipient:", message)
            continue
          }

          // Проверяем, является ли текущий пользователь участником этого сообщения
          if (Number(senderId) !== user.id && Number(recipientId) !== user.id) {
            continue
          }

          // Определяем ID собеседника (не текущего пользователя)
          const otherUserId = Number(senderId) === user.id ? Number(recipientId) : Number(senderId)
          const otherProfile = Number(senderId) === user.id ? recipientProfile : senderProfile

          if (!messagesByUser.has(otherUserId)) {
            messagesByUser.set(otherUserId, {
              messages: [],
              profile: otherProfile,
            })
          }

          messagesByUser.get(otherUserId)!.messages.push({
            ...message,
            senderId: Number(senderId),
            recipientId: Number(recipientId),
          })
        }
      }

      // Создаем элементы чата для каждого собеседника
      const chatItems: ChatListItem[] = []

      for (const [otherUserId, userData] of messagesByUser.entries()) {
        try {
          // Создаем профиль собеседника из имеющихся данных или из сообщений
          let profile: Profile

          if (userData.profile) {
            // Если у нас есть данные профиля из сообщений, используем их
            profile = {
              id: otherUserId,
              username: userData.profile.username || `user_${otherUserId}`,
              bio: userData.profile.bio || "",
              img: userData.profile.img || "",
              following: false,
            }
          } else {
            // Если данных профиля нет, создаем базовый профиль
            profile = {
              id: otherUserId,
              username: `user_${otherUserId}`,
              bio: "",
              img: "",
              following: false,
            }
          }

          // Сортируем сообщения по дате (сначала новые)
          const sortedMessages = [...userData.messages].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )

          // Получаем последнее сообщение
          const lastMessage = sortedMessages[0]

          // Считаем непрочитанные сообщения
          const unreadCount = sortedMessages.filter((msg) => !msg.read && Number(msg.senderId) !== user.id).length

          // Добавляем чат в список
          chatItems.push({
            profile,
            lastMessage,
            unreadCount,
          })
        } catch (error) {
          console.error(`Error processing user ${otherUserId}:`, error)
        }
      }

      // Сортируем чаты по дате последнего сообщения
      chatItems.sort((a, b) => {
        if (!a.lastMessage && !b.lastMessage) return 0
        if (!a.lastMessage) return 1
        if (!b.lastMessage) return -1
        return new Date(b.lastMessage.createdAt).getTime() - new Date(a.lastMessage.createdAt).getTime()
      })

      if (chatItems.length > 0) {
        setRecentChats(chatItems)
      } else {
        // Если и этот метод не дал результатов, добавляем пример чата
        addSampleChat()
      }
    } catch (error) {
      console.error("Error loading chats alternative:", error)
      setError("Не удалось загрузить список чатов. Пожалуйста, попробуйте позже.")
      // В случае ошибки добавляем пример чата
      addSampleChat()
    }
  }

  // Функция для добавления примера чата
  const addSampleChat = () => {
    if (!user) return

    const sampleProfile: Profile = {
      id: 101,
      username: "sashaa",
      email: "sasha@example.com",
      bio: "Welcome to ICMGRAM! Send me a message to start chatting.",
      img: "/placeholder.svg?height=32&width=32",
      following: false,
    }

    setRecentChats([
      {
        profile: sampleProfile,
        unreadCount: 1,
        lastMessage: {
          id: 1,
          content: "Welcome to ICMGRAM! Click here to start a conversation.",
          senderId: sampleProfile.id,
          recipientId: user.id,
          roomId: `room_${Math.min(user.id, sampleProfile.id)}_${Math.max(user.id, sampleProfile.id)}`,
          createdAt: new Date().toISOString(),
          read: false,
        },
      },
    ])
  }

  // Загружаем чаты при монтировании компонента
  useEffect(() => {
    if (user?.token) {
      // Устанавливаем текущего пользователя в chatService
      chatService.setCurrentUser(user.id)
      chatService.setToken(user.token)

      loadChatsFromServer()
    } else {
      setLoading(false)
    }

    // Слушаем новые сообщения для обновления списка чатов
    const unsubscribeMessage = chatService.onMessage(async (message) => {
      if (!user?.token) return

      try {
        // Проверяем, является ли текущий пользователь участником этого сообщения
        if (message.senderId !== user.id && message.recipientId !== user.id) {
          return
        }

        // Получаем ID собеседника
        const otherUserId = message.senderId === user.id ? message.recipientId : message.senderId

        // Создаем базовый профиль собеседника
        const profile: Profile = {
          id: otherUserId,
          username: `user_${otherUserId}`,
          bio: "",
          img: "",
          following: false,
        }

        // Обновляем список чатов
        setRecentChats((prevChats) => {
          // Ищем существующий чат
          const existingChatIndex = prevChats.findIndex((chat) => chat.profile.id === profile.id)

          // Создаем новый элемент чата
          const newChatItem: ChatListItem = {
            profile,
            lastMessage: message,
            unreadCount: message.senderId !== user.id ? 1 : 0,
          }

          // Если чат существует, обновляем его
          if (existingChatIndex !== -1) {
            const updatedChats = [...prevChats]
            const existingChat = updatedChats[existingChatIndex]

            // Обновляем последнее сообщение и счетчик непрочитанных
            updatedChats[existingChatIndex] = {
              ...existingChat,
              lastMessage: message,
              unreadCount: existingChat.unreadCount + (message.senderId !== user.id ? 1 : 0),
            }

            // Перемещаем чат наверх
            const chatToMove = updatedChats[existingChatIndex]
            updatedChats.splice(existingChatIndex, 1)
            updatedChats.unshift(chatToMove)

            return updatedChats
          }

          // Если чата нет, добавляем его в начало списка
          return [newChatItem, ...prevChats]
        })
      } catch (error) {
        console.error("Error updating chat list:", error)
      }
    })

    return () => {
      unsubscribeMessage()
    }
  }, [user])

  // Search for users
  useEffect(() => {
    if (!searchQuery.trim() || !user?.token) {
      setSearchResults([])
      return
    }

    const searchUsers = async () => {
      setLoading(true)
      try {
        // Пробуем найти пользователя по имени пользователя
        try {
          const { profile } = await profileApi.get(searchQuery, user.token)
          setSearchResults([profile])
        } catch (error) {
          // Если не удалось найти по имени пользователя, пробуем поиск
          const response = await fetch(
            `https://api.panchenko.work/users/search?username=${encodeURIComponent(searchQuery)}`,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
              },
            },
          )

          if (response.ok) {
            const data = await response.json()
            setSearchResults(data.users || [])
          } else {
            setSearchResults([])
          }
        }
      } catch (error) {
        console.error("Error searching users:", error)
        setSearchResults([])
      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(() => {
      searchUsers()
    }, 500)

    return () => clearTimeout(debounce)
  }, [searchQuery, user])

  const handleSelectUser = (profile: Profile) => {
    // Add to recent chats if not already there
    if (!recentChats.some((chat) => chat.profile.id === profile.id)) {
      const newChatItem: ChatListItem = {
        profile,
        unreadCount: 0,
      }

      const updatedChats = [newChatItem, ...recentChats].slice(0, 10) // Keep only 10 most recent
      setRecentChats(updatedChats)
    }

    // Use the username for navigation
    onSelectUser(profile.username)
  }

  const handleNewChat = () => {
    router.push("/messages/new")
  }

  // Обработчик для принудительного обновления списка чатов
  const handleRefresh = () => {
    loadChatsFromServer()
  }

  return (
    <div className="h-full flex flex-col border-r border-[#dbdbdb]">
      {/* Header */}
      <div className="p-4 border-b border-[#dbdbdb] flex items-center justify-between">
        <h2 className="font-bold text-lg">{user?.username || "Messages"}</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRefresh}
            disabled={refreshing}
            className="text-gray-500 hover:text-black"
          >
            <RefreshCw className={`h-5 w-5 ${refreshing ? "animate-spin" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleNewChat}>
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-[#dbdbdb]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-9 bg-[#efefef] border-none"
          />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="p-4 bg-red-50 text-red-600 text-sm">
          {error}
          <Button variant="link" className="p-0 h-auto text-red-600 underline ml-2" onClick={handleRefresh}>
            Попробовать снова
          </Button>
        </div>
      )}

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="flex justify-center items-center h-20">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : searchQuery ? (
          // Search results
          searchResults.length > 0 ? (
            <div>
              {searchResults.map((profile) => (
                <div
                  key={profile.id}
                  className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                    selectedUserId === profile.username ? "bg-gray-100" : ""
                  }`}
                  onClick={() => handleSelectUser(profile)}
                >
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                    <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{profile.username}</p>
                    <p className="text-sm text-[#737373]">{profile.fullName || profile.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-[#737373]">No users found</div>
          )
        ) : recentChats.length > 0 ? (
          <div>
            {recentChats.map((chatItem) => (
              <div
                key={chatItem.profile.id}
                className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                  selectedUserId === chatItem.profile.username ? "bg-gray-100" : ""
                }`}
                onClick={() => {
                  handleSelectUser(chatItem.profile)
                }}
              >
                <Avatar className="h-12 w-12 mr-3 relative">
                  <AvatarImage src={formatImageUrl(chatItem.profile.img)} alt={chatItem.profile.username} />
                  <AvatarFallback>{chatItem.profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>

                  {/* Unread indicator
                  {chatItem.unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {chatItem.unreadCount}
                    </div>
                  )} */}
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{chatItem.profile.username}</p>
                    {chatItem.lastMessage && (
                      <span className="text-xs text-[#737373]">
                        {new Date(chatItem.lastMessage.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#737373] truncate">
                    {chatItem.lastMessage?.content || "Start a conversation"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-[#737373]">
            <p>No recent conversations</p>
            <Button variant="link" className="text-[#0095f6] p-0 h-auto mt-1" onClick={handleNewChat}>
              Start a new conversation
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

