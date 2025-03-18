import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    // Здесь должна быть логика проверки учетных данных
    // Например, запрос к API бэкенда

    // Имитация проверки (в реальном приложении здесь будет запрос к бэкенду)
    if (username === "test" && password === "password") {
      // Успешная авторизация
      return NextResponse.json({
        success: true,
        user: { id: "1", username: "test", name: "Test User" },
        token: "sample-jwt-token",
      })
    } else {
      // Неверные учетные данные
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

