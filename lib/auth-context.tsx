"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import type { User } from "./types"
import { userApi } from "./api"
import { setCookie, deleteCookie, getCookie } from "cookies-next"

interface AuthContextType {
  user: User | null
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void>
  logout: () => void
  updateUser: (userData: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Check for token on load
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token") || getCookie("auth_token")?.toString()
      if (token) {
        try {
          const { user } = await userApi.current(token)
          setUser(user)
        } catch (err) {
          console.error("Failed to load user:", err)
          localStorage.removeItem("token")
          deleteCookie("auth_token")
        }
      }
      setIsLoading(false)
    }

    loadUser()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const { user } = await userApi.login({ email, password })
      setUser(user)
      localStorage.setItem("token", user.token!)
      setCookie("auth_token", user.token!, { maxAge: 60 * 60 * 24 * 7 }) // 7 days

      setTimeout(() => {
        router.push("/feed")
      }, 500)
    } catch (err) {
      console.error("Login error:", err)
      setError("Invalid email or password")
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (username: string, email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const { user } = await userApi.register({ username, email, password })
      setUser(user)
      localStorage.setItem("token", user.token!)
      // Set cookie for middleware
      setCookie("auth_token", user.token!, { maxAge: 60 * 60 * 24 * 7 }) // 7 days
      router.push("/feed")
    } catch (err) {
      console.error("Registration error:", err)
      setError("Registration failed. This username or email may already be taken.")
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  // Обновляем функцию logout для надежного перенаправления
  const logout = () => {
    localStorage.removeItem("token")
    deleteCookie("auth_token")
    deleteCookie("auth-token") // Удаляем обе версии cookie
    setUser(null)

    router.push("/login")
    setTimeout(() => {
      window.location.href = "/login"
    }, 100)
  }

  const updateUser = async (userData: Partial<User>) => {
    if (!user || !user.token) {
      return
    }

    setIsLoading(true)
    setError(null)
    try {
      const { user: updatedUser } = await userApi.update(userData, user.token)
      setUser(updatedUser)
      localStorage.setItem("token", updatedUser.token!)
      setCookie("auth_token", updatedUser.token!, { maxAge: 60 * 60 * 24 * 7 })
    } catch (err) {
      console.error("Ошибка при обновлении профиля:", err)
      setError("Не удалось обновить профиль")
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export { AuthContext }

