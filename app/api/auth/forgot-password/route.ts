import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { identifier } = body

    if (!identifier) {
      return NextResponse.json({ success: false, message: "Email or username is required" }, { status: 400 })
    }

    // Simulate checking if user exists
    const validIdentifiers = ["user@example.com", "testuser", "admin@example.com"]
    const userExists = validIdentifiers.some((id) => identifier.toLowerCase() === id.toLowerCase())

    if (!userExists) {
      // For security reasons, don't reveal if the user exists or not
      // Just return success even if user doesn't exist
      return NextResponse.json({
        success: true,
        message: "If an account with that email or username exists, we've sent a password reset link.",
      })
    }

    // In a real app, this is where you would send the email
    console.log(`Password reset requested for: ${identifier}`)

    return NextResponse.json({
      success: true,
      message: "If an account with that email or username exists, we've sent a password reset link.",
    })
  } catch (error) {
    console.error("Password reset error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

