"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useAuth } from "@/lib/auth-context"

// Редирект на страницу текущего пользователя или на страницу входа
export default function ProfileRedirectPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (isLoading) return

    if (user) {
      // Если пользователь авторизован, перенаправляем на его профиль
      router.push(`/profile/${user.username}`)
    } else {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push("/login?callbackUrl=/profile")
    }
  }, [router, user, isLoading])

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />
      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      </main>
      <MobileNavigation className="md:hidden" />
    </div>
  )
}

