import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAuthenticated = request.cookies.has("auth-token") || request.cookies.has("auth_token")

  // Публичные маршруты, доступные без авторизации
  const publicRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/p", // Страницы постов
    "/explore", // Страницы explore
    "/profile", // Страницы профилей
  ]

  // Проверяем, является ли текущий путь публичным
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route))

  // Добавляем проверку для страницы сброса пароля
  const isResetPasswordPage = pathname.startsWith("/reset-password/")

  // Если пользователь не авторизован и пытается получить доступ к защищенному маршруту
  if (!isAuthenticated && !isPublicRoute && !isResetPasswordPage && pathname !== "/") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Если пользователь авторизован и пытается получить доступ к странице входа или регистрации
  if (
    isAuthenticated &&
    (pathname === "/login" || pathname === "/signup" || pathname === "/forgot-password" || pathname === "/")
  ) {
    // Исключаем перенаправление для страницы сброса пароля
    if (!isResetPasswordPage) {
      return NextResponse.redirect(new URL("/feed", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
}

