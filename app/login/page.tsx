"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/lib/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  const [redirectMessage, setRedirectMessage] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user, isLoading } = useAuth()

  // Check if there's a callbackUrl parameter
  useEffect(() => {
    const callbackUrl = searchParams.get("callbackUrl")
    if (callbackUrl) {
      setRedirectMessage("Please log in to access this page")
    }
  }, [searchParams])

  // If user is already logged in, redirect to feed
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
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold italic tracking-tighter">RealtyGRAM</h1>
            <p className="mt-2 text-[#737373]">Connect with real estate professionals</p>
          </div>

          {redirectMessage && (
            <Alert className="mb-4 bg-blue-50 text-blue-700 border border-blue-200">
              <AlertDescription>{redirectMessage}</AlertDescription>
            </Alert>
          )}

          <LoginForm />

          <div className="my-4 flex items-center">
            <Separator className="flex-1 bg-[#dbdbdb]" />
            <span className="mx-4 text-sm text-[#737373]">OR</span>
            <Separator className="flex-1 bg-[#dbdbdb]" />
          </div>

          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-sm text-[#00376b] hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-white p-6 text-center shadow-sm border border-[#dbdbdb]">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#0095f6] font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

