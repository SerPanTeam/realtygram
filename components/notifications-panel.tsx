"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useOnClickOutside } from "@/hooks/use-click-outside";
import { notificationApi } from "@/lib/api";
import { useAuth } from "@/lib/auth-context";
import type { Notification } from "@/lib/types";
import { formatImageUrl } from "@/lib/image-utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useOnClickOutside(panelRef, onClose);

  useEffect(() => {
    if (isOpen && user?.token) {
      setLoading(true);
      fetchNotifications();
    }
  }, [isOpen, user]);

  const fetchNotifications = async () => {
    try {
      const notificationsList = await notificationApi.list(user!.token);
      setNotifications(notificationsList);

      // Асинхронно отмечаем все непрочитанные уведомления как прочитанные,
      // чтобы не блокировать отображение списка
      const unreadNotifications = notificationsList.filter((notification) => !notification.isRead);
      if (unreadNotifications.length > 0) {
        Promise.all(
          unreadNotifications.map((notification) => notificationApi.markAsRead(notification.id, user!.token))
        ).catch((err) => console.error("Ошибка при отметке уведомлений как прочитанных:", err));
      }
    } catch (err) {
      console.error("Ошибка получения уведомлений:", err);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationClick = async (notification: Notification) => {
    if (!user?.token) return;

    // Закрываем панель
    onClose();

    // Если уведомление не прочитано, отмечаем его как прочитанное
    if (!notification.isRead) {
      try {
        await notificationApi.markAsRead(notification.id, user.token);
      } catch (err) {
        console.error("Ошибка при отметке уведомления как прочитанного:", err);
      }
    }

    // Перенаправляем на профиль инициатора уведомления
    if (notification.initiator) {
      router.push(`/profile/${notification.initiator.username}`);
    }
  };

  if (!isOpen) return null;

  // Мобильная версия панели уведомлений
  if (isMobile) {
    return (
      <div
        className={cn(
          "fixed inset-0 bottom-16 z-40 bg-white transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="p-4 border-b border-[#dbdbdb] flex items-center">
            <button onClick={onClose} className="mr-4">
              <X className="h-6 w-6" />
            </button>
            <h2 className="font-semibold text-lg">Notifications</h2>
          </div>

          {/* Убран блок "New" */}
          <div className="overflow-y-auto flex-1">
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-[#737373]">No notifications yet</p>
              </div>
            ) : (
              <div className="divide-y divide-[#dbdbdb]">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center p-4 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage
                        src={notification.initiator ? formatImageUrl(notification.initiator.img) : "/placeholder.svg"}
                        alt={notification.initiator?.username || "User"}
                      />
                      <AvatarFallback>
                        {notification.initiator ? notification.initiator.username.slice(0, 2).toUpperCase() : "UN"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        {notification.initiator && (
                          <span className="font-semibold">{notification.initiator.username}</span>
                        )}{" "}
                        {notification.message.replace(/^[a-zA-Z0-9_]+ /, "")}
                      </p>
                      <p className="text-xs text-[#737373]">{new Date(notification.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-3 text-center border-t border-[#dbdbdb]">
            <Link href="/notifications" className="text-sm text-[#0095f6] font-medium" onClick={onClose}>
              See All Notifications
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Десктопная версия панели уведомлений
  return (
    <div
      ref={panelRef}
      className="absolute top-0 left-[240px] z-50 w-[350px] bg-white rounded-r-lg shadow-lg border border-[#dbdbdb] border-l-0 h-screen overflow-hidden"
    >
      <div className="p-4 border-b border-[#dbdbdb]">
        <h2 className="font-semibold text-lg">Notifications</h2>
      </div>

      {/* Убран блок "New" */}
      <div className="max-h-[calc(100vh-180px)] overflow-y-auto">
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : notifications.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-[#737373]">No notifications yet</p>
          </div>
        ) : (
          <div className="divide-y divide-[#dbdbdb]">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center p-4 hover:bg-gray-50 ${
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
                    {notification.message}
                    <span className="text-[#737373] ml-2">{new Date(notification.createdAt).toLocaleDateString()}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-3 text-center border-t border-[#dbdbdb] absolute bottom-0 left-0 right-0 bg-white">
        <Link href="/notifications" className="text-sm text-[#0095f6] font-medium" onClick={onClose}>
          See All Notifications
        </Link>
      </div>
    </div>
  );
}
