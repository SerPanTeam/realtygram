"use client"

import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SignupForm } from "@/components/auth/signup-form"
import { useAuth } from "@/lib/auth-context"

export default function SignupPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  // Если пользователь уже авторизован, перенаправляем на главную
  useEffect(() => {
    if (user && !isLoading) {
      router.push("/feed")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-sm border border-[#dbdbdb]">
          <div className="mb-6 text-center">
            <h1 className="text-4xl font-bold italic tracking-tighter">RealtyGRAM</h1>
            <p className="mt-4 text-center text-[#737373] text-base">
              Sign up to connect with real estate professionals and showcase your properties.
            </p>
          </div>

          <SignupForm />
        </div>

        <div className="mt-4 rounded-lg bg-white p-6 text-center shadow-sm border border-[#dbdbdb]">
          <p className="text-sm">
            Have an account?{" "}
            <Link href="/login" className="text-[#0095f6] font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

