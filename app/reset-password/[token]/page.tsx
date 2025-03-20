"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ResetPasswordForm } from "./reset-password-form"
import { Lock } from "lucide-react"

interface ResetPasswordPageProps {
  params: {
    token: string
  }
}

export default function ResetPasswordPage({ params }: ResetPasswordPageProps) {
  const { token } = params

  // Очищаем localStorage при загрузке страницы сброса пароля
  useEffect(() => {
    // Удаляем токен авторизации, чтобы пользователь не был автоматически перенаправлен
    localStorage.removeItem("token")
    localStorage.removeItem("auth_token")
    // Также можно удалить куки, если они используются
    document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold italic tracking-tighter">ICMGRAM</h1>
          </div>

          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-black">
              <Lock className="h-12 w-12" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Create New Password</h2>
            <p className="text-sm text-[#737373]">
              Your password must be at least 6 characters and should include a combination of numbers, letters and
              special characters.
            </p>
          </div>

          <ResetPasswordForm token={token} />
        </div>

        <div className="mt-4 rounded-lg bg-white p-6 text-center shadow-sm">
          <p className="text-sm">
            <Link href="/login" className="text-[#0095f6] font-medium">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

