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
  const [loading, setLoading] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  // 1. Добавим состояние для отслеживания первой загрузки
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useOnClickOutside(panelRef, onClose);

  // // 2. Изменим useEffect для загрузки уведомлений
  // useEffect(() => {
  //   if (isOpen && user?.token) {
  //     // Сбрасываем состояние загрузки при каждом открытии панели
  //     setLoading(true);

  //     fetchNotifications()
  //       .then(() => {
  //         // Отмечаем, что первая загрузка завершена
  //         setInitialLoadComplete(true);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }
  // }, [isOpen, user]);

  useEffect(() => {
    if (isOpen && user?.token) {
      setLoading(true);

      fetchNotifications()
        .then(() => {
          setInitialLoadComplete(true);
        })
        .catch((err) => {
          console.error("Error fetching notifications:", err);
          setNotifications([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isOpen, user?.token]); // Обратите внимание на правильное использование зависимостей

  // const fetchNotifications = async () => {
  //   setLoading(true);
  //   try {
  //     const notificationsList = await notificationApi.list(user!.token);

  //     setNotifications(notificationsList);

  //     // Автоматически отмечаем все уведомления как прочитанные при открытии панели
  //     const unreadNotifications = notificationsList.filter((notification) => !notification.isRead);
  //     if (unreadNotifications.length > 0) {
  //       // Отмечаем каждое непрочитанное уведомление как прочитанное
  //       await Promise.all(
  //         unreadNotifications.map((notification) => notificationApi.markAsRead(notification.id, user!.token))
  //       );
  //     }
  //   } catch (err) {
  //     console.error("Error fetching notifications:", err);
  //     // Если API недоступно, используем пустой массив
  //     setNotifications([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchNotifications = async () => {
    try {
      const notificationsList = await notificationApi.list(user!.token);
      // Сразу устанавливаем список уведомлений
      setNotifications(notificationsList);

      const unreadNotifications = notificationsList.filter((n) => !n.isRead);
      if (unreadNotifications.length > 0) {
        // Запускаем отметку как прочитанных асинхронно, не блокируя UI
        Promise.all(unreadNotifications.map((n) => notificationApi.markAsRead(n.id, user!.token)))
          .then(() => {
            // Обновляем локальное состояние, помечая уведомления как прочитанные
            setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
          })
          .catch((err) => console.error("Error marking notifications as read:", err));
      }
    } catch (err) {
      console.error("Error fetching notifications:", err);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  // Обновим функцию handleNotificationClick, чтобы использовать initiator
  const handleNotificationClick = async (notification: Notification) => {
    if (!user?.token) return;

    // Закрываем панель
    onClose();

    // Если уведомление не прочитано, отмечаем его как прочитанное
    if (!notification.isRead) {
      try {
        await notificationApi.markAsRead(notification.id, user.token);
      } catch (err) {
        console.error("Error marking notification as read:", err);
      }
    }

    // Перенаправляем на профиль пользователя-инициатора
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

          {loading && !initialLoadComplete ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="overflow-y-auto flex-1">
              {notifications.length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-[#737373]">No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <Link
                    key={notification.id}
                    href={notification.initiator ? `/profile/${notification.initiator.username}` : "#"}
                    onClick={() => handleNotificationClick(notification)}
                    className="flex items-center p-4 hover:bg-gray-50 border-b border-[#dbdbdb]"
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
                          <span className="font-semibold hover:underline">{notification.initiator.username}</span>
                        )}{" "}
                        {notification.message.replace(/^[a-zA-Z0-9_]+ /, "")}
                      </p>
                      <p className="text-xs text-[#737373]">{new Date(notification.createdAt).toLocaleDateString()}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
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

      <div className="p-4 border-b border-[#dbdbdb]">
        <h3 className="font-medium text-sm">New</h3>
      </div>

      {loading && !initialLoadComplete ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
        </div>
      ) : (
        <div className="max-h-[calc(100vh-120px)] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-[#737373]">No notifications yet</p>
            </div>
          ) : (
            notifications.map((notification) => (
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
            ))
          )}
        </div>
      )}

      <div className="p-3 text-center border-t border-[#dbdbdb] mt-auto">
        <Link href="/notifications" className="text-sm text-[#0095f6] font-medium" onClick={onClose}>
          See All Notifications
        </Link>
      </div>
    </div>
  );
}
