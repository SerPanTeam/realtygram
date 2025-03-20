"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { notificationApi } from "@/lib/api"
import type { Notification } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { toast } from "@/hooks/use-toast"
import { formatImageUrl } from "@/lib/image-utils"
import type { Profile } from "@/lib/types"

// Интерфейс для расширенного уведомления с данными пользователя
interface EnhancedNotification extends Notification {
  userProfile?: Profile
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user || !user.token) {
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const notificationsList = await notificationApi.list(user.token)

        setNotifications(notificationsList)
      } catch (err) {
        console.error("Error fetching notifications:", err)
        toast({
          title: "Error",
          description: "Failed to load notifications. Please try again.",
          variant: "destructive",
        })

        // Если API недоступно, используем моковые данные как запасной вариант
        setNotifications([
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
          {
            id: 3,
            type: "follow",
            message: "sashaa started following you.",
            createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            isRead: false,
            initiator: {
              id: 101,
              username: "sashaa",
              img: "/placeholder.svg?height=32&width=32",
            },
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()

    // Устанавливаем интервал для периодического обновления уведомлений
    const interval = setInterval(fetchNotifications, 60000) // Обновляем каждую минуту

    return () => clearInterval(interval)
  }, [user])

  // Обновим функцию handleNotificationClick, чтобы использовать initiator
  const handleNotificationClick = async (notification: Notification) => {
    if (!user?.token) return

    // Если уведомление не прочитано, отмечаем его как прочитанное
    if (!notification.isRead) {
      try {
        await notificationApi.markAsRead(notification.id, user.token)
        // Обновляем локальное состояние
        setNotifications(notifications.map((n) => (n.id === notification.id ? { ...n, isRead: true } : n)))

        toast({
          title: "Success",
          description: "Notification marked as read",
        })
      } catch (err) {
        console.error("Error marking notification as read:", err)
        toast({
          title: "Error",
          description: "Failed to mark notification as read",
          variant: "destructive",
        })
      }
    }

    // Перенаправляем на профиль пользователя-инициатора
    if (notification.initiator) {
      router.push(`/profile/${notification.initiator.username}`)
    }
  }

  const handleMarkAllAsRead = async () => {
    if (!user?.token) return

    try {
      // Отмечаем все непрочитанные уведомления как прочитанные
      const unreadNotifications = notifications.filter((n) => !n.isRead)

      await Promise.all(
        unreadNotifications.map((notification) => notificationApi.markAsRead(notification.id, user.token)),
      )

      // Обновляем локальное состояние
      setNotifications(notifications.map((n) => ({ ...n, isRead: true })))

      toast({
        title: "Success",
        description: "All notifications marked as read",
      })
    } catch (err) {
      console.error("Error marking all notifications as read:", err)
      toast({
        title: "Error",
        description: "Failed to mark all notifications as read",
        variant: "destructive",
      })
    }
  }

  if (!user) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <p className="mb-4">Please log in to view your notifications</p>
              <Link href="/login" className="text-[#0095f6] font-medium">
                Log in
              </Link>
            </div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px] pb-16 md:pb-0">
        <div className="mx-auto max-w-2xl py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Notifications</h1>

            <Button
              variant="outline"
              onClick={handleMarkAllAsRead}
              disabled={notifications.every((n) => n.isRead) || notifications.length === 0}
            >
              Mark all as read
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-[#dbdbdb]">
            <div className="p-4 border-b border-[#dbdbdb]">
              <h2 className="font-semibold">New</h2>
            </div>

            {notifications.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-[#737373]">No notifications yet</p>
              </div>
            ) : (
              <div className="divide-y divide-[#dbdbdb]">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-center p-4 hover:bg-gray-50 ${!notification.isRead ? "bg-blue-50" : ""} cursor-pointer`}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <Avatar className="h-10 w-10 mr-3">
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

                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        {notification.initiator && (
                          <Link
                            href={`/profile/${notification.initiator.username}`}
                            className="font-semibold hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {notification.initiator.username}
                          </Link>
                        )}{" "}
                        {notification.message.replace(/^[a-zA-Z0-9_]+ /, "")}
                      </p>
                      <p className="text-xs text-[#737373] mt-1">
                        {new Date(notification.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

