"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Lock } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

// Обновляем страницу восстановления пароля с улучшенным дизайном
export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Удаляем слеш в конце URL, если он есть
    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.endsWith("/")
      ? process.env.NEXT_PUBLIC_API_URL.slice(0, -1)
      : process.env.NEXT_PUBLIC_API_URL

    try {
      if (!identifier) {
        setError("Please enter your email, phone, or username")
        return
      }

      const response = await fetch(`${baseUrl}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier: identifier }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      setSuccess(true)

      toast({
        title: "Reset link sent",
        description: "If an account with that email exists, we've sent a password reset link.",
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send reset link. Please try again.")

      toast({
        title: "Error",
        description: "Failed to send reset link. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-sm border border-[#dbdbdb]">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold italic tracking-tighter">RealtyGRAM</h1>
          </div>

          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-black">
              <Lock className="h-12 w-12" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Trouble logging in?</h2>
            <p className="text-sm text-[#737373]">
              Enter your email, phone, or username and we'll send you a link to get back into your account.
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-500 border border-red-200">{error}</div>
          )}

          {success ? (
            <div className="mb-4 rounded-md bg-green-50 p-4 text-center text-green-700 border border-green-200">
              <p className="mb-2 font-medium">Reset link sent</p>
              <p className="text-sm">
                We've sent a password reset link to the email address associated with your account. Please check your
                inbox and follow the instructions.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Email, Phone, or Username"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="h-12 border-[#dbdbdb] rounded-md bg-[#fafafa] px-4 focus:border-gray-400 focus:bg-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#0095f6] hover:bg-[#0095f6]/90 text-white font-medium rounded-md"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Sending...
                  </div>
                ) : (
                  "Reset your password"
                )}
              </Button>
            </form>
          )}

          <div className="my-6 flex items-center">
            <Separator className="flex-1 bg-[#dbdbdb]" />
            <span className="mx-4 text-sm text-[#737373]">OR</span>
            <Separator className="flex-1 bg-[#dbdbdb]" />
          </div>

          <div className="mt-4 text-center">
            <Link href="/signup" className="text-sm font-medium">
              Create new account
            </Link>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-white p-6 text-center shadow-sm border border-[#dbdbdb]">
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

