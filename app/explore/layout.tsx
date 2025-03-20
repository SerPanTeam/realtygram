import type React from "react"

// Удаляем AuthGuard для страниц explore, чтобы они были доступны без авторизации
export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

