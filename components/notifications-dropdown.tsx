"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { notificationApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"
import { formatImageUrl } from "@/lib/image-utils"
import type { Notification } from "@/lib/types"

interface NotificationsDropdownProps {
  isOpen: boolean
  onClose: () => void
}

// Интерфейс для расширенного уведомления с данными пользователя
interface EnhancedNotification extends Notification {
  userProfile?: Profile
}

// Define the Profile interface
interface Profile {
  username: string
  img: string
}

export function NotificationsDropdown({ isOpen, onClose }: NotificationsDropdownProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const dropdownRef = useRef(null)
  const { user } = useAuth()
  const router = useRouter()

  useOnClickOutside(dropdownRef, onClose)

  useEffect(() => {
    if (isOpen && user?.token) {
      fetchNotifications()
    }
  }, [isOpen, user])

  const fetchNotifications = async () => {
    setLoading(true)
    try {
      const notificationsList = await notificationApi.list(user!.token)

      setNotifications(notificationsList)
    } catch (err) {
      console.error("Error fetching notifications:", err)
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

  const handleNotificationClick = async (notification: Notification) => {
    if (!user?.token) return

    // Закрываем дропдаун
    onClose()

    // Если уведомление не прочитано, отмечаем его как прочитанное
    if (!notification.isRead) {
      try {
        await notificationApi.markAsRead(notification.id, user.token)
        // Обновляем локальное состояние
        setNotifications(notifications.map((n) => (n.id === notification.id ? { ...n, isRead: true } : n)))
      } catch (err) {
        console.error("Error marking notification as read:", err)
      }
    }

    // Перенаправляем на профиль пользователя-инициатора
    if (notification.initiator) {
      router.push(`/profile/${notification.initiator.username}`)
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={dropdownRef}
      className="absolute top-14 right-0 z-50 w-96 bg-white rounded-lg shadow-lg border border-[#dbdbdb] overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-4 border-b border-[#dbdbdb]">
        <h2 className="font-semibold text-lg">Notifications</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
        </div>
      ) : (
        <>
          <div className="p-4 border-b border-[#dbdbdb]">
            <h3 className="font-medium text-sm">New</h3>
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-[#737373]">No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-center p-4 hover:bg-gray-50 border-b border-[#dbdbdb] ${
                    !notification.isRead ? "bg-blue-50" : ""
                  } cursor-pointer`}
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
                      {notification.message.replace(/^[a-zA-Z0-9_]+ /, "")}{" "}
                      <span className="text-[#737373]">{new Date(notification.createdAt).toLocaleDateString()}</span>
                    </p>
                  </div>

                  {notification.type === "post" && (
                    <div className="ml-2 w-10 h-10 relative">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Post thumbnail"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="p-3 text-center">
            <Link href="/notifications" className="text-sm text-[#0095f6] font-medium" onClick={onClose}>
              See All Notifications
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

