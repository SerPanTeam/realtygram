"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Compass, MessageCircle, Heart, PlusSquare, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { NotificationsPanel } from "./notifications-panel";
import { SearchPanel } from "./search-panel";
import { useAuth } from "@/lib/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatImageUrl } from "@/lib/image-utils";
import { notificationApi } from "@/lib/api";
import Image from "next/image";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0);

  // Always call useAuth to prevent hook order issues
  const auth = useAuth();
  const user = auth.user;
  const logout = auth.logout;

  // Получаем количество непрочитанных уведомлений
  useEffect(() => {
    const fetchUnreadNotificationsCount = async () => {
      if (!user?.token) return;

      try {
        const notifications = await notificationApi.list(user.token);
        const unreadCount = notifications.filter((notification) => !notification.isRead).length;
        setUnreadNotificationsCount(unreadCount);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    // Загружаем при монтировании компонента
    fetchUnreadNotificationsCount();

    // Устанавливаем интервал для периодического обновления
    const interval = setInterval(fetchUnreadNotificationsCount, 60000); // Каждую минуту

    return () => clearInterval(interval);
  }, [user]);

  // Сбрасываем счетчик непрочитанных уведомлений при открытии панели уведомлений
  useEffect(() => {
    if (showNotifications) {
      setUnreadNotificationsCount(0);
    }
  }, [showNotifications]);

  // Проверка, активна ли страница Explore или её подстраницы
  const isExploreActive = pathname === "/explore" || pathname.startsWith("/explore/");

  // Базовые навигационные элементы, доступные всем пользователям
  const publicNavItems = [
    { icon: Home, label: "Home", href: "/feed" },
    { icon: Search, label: "Search", href: "#", onClick: () => setShowSearch(!showSearch) },
    { icon: Compass, label: "Explore", href: "/explore" },
  ];

  // Навигационные элементы, доступные только авторизованным пользователям
  const authNavItems = [
    { icon: MessageCircle, label: "Messages", href: "/messages" },
    {
      icon: Heart,
      label: "Notifications",
      href: "#",
      onClick: () => setShowNotifications(!showNotifications),
      badge: unreadNotificationsCount,
    },
    { icon: PlusSquare, label: "Create", href: "/create" },
  ];

  // Объединяем навигационные элементы в зависимости от статуса авторизации
  const navItems = user ? [...publicNavItems, ...authNavItems] : publicNavItems;

  return (
    <aside
      className={cn("fixed top-0 left-0 z-40 h-full w-[240px] flex-col border-r border-[#dbdbdb] bg-white", className)}
    >
      <div className="flex h-full flex-col p-4">
        <Link href="/" className="mb-8 py-4 text-2xl font-bold italic tracking-tighter">
          <Image src="/log.png" alt="RealtyGRAM Logo" width={250} className="object-contain" />
          <h1 className="text-4xl font-bold italic tracking-tighter">RealtyGRAM</h1>
        </Link>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              // Специальная проверка для Explore
              const isActive = item.label === "Explore" ? isExploreActive : pathname === item.href;

              return (
                <li key={item.label} className="relative">
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className={cn(
                        "flex w-full items-center rounded-md px-3 py-3 text-sm font-medium transition-colors",
                        isActive ? "bg-black text-white" : "hover:bg-gray-100"
                      )}
                    >
                      <div className="relative">
                        <item.icon className="mr-3 h-5 w-5" />
                        {/* {item.badge > 0 && (
                          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                            {item.badge > 99 ? "99+" : item.badge}
                          </span>
                        )} */}
                      </div>
                      {item.label}
                      {item.badge > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                          {item.badge > 99 ? "99+" : item.badge}
                        </span>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-md px-3 py-3 text-sm font-medium transition-colors",
                        isActive ? "bg-black text-white" : "hover:bg-gray-100"
                      )}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}

            {user && (
              <>
                <li className="relative">
                  <Link
                    href={`/profile/${user.username}`}
                    className={cn(
                      "flex items-center rounded-md px-3 py-3 text-sm font-medium transition-colors",
                      pathname === `/profile/${user.username}` ? "bg-black text-white" : "hover:bg-gray-100"
                    )}
                  >
                    <Avatar className="h-5 w-5 mr-3">
                      <AvatarImage src={formatImageUrl(user.img)} alt={user.username} />
                      <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    Profile
                  </Link>
                </li>
                <li className="relative">
                  <button
                    onClick={logout}
                    className="flex w-full items-center rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-gray-100"
                  >
                    <LogOut className="mr-3 h-5 w-5" />
                    Logout
                  </button>
                </li>
              </>
            )}

            {/* Добавляем кнопку входа, если пользователь не авторизован */}
            {!user && (
              <li className="relative mt-4">
                <Link
                  href="/login"
                  className="flex w-full items-center justify-center rounded-md bg-[#0095f6] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0095f6]/90"
                >
                  Log in
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Выплывающие панели */}
      {showSearch && <SearchPanel isOpen={showSearch} onClose={() => setShowSearch(false)} />}
      {showNotifications && (
        <NotificationsPanel isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
      )}
    </aside>
  );
}
