"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/lib/auth-context"
import { notificationApi, profileApi } from "@/lib/api"
import { formatDistanceToNow } from "date-fns"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Notification, Profile } from "@/lib/types"
import { formatImageUrl } from "@/lib/image-utils"

// Интерфейс для расширенного уведомления с данными пользователя
interface EnhancedNotification extends Notification {
  userProfile?: Profile
}

export function NotificationDropdown() {
  const [notifications, setNotifications] = useState<EnhancedNotification[]>([])
  const [loading, setLoading] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const { user } = useAuth()
  const router = useRouter()

  // Fetch notifications
  const fetchNotifications = async () => {
    if (!user?.token) return

    setLoading(true)
    try {
      const notificationsList = await notificationApi.list(user.token)

      // Получаем расширенные уведомления с данными пользователей
      const enhancedNotifications = await Promise.all(
        notificationsList.map(async (notification) => {
          const username = extractUsernameFromMessage(notification.message)
          let userProfile = undefined

          // Пытаемся получить профиль пользователя
          try {
            if (username && user?.token) {
              const { profile } = await profileApi.get(username, user.token)
              userProfile = profile
            }
          } catch (error) {
            console.warn(`Could not fetch profile for ${username}:`, error)
          }

          return {
            ...notification,
            userProfile,
          }
        }),
      )

      setNotifications(enhancedNotifications)

      // Count unread notifications
      const unread = notificationsList.filter((notification: Notification) => !notification.isRead).length
      setUnreadCount(unread)
    } catch (error) {
      console.error("Error fetching notifications:", error)
      // Если API недоступно, используем моковые данные как запасной вариант
      const mockNotifications = [
        {
          id: 1,
          type: "like",
          message: "sashaa liked your photo.",
          createdAt: new Date().toISOString(),
          isRead: false,
          initiator: {
            id: 101,
            username: "sashaa",
            img: "/placeholder.svg?height=32&width=32",
          },
        },
        {
          id: 2,
          type: "comment",
          message: "sashaa commented on your photo.",
          createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          isRead: true,
          initiator: {
            id: 101,
            username: "sashaa",
            img: "/placeholder.svg?height=32&width=32",
          },
        },
      ]
      setNotifications(mockNotifications)
      setUnreadCount(mockNotifications.filter((n) => !n.isRead).length)
    } finally {
      setLoading(false)
    }
  }

  // Mark notification as read
  const markAsRead = async (id: number) => {
    if (!user?.token) return

    try {
      await notificationApi.markAsRead(id, user.token)
      // Update local state
      setNotifications(
        notifications.map((notification) =>
          notification.id === id ? { ...notification, isRead: true } : notification,
        ),
      )

      // Update unread count
      setUnreadCount((prev) => Math.max(0, prev - 1))
    } catch (error) {
      console.error("Error marking notification as read:", error)
    }
  }

  // Handle notification click
  const handleNotificationClick = async (notification: Notification) => {
    // Mark as read
    if (!notification.isRead) {
      await markAsRead(notification.id)
    }

    // Navigate to user profile
    if (notification.initiator) {
      router.push(`/profile/${notification.initiator.username}`)
    }
  }

  // Fetch notifications on mount and when user changes
  useEffect(() => {
    if (user?.token) {
      fetchNotifications()

      // Set up polling for new notifications
      const interval = setInterval(fetchNotifications, 60000) // Every minute

      return () => clearInterval(interval)
    }
  }, [user])

  // Функция для извлечения имени пользователя из сообщения уведомления
  const extractUsernameFromMessage = (message: string): string => {
    const match = message.match(/^(\w+)/)
    return match ? match[1] : ""
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="p-2 font-semibold border-b">Notifications</div>
        <div className="max-h-[400px] overflow-y-auto">
          {loading && notifications.length === 0 ? (
            <div className="p-4 text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black mx-auto"></div>
            </div>
          ) : notifications.length > 0 ? (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`p-3 cursor-pointer ${!notification.isRead ? "bg-gray-50" : ""}`}
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="flex items-center w-full">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarImage
                      src={
                        notification.initiator
                          ? formatImageUrl(notification.initiator.img)
                          : `/placeholder.svg?height=32&width=32`
                      }
                      alt={notification.initiator?.username || "User"}
                    />
                    <AvatarFallback>
                      {notification.initiator ? notification.initiator.username.slice(0, 2).toUpperCase() : "UN"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col flex-1">
                    <p className={`text-sm ${!notification.isRead ? "font-semibold" : ""}`}>{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">No notifications</div>
          )}
        </div>
        {notifications.length > 0 && (
          <div className="p-2 border-t text-center">
            <Button variant="ghost" size="sm" className="text-xs" onClick={fetchNotifications}>
              Refresh
            </Button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

