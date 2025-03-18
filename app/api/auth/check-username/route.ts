import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get("username")

    if (!username) {
      return NextResponse.json({ success: false, message: "Username is required" }, { status: 400 })
    }

    // Здесь должна быть проверка доступности имени пользователя в базе данных
    // Например, запрос к API бэкенда или проверка в базе данных

    // Имитация проверки (в реальном приложении здесь будет запрос к бэкенду)
    const takenUsernames = ["admin", "user", "test", "instagram", "icmgram"]
    const isAvailable = !takenUsernames.includes(username.toLowerCase())

    return NextResponse.json({
      success: true,
      available: isAvailable,
    })
  } catch (error) {
    console.error("Check username error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

