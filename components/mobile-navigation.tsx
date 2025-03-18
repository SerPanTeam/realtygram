"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Compass, MessageCircle, Heart, PlusSquare, X, User } from "lucide-react"
import { SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"
import { notificationApi } from "@/lib/api"

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

  // Базовые навигационные элементы, доступные всем пользователям
  const publicNavItems = [
    { icon: Home, label: "Home", href: "/feed" },
    { icon: Search, label: "Search", href: "#", onClick: () => setShowSearch(true) },
    { icon: Compass, label: "Explore", href: "/explore" },
  ]

  // Навигационные элементы, доступные только авторизованным пользователям
  const authNavItems = [
    { icon: MessageCircle, label: "Messages", href: "/messages" },
    {
      icon: Heart,
      label: "Notifications",
      href: "#",
      onClick: () => setShowNotifications(true),
      badge: unreadNotificationsCount,
    },
    { icon: PlusSquare, label: "Create", href: "/create" },
  ]

  // Добавляем профиль для всех пользователей (для неавторизованных будет перенаправление на логин)
  const profileItem = {
    icon: User,
    label: "Profile",
    href: user ? `/profile/${user.username}` : "/login",
  }

  // Объединяем навигационные элементы в зависимости от статуса авторизации
  const navItems = user ? [...publicNavItems, ...authNavItems, profileItem] : [...publicNavItems, profileItem]

  // Проверка, активна ли страница Explore или её подстраницы
  const isExploreActive = pathname === "/explore" || pathname.startsWith("/explore/")

  return (
    <>
      <nav className={cn("fixed bottom-0 left-0 z-40 w-full border-t border-[#dbdbdb] bg-white", className)}>
        <div className="flex items-center justify-around py-2 relative">
          {navItems.map((item) => {
            // Специальная проверка для Explore
            const isActive = item.label === "Explore" ? isExploreActive : pathname === item.href

            if (item.onClick) {
              return (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className={cn("flex flex-col items-center p-2 text-xs", isActive ? "text-black" : "text-gray-500")}
                >
                  <div className="relative">
                    <item.icon className="h-6 w-6" />
                    {item.badge > 0 && (
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                        {item.badge > 99 ? "99+" : item.badge}
                      </span>
                    )}
                  </div>
                  <span className="mt-1">{item.label}</span>
                </button>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("flex flex-col items-center p-2 text-xs", isActive ? "text-black" : "text-gray-500")}
              >
                <item.icon className="h-6 w-6" />
                <span className="mt-1">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* На мобильных устройствах панели должны быть полноэкранными */}
      {showSearch && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4 border-b border-[#dbdbdb] flex items-center">
            <button onClick={() => setShowSearch(false)} className="mr-4">
              <X className="h-6 w-6" />
            </button>
            <h2 className="font-semibold text-lg">Search</h2>
          </div>
          <div className="p-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
              <Input type="text" placeholder="Search" className="pl-10 pr-10 h-10 bg-[#efefef] border-none" autoFocus />
            </div>
          </div>
        </div>
      )}

      {showNotifications && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4 border-b border-[#dbdbdb] flex items-center">
            <button onClick={() => setShowNotifications(false)} className="mr-4">
              <X className="h-6 w-6" />
            </button>
            <h2 className="font-semibold text-lg">Notifications</h2>
          </div>
          <div className="p-4 border-b border-[#dbdbdb]">
            <h3 className="font-medium text-sm">New</h3>
          </div>
          <div className="p-6 text-center">
            <p className="text-[#737373]">No notifications yet</p>
          </div>
        </div>
      )}
    </>
  )
}

