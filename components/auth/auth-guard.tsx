"use client"

import type React from "react"

import { useAuth } from "@/hooks/use-auth"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"

interface AuthGuardProps {
  children: React.ReactNode
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  // Проверяем, является ли текущий путь страницей сброса пароля
  const isResetPasswordPage = pathname?.startsWith("/reset-password/")

  useEffect(() => {
    if (
      !loading &&
      !user &&
      !pathname?.includes("/login") &&
      !pathname?.includes("/signup") &&
      !pathname?.includes("/forgot-password") &&
      !isResetPasswordPage
    ) {
      router.push("/login")
    }
  }, [user, loading, router, pathname, isResetPasswordPage])

  // Показываем содержимое только если пользователь авторизован или это страница сброса пароля
  if (
    loading ||
    (!user &&
      !pathname?.includes("/login") &&
      !pathname?.includes("/signup") &&
      !pathname?.includes("/forgot-password") &&
      !isResetPasswordPage)
  ) {
    return null
  }

  return <>{children}</>
}

