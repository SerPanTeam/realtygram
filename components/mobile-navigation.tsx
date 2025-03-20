"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Compass, MessageCircle, Heart, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/auth-context"
import { notificationApi } from "@/lib/api"
import { SearchPanel } from "./search-panel"
import { NotificationsPanel } from "./notifications-panel"

interface MobileNavigationProps {
  className?: string
}

export function MobileNavigation({ className }: MobileNavigationProps) {
  const pathname = usePathname()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0)
  const { user } = useAuth()

  // Получаем количество непрочитанных уведомлений
  useEffect(() => {
    const fetchUnreadNotificationsCount = async () => {
      if (!user?.token) return

      try {
        const notifications = await notificationApi.list(user.token)
        const unreadCount = notifications.filter((notification) => !notification.isRead).length
        setUnreadNotificationsCount(unreadCount)
      } catch (error) {
        console.error("Error fetching notifications:", error)
      }
    }

    // Загружаем при монтировании компонента
    fetchUnreadNotificationsCount()

    // Устанавливаем интервал для периодического обновления
    const interval = setInterval(fetchUnreadNotificationsCount, 60000) // Каждую минуту

    return () => clearInterval(interval)
  }, [user])

  // Сбрасываем счетчик непрочитанных уведомлений при открытии панели уведомлений
  useEffect(() => {
    if (showNotifications) {
      setUnreadNotificationsCount(0)
    }
  }, [showNotifications])

  // Проверка, активна ли страница Explore или её подстраницы
  const isExploreActive = pathname === "/explore" || pathname.startsWith("/explore/")
  // Проверка, активна ли страница Feed
  const isFeedActive = pathname === "/feed"
  // Проверка, активна ли страница Messages или её подстраницы
  const isMessagesActive = pathname === "/messages" || pathname.startsWith("/messages/")
  // Проверка, активна ли страница Profile или её подстраницы
  const isProfileActive = pathname === "/profile" || pathname.startsWith("/profile/")
  // Проверка, активна ли страница Create или её подстраницы
  const isCreateActive = pathname === "/create" || pathname.startsWith("/create/")
  // Проверка, активна ли страница Search
  const isSearchActive = pathname === "/search"

  return (
    <>
      <nav className={cn("fixed bottom-0 left-0 z-50 w-full border-t border-[#dbdbdb] bg-white", className)}>
        <div className="flex items-center justify-around py-2 relative">
          <Link
            href="/feed"
            className={cn("flex flex-col items-center p-2 text-xs", isFeedActive ? "text-black" : "text-gray-500")}
          >
            <Home className="h-6 w-6" />
            <span className="mt-1">Home</span>
          </Link>

          <button
            onClick={() => setShowSearch(true)}
            className={cn(
              "flex flex-col items-center p-2 text-xs",
              showSearch || isSearchActive ? "text-black" : "text-gray-500",
            )}
          >
            <Search className="h-6 w-6" />
            <span className="mt-1">Search</span>
          </button>

          <Link
            href="/explore"
            className={cn("flex flex-col items-center p-2 text-xs", isExploreActive ? "text-black" : "text-gray-500")}
          >
            <Compass className="h-6 w-6" />
            <span className="mt-1">Explore</span>
          </Link>

          <Link
            href="/messages"
            className={cn("flex flex-col items-center p-2 text-xs", isMessagesActive ? "text-black" : "text-gray-500")}
          >
            <MessageCircle className="h-6 w-6" />
            <span className="mt-1">Messages</span>
          </Link>

          <button
            onClick={() => setShowNotifications(true)}
            className={cn("flex flex-col items-center p-2 text-xs", showNotifications ? "text-black" : "text-gray-500")}
          >
            <div className="relative">
              <Heart className="h-6 w-6" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  {unreadNotificationsCount > 99 ? "99+" : unreadNotificationsCount}
                </span>
              )}
            </div>
            <span className="mt-1">Notifications</span>
          </button>

          <Link
            href={user ? `/profile/${user.username}` : "/login"}
            className={cn("flex flex-col items-center p-2 text-xs", isProfileActive ? "text-black" : "text-gray-500")}
          >
            <User className="h-6 w-6" />
            <span className="mt-1">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Выплывающие панели */}
      {showSearch && <SearchPanel isOpen={showSearch} onClose={() => setShowSearch(false)} />}
      {showNotifications && (
        <NotificationsPanel isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
      )}
    </>
  )
}

