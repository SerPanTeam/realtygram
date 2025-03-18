import type React from "react"

// Удаляем AuthGuard для страниц постов, чтобы они были доступны без авторизации
export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

