"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"
import { toast } from "@/hooks/use-toast"

// Обновляем компонент LoginForm с улучшенным дизайном
export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    setLoading(true)
    setError("")

    try {
      await login(email, password)

      toast({
        title: "Login successful",
        description: "You have been successfully logged in.",
      })

      window.location.href = "/feed"
    } catch (err) {
      setError("Invalid email or password")

      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      {error && <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-500 border border-red-200">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 border-[#dbdbdb] rounded-md bg-[#fafafa] px-4 focus:border-gray-400 focus:bg-white"
          />
        </div>

        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              Logging in...
            </div>
          ) : (
            "Log in"
          )}
        </Button>
      </form>
    </div>
  )
}

