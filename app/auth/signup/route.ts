import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, fullName, username, password } = body

    // Проверка наличия всех необходимых полей
    if (!email || !fullName || !username || !password) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 })
    }

    // Проверка формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Invalid email format", field: "email" }, { status: 400 })
    }

    // Проверка длины пароля
    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 6 characters long", field: "password" },
        { status: 400 },
      )
    }

    // Здесь должна быть логика создания пользователя
    // Например, запрос к API бэкенда или сохранение в базе данных

    // Имитация проверки существующего пользователя
    const takenUsernames = ["admin", "user", "test", "instagram", "icmgram"]
    if (takenUsernames.includes(username.toLowerCase())) {
      return NextResponse.json(
        { success: false, message: "This username is already taken.", field: "username" },
        { status: 409 },
      )
    }

    const takenEmails = ["admin@example.com", "user@example.com", "test@example.com"]
    if (takenEmails.includes(email.toLowerCase())) {
      return NextResponse.json(
        { success: false, message: "An account with this email already exists.", field: "email" },
        { status: 409 },
      )
    }

    // Успешная регистрация
    return NextResponse.json({
      success: true,
      message: "User registered successfully",
      user: { id: "1", username, email, fullName },
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

