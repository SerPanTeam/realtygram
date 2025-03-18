"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"
import { toast } from "sonner"

export function SignupForm() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{
    email?: string
    username?: string
    password?: string
    general?: string
  }>({})
  const router = useRouter()
  const { register } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Clear previous errors
    setErrors({})

    // Basic validation
    if (!email || !username || !password) {
      setErrors({ general: "All fields are required" })
      return
    }

    if (password.length < 6) {
      setErrors({ password: "Password must be at least 6 characters" })
      return
    }

    setLoading(true)

    try {
      await register(username, email, password)

      toast({
        title: "Registration successful",
        description: "Your account has been created successfully.",
      })

      // Используем оба метода перенаправления для надежности
      router.push("/feed")
      setTimeout(() => {
        window.location.href = "/feed"
      }, 100)
    } catch (err) {
      console.error("Registration error:", err)
      setErrors({ general: "Registration failed. This username or email may already be taken." })

      toast({
        title: "Registration failed",
        description: "This username or email may already be taken.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      {errors.general && (
        <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-500 border border-red-200">{errors.general}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`h-12 border-[#dbdbdb] rounded-md bg-[#fafafa] px-4 focus:border-gray-400 focus:bg-white ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`h-12 border-[#dbdbdb] rounded-md bg-[#fafafa] px-4 focus:border-gray-400 focus:bg-white ${
              errors.username ? "border-red-500" : ""
            }`}
          />
          {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`h-12 border-[#dbdbdb] rounded-md bg-[#fafafa] px-4 focus:border-gray-400 focus:bg-white ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
        </div>

        <div className="text-center text-xs text-[#737373]">
          <p>
            By signing up, you agree to our{" "}
            <Link href="#" className="text-[#00376b]">
              Terms
            </Link>
            {", "}
            <Link href="#" className="text-[#00376b]">
              Privacy Policy
            </Link>
            {" and "}
            <Link href="#" className="text-[#00376b]">
              Professional Code of Conduct
            </Link>
          </p>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#0095f6] hover:bg-[#0095f6]/90 text-white font-medium rounded-md"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Signing up...
            </div>
          ) : (
            "Sign up"
          )}
        </Button>
      </form>
    </div>
  )
}

