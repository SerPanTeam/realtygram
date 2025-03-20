import type React from "react"

// Удаляем AuthGuard для страниц профилей, чтобы они были доступны без авторизации
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

