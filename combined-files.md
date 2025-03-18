# Структура проекта

```plaintext
├── app
│   ├── api
│   │   └── auth
│   │       ├── check-username
│   │       │   └── route.ts
│   │       ├── forgot-password
│   │       │   └── route.ts
│   │       └── reset-password
│   │           └── route.ts
│   ├── auth
│   │   ├── login
│   │   │   └── route.ts
│   │   └── signup
│   │       └── route.ts
│   ├── create
│   │   ├── post
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── explore
│   │   ├── for-you
│   │   │   └── page.tsx
│   │   ├── trending
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── feed
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── forgot-password
│   │   └── page.tsx
│   ├── login
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── messages
│   │   ├── [username]
│   │   │   └── page.tsx
│   │   ├── new
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── notifications
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── p
│   │   ├── [slug]
│   │   │   ├── edit
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── profile
│   │   ├── [username]
│   │   │   └── page.tsx
│   │   ├── edit
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── reset-password
│   │   └── [token]
│   │       ├── page.tsx
│   │       └── reset-password-form.tsx
│   ├── search
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── signup
│   │   └── page.tsx
│   ├── error.tsx
│   ├── global-error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components
│   ├── auth
│   │   ├── auth-guard.tsx
│   │   ├── login-form.tsx
│   │   ├── register-form.tsx
│   │   └── signup-form.tsx
│   ├── chat
│   │   ├── chat-conversation.tsx
│   │   └── chat-list.tsx
│   ├── layout
│   │   └── notification-dropdown.tsx
│   ├── messages
│   │   └── messages-list.tsx
│   ├── ui
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   ├── tooltip.tsx
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── error-boundary.tsx
│   ├── feed-post.tsx
│   ├── feed.tsx
│   ├── grid-post.tsx
│   ├── mobile-navigation.tsx
│   ├── navbar.tsx
│   ├── notifications-dropdown.tsx
│   ├── notifications-panel.tsx
│   ├── post-grid.tsx
│   ├── post-options-menu.tsx
│   ├── post.tsx
│   ├── search-dropdown.tsx
│   ├── search-panel.tsx
│   ├── sidebar.tsx
│   ├── spinner.tsx
│   ├── theme-provider.tsx
│   └── user-search.tsx
├── hooks
│   ├── use-auth.ts
│   ├── use-click-outside.ts
│   ├── use-media-query.ts
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib
│   ├── api.ts
│   ├── auth-context.tsx
│   ├── auth-service.ts
│   ├── auth.ts
│   ├── chat-api.ts
│   ├── chat-service.ts
│   ├── image-utils.ts
│   ├── types.ts
│   ├── utils.ts
│   └── validation.ts
├── public
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   └── placeholder.svg
├── styles
│   └── globals.css
├── .gitignore
├── codewr.js
├── combined-files.md
├── components.json
├── constants.ts
├── middleware.ts
├── next-env.d.ts
├── next.config.mjs
├── package copy.json
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── server-fix.txt
├── tailwind.config.js
└── tsconfig.json

```

# Файлы .ts, .tsx, .css

## app\api\auth\check-username\route.ts

```typescript
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


```

## app\api\auth\forgot-password\route.ts

```typescript
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


```

## app\api\auth\reset-password\route.ts

```typescript
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { token, password } = body

    if (!token || !password) {
      return NextResponse.json({ success: false, message: "Token and password are required" }, { status: 400 })
    }

    // Validate password
    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 6 characters long" },
        { status: 400 },
      )
    }

    // Simulate token validation
    const isValidToken = token.length > 20 && token !== "invalid-token"

    if (!isValidToken) {
      return NextResponse.json({ success: false, message: "Invalid or expired token" }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      message: "Password has been reset successfully",
    })
  } catch (error) {
    console.error("Reset password error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}


```

## app\auth\login\route.ts

```typescript
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


```

## app\auth\signup\route.ts

```typescript
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


```

## app\create\layout.tsx

```typescript
import type React from "react"
import { AuthGuard } from "@/components/auth/auth-guard"

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthGuard>{children}</AuthGuard>
}


```

## app\create\page.tsx

```typescript
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CreateRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/create/post")
  }, [router])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
    </div>
  )
}


```

## app\create\post\page.tsx

```typescript
"use client"

import { useState, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ImagePlus, X, Smile, MapPin, Tag } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { postApi, uploadApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"
import { toast } from "@/hooks/use-toast"
import { formatImageUrl } from "@/lib/image-utils"

export default function CreatePostPage() {
  const [step, setStep] = useState(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tagList, setTagList] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [createdPost, setCreatedPost] = useState<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { user } = useAuth()

  // Check authentication
  if (!user) {
    router.push("/login")
    return null
  }

  // Handle file drop via Dropzone
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        setSelectedFile(file)
        const imageUrl = URL.createObjectURL(file)
        setSelectedImage(imageUrl)
        setStep(2)
      }
    },
    [setSelectedFile, setSelectedImage, setStep],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxFiles: 1,
  })

  // Handle tag addition
  const handleAddTag = useCallback(() => {
    if (tagInput.trim() && !tagList.includes(tagInput.trim())) {
      setTagList([...tagList, tagInput.trim()])
      setTagInput("")
    }
  }, [tagInput, tagList, setTagList, setTagInput])

  // Handle tag removal
  const handleRemoveTag = useCallback(
    (tag: string) => {
      setTagList(tagList.filter((t) => t !== tag))
    },
    [tagList, setTagList],
  )

  // Handle form submission
  const handleSubmit = async () => {
    if (!selectedFile || !title.trim() || !content.trim() || !user.token) {
      setError("Please fill in all fields and select an image")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      // Сначала загружаем изображение
      console.log("Uploading image...")
      let imageUrl = ""

      try {
        // Пробуем загрузить через нашу новую функцию
        imageUrl = await uploadApi.uploadImage(selectedFile, user.token)
      } catch (uploadError) {
        console.error("Error uploading image:", uploadError)

        // Если не удалось загрузить, используем временный URL
        // Это позволит создать пост, но изображение будет временным
        imageUrl = "https://api.panchenko.work/uploads/temp.jpg"
      }

      console.log("Image URL:", imageUrl)

      // Теперь создаем пост с URL изображения
      console.log("Creating post with image URL...")
      const { post } = await postApi.create(
        {
          title,
          content,
          img: imageUrl, // Используем полученный URL изображения
          tagList,
        },
        user.token,
      )

      setCreatedPost(post)

      // Если мы использовали временный URL, попробуем обновить пост с реальным изображением
      if (imageUrl.includes("temp.jpg") && post.slug) {
        try {
          console.log("Updating post with actual image...")
          await uploadApi.postImage(post.slug, selectedFile, user.token)
        } catch (updateError) {
          console.error("Error updating post with actual image:", updateError)
          // Продолжаем, даже если обновление не удалось
        }
      }

      // После успешного создания, перенаправляем на страницу поста
      toast({
        title: "Post created",
        description: "Your post has been successfully created.",
      })
      router.push(`/p/${post.slug}`)
    } catch (err) {
      console.error("Error creating post:", err)
      setError("Failed to create post. Please try again.")
      toast({
        title: "Post creation failed",
        description: "Failed to create your post. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Clear selected image
  const clearImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage)
    }
    setSelectedImage(null)
    setSelectedFile(null)
    setStep(1)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSelectButtonClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        {/* Modal for post creation */}
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-[850px] bg-white rounded-xl overflow-hidden">
            {/* Modal header */}
            <div className="flex items-center justify-between p-3 border-b border-[#dbdbdb]">
              <button onClick={() => router.push("/feed")} className="text-black hover:text-gray-600" type="button">
                <X className="h-6 w-6" />
              </button>
              <h1 className="text-base font-semibold">Create new property listing</h1>
              <Button
                onClick={step === 1 ? handleSelectButtonClick : handleSubmit}
                disabled={step === 1 ? false : isSubmitting || !selectedImage || !title.trim() || !content.trim()}
                variant="ghost"
                className="text-[#0095f6] font-semibold hover:bg-transparent"
              >
                {step === 1 ? "Select" : isSubmitting ? "Sharing..." : "Share"}
              </Button>
            </div>

            {error && <div className="p-3 bg-red-50 text-red-500 text-sm">{error}</div>}

            {/* Modal content */}
            <div className="flex flex-col md:flex-row">
              {/* Left side - image upload/preview */}
              <div className="w-full md:w-[60%] aspect-square bg-black flex items-center justify-center relative">
                {selectedImage ? (
                  <div className="relative w-full h-full">
                    <Image src={selectedImage || "/placeholder.svg"} alt="Preview" fill className="object-contain" />
                    <button
                      onClick={clearImage}
                      className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-1"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <div
                    {...getRootProps()}
                    className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
                  >
                    <input {...getInputProps()} ref={fileInputRef} />
                    <div className="p-4 rounded-full bg-[#efefef] mb-4">
                      <ImagePlus className="h-10 w-10 text-[#737373]" />
                    </div>
                    <p className="text-lg text-white">Drag photos and videos here</p>
                    <Button
                      variant="default"
                      className="mt-4 bg-[#0095f6] hover:bg-[#0095f6]/90"
                      onClick={(e) => {
                        e.stopPropagation()
                        fileInputRef.current?.click()
                      }}
                    >
                      Select from computer
                    </Button>
                  </div>
                )}
              </div>

              {/* Right side - post details */}
              {selectedImage && step === 2 && (
                <div className="w-full md:w-[40%] border-l border-[#dbdbdb]">
                  {/* User info */}
                  <div className="flex items-center p-3 border-b border-[#dbdbdb]">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-[2px] mr-2">
                      <div className="h-full w-full rounded-full bg-white p-[1.5px]">
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <Image
                            src={formatImageUrl(user.img) || "/placeholder.svg"}
                            alt={user.username}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="font-semibold text-sm">{user.username}</span>
                  </div>

                  {/* Title field */}
                  <div className="p-3 border-b border-[#dbdbdb]">
                    <Input
                      placeholder="Title..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="border-none focus-visible:ring-0 p-0 text-sm"
                    />
                  </div>

                  {/* Caption field */}
                  <div className="p-3">
                    <Textarea
                      placeholder="Write a description..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="min-h-[150px] border-none resize-none focus-visible:ring-0 p-0 text-sm"
                    />
                  </div>

                  {/* Emoji and location tools */}
                  <div className="flex items-center justify-between p-3 border-t border-[#dbdbdb]">
                    <div className="flex items-center">
                      <Smile className="h-6 w-6 text-[#737373] mr-2" />
                      <Tag className="h-6 w-6 text-[#737373] mr-2" />
                      <MapPin className="h-6 w-6 text-[#737373]" />
                    </div>
                    <span className="text-xs text-[#737373]">{content.length}/2,200</span>
                  </div>

                  {/* Tags */}
                  <div className="p-3 border-t border-[#dbdbdb]">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium mr-2">Tags:</span>
                      <div className="flex flex-wrap gap-1">
                        {tagList.map((tag) => (
                          <div key={tag} className="flex items-center bg-[#efefef] rounded-full px-2 py-1 text-xs">
                            <span>#{tag}</span>
                            <button onClick={() => handleRemoveTag(tag)} className="ml-1 text-[#737373]">
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Input
                        placeholder="Add tag..."
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        className="flex-1 border-none focus-visible:ring-0 text-sm"
                      />
                      <Button
                        onClick={handleAddTag}
                        variant="ghost"
                        size="sm"
                        className="text-[#0095f6]"
                        disabled={!tagInput.trim()}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\error.tsx

```typescript
"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Логирование ошибки на сервер
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="container mx-auto max-w-5xl py-12 px-4 md:py-20">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <div className="relative h-40 w-40">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Error illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">Something went wrong!</h1>

            <div className="space-y-4 text-[#737373] mb-8 max-w-lg">
              <p>We're experiencing some technical difficulties.</p>
              <p>Please try again or return to the home page.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={reset} className="bg-[#0095f6] hover:bg-[#0095f6]/90">
                Try again
              </Button>

              <Button variant="outline" asChild className="border-[#dbdbdb]">
                <Link href="/">Go to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\explore\for-you\page.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { postApi } from "@/lib/api"
import type { Post } from "@/lib/types"

export default function ForYouPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        // В реальном приложении здесь будет запрос к API для получения рекомендованных постов
        // Пока используем обычный список постов
        const { posts } = await postApi.list({})

        // Сортируем по количеству лайков, чтобы показать самые популярные
        const sortedPosts = [...posts].sort((a, b) => b.favoritesCount - a.favoritesCount)
        setPosts(sortedPosts.slice(0, 6)) // Берем только первые 6 постов
      } catch (err) {
        console.error("Error fetching posts:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-7xl py-6 px-4">
          <h1 className="text-2xl font-bold mb-6">For You</h1>

          <p className="text-[#737373] mb-6">Posts we think you might like, based on your activity and interests.</p>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div key={post.id} className="space-y-2">
                  <Link href={`/p/${post.slug}`} className="relative aspect-square block overflow-hidden rounded-md">
                    <Image
                      src={post.img || "/placeholder.svg?height=400&width=400"}
                      alt={post.title || "Post image"}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  <div className="flex items-center justify-between">
                    <Link href={`/profile/${post.author.username}`} className="font-medium hover:underline">
                      {post.author.username}
                    </Link>

                    <div className="flex items-center space-x-2 text-sm text-[#737373]">
                      <span>{post.favoritesCount} likes</span>
                      <span>•</span>
                      <span>{post.comments?.length || 0} comments</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\explore\layout.tsx

```typescript
import type React from "react"

// Удаляем AuthGuard для страниц explore, чтобы они были доступны без авторизации
export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


```

## app\explore\loading.tsx

```typescript
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
    </div>
  )
}


```

## app\explore\page.tsx

```typescript
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { postApi } from "@/lib/api"
import type { Post } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
// Import the formatImageUrl utility at the top of the file
import { formatImageUrl } from "@/lib/image-utils"

// Categories for tabs
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "land", label: "Land" },
  { id: "rental", label: "Rental" },
  { id: "luxury", label: "Luxury" },
  { id: "investment", label: "Investment" },
  { id: "foreclosure", label: "Foreclosure" },
]

export default function ExplorePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { user } = useAuth()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        // Get all posts, without filtering by follows
        const { posts } = await postApi.list({}, user?.token)
        setPosts(posts)
      } catch (err) {
        console.error("Error fetching posts:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [user])

  // Filter posts by category
  const getFilteredPosts = () => {
    if (selectedCategory === "all") return posts

    // In a real app, we would filter by tags
    // For demo, just return all posts
    return posts
  }

  const filteredPosts = getFilteredPosts()

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-7xl py-6 px-4">
          <h1 className="text-2xl font-bold mb-6">Explore</h1>

          {/* Categories */}
          <div className="mb-6 overflow-x-auto hide-scrollbar">
            <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
              <TabsList className="bg-transparent h-auto p-0 w-auto">
                <div className="flex space-x-2">
                  {CATEGORIES.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="rounded-full bg-[#efefef] px-4 py-2 data-[state=active]:bg-black data-[state=active]:text-white"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </div>
              </TabsList>

              {CATEGORIES.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  {loading ? (
                    <div className="flex justify-center items-center h-64">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                      {filteredPosts.map((post) => (
                        <ExplorePostCard key={post.id} post={post} token={user?.token} />
                      ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

interface ExplorePostCardProps {
  post: Post
  token?: string
}

function ExplorePostCard({ post, token }: ExplorePostCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [stats, setStats] = useState({ likes: post.favoritesCount, comments: post.comments?.length || 0 })

  const [liked, setLiked] = useState(post.favorited === true)
  const [likesCount, setLikesCount] = useState(stats.likes)
  const { user } = useAuth()

  // Получаем актуальную статистику поста при монтировании компонента
  useEffect(() => {
    const fetchPostStats = async () => {
      if (!token) return

      try {
        const postStats = await postApi.getStats(post.slug, token)
        setStats(postStats)
        setLikesCount(postStats.likes)
      } catch (error) {
        console.error("Error fetching post stats:", error)
        // Если не удалось получить статистику, используем данные из поста
        setStats({
          likes: post.favoritesCount,
          comments: post.comments?.length || 0,
        })
        setLikesCount(post.favoritesCount)
      }
    }

    fetchPostStats()

    // Обновляем состояние liked при изменении post.favorited
    setLiked(post.favorited === true)
  }, [post.slug, post.favoritesCount, post.comments?.length, post.favorited, token])

  // Отдельный обработчик для лайка
  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault() // Предотвращаем переход по ссылке
    e.stopPropagation() // Останавливаем всплытие события

    if (!user?.token) return

    try {
      // Оптимистично обновляем UI
      setLiked(!liked)
      const newLikesCount = liked ? likesCount - 1 : likesCount + 1
      setLikesCount(newLikesCount)

      // Отправляем запрос на сервер
      if (liked) {
        await postApi.unfavorite(post.slug, user.token)
      } else {
        await postApi.favorite(post.slug, user.token)
      }
    } catch (err) {
      console.error("Error toggling like:", err)
      // В случае ошибки возвращаем предыдущее состояние
      setLiked(liked)
      setLikesCount(likesCount)
    }
  }

  return (
    <Link
      href={`/p/${post.slug}`}
      className="relative aspect-square block overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={formatImageUrl(post.img) || "/placeholder.svg"}
        alt={post.title || "Post image"}
        fill
        className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />

      {/* Overlay with info on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <div className="flex items-center space-x-6">
            {/* Обновим отображение иконки лайка в оверлее при наведении */}
            <div className="flex items-center">
              <button onClick={handleLike} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill={liked ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color={liked ? "#ed4956" : "currentColor"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>{likesCount}</span>
              </button>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>{stats.comments}</span>
            </div>
          </div>
        </div>
      )}
    </Link>
  )
}


```

## app\explore\trending\page.tsx

```typescript
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { postApi } from "@/lib/api"
import type { Post } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { formatImageUrl } from "@/lib/image-utils"
import { formatNumber } from "@/lib/utils"

export default function TrendingPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        // Получаем все посты
        const { posts } = await postApi.list({}, user?.token)

        // Сортируем по количеству лайков, чтобы показать самые популярные
        const sortedPosts = [...posts].sort((a, b) => b.favoritesCount - a.favoritesCount)
        setPosts(sortedPosts.slice(0, 3)) // Берем только первые 3 поста
      } catch (err) {
        console.error("Error fetching posts:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [user])

  // Форматирование числа лайков и комментариев

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-3xl py-6 px-4">
          <h1 className="text-2xl font-bold mb-6">Trending</h1>

          <p className="text-[#737373] mb-6">See what's trending on ICMGRAM right now.</p>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <TrendingPostCard key={post.id} post={post} token={user?.token} />
              ))}
            </div>
          )}
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

interface TrendingPostCardProps {
  post: Post
  token?: string
}

function TrendingPostCard({ post, token }: TrendingPostCardProps) {
  const [stats, setStats] = useState({ likes: post.favoritesCount, comments: post.comments?.length || 0 })

  // Обновляем инициализацию состояния liked
  const [liked, setLiked] = useState(post.favorited === true)
  const [likesCount, setLikesCount] = useState(stats.likes)
  const { user } = useAuth()

  // Получаем актуальную статистику поста при монтировании компонента
  useEffect(() => {
    const fetchPostStats = async () => {
      if (!token) return

      try {
        const postStats = await postApi.getStats(post.slug, token)
        setStats(postStats)
        setLikesCount(postStats.likes)
      } catch (error) {
        console.error("Error fetching post stats:", error)
        // Если не удалось получить статистику, используем данные из поста
        setStats({
          likes: post.favoritesCount,
          comments: post.comments?.length || 0,
        })
        setLikesCount(post.favoritesCount)
      }
    }

    fetchPostStats()

    // Обновляем состояние liked при изменении post.favorited
    setLiked(post.favorited === true)
  }, [post.slug, post.favoritesCount, post.comments?.length, post.favorited, token])

  // Обработчик лайка
  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault() // Предотвращаем переход по ссылке
    e.stopPropagation() // Останавливаем всплытие события

    if (!user?.token) return

    try {
      // Оптимистично обновляем UI
      setLiked(!liked)
      const newLikesCount = liked ? likesCount - 1 : likesCount + 1
      setLikesCount(newLikesCount)

      // Отправляем запрос на сервер
      if (liked) {
        await postApi.unfavorite(post.slug, user.token)
      } else {
        await postApi.favorite(post.slug, user.token)
      }
    } catch (err) {
      console.error("Error toggling like:", err)
      // В случае ошибки возвращаем предыдущее состояние
      setLiked(liked)
      setLikesCount(likesCount)
    }
  }

  return (
    <div className="border border-[#dbdbdb] rounded-lg overflow-hidden">
      {/* Шапка поста */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 mr-3">
            <AvatarImage
              src={formatImageUrl(post.author.img) || "/placeholder.svg?height=32&width=32"}
              alt={post.author.username}
            />
            <AvatarFallback>{post.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div>
            <div className="flex items-center">
              <Link href={`/profile/${post.author.username}`} className="font-semibold hover:underline">
                {post.author.username}
              </Link>
            </div>
          </div>
        </div>

        <Button variant="ghost" size="sm" className="text-[#0095f6]">
          {post.author.following ? "Following" : "Follow"}
        </Button>
      </div>

      {/* Изображение поста */}
      <div className="relative aspect-square w-full">
        <Link href={`/p/${post.slug}`}>
          <Image
            src={formatImageUrl(post.img) || "/placeholder.svg?height=600&width=600"}
            alt={post.title || "Post image"}
            fill
            className="object-cover"
          />
        </Link>
      </div>

      {/* Информация о посте */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            {/* Обновим отображение иконки лайка */}
            <button onClick={handleLike}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill={liked ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                color={liked ? "#ed4956" : "currentColor"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>

        {/* Обновим отображение количества лайков */}
        <div className="mb-2">
          <p className="font-medium">{formatNumber(likesCount)} likes</p>
        </div>

        <div className="mb-2">
          <span className="font-medium">{post.author.username}</span> <span>{post.content}</span>
        </div>

        <Link href={`/p/${post.slug}`} className="text-sm text-[#737373]">
          View all {formatNumber(stats.comments)} comments
        </Link>
      </div>
    </div>
  )
}


```

## app\feed\layout.tsx

```typescript
import type React from "react"
import { AuthGuard } from "@/components/auth/auth-guard"

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthGuard>{children}</AuthGuard>
}


```

## app\feed\page.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Check } from "lucide-react"
import { postApi } from "@/lib/api"
import type { Post as PostType } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { FeedPost } from "@/components/feed-post"

export default function FeedPage() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        if (user && user.token) {
          // Get feed for logged in user
          const { posts } = await postApi.feed({}, user.token)
          setPosts(posts)
        } else {
          // If user is not logged in, redirect to login page
          window.location.href = "/login"
        }
      } catch (err) {
        console.error("Error fetching posts:", err)
        setError("Failed to load posts. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [user])

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <p className="text-red-500 mb-4">{error}</p>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-[#0095f6] text-white rounded-md">
              Try again
            </button>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-xl font-semibold mb-2">Welcome to your feed</h2>
            <p className="text-[#737373] mb-4">Follow users to see their posts here</p>
            <button
              onClick={() => (window.location.href = "/explore")}
              className="px-4 py-2 bg-[#0095f6] text-white rounded-md"
            >
              Explore users
            </button>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-5xl py-6 px-4">
          {/* Двухколоночная сетка для постов на десктопе */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {posts.map((post, index) => (
              <FeedPost key={`${post.id}-${index}`} post={post} />
            ))}
          </div>

          {/* Индикатор конца ленты */}
          <div className="mt-12 flex flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#dbdbdb]">
              <Check className="h-8 w-8 text-[#0095f6]" />
            </div>
            <h3 className="mt-4 text-lg font-medium">You've seen all the updates</h3>
            <p className="text-sm text-[#737373]">You have viewed all new publications</p>
          </div>

          {/* Футер */}
          <footer className="mt-8 text-center text-xs text-[#737373] pb-16 md:pb-4">
            <p>© 2024 ICMGRAM</p>
          </footer>
        </div>
      </main>

      {/* Мобильная навигация */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[#dbdbdb] bg-white md:hidden z-10">
        <div className="flex justify-around py-3">
          <a href="/feed" className="flex flex-col items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198c.031-.028.062-.056.091-.086L12 5.43z" />
            </svg>
            <span>Home</span>
          </a>
          <a href="/search" className="flex flex-col items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search</span>
          </a>
          <a href="/explore" className="flex flex-col items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Explore</span>
          </a>
          <a href="/messages" className="flex flex-col items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Messages</span>
          </a>
          <a href="/profile" className="flex flex-col items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Profile</span>
          </a>
        </div>
      </div>
    </div>
  )
}


```

## app\forgot-password\page.tsx

```typescript
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Lock } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

// Обновляем страницу восстановления пароля с улучшенным дизайном
export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Удаляем слеш в конце URL, если он есть
    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.endsWith("/")
      ? process.env.NEXT_PUBLIC_API_URL.slice(0, -1)
      : process.env.NEXT_PUBLIC_API_URL

    try {
      if (!identifier) {
        setError("Please enter your email, phone, or username")
        return
      }

      const response = await fetch(`${baseUrl}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier: identifier }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      setSuccess(true)

      toast({
        title: "Reset link sent",
        description: "If an account with that email exists, we've sent a password reset link.",
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send reset link. Please try again.")

      toast({
        title: "Error",
        description: "Failed to send reset link. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-sm border border-[#dbdbdb]">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold italic tracking-tighter">RealtyGRAM</h1>
          </div>

          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-black">
              <Lock className="h-12 w-12" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Trouble logging in?</h2>
            <p className="text-sm text-[#737373]">
              Enter your email, phone, or username and we'll send you a link to get back into your account.
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-500 border border-red-200">{error}</div>
          )}

          {success ? (
            <div className="mb-4 rounded-md bg-green-50 p-4 text-center text-green-700 border border-green-200">
              <p className="mb-2 font-medium">Reset link sent</p>
              <p className="text-sm">
                We've sent a password reset link to the email address associated with your account. Please check your
                inbox and follow the instructions.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Email, Phone, or Username"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="h-12 border-[#dbdbdb] rounded-md bg-[#fafafa] px-4 focus:border-gray-400 focus:bg-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#0095f6] hover:bg-[#0095f6]/90 text-white font-medium rounded-md"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Sending...
                  </div>
                ) : (
                  "Reset your password"
                )}
              </Button>
            </form>
          )}

          <div className="my-6 flex items-center">
            <Separator className="flex-1 bg-[#dbdbdb]" />
            <span className="mx-4 text-sm text-[#737373]">OR</span>
            <Separator className="flex-1 bg-[#dbdbdb]" />
          </div>

          <div className="mt-4 text-center">
            <Link href="/signup" className="text-sm font-medium">
              Create new account
            </Link>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-white p-6 text-center shadow-sm border border-[#dbdbdb]">
          <p className="text-sm">
            <Link href="/login" className="text-[#0095f6] font-medium">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}


```

## app\global-error.tsx

```typescript
"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Логирование ошибки на сервер
    console.error(error)
  }, [error])

  return (
    <html lang="ru">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
          <div className="w-full max-w-md text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold italic tracking-tighter">ICMGRAM</h1>
            </div>

            <div className="mb-8">
              <div className="relative mx-auto h-40 w-40">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Error illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>

            <p className="mb-8 text-[#737373]">
              We're experiencing some technical difficulties. Please try again later.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={reset} className="bg-[#0095f6] hover:bg-[#0095f6]/90">
                Try again
              </Button>

              <Button variant="outline" asChild className="border-[#dbdbdb]">
                <Link href="/">Go to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}


```

## app\globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 346.8 77.2% 49.8%;
    --primary-foreground: 355.7 100% 97.3%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 346.8 77.2% 49.8%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 20 14.3% 4.1%;
    --foreground: 0 0% 95%;
    --card: 24 9.8% 10%;
    --card-foreground: 0 0% 95%;
    --popover: 0 0% 9%;
    --popover-foreground: 0 0% 95%;
    --primary: 346.8 77.2% 49.8%;
    --primary-foreground: 355.7 100% 97.3%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 12 6.5% 15.1%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 346.8 77.2% 49.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Скрыть скролл, но сохранить функциональность */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari и Opera */
}


```

## app\layout.tsx

```typescript
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RealtyGRAM",
  description: "Social network for real estate professionals",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}



import './globals.css'
```

## app\login\loading.tsx

```typescript
export default function Loading() {
  return null
}


```

## app\login\page.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/lib/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  const [redirectMessage, setRedirectMessage] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user, isLoading } = useAuth()

  // Check if there's a callbackUrl parameter
  useEffect(() => {
    const callbackUrl = searchParams.get("callbackUrl")
    if (callbackUrl) {
      setRedirectMessage("Please log in to access this page")
    }
  }, [searchParams])

  // If user is already logged in, redirect to feed
  useEffect(() => {
    if (user && !isLoading) {
      router.push("/feed")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-sm border border-[#dbdbdb]">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold italic tracking-tighter">RealtyGRAM</h1>
            <p className="mt-2 text-[#737373]">Connect with real estate professionals</p>
          </div>

          {redirectMessage && (
            <Alert className="mb-4 bg-blue-50 text-blue-700 border border-blue-200">
              <AlertDescription>{redirectMessage}</AlertDescription>
            </Alert>
          )}

          <LoginForm />

          <div className="my-4 flex items-center">
            <Separator className="flex-1 bg-[#dbdbdb]" />
            <span className="mx-4 text-sm text-[#737373]">OR</span>
            <Separator className="flex-1 bg-[#dbdbdb]" />
          </div>

          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-sm text-[#00376b] hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-white p-6 text-center shadow-sm border border-[#dbdbdb]">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#0095f6] font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}


```

## app\messages\layout.tsx

```typescript
import type React from "react"
import { AuthGuard } from "@/components/auth/auth-guard"

export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthGuard>{children}</AuthGuard>
}


```

## app\messages\loading.tsx

```typescript
export default function Loading() {
  return null
}


```

## app\messages\new\page.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ArrowLeft, X } from "lucide-react"
import { formatImageUrl } from "@/lib/image-utils"
import { useAuth } from "@/lib/auth-context"
import { profileApi } from "@/lib/api"
import type { Profile } from "@/lib/types"

export default function NewMessagePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Profile[]>([])
  const [selectedUsers, setSelectedUsers] = useState<Profile[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  // Search for users
  useEffect(() => {
    if (!searchQuery.trim() || !user?.token) {
      setSearchResults([])
      return
    }

    const searchUsers = async () => {
      setLoading(true)
      try {
        // In a real app, you would use an API endpoint to search users
        // For now, we'll use a mock implementation
        const { profile } = await profileApi.get(searchQuery, user.token)
        setSearchResults([profile])
      } catch (error) {
        console.error("Error searching users:", error)
        setSearchResults([])
      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(() => {
      searchUsers()
    }, 500)

    return () => clearTimeout(debounce)
  }, [searchQuery, user])

  // Toggle user selection
  const toggleUserSelection = (profile: Profile) => {
    if (selectedUsers.some((u) => u.id === profile.id)) {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== profile.id))
    } else {
      // For simplicity, we'll only allow one user for now
      // In a real app, you might want to support group chats
      setSelectedUsers([profile])
    }
  }

  // Remove selected user
  const removeSelectedUser = (userId: number) => {
    setSelectedUsers(selectedUsers.filter((user) => user.id !== userId))
  }

  // Create chat
  const createChat = () => {
    if (selectedUsers.length === 0) return

    // For now, we only support one-on-one chats
    const recipient = selectedUsers[0]
    router.push(`/messages/${recipient.username}`)
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <div className="flex-1 md:ml-[240px] flex flex-col h-screen">
        {/* Header */}
        <div className="p-4 border-b border-[#dbdbdb] flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => router.push("/messages")} className="mr-3">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h2 className="font-bold text-lg">New Message</h2>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-[#0095f6]"
            onClick={createChat}
            disabled={selectedUsers.length === 0}
          >
            Next
          </Button>
        </div>

        {/* Selected users and search */}
        <div className="p-4 border-b border-[#dbdbdb]">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <div className="font-semibold mr-2">To:</div>

            {selectedUsers.map((user) => (
              <div key={user.id} className="flex items-center bg-[#efefef] rounded-full px-3 py-1">
                <span className="text-sm">{user.username}</span>
                <button onClick={() => removeSelectedUser(user.id)} className="ml-2">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}

            <div className="flex-1 min-w-[150px]">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-8"
              />
            </div>
          </div>
        </div>

        {/* Search results */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div>
              {searchResults.length > 0 ? (
                <div className="divide-y divide-[#dbdbdb]">
                  {searchResults.map((profile) => (
                    <div
                      key={profile.id}
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                      onClick={() => toggleUserSelection(profile)}
                    >
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-3">
                          <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                          <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="font-semibold">{profile.username}</p>
                          <p className="text-sm text-[#737373]">{profile.fullName || profile.bio}</p>
                        </div>
                      </div>

                      {selectedUsers.some((u) => u.id === profile.id) && (
                        <div className="h-5 w-5 rounded-full bg-[#0095f6] flex items-center justify-center text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="p-6 text-center">
                  <p className="text-[#737373]">No users found</p>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-[#737373]">Search for real estate professionals to message</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\messages\page.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ChatList } from "@/components/chat/chat-list"
import { ChatConversation } from "@/components/chat/chat-conversation"
import { useAuth } from "@/lib/auth-context"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ErrorBoundary } from "@/components/error-boundary"

export default function MessagesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const username = searchParams.get("username")
  const [selectedUser, setSelectedUser] = useState<string | null>(username)
  const [isMobileView, setIsMobileView] = useState(false)
  const { user, isLoading } = useAuth()

  // Check if we're on mobile
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    setIsMobileView(isMobile)
  }, [isMobile])

  // Update selected user when URL param changes
  useEffect(() => {
    if (username) {
      console.log("URL parameter username changed:", username)
      setSelectedUser(username)
    }
  }, [username])

  const handleSelectUser = (username: string) => {
    console.log("Selected user in MessagesPage:", username)
    setSelectedUser(username)

    // For mobile view, we need to navigate to the specific chat page
    if (isMobileView) {
      console.log("Navigating to chat page:", `/messages/${username}`)
      router.push(`/messages/${username}`)
    } else {
      // Update URL with query parameter for desktop view
      const url = new URL(window.location.href)
      url.searchParams.set("username", username)
      router.replace(url.pathname + url.search)
    }
  }

  const handleBack = () => {
    setSelectedUser(null)
  }

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <div className="flex-1 md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </div>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  // If not authenticated, don't render anything (redirect will happen)
  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <div className="flex-1 md:ml-[240px] flex flex-col h-screen">
        <div className="flex h-full">
          {/* On mobile, show either the chat list or the conversation */}
          {isMobileView ? (
            selectedUser ? (
              <div className="w-full h-full">
                <ErrorBoundary
                  fallback={<div className="p-4">Не удалось загрузить переписку. Пожалуйста, попробуйте позже.</div>}
                >
                  <ChatConversation recipientUsername={selectedUser} onBack={handleBack} isMobile={true} />
                </ErrorBoundary>
              </div>
            ) : (
              <div className="w-full h-full">
                <ErrorBoundary
                  fallback={
                    <div className="p-4">Не удалось загрузить список переписок. Пожалуйста, попробуйте позже.</div>
                  }
                >
                  <ChatList selectedUserId={selectedUser || undefined} onSelectUser={handleSelectUser} />
                </ErrorBoundary>
              </div>
            )
          ) : (
            // On desktop, show both
            <>
              <div className="w-[350px] h-full border-r border-[#dbdbdb]">
                <ErrorBoundary
                  fallback={
                    <div className="p-4">Не удалось загрузить список переписок. Пожалуйста, попробуйте позже.</div>
                  }
                >
                  <ChatList selectedUserId={selectedUser || undefined} onSelectUser={handleSelectUser} />
                </ErrorBoundary>
              </div>
              <div className="flex-1 h-full">
                {selectedUser ? (
                  <ErrorBoundary
                    fallback={<div className="p-4">Не удалось загрузить переписку. Пожалуйста, попробуйте позже.</div>}
                  >
                    <ChatConversation recipientUsername={selectedUser} />
                  </ErrorBoundary>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center p-4">
                    <h3 className="text-lg font-semibold mb-2">Ваши сообщения</h3>
                    <p className="text-[#737373] text-center">Выберите переписку из списка слева или начните новую</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\messages\[username]\page.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ChatConversation } from "@/components/chat/chat-conversation"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { profileApi } from "@/lib/api"
import { chatService } from "@/lib/chat-service"
import { Button } from "@/components/ui/button"

export default function ChatPage({ params }: { params: { username: string } }) {
  const { username } = params
  const { user, isLoading } = useAuth()
  const [recipientExists, setRecipientExists] = useState<boolean | null>(null)
  const [checkingRecipient, setCheckingRecipient] = useState(true)
  const [accessDenied, setAccessDenied] = useState(false)
  const router = useRouter()

  // Check if recipient exists and if user has access to this conversation
  useEffect(() => {
    const checkRecipientAndAccess = async () => {
      if (!user?.token) return

      try {
        setCheckingRecipient(true)

        // Try to get recipient profile
        try {
          const { profile } = await profileApi.get(username, user.token)
          setRecipientExists(!!profile)

          // Check if user has access to this conversation
          if (profile) {
            const roomId = chatService.constructor.generateRoomId(user.id, profile.id)
            const hasAccess = chatService.isUserParticipant(user.id, roomId)

            if (!hasAccess) {
              console.error("Access denied: User is not a participant of this conversation")
              setAccessDenied(true)
            }
          }
        } catch (error) {
          console.error("Error checking recipient:", error)
          setRecipientExists(false)

          // Try to get user ID from username
          const tempId = username.charCodeAt(0) * 1000 + username.length
          const roomId = chatService.constructor.generateRoomId(user.id, tempId)
          const hasAccess = chatService.isUserParticipant(user.id, roomId)

          if (!hasAccess) {
            console.error("Access denied: User is not a participant of this conversation")
            setAccessDenied(true)
          }
        }
      } catch (error) {
        console.error("Error in checkRecipientAndAccess:", error)
        setRecipientExists(false)
        setAccessDenied(true)
      } finally {
        setCheckingRecipient(false)
      }
    }

    if (user?.token) {
      checkRecipientAndAccess()
    }
  }, [username, user])

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading || checkingRecipient) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <div className="flex-1 md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </div>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (accessDenied) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <div className="flex-1 md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
            <p className="text-[#737373] mb-6">You don't have permission to view this conversation.</p>
            <Button onClick={() => router.push("/messages")} className="bg-[#0095f6] hover:bg-[#0095f6]/90 text-white">
              Back to Messages
            </Button>
          </div>
        </div>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (recipientExists === false) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <div className="flex-1 md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-xl font-semibold mb-4">User not found</h2>
            <p className="text-[#737373] mb-6">The user you're trying to message doesn't exist.</p>
            <Button onClick={() => router.push("/messages")} className="bg-[#0095f6] hover:bg-[#0095f6]/90 text-white">
              Back to Messages
            </Button>
          </div>
        </div>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <div className="flex-1 md:ml-[240px] flex flex-col h-screen">
        <ChatConversation recipientUsername={username} isMobile={true} />
      </div>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\not-found.tsx

```typescript
"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="container mx-auto max-w-5xl py-12 px-4 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Изображение телефона */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[280px] h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=280"
                  alt="Instagram mobile app"
                  width={280}
                  height={500}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Текстовый контент */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Oops! Page Not Found (404 Error)</h1>

              <div className="space-y-4 text-[#737373] mb-8">
                <p>We're sorry, but the page you're looking for doesn't seem to exist.</p>
                <p>If you typed the URL manually, please double-check the spelling.</p>
                <p>If you clicked on a link, it may be outdated or broken.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={() => router.push("/")} className="bg-[#0095f6] hover:bg-[#0095f6]/90">
                  Go to Home
                </Button>

                <Button variant="outline" onClick={() => router.back()} className="border-[#dbdbdb]">
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\notifications\layout.tsx

```typescript
import type React from "react"
import { AuthGuard } from "@/components/auth/auth-guard"

export default function NotificationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthGuard>{children}</AuthGuard>
}


```

## app\notifications\page.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { notificationApi } from "@/lib/api"
import type { Notification } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { toast } from "@/hooks/use-toast"
import { formatImageUrl } from "@/lib/image-utils"
import type { Profile } from "@/lib/types"

// Интерфейс для расширенного уведомления с данными пользователя
interface EnhancedNotification extends Notification {
  userProfile?: Profile
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user || !user.token) {
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const notificationsList = await notificationApi.list(user.token)

        setNotifications(notificationsList)
      } catch (err) {
        console.error("Error fetching notifications:", err)
        toast({
          title: "Error",
          description: "Failed to load notifications. Please try again.",
          variant: "destructive",
        })

        // Если API недоступно, используем моковые данные как запасной вариант
        setNotifications([
          {
            id: 1,
            type: "like",
            message: "sashaa liked your photo.",
            createdAt: new Date().toISOString(),
            isRead: false,
            initiator: {
              id: 101,
              username: "sashaa",
              img: "/placeholder.svg?height=32&width=32",
            },
          },
          {
            id: 2,
            type: "comment",
            message: "sashaa commented on your photo.",
            createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            isRead: true,
            initiator: {
              id: 101,
              username: "sashaa",
              img: "/placeholder.svg?height=32&width=32",
            },
          },
          {
            id: 3,
            type: "follow",
            message: "sashaa started following you.",
            createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            isRead: false,
            initiator: {
              id: 101,
              username: "sashaa",
              img: "/placeholder.svg?height=32&width=32",
            },
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()

    // Устанавливаем интервал для периодического обновления уведомлений
    const interval = setInterval(fetchNotifications, 60000) // Обновляем каждую минуту

    return () => clearInterval(interval)
  }, [user])

  // Обновим функцию handleNotificationClick, чтобы использовать initiator
  const handleNotificationClick = async (notification: Notification) => {
    if (!user?.token) return

    // Если уведомление не прочитано, отмечаем его как прочитанное
    if (!notification.isRead) {
      try {
        await notificationApi.markAsRead(notification.id, user.token)
        // Обновляем локальное состояние
        setNotifications(notifications.map((n) => (n.id === notification.id ? { ...n, isRead: true } : n)))

        toast({
          title: "Success",
          description: "Notification marked as read",
        })
      } catch (err) {
        console.error("Error marking notification as read:", err)
        toast({
          title: "Error",
          description: "Failed to mark notification as read",
          variant: "destructive",
        })
      }
    }

    // Перенаправляем на профиль пользователя-инициатора
    if (notification.initiator) {
      router.push(`/profile/${notification.initiator.username}`)
    }
  }

  const handleMarkAllAsRead = async () => {
    if (!user?.token) return

    try {
      // Отмечаем все непрочитанные уведомления как прочитанные
      const unreadNotifications = notifications.filter((n) => !n.isRead)

      await Promise.all(
        unreadNotifications.map((notification) => notificationApi.markAsRead(notification.id, user.token)),
      )

      // Обновляем локальное состояние
      setNotifications(notifications.map((n) => ({ ...n, isRead: true })))

      toast({
        title: "Success",
        description: "All notifications marked as read",
      })
    } catch (err) {
      console.error("Error marking all notifications as read:", err)
      toast({
        title: "Error",
        description: "Failed to mark all notifications as read",
        variant: "destructive",
      })
    }
  }

  if (!user) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <p className="mb-4">Please log in to view your notifications</p>
              <Link href="/login" className="text-[#0095f6] font-medium">
                Log in
              </Link>
            </div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-2xl py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Notifications</h1>

            <Button
              variant="outline"
              onClick={handleMarkAllAsRead}
              disabled={notifications.every((n) => n.isRead) || notifications.length === 0}
            >
              Mark all as read
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-[#dbdbdb]">
            <div className="p-4 border-b border-[#dbdbdb]">
              <h2 className="font-semibold">New</h2>
            </div>

            {notifications.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-[#737373]">No notifications yet</p>
              </div>
            ) : (
              <div className="divide-y divide-[#dbdbdb]">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-center p-4 hover:bg-gray-50 ${!notification.isRead ? "bg-blue-50" : ""} cursor-pointer`}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage
                        src={
                          notification.initiator
                            ? formatImageUrl(notification.initiator.img)
                            : `/placeholder.svg?height=32&width=32`
                        }
                        alt={notification.initiator?.username || "User"}
                      />
                      <AvatarFallback>
                        {notification.initiator ? notification.initiator.username.slice(0, 2).toUpperCase() : "UN"}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-[#737373] mt-1">
                        {new Date(notification.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\p\layout.tsx

```typescript
import type React from "react"

// Удаляем AuthGuard для страниц постов, чтобы они были доступны без авторизации
export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


```

## app\p\[slug]\edit\page.tsx

```typescript
"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Smile, MapPin, Tag, X, ArrowLeft, ImagePlus } from "lucide-react"
import { postApi, uploadApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"
import { toast } from "@/hooks/use-toast"
import { formatImageUrl } from "@/lib/image-utils"
import type { Post } from "@/lib/types"
import { useDropzone } from "react-dropzone"

export default function EditPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const [post, setPost] = useState<Post | null>(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tagList, setTagList] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { user, isLoading: authLoading } = useAuth()

  // Отдельный эффект для проверки авторизации
  useEffect(() => {
    // Ждем завершения проверки авторизации
    if (authLoading) return

    // Если пользователь не авторизован, редиректим на логин
    if (!user) {
      console.log("Пользователь не авторизован, редирект на логин")
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
    }
  }, [user, authLoading, router])

  // Отдельный эффект для загрузки данных поста
  useEffect(() => {
    // Не загружаем пост, если пользователь не авторизован или идет проверка авторизации
    if (!user || authLoading) return

    console.log("Начинаем загрузку поста:", slug)

    const fetchPost = async () => {
      setLoading(true)
      setError(null)

      try {
        console.log("Запрашиваем данные поста с токеном:", !!user.token)
        const { post } = await postApi.get(slug, user.token)
        console.log("Получены данные поста:", post?.id)

        // Проверяем, является ли текущий пользователь автором поста
        if (post.author.id !== user.id) {
          console.log("Пользователь не является автором поста")
          toast({
            title: "Ошибка доступа",
            description: "Вы можете редактировать только свои посты",
            variant: "destructive",
          })
          router.push(`/p/${slug}`)
          return
        }

        setPost(post)
        setTitle(post.title || "")
        setContent(post.content || "")
        setTagList(post.tagList || [])
        console.log("Данные поста установлены в состояние")
      } catch (error) {
        console.error("Ошибка при загрузке поста:", error)
        setError("Не удалось загрузить пост")
        toast({
          title: "Ошибка",
          description: "Не удалось загрузить пост. Пожалуйста, попробуйте снова.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug, user, router, authLoading])

  // Обработка выбора файла через Dropzone
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      setSelectedFile(file)
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxFiles: 1,
  })

  // Handle adding a tag
  const handleAddTag = () => {
    if (tagInput.trim() && !tagList.includes(tagInput.trim())) {
      setTagList([...tagList, tagInput.trim()])
      setTagInput("")
    }
  }

  // Handle removing a tag
  const handleRemoveTag = (tag: string) => {
    setTagList(tagList.filter((t) => t !== tag))
  }

  // Обработка клика по изображению для его изменения
  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  // Обработка выбора файла через input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
    }
  }

  // Загрузка нового изображения
  const uploadImage = async () => {
    if (!selectedFile || !post || !user?.token) return null

    setIsUploading(true)
    try {
      console.log("Загружаем новое изображение для поста")
      const { post: updatedPost } = await uploadApi.postImage(post.slug, selectedFile, user.token)
      console.log("Изображение успешно загружено")
      return updatedPost.img
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error)
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить изображение. Пожалуйста, попробуйте снова.",
        variant: "destructive",
      })
      return null
    } finally {
      setIsUploading(false)
    }
  }

  // Handle saving changes
  const handleSave = async () => {
    if (!post || !user?.token) {
      console.log("Нет поста или токена для сохранения")
      toast({
        title: "Ошибка",
        description: "Необходимо авторизоваться",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)
    console.log("Начинаем сохранение поста")

    try {
      // Если выбрано новое изображение, сначала загружаем его
      let imgUrl = post.img
      if (selectedFile) {
        const newImgUrl = await uploadImage()
        if (newImgUrl) {
          imgUrl = newImgUrl
        }
      }

      console.log("Отправляем запрос на обновление поста")
      const { post: updatedPost } = await postApi.update(
        slug,
        {
          title,
          content,
          tagList,
          img: imgUrl, // Важно! Передаем текущее изображение или новое, если оно было загружено
        },
        user.token,
      )

      console.log("Пост успешно обновлен:", updatedPost?.id)
      toast({
        title: "Успех",
        description: "Пост успешно обновлен",
      })

      router.push(`/p/${updatedPost.slug}`)
    } catch (error) {
      console.error("Ошибка при обновлении поста:", error)
      toast({
        title: "Ошибка",
        description: "Не удалось обновить пост. Пожалуйста, попробуйте снова.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  // Handle cancel
  const handleCancel = () => {
    router.back()
  }

  // Показываем сообщение об ошибке, если она есть
  if (error) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Ошибка</h1>
            <p className="text-[#737373] mb-6">{error}</p>
            <Button onClick={() => router.push("/feed")}>Вернуться в ленту</Button>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  // Показываем загрузку, если идет проверка авторизации или загрузка поста
  if (authLoading || loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black mb-4"></div>
            <p className="text-[#737373]">Загрузка...</p>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  // Если нет пользователя после проверки авторизации
  if (!user) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Требуется авторизация</h1>
            <p className="text-[#737373] mb-6">Пожалуйста, войдите в систему для редактирования поста</p>
            <Button onClick={() => router.push("/login")}>Войти</Button>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  // Если пост не найден
  if (!post) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Пост не найден</h1>
            <p className="text-[#737373] mb-6">Запрашиваемый пост не существует или был удален.</p>
            <Button onClick={() => router.push("/feed")}>Вернуться в ленту</Button>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  // Основной интерфейс редактирования
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        {/* Modal for editing post */}
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-[850px] bg-white rounded-xl overflow-hidden">
            {/* Modal header */}
            <div className="flex items-center justify-between p-3 border-b border-[#dbdbdb]">
              <button onClick={handleCancel} className="text-black hover:text-gray-600">
                <ArrowLeft className="h-6 w-6" />
              </button>
              <h1 className="text-base font-semibold">Редактировать пост</h1>
              <Button
                onClick={handleSave}
                disabled={isSaving || isUploading || !title.trim() || !content.trim()}
                variant="ghost"
                className="text-[#0095f6] font-semibold hover:bg-transparent"
              >
                {isSaving || isUploading ? "Сохранение..." : "Готово"}
              </Button>
            </div>

            {/* Modal content */}
            <div className="flex flex-col md:flex-row">
              {/* Left side - image preview */}
              <div className="w-full md:w-[60%] aspect-square bg-black flex items-center justify-center relative">
                {/* Скрытый input для выбора файла */}
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

                {/* Отображение текущего или выбранного изображения */}
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage || formatImageUrl(post.img) || "/placeholder.svg"}
                    alt={post.title || "Post"}
                    fill
                    className="object-contain"
                  />

                  {/* Кнопка для изменения изображения */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={handleImageClick}
                  >
                    <div className="text-white text-center">
                      <ImagePlus className="h-12 w-12 mx-auto mb-2" />
                      <p>Изменить изображение</p>
                    </div>
                  </div>
                </div>

                {/* Индикатор загрузки */}
                {isUploading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                  </div>
                )}
              </div>

              {/* Right side - post details */}
              <div className="w-full md:w-[40%] border-l border-[#dbdbdb]">
                {/* User info */}
                <div className="flex items-center p-3 border-b border-[#dbdbdb]">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-[2px] mr-2">
                    <div className="h-full w-full rounded-full bg-white p-[1.5px]">
                      <div className="h-full w-full rounded-full overflow-hidden">
                        <Image
                          src={formatImageUrl(post.author.img) || "/placeholder.svg"}
                          alt={post.author.username}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="font-semibold text-sm">{post.author.username}</span>
                </div>

                {/* Title field */}
                <div className="p-3 border-b border-[#dbdbdb]">
                  <Input
                    placeholder="Заголовок..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-none focus-visible:ring-0 p-0 text-sm"
                  />
                </div>

                {/* Caption field */}
                <div className="p-3">
                  <Textarea
                    placeholder="Добавьте описание..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[150px] border-none resize-none focus-visible:ring-0 p-0 text-sm"
                  />
                </div>

                {/* Emoji and location tools */}
                <div className="flex items-center justify-between p-3 border-t border-[#dbdbdb]">
                  <div className="flex items-center">
                    <Smile className="h-6 w-6 text-[#737373] mr-2" />
                    <Tag className="h-6 w-6 text-[#737373] mr-2" />
                    <MapPin className="h-6 w-6 text-[#737373]" />
                  </div>
                  <span className="text-xs text-[#737373]">{content.length}/2,200</span>
                </div>

                {/* Tags */}
                <div className="p-3 border-t border-[#dbdbdb]">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium mr-2">Теги:</span>
                    <div className="flex flex-wrap gap-1">
                      {tagList.map((tag) => (
                        <div key={tag} className="flex items-center bg-[#efefef] rounded-full px-2 py-1 text-xs">
                          <span>#{tag}</span>
                          <button onClick={() => handleRemoveTag(tag)} className="ml-1 text-[#737373]">
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Input
                      placeholder="Добавить тег..."
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      className="flex-1 border-none focus-visible:ring-0 text-sm"
                    />
                    <Button
                      onClick={handleAddTag}
                      variant="ghost"
                      size="sm"
                      className="text-[#0095f6]"
                      disabled={!tagInput.trim()}
                    >
                      Добавить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\p\[slug]\page.tsx

```typescript
"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { PostOptionsMenu } from "@/components/post-options-menu"
import { postApi, commentApi, profileApi } from "@/lib/api"
import type { Post, Comment } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { formatImageUrl } from "@/lib/image-utils"

export default function PostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(0)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<Comment[]>([])
  const [isFollowing, setIsFollowing] = useState(false)
  const [showOptionsMenu, setShowOptionsMenu] = useState(false)
  const commentInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      try {
        // Получаем пост без токена, если пользователь не авторизован
        const { post } = await postApi.get(slug, user?.token)
        setPost(post)
        setLikesCount(post.favoritesCount)
        setLiked(post.favorited || false)
        setIsFollowing(post.author.following || false)
        setComments(post.comments || [])
      } catch (err) {
        console.error("Error fetching post:", err)
        router.push("/feed")
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug, user, router])

  const handleLike = async () => {
    if (!user?.token || !post) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push("/login")
      return
    }

    try {
      if (liked) {
        await postApi.unfavorite(post.slug, user.token)
        setLikesCount(likesCount - 1)
      } else {
        await postApi.favorite(post.slug, user.token)
        setLikesCount(likesCount + 1)
      }
      setLiked(!liked)
    } catch (err) {
      console.error("Error toggling like:", err)
    }
  }

  const handleFollow = async () => {
    if (!user?.token || !post) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push("/login")
      return
    }

    try {
      if (isFollowing) {
        await profileApi.unfollow(post.author.username, user.token)
      } else {
        await profileApi.follow(post.author.username, user.token)
      }
      setIsFollowing(!isFollowing)
    } catch (err) {
      console.error("Error toggling follow:", err)
    }
  }

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user?.token) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push("/login")
      return
    }

    if (!comment.trim() || !post) return

    try {
      const newComment = await commentApi.create(post.slug, { body: comment }, user.token)
      setComments([...comments, newComment])
      setComment("")

      // Обновляем пост с новым комментарием
      if (post) {
        // Создаем копию поста с обновленным списком комментариев
        const updatedPost = {
          ...post,
          comments: [...(post.comments || []), newComment],
        }
        setPost(updatedPost)
      }
    } catch (err) {
      console.error("Error adding comment:", err)
    }
  }

  const handleCommentFocus = () => {
    if (!user) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push("/login")
      return
    }
    commentInputRef.current?.focus()
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-[#737373] mb-6">The post you are looking for does not exist.</p>
            <Button onClick={() => router.push("/feed")}>Go to Feed</Button>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-[935px]">
          <div className="flex flex-col md:flex-row border border-[#dbdbdb] rounded-sm overflow-hidden">
            {/* Изображение поста */}
            <div className="relative aspect-square w-full md:w-[60%] bg-black">
              <Image
                src={formatImageUrl(post.img) || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Информация о посте */}
            <div className="flex flex-col w-full md:w-[40%]">
              {/* Шапка поста */}
              <div className="flex items-center justify-between p-3 border-b border-[#dbdbdb]">
                <div className="flex items-center">
                  <Link href={`/profile/${post.author.username}`} className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={formatImageUrl(post.author.img)} alt={post.author.username} />
                      <AvatarFallback>{post.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center">
                      <span className="font-semibold text-sm">{post.author.username}</span>
                    </div>
                  </Link>
                </div>
                <div className="flex items-center">
                  {user && user.id !== post.author.id && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#0095f6] hover:text-[#0095f6] hover:bg-transparent px-2 text-sm"
                      onClick={handleFollow}
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowOptionsMenu(true)}>
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Контент поста и комментарии */}
              <div className="flex-1 overflow-y-auto max-h-[calc(100vh-13rem)]">
                {/* Подпись автора */}
                <div className="flex items-start p-3">
                  <Avatar className="h-8 w-8 mr-3 mt-1">
                    <AvatarImage src={formatImageUrl(post.author.img)} alt={post.author.username} />
                    <AvatarFallback>{post.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div>
                      <span className="font-semibold text-sm">{post.author.username}</span>{" "}
                      <span className="text-sm whitespace-pre-line">{post.content}</span>
                    </div>
                    <p className="text-xs text-[#737373] mt-1">{new Date(post.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Список комментариев */}
                <div className="px-3 space-y-3">
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <div key={comment.id} className="flex items-start">
                        <Avatar className="h-8 w-8 mr-3 mt-1">
                          <AvatarImage src={formatImageUrl(comment.author.img)} alt={comment.author.username} />
                          <AvatarFallback>{comment.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <span className="font-semibold text-sm mr-1">{comment.author.username}</span>
                            <span className="text-sm">{comment.body}</span>
                          </div>
                          <div className="flex items-center mt-1 space-x-3 text-xs text-[#737373]">
                            <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
                            {user && <button className="font-semibold">Reply</button>}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-3 text-center text-[#737373]">No comments yet. Be the first to comment!</div>
                  )}
                </div>
              </div>

              {/* Действия с постом */}
              <div className="border-t border-[#dbdbdb] p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <button onClick={handleLike}>
                      <Heart className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : ""}`} />
                    </button>
                    <button onClick={handleCommentFocus}>
                      <MessageCircle className="h-6 w-6" />
                    </button>
                    <button>
                      <Send className="h-6 w-6" />
                    </button>
                  </div>
                  <button>
                    <Bookmark className="h-6 w-6" />
                  </button>
                </div>

                {/* Лайки */}
                <div className="mb-1">
                  <p className="font-semibold text-sm">{formatNumber(likesCount)} likes</p>
                </div>

                {/* Дата */}
                <div className="mb-3">
                  <p className="text-[10px] uppercase text-[#737373]">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {/* Форма комментария */}
                <form onSubmit={handleComment} className="flex items-center border-t border-[#dbdbdb] pt-3">
                  <button type="button" className="mr-2">
                    <Smile className="h-6 w-6 text-[#262626]" />
                  </button>
                  <Input
                    ref={commentInputRef}
                    type="text"
                    placeholder={user ? "Add comment..." : "Log in to comment"}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm"
                    disabled={!user}
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="sm"
                    className={`text-[#0095f6] font-semibold text-sm ${
                      !comment.trim() || !user ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!comment.trim() || !user}
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <PostOptionsMenu
            postId={post.id}
            slug={post.slug}
            isOpen={showOptionsMenu}
            onClose={() => setShowOptionsMenu(false)}
            isCurrentUserPost={user?.id === post.author.id}
            profileId={post.author.username}
          />
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\page.tsx

```typescript
import { redirect } from "next/navigation"

export default function HomePage() {
  // Редирект на страницу входа
  redirect("/login")
}


```

## app\profile\edit\page.tsx

```typescript
"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Link2 } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { uploadApi } from "@/lib/api"
import { toast } from "@/hooks/use-toast"
import { formatImageUrl } from "@/lib/image-utils"

export default function EditProfilePage() {
  const [profile, setProfile] = useState({
    username: "",
    name: "",
    avatar: "/placeholder.svg?height=150&width=150",
    bio: "",
    website: "",
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [bioLength, setBioLength] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { user, updateUser } = useAuth()

  const MAX_BIO_LENGTH = 150

  useEffect(() => {
    // If user is not logged in, redirect to login
    if (!user && !loading) {
      router.push("/login")
      return
    }

    // Load user profile data
    if (user) {
      setProfile({
        username: user.username,
        name: user.username, // Using username as name if not available
        avatar: user.img || "/placeholder.svg?height=150&width=150",
        bio: user.bio || "",
        website: "", // Add website field if available in your user model
      })
      setBioLength(user.bio?.length || 0)
      setLoading(false)
    }
  }, [user, loading, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "bio") {
      setBioLength(value.length)
    }

    setProfile({
      ...profile,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      // Update user profile
      await updateUser({
        username: profile.username,
        bio: profile.bio,
        // Add other fields as needed
      })

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      })

      // After successful save, redirect to profile page
      router.push(`/profile/${profile.username}`)
    } catch (error) {
      console.error("Error updating profile:", error)
      toast({
        title: "Update failed",
        description: "Failed to update your profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !user?.token) return

    setUploading(true)
    try {
      // Upload the avatar
      const { user: updatedUser } = await uploadApi.userAvatar(file, user.token)

      // Update local state
      setProfile({
        ...profile,
        avatar: updatedUser.img,
      })

      // Update auth context
      updateUser(updatedUser)

      toast({
        title: "Avatar updated",
        description: "Your profile picture has been successfully updated.",
      })
    } catch (error) {
      console.error("Error uploading avatar:", error)
      toast({
        title: "Upload failed",
        description: "Failed to upload your profile picture. Please try again.",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-2xl py-8 px-4">
          <h1 className="text-2xl font-bold mb-8">Edit profile</h1>

          <form onSubmit={handleSubmit}>
            {/* Profile photo */}
            <div className="bg-[#fafafa] rounded-lg p-6 mb-6">
              <div className="flex items-center">
                <div
                  className="relative h-16 w-16 rounded-full overflow-hidden mr-4 cursor-pointer"
                  onClick={handleAvatarClick}
                >
                  {uploading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                    </div>
                  )}
                  <Image
                    src={formatImageUrl(profile.avatar) || "/placeholder.svg"}
                    alt={profile.username}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{profile.username}</h2>
                  <p className="text-sm text-[#737373]">Click on the photo to change your profile picture</p>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={uploading}
                />

                <Button
                  type="button"
                  className="bg-[#0095f6] hover:bg-[#0095f6]/90 text-white"
                  onClick={handleAvatarClick}
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "New photo"}
                </Button>
              </div>
            </div>

            {/* Username */}
            <div className="mb-6">
              <label htmlFor="username" className="block font-medium mb-2">
                Username
              </label>
              <Input
                id="username"
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="border-[#dbdbdb]"
              />
            </div>

            {/* Website */}
            <div className="mb-6">
              <label htmlFor="website" className="block font-medium mb-2">
                Website
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Link2 className="h-4 w-4 text-[#737373]" />
                </div>
                <Input
                  id="website"
                  name="website"
                  value={profile.website}
                  onChange={handleChange}
                  className="border-[#dbdbdb] pl-10"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <label htmlFor="bio" className="block font-medium mb-2">
                About
              </label>
              <Textarea
                id="bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                maxLength={MAX_BIO_LENGTH}
                rows={5}
                className="border-[#dbdbdb] resize-none"
              />
              <div className="text-right text-xs text-[#737373] mt-1">
                {bioLength} / {MAX_BIO_LENGTH}
              </div>
            </div>

            {/* Save button */}
            <Button type="submit" className="w-full bg-[#0095f6] hover:bg-[#0095f6]/90 text-white" disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
          </form>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\profile\layout.tsx

```typescript
import type React from "react"

// Удаляем AuthGuard для страниц профилей, чтобы они были доступны без авторизации
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


```

## app\profile\page.tsx

```typescript
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useAuth } from "@/lib/auth-context"

// Редирект на страницу текущего пользователя или на страницу входа
export default function ProfileRedirectPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (isLoading) return

    if (user) {
      // Если пользователь авторизован, перенаправляем на его профиль
      router.push(`/profile/${user.username}`)
    } else {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push("/login?callbackUrl=/profile")
    }
  }, [router, user, isLoading])

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />
      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      </main>
      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\profile\[username]\page.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// Добавим импорт для Heart иконки
import { Grid, MessageCircle, Settings, Heart } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { profileApi, postApi } from "@/lib/api"
import type { Profile, Post } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { formatImageUrl } from "@/lib/image-utils"
// Импортируем компонент PostGrid
import { PostGrid } from "@/components/post-grid"
import { useRouter } from "next/navigation"

export default function ProfilePage({ params }: { params: { username: string } }) {
  const { username } = params
  const [profile, setProfile] = useState<Profile | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [isFollowing, setIsFollowing] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  // Добавим состояние для лайкнутых постов
  const [likedPosts, setLikedPosts] = useState<Post[]>([])
  const [loadingLiked, setLoadingLiked] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      try {
        // Получаем профиль пользователя (с токеном, если пользователь авторизован)
        const { profile } = await profileApi.get(username, user?.token)
        setProfile(profile)
        setIsFollowing(profile.following)

        // Получаем посты пользователя
        const { posts } = await postApi.list({ author: username }, user?.token)
        setPosts(posts)
      } catch (err) {
        console.error("Error fetching profile:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [username, user])

  // Добавим функцию для загрузки лайкнутых постов
  useEffect(() => {
    const fetchLikedPosts = async () => {
      if (!profile || !user?.token) return

      setLoadingLiked(true)
      try {
        // Получаем посты, которые пользователь лайкнул
        const { posts } = await postApi.list({ favorited: profile.username }, user.token)
        setLikedPosts(posts)
      } catch (err) {
        console.error("Error fetching liked posts:", err)
      } finally {
        setLoadingLiked(false)
      }
    }

    // Загружаем лайкнутые посты только если это профиль текущего пользователя
    if (user && profile && user.id === profile.id) {
      fetchLikedPosts()
    }
  }, [profile, user])

  const handleFollow = async () => {
    if (!user || !user.token || !profile) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
      return
    }

    try {
      let updatedProfile
      if (isFollowing) {
        const { profile: result } = await profileApi.unfollow(profile.username, user.token)
        updatedProfile = result
      } else {
        const { profile: result } = await profileApi.follow(profile.username, user.token)
        updatedProfile = result
      }

      // Обновляем профиль с новыми данными
      setProfile(updatedProfile)
      setIsFollowing(updatedProfile.following)
    } catch (err) {
      console.error("Error toggling follow:", err)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">User not found</h1>
              <p className="text-[#737373] mb-6">The user you are looking for does not exist.</p>
              <Link href="/feed">
                <Button>Go to Feed</Button>
              </Link>
            </div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-4xl py-8 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
            <Avatar className="h-24 w-24 md:h-36 md:w-36">
              {/* Update the Avatar image in the profile section */}
              <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
              <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-2xl font-bold">{profile.username}</h1>

                <div className="flex items-center gap-2">
                  {user && user.id !== profile.id && (
                    <Button onClick={handleFollow} variant={isFollowing ? "outline" : "default"}>
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                  )}
                  {user && user.id !== profile.id && (
                    <Link href={`/messages/${profile.username}`}>
                      <Button variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </Link>
                  )}
                  {user && user.id === profile.id && (
                    <Link href="/profile/edit">
                      <Button variant="outline">Edit Profile</Button>
                    </Link>
                  )}
                  {user && user.id === profile.id && (
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-6 mb-4">
                <div>
                  <strong>{posts.length}</strong> posts
                </div>
                <div>
                  <strong>{profile?.followersCount || 0}</strong> followers
                </div>
                <div>
                  <strong>{profile?.followingCount || 0}</strong> following
                </div>
              </div>

              <div>
                <h2 className="font-medium">{profile.username}</h2>
                <p className="mt-1">{profile.bio || "No bio yet"}</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="posts">
            {/* Обновим иконку для вкладки "saved" */}
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="posts">
                <Grid className="h-4 w-4 mr-2" />
                Posts
              </TabsTrigger>
              <TabsTrigger value="saved">
                <Heart className="h-4 w-4 mr-2" />
                Saved
              </TabsTrigger>
            </TabsList>
            {/* Заменим содержимое TabsContent для posts на использование PostGrid */}
            <TabsContent value="posts" className="mt-6">
              <PostGrid
                posts={posts}
                loading={loading}
                emptyMessage="No posts yet"
                emptyIcon={<Grid className="h-12 w-12 mx-auto mb-4 text-gray-300" />}
              />
            </TabsContent>
            {/* Обновим TabsContent для вкладки "saved" */}
            {/* Заменим содержимое TabsContent для saved на использование PostGrid */}
            <TabsContent value="saved" className="mt-6">
              {user && profile && user.id === profile.id ? (
                <PostGrid
                  posts={likedPosts}
                  loading={loadingLiked}
                  emptyMessage="No saved posts yet"
                  emptyIcon={<Heart className="h-12 w-12 mx-auto mb-4 text-gray-300" />}
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">This section is only visible to the profile owner</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\providers.tsx

```typescript
"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth-context"
import { Toaster } from "sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
        <Toaster position="top-center" />
      </ThemeProvider>
    </AuthProvider>
  )
}


```

## app\reset-password\[token]\page.tsx

```typescript
"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ResetPasswordForm } from "./reset-password-form"
import { Lock } from "lucide-react"

interface ResetPasswordPageProps {
  params: {
    token: string
  }
}

export default function ResetPasswordPage({ params }: ResetPasswordPageProps) {
  const { token } = params

  // Очищаем localStorage при загрузке страницы сброса пароля
  useEffect(() => {
    // Удаляем токен авторизации, чтобы пользователь не был автоматически перенаправлен
    localStorage.removeItem("token")
    localStorage.removeItem("auth_token")
    // Также можно удалить куки, если они используются
    document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold italic tracking-tighter">ICMGRAM</h1>
          </div>

          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-black">
              <Lock className="h-12 w-12" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Create New Password</h2>
            <p className="text-sm text-[#737373]">
              Your password must be at least 6 characters and should include a combination of numbers, letters and
              special characters.
            </p>
          </div>

          <ResetPasswordForm token={token} />
        </div>

        <div className="mt-4 rounded-lg bg-white p-6 text-center shadow-sm">
          <p className="text-sm">
            <Link href="/login" className="text-[#0095f6] font-medium">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}


```

## app\reset-password\[token]\reset-password-form.tsx

```typescript
"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

interface ResetPasswordFormProps {
  token: string
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      })
      return
    }

    if (password.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Правильно формируем URL без двойного слеша
      const baseUrl = process.env.NEXT_PUBLIC_API_URL?.endsWith("/")
        ? process.env.NEXT_PUBLIC_API_URL.slice(0, -1)
        : process.env.NEXT_PUBLIC_API_URL

      const apiUrl = `${baseUrl}/api/auth/reset-password`
      const requestData = { token, password }

      // Отправляем запрос на сервер
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })

      const responseText = await response.text()
      let data

      try {
        data = JSON.parse(responseText)
      } catch (e) {
        // Ошибка парсинга JSON
      }

      if (!response.ok) {
        throw new Error(data?.message || "Failed to reset password")
      }

      toast({
        title: "Password reset successful",
        description: "Your password has been reset. You can now log in with your new password.",
      })

      // Перенаправляем на страницу входа
      router.push("/login")
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to reset password",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-10 border-[#dbdbdb]"
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="h-10 border-[#dbdbdb]"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-[#0095f6] hover:bg-[#0095f6]/90" disabled={isLoading}>
        {isLoading ? "Resetting Password..." : "Reset Password"}
      </Button>
    </form>
  )
}


```

## app\search\loading.tsx

```typescript
export default function Loading() {
  return null
}


```

## app\search\page.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { formatImageUrl } from "@/lib/image-utils"

const MOCK_USERS = [
  {
    id: "101",
    username: "sashaa",
    fullName: "Sasha",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: true,
  },
  {
    id: "102",
    username: "nature_lover",
    fullName: "Nature Photography",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: false,
  },
  {
    id: "103",
    username: "traveler",
    fullName: "World Traveler",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: false,
  },
  {
    id: "104",
    username: "photographer",
    fullName: "Professional Photographer",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: true,
  },
  {
    id: "105",
    username: "autumn_fan",
    fullName: "Autumn Colors",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: false,
  },
]

const MOCK_POPULAR_POSTS = [
  {
    id: "1",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 1024,
  },
  {
    id: "2",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 876,
  },
  {
    id: "3",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 743,
  },
  {
    id: "4",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 692,
  },
  {
    id: "5",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 581,
  },
  {
    id: "6",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 429,
  },
  {
    id: "7",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 387,
  },
  {
    id: "8",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 352,
  },
  {
    id: "9",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 298,
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches))
      } catch (e) {
        console.error("Error parsing recent searches:", e)
        setRecentSearches([])
      }
    } else {
      const defaultRecent = [MOCK_USERS[0]]
      setRecentSearches(defaultRecent)
      localStorage.setItem("recentSearches", JSON.stringify(defaultRecent))
    }
  }, [])

  useEffect(() => {
    if (searchQuery.trim()) {
      setLoading(true)

      setTimeout(() => {
        const results = MOCK_USERS.filter(
          (user) =>
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.fullName.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setSearchResults(results)
        setLoading(false)
      }, 300)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const addToRecentSearches = (user) => {
    const isExisting = recentSearches.some((item) => item.id === user.id)

    if (!isExisting) {
      const updatedSearches = [user, ...recentSearches].slice(0, 5)
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    }
  }

  const removeFromRecentSearches = (userId) => {
    const updatedSearches = recentSearches.filter((user) => user.id !== userId)
    setRecentSearches(updatedSearches)
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-4xl py-8 px-4">
          <div className="relative mb-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-10 bg-[#efefef] border-none"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] hover:text-black"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {searchQuery ? (
            <div className="bg-white rounded-lg shadow-sm border border-[#dbdbdb]">
              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
                </div>
              ) : (
                <div className="divide-y divide-[#dbdbdb]">
                  {searchResults.length > 0 ? (
                    searchResults.map((user) => (
                      <Link
                        key={user.id}
                        href={`/profile/${user.username}`}
                        onClick={() => addToRecentSearches(user)}
                        className="flex items-center p-4 hover:bg-gray-50"
                      >
                        <Avatar className="h-12 w-12 mr-3">
                          <AvatarImage src={formatImageUrl(user.avatar)} alt={user.username} />
                          <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <p className="font-semibold">{user.username}</p>
                          <p className="text-sm text-[#737373]">{user.fullName}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-6 text-center">
                      <p className="text-[#737373]">No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              {recentSearches.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm border border-[#dbdbdb] mb-8">
                  <div className="p-4 border-b border-[#dbdbdb] flex justify-between items-center">
                    <h2 className="font-semibold">Recent</h2>
                  </div>

                  <div className="divide-y divide-[#dbdbdb]">
                    {recentSearches.map((user) => (
                      <div key={user.id} className="flex items-center p-4 hover:bg-gray-50">
                        <Link href={`/profile/${user.id}`} className="flex items-center flex-1">
                          <Avatar className="h-12 w-12 mr-3">
                            <AvatarImage src={user.avatar} alt={user.username} />
                            <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>

                          <div className="flex-1 min-w-0">
                            <p className="font-semibold">{user.username}</p>
                            <p className="text-sm text-[#737373]">{user.fullName}</p>
                          </div>
                        </Link>

                        <button
                          onClick={() => removeFromRecentSearches(user.id)}
                          className="text-[#737373] hover:text-black"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <h2 className="font-semibold text-lg mb-4">Explore</h2>
                <div className="grid grid-cols-3 gap-1">
                  {MOCK_POPULAR_POSTS.map((post) => (
                    <Link key={post.id} href={`/p/${post.id}`} className="relative aspect-square">
                      <Image
                        src={formatImageUrl(post.image) || "/placeholder.svg"}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}


```

## app\signup\page.tsx

```typescript
"use client"

import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SignupForm } from "@/components/auth/signup-form"
import { useAuth } from "@/lib/auth-context"

export default function SignupPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  // Если пользователь уже авторизован, перенаправляем на главную
  useEffect(() => {
    if (user && !isLoading) {
      router.push("/feed")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-sm border border-[#dbdbdb]">
          <div className="mb-6 text-center">
            <h1 className="text-4xl font-bold italic tracking-tighter">RealtyGRAM</h1>
            <p className="mt-4 text-center text-[#737373] text-base">
              Sign up to connect with real estate professionals and showcase your properties.
            </p>
          </div>

          <SignupForm />
        </div>

        <div className="mt-4 rounded-lg bg-white p-6 text-center shadow-sm border border-[#dbdbdb]">
          <p className="text-sm">
            Have an account?{" "}
            <Link href="/login" className="text-[#0095f6] font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}


```

## components\auth\auth-guard.tsx

```typescript
"use client"

import type React from "react"

import { useAuth } from "@/hooks/use-auth"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"

interface AuthGuardProps {
  children: React.ReactNode
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  // Проверяем, является ли текущий путь страницей сброса пароля
  const isResetPasswordPage = pathname?.startsWith("/reset-password/")

  useEffect(() => {
    if (
      !loading &&
      !user &&
      !pathname?.includes("/login") &&
      !pathname?.includes("/signup") &&
      !pathname?.includes("/forgot-password") &&
      !isResetPasswordPage
    ) {
      router.push("/login")
    }
  }, [user, loading, router, pathname, isResetPasswordPage])

  // Показываем содержимое только если пользователь авторизован или это страница сброса пароля
  if (
    loading ||
    (!user &&
      !pathname?.includes("/login") &&
      !pathname?.includes("/signup") &&
      !pathname?.includes("/forgot-password") &&
      !isResetPasswordPage)
  ) {
    return null
  }

  return <>{children}</>
}


```

## components\auth\login-form.tsx

```typescript
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"
import { toast } from "@/hooks/use-toast"

// Обновляем компонент LoginForm с улучшенным дизайном
export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    setLoading(true)
    setError("")

    try {
      await login(email, password)

      toast({
        title: "Login successful",
        description: "You have been successfully logged in.",
      })

      window.location.href = "/feed"
    } catch (err) {
      setError("Invalid email or password")

      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      {error && <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-500 border border-red-200">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 border-[#dbdbdb] rounded-md bg-[#fafafa] px-4 focus:border-gray-400 focus:bg-white"
          />
        </div>

        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 border-[#dbdbdb] rounded-md bg-[#fafafa] px-4 focus:border-gray-400 focus:bg-white"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#0095f6] hover:bg-[#0095f6]/90 text-white font-medium rounded-md"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Logging in...
            </div>
          ) : (
            "Log in"
          )}
        </Button>
      </form>
    </div>
  )
}


```

## components\auth\register-form.tsx

```typescript
"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { register } from "@/lib/auth-service"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export const RegisterForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true)

      const userData = await register(values)

      if (userData?.user?.token) {
        localStorage.setItem("token", userData.user.token)
        router.push("/")
      }
    } catch (error) {
      console.error("Registration error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500">Enter your information to create an account</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="johndoe" disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="john.doe@example.com" type="email" disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="******" type="password" disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Loading..." : "Create an account"}
          </Button>
        </form>
      </Form>
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}


```

## components\auth\signup-form.tsx

```typescript
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


```

## components\chat\chat-conversation.tsx

```typescript
"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send, RefreshCw, X, Download } from "lucide-react"
import { formatImageUrl } from "@/lib/image-utils"
import { useAuth } from "@/lib/auth-context"
import { profileApi } from "@/lib/api"
import { chatService } from "@/lib/chat-service"
import type { Profile, ChatMessage } from "@/lib/types"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ChatConversationProps {
  recipientUsername: string
  onBack?: () => void
  isMobile?: boolean
}

export function ChatConversation({ recipientUsername, onBack, isMobile = false }: ChatConversationProps) {
  const [recipient, setRecipient] = useState<Profile | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [connected, setConnected] = useState(false)
  const [useRestFallback, setUseRestFallback] = useState(true)
  const [fetchingMessages, setFetchingMessages] = useState(false)
  const [accessDenied, setAccessDenied] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { user } = useAuth()
  const [roomId, setRoomId] = useState<string>("")
  const messagesRef = useRef<ChatMessage[]>([]) // Reference to keep track of messages

  // Load recipient profile
  useEffect(() => {
    const loadRecipient = async () => {
      if (!user?.token) return

      setLoading(true)
      try {
        // Пробуем получить профиль по имени пользователя
        try {
          const { profile } = await profileApi.get(recipientUsername, user.token)
          setRecipient(profile)

          // Generate room ID once we have both users
          if (user && profile) {
            const newRoomId = chatService.constructor.generateRoomId(user.id, profile.id)

            // Проверяем, является ли пользователь участником переписки
            if (!chatService.isUserParticipant(user.id, newRoomId)) {
              console.error("Access denied: User is not a participant of this conversation")
              setAccessDenied(true)
              setLoading(false)
              return
            }

            setRoomId(newRoomId)

            // Установим ID текущего пользователя и токен в chatService
            chatService.setCurrentUser(user.id)
            chatService.setToken(user.token)
          }
        } catch (error) {
          console.error("Error loading recipient profile:", error)

          // Если не удалось получить профиль, создаем базовый профиль
          // Это позволит продолжить работу чата даже без полных данных профиля
          const basicProfile: Profile = {
            id: 0, // Временный ID, будет обновлен позже
            username: recipientUsername,
            bio: "",
            img: "",
            following: false,
          }
          setRecipient(basicProfile)

          // Пробуем получить ID пользователя через поиск
          try {
            const response = await fetch(
              `https://api.panchenko.work/users/search?username=${encodeURIComponent(recipientUsername)}`,
              {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                  "Content-Type": "application/json",
                },
              },
            )

            if (response.ok) {
              const data = await response.json()
              if (data.users && data.users.length > 0) {
                const foundUser = data.users.find((u: any) => u.username === recipientUsername)
                if (foundUser) {
                  setRecipient(foundUser)

                  // Generate room ID with the found user
                  const newRoomId = chatService.constructor.generateRoomId(user.id, foundUser.id)

                  // Проверяем, является ли пользователь участником переписки
                  if (!chatService.isUserParticipant(user.id, newRoomId)) {
                    console.error("Access denied: User is not a participant of this conversation")
                    setAccessDenied(true)
                    setLoading(false)
                    return
                  }

                  setRoomId(newRoomId)
                }
              }
            }
          } catch (searchError) {
            console.error("Error searching for user:", searchError)
          }

          // Если не удалось найти пользователя, создаем временный roomId
          if (!roomId) {
            // Используем username как временный ID
            const tempId = recipientUsername.charCodeAt(0) * 1000 + recipientUsername.length
            const newRoomId = chatService.constructor.generateRoomId(user.id, tempId)

            // Проверяем, является ли пользователь участником переписки
            if (!chatService.isUserParticipant(user.id, newRoomId)) {
              console.error("Access denied: User is not a participant of this conversation")
              setAccessDenied(true)
              setLoading(false)
              return
            }

            setRoomId(newRoomId)
          }
        }

        // Установим ID текущего пользователя и токен в chatService
        chatService.setCurrentUser(user.id)
        chatService.setToken(user.token)
      } catch (error) {
        console.error("Error in loadRecipient:", error)
      } finally {
        setLoading(false)
      }
    }

    loadRecipient()
  }, [recipientUsername, user])

  // Connect to chat service and join room
  useEffect(() => {
    if (!user || !roomId || accessDenied) return

    let mounted = true
    const chatInitialized = { current: false }

    const initializeChat = async () => {
      try {
        // Проверка доступа: убедимся, что текущий пользователь является участником переписки
        if (!chatService.isUserParticipant(user.id, roomId)) {
          console.error("Access denied: User is not a participant of this conversation")
          setAccessDenied(true)
          return
        }

        // Connect to chat service
        await chatService.connectToSocket(roomId, (message) => {
          if (!mounted) return

          // Only process messages for this room
          if (message.roomId !== roomId) return

          // Use functional update to ensure atomic state updates
          setMessages((prevMessages) => {
            // Проверяем, есть ли это сообщение в списке ожидающих
            const pendingIndex = prevMessages.findIndex(
              (m) =>
                // Проверяем по clientMessageId
                (message.clientMessageId && m.clientMessageId === message.clientMessageId) ||
                // Или по содержимому и отправителю/получателю
                (m.content === message.content &&
                  m.senderId === message.senderId &&
                  m.recipientId === message.recipientId &&
                  m.pending === true),
            )

            // Если нашли ожидающее сообщение, обновляем его статус
            if (pendingIndex >= 0) {
              const newMessages = [...prevMessages]
              newMessages[pendingIndex] = {
                ...message,
                pending: false,
              }
              messagesRef.current = newMessages

              // Сохраняем в localStorage
              chatService.saveMessagesToLocalStorage(roomId, newMessages)

              return newMessages
            }

            // Проверяем на дубликаты
            const isDuplicate = prevMessages.some((m) => {
              // Проверяем по ID
              if (message.id && m.id === message.id) return true

              // Проверяем по clientMessageId
              if (message.clientMessageId && m.clientMessageId === message.clientMessageId) return true

              // Проверяем по содержимому, отправителю/получателю и примерному времени
              if (
                m.content === message.content &&
                m.senderId === message.senderId &&
                m.recipientId === message.recipientId
              ) {
                const timeDiff = Math.abs(new Date(m.createdAt).getTime() - new Date(message.createdAt).getTime())
                if (timeDiff < 5000) return true
              }

              return false
            })

            // Если дубликат, не добавляем
            if (isDuplicate) {
              return prevMessages
            }

            // Добавляем новое сообщение
            const newMessages = [...prevMessages, message]
            messagesRef.current = newMessages

            // Сохраняем в localStorage
            chatService.saveMessagesToLocalStorage(roomId, newMessages)

            return newMessages
          })
        })

        if (!mounted) return

        // Set connection status
        setConnected(true)

        // Join the room
        chatInitialized.current = true

        // Explicitly request message history from the new REST API endpoint
        // Fetch messages from the API
        const apiMessages = await chatService.fetchMessagesFromAPI(roomId)

        if (apiMessages && apiMessages.length > 0) {
          // Нормализуем сообщения
          const normalizedMessages = apiMessages.map((message) => {
            // Проверяем и исправляем senderId и recipientId
            if (!message.senderId && message.sender) {
              message.senderId = message.sender.id
            }
            if (!message.recipientId && message.recipient) {
              message.recipientId = message.recipient.id
            }

            // Убеждаемся, что roomId установлен
            return {
              ...message,
              roomId: roomId,
              // Преобразуем senderId и recipientId в числа
              senderId: Number(message.senderId),
              recipientId: Number(message.recipientId),
            }
          })

          // Удаляем дубликаты
          const uniqueMessages = removeDuplicates(normalizedMessages)
          setMessages(uniqueMessages)
          messagesRef.current = uniqueMessages

          // Сохраняем в localStorage
          chatService.saveMessagesToLocalStorage(roomId, uniqueMessages)
        } else {
          // If no messages from API, try local storage
          const localMessages = chatService.getMessagesFromLocalStorage(roomId)

          if (localMessages.length > 0) {
            // Нормализуем сообщения из localStorage
            const normalizedMessages = localMessages.map((message) => {
              return {
                ...message,
                roomId: roomId,
                // Преобразуем senderId и recipientId в числа
                senderId: Number(message.senderId),
                recipientId: Number(message.recipientId),
              }
            })

            const uniqueMessages = removeDuplicates(normalizedMessages)
            setMessages(uniqueMessages)
            messagesRef.current = uniqueMessages
          } else {
          }
        }
      } catch (error) {
        console.error("Error initializing chat:", error)
        setConnected(false)

        // If failed to initialize chat, try to get messages from localStorage
        const localMessages = chatService.getMessagesFromLocalStorage(roomId)

        if (localMessages.length > 0) {
          setMessages(localMessages)
          messagesRef.current = localMessages
        }
      }
    }

    // Initialize chat immediately
    initializeChat()

    // Clean up every 5 minutes to prevent memory leaks
    const cleanupInterval = setInterval(() => {}, 5 * 60 * 1000)

    return () => {
      mounted = false
      chatService.disconnectFromSocket()
      clearInterval(cleanupInterval)
    }
  }, [user, recipient, roomId, accessDenied])

  // Helper function to remove duplicate messages
  const removeDuplicates = useCallback((messages: ChatMessage[]): ChatMessage[] => {
    const uniqueMessages: ChatMessage[] = []
    const messageMap = new Map<string, boolean>()

    messages.forEach((message) => {
      // Create a unique key for each message
      let messageKey: string

      if (message.clientMessageId) {
        messageKey = `client_${message.clientMessageId}`
      } else if (message.id) {
        messageKey = `id_${message.id}`
      } else {
        messageKey = `content_${message.senderId}_${message.recipientId}_${message.content}_${message.createdAt}`
      }

      // If we haven't seen this message before, add it
      if (!messageMap.has(messageKey)) {
        messageMap.set(messageKey, true)
        uniqueMessages.push(message)
      }
    })

    // Sort by date
    return uniqueMessages.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
  }, [])

  // Scroll to bottom on initial load
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!user || !recipient || !newMessage.trim() || !roomId) return

    const messageContent = newMessage.trim()
    setNewMessage("")
    setSending(true)

    try {
      // Create a unique client ID for the message
      const clientMessageId = `client_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

      // Create a temporary message to show immediately
      const tempMessage: ChatMessage = {
        id: 0, // Temporary ID
        content: messageContent,
        senderId: user.id,
        recipientId: recipient.id,
        roomId: roomId,
        createdAt: new Date().toISOString(),
        read: false,
        clientMessageId: clientMessageId,
        pending: true,
      }

      // Add the temporary message to the UI
      setMessages((prev) => {
        const newMessages = [...prev, tempMessage]
        messagesRef.current = newMessages

        // Save to localStorage
        chatService.saveMessagesToLocalStorage(roomId, newMessages)

        return newMessages
      })

      // Scroll to the new message
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)

      // Send the message to the server
      chatService.sendMessage({
        roomId,
        senderId: user.id,
        recipientId: recipient.id,
        content: messageContent,
        clientMessageId: clientMessageId,
      })

      // Автоматически обновляем статус сообщения через 3 секунды, если не получили подтверждение
      setTimeout(() => {
        setMessages((prevMessages) => {
          const pendingIndex = prevMessages.findIndex(
            (m) => m.clientMessageId === clientMessageId && m.pending === true,
          )

          if (pendingIndex >= 0) {
            const newMessages = [...prevMessages]
            newMessages[pendingIndex] = {
              ...newMessages[pendingIndex],
              pending: false,
            }

            // Сохраняем обновленные сообщения в localStorage
            chatService.saveMessagesToLocalStorage(roomId, newMessages)

            return newMessages
          }

          return prevMessages
        })
      }, 3000)

      // Focus the input field
      inputRef.current?.focus()
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error sending message",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSending(false)
    }
  }

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      router.push("/messages")
    }
  }

  const handleViewProfile = () => {
    if (recipient) {
      router.push(`/profile/${recipient.username}`)
    }
  }

  // Принудительное обновление сообщений из API
  const refreshMessages = async () => {
    if (!roomId) return

    setFetchingMessages(true)
    try {
      // Запрашиваем сообщения напрямую из API
      const apiMessages = await chatService.fetchMessagesFromAPI(roomId)

      if (apiMessages && apiMessages.length > 0) {
        // Нормализуем сообщения
        const normalizedMessages = apiMessages.map((message) => ({
          ...message,
          roomId: roomId,
        }))

        // Обновляем состояние
        const uniqueMessages = removeDuplicates(normalizedMessages)
        setMessages(uniqueMessages)
        messagesRef.current = uniqueMessages

        // Сохраняем в localStorage
        chatService.saveMessagesToLocalStorage(roomId, uniqueMessages)

        toast({
          title: "Messages refreshed",
          description: `Retrieved ${uniqueMessages.length} messages from the server`,
        })
      } else {
        toast({
          title: "No messages found",
          description: "No messages found in the database",
        })
      }
    } catch (error) {
      console.error("Error refreshing messages:", error)
      toast({
        title: "Error refreshing messages",
        description: "Failed to refresh messages from the server",
        variant: "destructive",
      })
    } finally {
      setFetchingMessages(false)
    }
  }

  // Toggle REST API fallback
  const toggleRestFallback = () => {
    const newValue = !useRestFallback
    setUseRestFallback(newValue)

    toast({
      title: newValue ? "REST API enabled" : "REST API disabled",
      description: newValue
        ? "Messages will be sent via REST API if socket is unavailable"
        : "Messages will only be sent via socket",
    })
  }

  // Очистка истории сообщений
  const clearChatHistory = () => {
    chatService.clearMessagesToLocalStorage(roomId)
    setMessages([])
    toast({
      title: "Chat history cleared",
      description: "All message history has been cleared from localStorage",
    })
  }

  // Show loading state
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
      </div>
    )
  }

  // Show access denied message
  if (accessDenied) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-4">
        <h3 className="text-lg font-semibold mb-2">Access Denied</h3>
        <p className="text-[#737373] text-center mb-4">You don't have permission to view this conversation.</p>
        <Button onClick={handleBack}>Back to Messages</Button>
      </div>
    )
  }

  // Show error if recipient not found
  if (!recipient) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-4">
        <h3 className="text-lg font-semibold mb-2">User not found</h3>
        <p className="text-[#737373] text-center mb-4">
          The user you're trying to message doesn't exist or is not available.
        </p>
        <Button onClick={handleBack}>Back to Messages</Button>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-[#dbdbdb] flex items-center justify-between">
        <div className="flex items-center">
          {isMobile && (
            <Button variant="ghost" size="icon" className="mr-2" onClick={handleBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={formatImageUrl(recipient.img)} alt={recipient.username} />
            <AvatarFallback>{recipient.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold">{recipient.username}</h3>
            <p className="text-xs text-[#737373]">{recipient.bio || `@${recipient.username}`}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={refreshMessages} disabled={fetchingMessages}>
                  {fetchingMessages ? <RefreshCw className="h-5 w-5 animate-spin" /> : <Download className="h-5 w-5" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh Messages from Server</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={clearChatHistory}>
                  <X className="h-5 w-5 text-red-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clear Chat History</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Connection status */}
      {!connected && (
        <div className="bg-yellow-50 p-2 text-center text-sm text-yellow-700">
          Working in offline mode. Messages will be sent when connection is restored.
        </div>
      )}

      {/* Fetching messages indicator */}
      {fetchingMessages && (
        <div className="bg-blue-50 p-2 text-center text-sm text-blue-700 flex items-center justify-center">
          <RefreshCw className="h-4 w-4 mr-1 animate-spin" />
          Fetching messages from server...
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-4">
            <Avatar className="h-16 w-16 mb-4">
              <AvatarImage src={formatImageUrl(recipient.img)} alt={recipient.username} />
              <AvatarFallback>{recipient.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-lg mb-1">{recipient.username}</h3>
            <p className="text-[#737373] mb-4">{recipient.bio || `@${recipient.username}`}</p>
            <p className="text-sm text-[#737373] mb-4">
              This is the beginning of your conversation. Discuss property details, schedule viewings, or negotiate
              terms professionally.
            </p>
            <p className="text-sm font-medium">Type a message below to start chatting</p>
          </div>
        ) : (
          messages.map((message, index) => {
            // Определяем, является ли текущий пользователь отправителем сообщения
            // Используем явное сравнение ID и сохраняем результат в переменную
            const isCurrentUserSender = user && Number(message.senderId) === Number(user.id)

            // Добавим логирование для отладки
            if (index === 0) {
            }

            return (
              <div
                key={`${message.clientMessageId || message.id || index}-${message.createdAt}`}
                className={cn("flex", isCurrentUserSender ? "justify-end" : "justify-start")}
              >
                {!isCurrentUserSender && (
                  <Avatar className="h-8 w-8 mr-2 self-end mb-1">
                    <AvatarImage src={formatImageUrl(recipient.img)} alt={recipient.username} />
                    <AvatarFallback>{recipient.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                )}
                <div className="max-w-[70%]">
                  <div
                    className={cn(
                      "p-3 rounded-2xl text-sm",
                      isCurrentUserSender ? "bg-[#4d00ff] text-white" : "bg-[#efefef]",
                      message.pending && "opacity-70",
                    )}
                  >
                    <p>{message.content}</p>
                  </div>
                  <div className={cn("text-xs text-[#737373] mt-1", isCurrentUserSender ? "text-right" : "")}>
                    {new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    {message.pending && " (sending...)"}
                  </div>
                </div>
              </div>
            )
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-[#dbdbdb]">
        <div className="flex items-center rounded-full border border-[#dbdbdb] bg-white px-4 py-2">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
          />
          <Button
            type="submit"
            variant="ghost"
            size="sm"
            className={cn(
              "text-[#0095f6] font-medium",
              (!newMessage.trim() || sending) && "opacity-50 cursor-not-allowed",
            )}
            disabled={!newMessage.trim() || sending}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}


```

## components\chat\chat-list.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, RefreshCw } from "lucide-react"
import { formatImageUrl } from "@/lib/image-utils"
import { useAuth } from "@/lib/auth-context"
import { profileApi } from "@/lib/api"
import { chatService } from "@/lib/chat-service"
import type { Profile, ChatMessage } from "@/lib/types"

interface ChatListProps {
  selectedUserId?: string
  onSelectUser: (userId: string) => void
}

interface ChatListItem {
  profile: Profile
  lastMessage?: ChatMessage
  unreadCount: number
}

export function ChatList({ selectedUserId, onSelectUser }: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [recentChats, setRecentChats] = useState<ChatListItem[]>([])
  const [searchResults, setSearchResults] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { user } = useAuth()

  // Функция для загрузки чатов напрямую с сервера
  const loadChatsFromServer = async () => {
    if (!user?.token) return

    setRefreshing(true)
    setError(null)

    try {
      // Прямой запрос к API для получения списка чатов
      const response = await fetch("https://api.panchenko.work/chat/conversations", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      // Обработка полученных данных
      const chatItems: ChatListItem[] = []

      // Если API вернул массив чатов
      if (Array.isArray(data.conversations)) {
        for (const conversation of data.conversations) {
          try {
            // Определяем ID собеседника (не текущего пользователя)
            const otherUserId =
              conversation.otherUser ||
              (conversation.participants && conversation.participants.find((id: number) => id !== user.id))

            if (!otherUserId) {
              console.error("Could not determine other user ID for conversation:", conversation)
              continue
            }

            // Проверяем, является ли текущий пользователь участником этого чата
            const roomId =
              conversation.roomId || `room_${Math.min(user.id, otherUserId)}_${Math.max(user.id, otherUserId)}`

            // Проверка участия пользователя в чате
            if (!chatService.isUserParticipant(user.id, roomId)) {
              continue
            }

            // Создаем профиль собеседника из имеющихся данных
            const profile: Profile = {
              id: otherUserId,
              username: conversation.otherUsername || `user_${otherUserId}`,
              bio: "",
              img: "",
              following: false,
            }

            // Создаем элемент чата
            chatItems.push({
              profile,
              lastMessage: conversation.lastMessage,
              unreadCount: conversation.unreadCount || 0,
            })
          } catch (error) {
            console.error(`Error processing conversation:`, error)
          }
        }
      }

      // Если получили чаты, обновляем состояние
      if (chatItems.length > 0) {
        setRecentChats(chatItems)
      } else {
        // Если чатов нет, пробуем получить через другой метод
        await loadChatsAlternative()
      }
    } catch (error) {
      console.error("Error loading chats from server:", error)
      setError("Не удалось загрузить список чатов. Пожалуйста, попробуйте позже.")
      // В случае ошибки пробуем альтернативный метод
      await loadChatsAlternative()
    } finally {
      setRefreshing(false)
      setLoading(false)
    }
  }

  // Альтернативный метод загрузки чатов
  const loadChatsAlternative = async () => {
    if (!user?.token) return

    try {
      // Используем только доступный эндпоинт
      const response = await fetch("https://api.panchenko.work/chat/messages", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        // Если эндпоинт недоступен, сразу переходим к добавлению примера чата
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      // Группируем сообщения по собеседникам
      const messagesByUser = new Map<number, { messages: ChatMessage[]; profile?: any }>()

      // Проверяем структуру данных - может быть массив напрямую или в свойстве messages
      const messages = Array.isArray(data) ? data : data.messages || []

      if (messages.length > 0) {
        for (const message of messages) {
          // Проверяем, что у сообщения есть необходимые поля
          let senderId = message.senderId
          let recipientId = message.recipientId
          let senderProfile = null
          let recipientProfile = null

          // Извлекаем данные из объектов sender и recipient, если они есть
          if (!senderId && message.sender) {
            senderId = message.sender.id
            senderProfile = message.sender
          }
          if (!recipientId && message.recipient) {
            recipientId = message.recipient.id
            recipientProfile = message.recipient
          }

          // Пропускаем сообщения без senderId или recipientId
          if (!senderId || !recipientId) {
            console.warn("Skipping message without sender or recipient:", message)
            continue
          }

          // Проверяем, является ли текущий пользователь участником этого сообщения
          if (Number(senderId) !== user.id && Number(recipientId) !== user.id) {
            continue
          }

          // Определяем ID собеседника (не текущего пользователя)
          const otherUserId = Number(senderId) === user.id ? Number(recipientId) : Number(senderId)
          const otherProfile = Number(senderId) === user.id ? recipientProfile : senderProfile

          if (!messagesByUser.has(otherUserId)) {
            messagesByUser.set(otherUserId, {
              messages: [],
              profile: otherProfile,
            })
          }

          messagesByUser.get(otherUserId)!.messages.push({
            ...message,
            senderId: Number(senderId),
            recipientId: Number(recipientId),
          })
        }
      }

      // Создаем элементы чата для каждого собеседника
      const chatItems: ChatListItem[] = []

      for (const [otherUserId, userData] of messagesByUser.entries()) {
        try {
          // Создаем профиль собеседника из имеющихся данных или из сообщений
          let profile: Profile

          if (userData.profile) {
            // Если у нас есть данные профиля из сообщений, используем их
            profile = {
              id: otherUserId,
              username: userData.profile.username || `user_${otherUserId}`,
              bio: userData.profile.bio || "",
              img: userData.profile.img || "",
              following: false,
            }
          } else {
            // Если данных профиля нет, создаем базовый профиль
            profile = {
              id: otherUserId,
              username: `user_${otherUserId}`,
              bio: "",
              img: "",
              following: false,
            }
          }

          // Сортируем сообщения по дате (сначала новые)
          const sortedMessages = [...userData.messages].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )

          // Получаем последнее сообщение
          const lastMessage = sortedMessages[0]

          // Считаем непрочитанные сообщения
          const unreadCount = sortedMessages.filter((msg) => !msg.read && Number(msg.senderId) !== user.id).length

          // Добавляем чат в список
          chatItems.push({
            profile,
            lastMessage,
            unreadCount,
          })
        } catch (error) {
          console.error(`Error processing user ${otherUserId}:`, error)
        }
      }

      // Сортируем чаты по дате последнего сообщения
      chatItems.sort((a, b) => {
        if (!a.lastMessage && !b.lastMessage) return 0
        if (!a.lastMessage) return 1
        if (!b.lastMessage) return -1
        return new Date(b.lastMessage.createdAt).getTime() - new Date(a.lastMessage.createdAt).getTime()
      })

      if (chatItems.length > 0) {
        setRecentChats(chatItems)
      } else {
        // Если и этот метод не дал результатов, добавляем пример чата
        addSampleChat()
      }
    } catch (error) {
      console.error("Error loading chats alternative:", error)
      setError("Не удалось загрузить список чатов. Пожалуйста, попробуйте позже.")
      // В случае ошибки добавляем пример чата
      addSampleChat()
    }
  }

  // Функция для добавления примера чата
  const addSampleChat = () => {
    if (!user) return

    const sampleProfile: Profile = {
      id: 101,
      username: "sashaa",
      email: "sasha@example.com",
      bio: "Welcome to ICMGRAM! Send me a message to start chatting.",
      img: "/placeholder.svg?height=32&width=32",
      following: false,
    }

    setRecentChats([
      {
        profile: sampleProfile,
        unreadCount: 1,
        lastMessage: {
          id: 1,
          content: "Welcome to ICMGRAM! Click here to start a conversation.",
          senderId: sampleProfile.id,
          recipientId: user.id,
          roomId: `room_${Math.min(user.id, sampleProfile.id)}_${Math.max(user.id, sampleProfile.id)}`,
          createdAt: new Date().toISOString(),
          read: false,
        },
      },
    ])
  }

  // Загружаем чаты при монтировании компонента
  useEffect(() => {
    if (user?.token) {
      // Устанавливаем текущего пользователя в chatService
      chatService.setCurrentUser(user.id)
      chatService.setToken(user.token)

      loadChatsFromServer()
    } else {
      setLoading(false)
    }

    // Слушаем новые сообщения для обновления списка чатов
    const unsubscribeMessage = chatService.onMessage(async (message) => {
      if (!user?.token) return

      try {
        // Проверяем, является ли текущий пользователь участником этого сообщения
        if (message.senderId !== user.id && message.recipientId !== user.id) {
          return
        }

        // Получаем ID собеседника
        const otherUserId = message.senderId === user.id ? message.recipientId : message.senderId

        // Создаем базовый профиль собеседника
        const profile: Profile = {
          id: otherUserId,
          username: `user_${otherUserId}`,
          bio: "",
          img: "",
          following: false,
        }

        // Обновляем список чатов
        setRecentChats((prevChats) => {
          // Ищем существующий чат
          const existingChatIndex = prevChats.findIndex((chat) => chat.profile.id === profile.id)

          // Создаем новый элемент чата
          const newChatItem: ChatListItem = {
            profile,
            lastMessage: message,
            unreadCount: message.senderId !== user.id ? 1 : 0,
          }

          // Если чат существует, обновляем его
          if (existingChatIndex !== -1) {
            const updatedChats = [...prevChats]
            const existingChat = updatedChats[existingChatIndex]

            // Обновляем последнее сообщение и счетчик непрочитанных
            updatedChats[existingChatIndex] = {
              ...existingChat,
              lastMessage: message,
              unreadCount: existingChat.unreadCount + (message.senderId !== user.id ? 1 : 0),
            }

            // Перемещаем чат наверх
            const chatToMove = updatedChats[existingChatIndex]
            updatedChats.splice(existingChatIndex, 1)
            updatedChats.unshift(chatToMove)

            return updatedChats
          }

          // Если чата нет, добавляем его в начало списка
          return [newChatItem, ...prevChats]
        })
      } catch (error) {
        console.error("Error updating chat list:", error)
      }
    })

    return () => {
      unsubscribeMessage()
    }
  }, [user])

  // Search for users
  useEffect(() => {
    if (!searchQuery.trim() || !user?.token) {
      setSearchResults([])
      return
    }

    const searchUsers = async () => {
      setLoading(true)
      try {
        // Пробуем найти пользователя по имени пользователя
        try {
          const { profile } = await profileApi.get(searchQuery, user.token)
          setSearchResults([profile])
        } catch (error) {
          // Если не удалось найти по имени пользователя, пробуем поиск
          const response = await fetch(
            `https://api.panchenko.work/users/search?username=${encodeURIComponent(searchQuery)}`,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
              },
            },
          )

          if (response.ok) {
            const data = await response.json()
            setSearchResults(data.users || [])
          } else {
            setSearchResults([])
          }
        }
      } catch (error) {
        console.error("Error searching users:", error)
        setSearchResults([])
      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(() => {
      searchUsers()
    }, 500)

    return () => clearTimeout(debounce)
  }, [searchQuery, user])

  const handleSelectUser = (profile: Profile) => {
    // Add to recent chats if not already there
    if (!recentChats.some((chat) => chat.profile.id === profile.id)) {
      const newChatItem: ChatListItem = {
        profile,
        unreadCount: 0,
      }

      const updatedChats = [newChatItem, ...recentChats].slice(0, 10) // Keep only 10 most recent
      setRecentChats(updatedChats)
    }

    // Use the username for navigation
    onSelectUser(profile.username)
  }

  const handleNewChat = () => {
    router.push("/messages/new")
  }

  // Обработчик для принудительного обновления списка чатов
  const handleRefresh = () => {
    loadChatsFromServer()
  }

  return (
    <div className="h-full flex flex-col border-r border-[#dbdbdb]">
      {/* Header */}
      <div className="p-4 border-b border-[#dbdbdb] flex items-center justify-between">
        <h2 className="font-bold text-lg">{user?.username || "Messages"}</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRefresh}
            disabled={refreshing}
            className="text-gray-500 hover:text-black"
          >
            <RefreshCw className={`h-5 w-5 ${refreshing ? "animate-spin" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleNewChat}>
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-[#dbdbdb]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-9 bg-[#efefef] border-none"
          />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="p-4 bg-red-50 text-red-600 text-sm">
          {error}
          <Button variant="link" className="p-0 h-auto text-red-600 underline ml-2" onClick={handleRefresh}>
            Попробовать снова
          </Button>
        </div>
      )}

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="flex justify-center items-center h-20">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : searchQuery ? (
          // Search results
          searchResults.length > 0 ? (
            <div>
              {searchResults.map((profile) => (
                <div
                  key={profile.id}
                  className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                    selectedUserId === profile.username ? "bg-gray-100" : ""
                  }`}
                  onClick={() => handleSelectUser(profile)}
                >
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                    <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{profile.username}</p>
                    <p className="text-sm text-[#737373]">{profile.fullName || profile.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-[#737373]">No users found</div>
          )
        ) : recentChats.length > 0 ? (
          <div>
            {recentChats.map((chatItem) => (
              <div
                key={chatItem.profile.id}
                className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                  selectedUserId === chatItem.profile.username ? "bg-gray-100" : ""
                }`}
                onClick={() => {
                  handleSelectUser(chatItem.profile)
                }}
              >
                <Avatar className="h-12 w-12 mr-3 relative">
                  <AvatarImage src={formatImageUrl(chatItem.profile.img)} alt={chatItem.profile.username} />
                  <AvatarFallback>{chatItem.profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>

                  {/* Unread indicator */}
                  {chatItem.unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {chatItem.unreadCount}
                    </div>
                  )}
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{chatItem.profile.username}</p>
                    {chatItem.lastMessage && (
                      <span className="text-xs text-[#737373]">
                        {new Date(chatItem.lastMessage.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#737373] truncate">
                    {chatItem.lastMessage?.content || "Start a conversation"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-[#737373]">
            <p>No recent conversations</p>
            <Button variant="link" className="text-[#0095f6] p-0 h-auto mt-1" onClick={handleNewChat}>
              Start a new conversation
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}


```

## components\error-boundary.tsx

```typescript
"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback
    }

    return this.props.children
  }
}


```

## components\feed-post.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { Post as PostType } from "@/lib/types"
import { postApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"
import { formatImageUrl } from "@/lib/image-utils"

interface FeedPostProps {
  post: PostType
}

export function FeedPost({ post }: FeedPostProps) {
  const [liked, setLiked] = useState(post.favorited === true)
  const [likesCount, setLikesCount] = useState(post.favoritesCount)
  const [commentsCount, setCommentsCount] = useState(post.comments?.length || 0)
  const { user } = useAuth()

  useEffect(() => {
    const fetchPostStats = async () => {
      if (!user?.token) return

      try {
        const stats = await postApi.getStats(post.slug, user.token)
        setLikesCount(stats.likes)
        setCommentsCount(stats.comments)
      } catch (error) {
        console.error(`Error fetching post stats for ${post.slug}:`, error)
        const commentsCount = Array.isArray(post.comments) ? post.comments.length : 0
        setLikesCount(post.favoritesCount)
        setCommentsCount(commentsCount)
      }
    }

    fetchPostStats()
    setLiked(post.favorited === true)
  }, [post.slug, post.favoritesCount, post.comments, post.favorited, user])

  const handleLike = async () => {
    if (!user?.token) return

    try {
      setLiked(!liked)
      const newLikesCount = liked ? likesCount - 1 : likesCount + 1
      setLikesCount(newLikesCount)

      if (liked) {
        await postApi.unfavorite(post.slug, user.token)
      } else {
        await postApi.favorite(post.slug, user.token)
      }

      const stats = await postApi.getStats(post.slug, user.token)
      setLikesCount(stats.likes)
      setCommentsCount(stats.comments)
    } catch (err) {
      console.error("Error toggling like:", err)
      setLiked(liked)
      setLikesCount(likesCount)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 7) {
      return `${diffDays}d`
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)} wek`
    } else if (diffDays < 365) {
      return `${Math.floor(diffDays / 30)}mo`
    } else {
      return `${Math.floor(diffDays / 365)}y`
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return new Intl.NumberFormat().format(num)
  }

  return (
    <article className="mb-6 border border-[#dbdbdb] rounded-sm bg-white">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <Link href={`/profile/${post.author.username}`} className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={formatImageUrl(post.author.img)} alt={post.author.username} />
              <AvatarFallback>{post.author.username.slice(0, 2).toUpperCase()} </AvatarFallback>
            </Avatar>
            <div className="flex items-center">
              <span className="font-medium text-sm">{post.author.username}</span>
              <span className="text-[#737373] text-sm ml-1">• {formatDate(post.createdAt)}</span>
            </div>
          </Link>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-[#0095f6] hover:text-[#0095f6] hover:bg-transparent px-0 text-sm"
        >
          follow
        </Button>
      </div>

      <div className="relative aspect-square w-full">
        <Link href={`/p/${post.slug}`}>
          <Image
            src={formatImageUrl(post.img) || "/placeholder.svg"}
            alt={post.title || "Post image"}
            fill
            className="object-cover"
            priority
          />
        </Link>
      </div>

      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-4">
          <button onClick={handleLike} className="focus:outline-none">
            <Heart className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : ""}`} />
          </button>
          <Link href={`/p/${post.slug}`}>
            <MessageCircle className="h-6 w-6" />
          </Link>
          <button className="focus:outline-none">
            <Send className="h-6 w-6" />
          </button>
        </div>
        <button className="focus:outline-none">
          <Bookmark className="h-6 w-6" />
        </button>
      </div>

      <div className="px-3 pb-1">
        <p className="font-semibold text-sm">{formatNumber(likesCount)} likes</p>
      </div>

      <div className="px-3 pb-1">
        <p className="text-sm">
          <Link href={`/profile/${post.author.username}`} className="font-semibold mr-1">
            {post.author.username}
          </Link>
          {post.content}
        </p>
      </div>

      <div className="px-3 pb-1">
        <Link href={`/p/${post.slug}`} className="text-sm text-[#737373]">
          {commentsCount > 0
            ? `View all comments (${formatNumber(commentsCount)})`
            : post.comments && post.comments.length > 0
              ? `View all comments (${post.comments.length})`
              : "Add a comment"}
        </Link>
      </div>

      {post.comments && post.comments.length > 0 ? (
        <div className="px-3 pb-3">
          <p className="text-sm">
            <Link
              href={`/profile/${post.comments[post.comments.length - 1].author.username}`}
              className="font-semibold mr-1"
            >
              {post.comments[post.comments.length - 1].author.username}
            </Link>
            <span className="text-[#737373]">
              {post.comments[post.comments.length - 1].body.length > 50
                ? `${post.comments[post.comments.length - 1].body.substring(0, 50)}...`
                : post.comments[post.comments.length - 1].body}
            </span>
          </p>
        </div>
      ) : null}
    </article>
  )
}


```

## components\feed.tsx

```typescript
// Удаляем неиспользуемый компонент, так как вместо него используется FeedPost


```

## components\grid-post.tsx

```typescript
"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { Post } from "@/lib/types"
import { formatImageUrl } from "@/lib/image-utils"
import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { postApi } from "@/lib/api/post-api"
import type React from "react"

interface GridPostProps {
  post: Post
  currentUserId?: number
}

export function GridPost({ post, currentUserId }: GridPostProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 7) {
      return `${diffDays}d`
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)} wek`
    } else if (diffDays < 365) {
      return `${Math.floor(diffDays / 30)}mo`
    } else {
      return `${Math.floor(diffDays / 365)}y`
    }
  }

  const [liked, setLiked] = useState(!!post.favorited)
  const [likesCount, setLikesCount] = useState(post.favoritesCount)
  const { user } = useAuth()

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!user?.token) return

    try {
      setLiked(!liked)
      const newLikesCount = liked ? likesCount - 1 : likesCount + 1
      setLikesCount(newLikesCount)

      if (liked) {
        await postApi.unfavorite(post.slug, user.token)
      } else {
        await postApi.favorite(post.slug, user.token)
      }
    } catch (err) {
      console.error("Error toggling like:", err)
      setLiked(liked)
      setLikesCount(likesCount)
    }
  }

  return (
    <div className="border border-[#dbdbdb] rounded-sm overflow-hidden">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <Link href={`/profile/${post.author.username}`} className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={formatImageUrl(post.author.img)} alt={post.author.username} />
              <AvatarFallback>{post.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex items-center">
              <span className="font-medium text-sm mr-2">{post.author.username}</span>
              <span className="text-xs text-[#737373]">• {formatDate(post.createdAt)}</span>
            </div>
          </Link>
        </div>

        {currentUserId && currentUserId !== post.author.id && (
          <Button
            variant="ghost"
            size="sm"
            className="text-[#0095f6] hover:text-[#0095f6] hover:bg-transparent px-2 text-xs"
          >
            {post.author.following ? "Following" : "Follow"}
          </Button>
        )}
      </div>

      <Link href={`/p/${post.slug}`} className="block">
        <div className="relative aspect-square w-full">
          <Image
            src={formatImageUrl(post.img) || "/placeholder.svg"}
            alt={post.title || "Post image"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 hover:opacity-100">
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-1 fill-white" />
                <span>{formatNumber(post.favoritesCount)}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-1" />
                <span>{formatNumber(post.comments?.length || 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-3">
        <div className="flex items-center space-x-2 mb-2">
          <button className="flex items-center" onClick={handleLike}>
            <Heart className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : ""}`} />
          </button>
          <button className="flex items-center">
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-1">
          <p className="font-semibold text-sm">{formatNumber(likesCount)} likes</p>
        </div>

        <div className="mb-1">
          <span className="font-semibold text-sm">{post.author.username}</span>{" "}
          <span className="text-sm">
            {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
          </span>
        </div>

        {post.comments && post.comments.length > 0 && (
          <Link href={`/p/${post.slug}`} className="block text-xs text-[#737373]">
            View all {post.comments.length} comments
          </Link>
        )}
      </div>
    </div>
  )
}


```

## components\layout\notification-dropdown.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/lib/auth-context"
import { notificationApi, profileApi } from "@/lib/api"
import { formatDistanceToNow } from "date-fns"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Notification, Profile } from "@/lib/types"
import { formatImageUrl } from "@/lib/image-utils"

// Интерфейс для расширенного уведомления с данными пользователя
interface EnhancedNotification extends Notification {
  userProfile?: Profile
}

export function NotificationDropdown() {
  const [notifications, setNotifications] = useState<EnhancedNotification[]>([])
  const [loading, setLoading] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const { user } = useAuth()
  const router = useRouter()

  // Fetch notifications
  const fetchNotifications = async () => {
    if (!user?.token) return

    setLoading(true)
    try {
      const notificationsList = await notificationApi.list(user.token)

      // Получаем расширенные уведомления с данными пользователей
      const enhancedNotifications = await Promise.all(
        notificationsList.map(async (notification) => {
          const username = extractUsernameFromMessage(notification.message)
          let userProfile = undefined

          // Пытаемся получить профиль пользователя
          try {
            if (username && user?.token) {
              const { profile } = await profileApi.get(username, user.token)
              userProfile = profile
            }
          } catch (error) {
            console.warn(`Could not fetch profile for ${username}:`, error)
          }

          return {
            ...notification,
            userProfile,
          }
        }),
      )

      setNotifications(enhancedNotifications)

      // Count unread notifications
      const unread = notificationsList.filter((notification: Notification) => !notification.isRead).length
      setUnreadCount(unread)
    } catch (error) {
      console.error("Error fetching notifications:", error)
      // Если API недоступно, используем моковые данные как запасной вариант
      const mockNotifications = [
        {
          id: 1,
          type: "like",
          message: "sashaa liked your photo.",
          createdAt: new Date().toISOString(),
          isRead: false,
          initiator: {
            id: 101,
            username: "sashaa",
            img: "/placeholder.svg?height=32&width=32",
          },
        },
        {
          id: 2,
          type: "comment",
          message: "sashaa commented on your photo.",
          createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          isRead: true,
          initiator: {
            id: 101,
            username: "sashaa",
            img: "/placeholder.svg?height=32&width=32",
          },
        },
      ]
      setNotifications(mockNotifications)
      setUnreadCount(mockNotifications.filter((n) => !n.isRead).length)
    } finally {
      setLoading(false)
    }
  }

  // Mark notification as read
  const markAsRead = async (id: number) => {
    if (!user?.token) return

    try {
      await notificationApi.markAsRead(id, user.token)
      // Update local state
      setNotifications(
        notifications.map((notification) =>
          notification.id === id ? { ...notification, isRead: true } : notification,
        ),
      )

      // Update unread count
      setUnreadCount((prev) => Math.max(0, prev - 1))
    } catch (error) {
      console.error("Error marking notification as read:", error)
    }
  }

  // Handle notification click
  const handleNotificationClick = async (notification: Notification) => {
    // Mark as read
    if (!notification.isRead) {
      await markAsRead(notification.id)
    }

    // Navigate to user profile
    if (notification.initiator) {
      router.push(`/profile/${notification.initiator.username}`)
    }
  }

  // Fetch notifications on mount and when user changes
  useEffect(() => {
    if (user?.token) {
      fetchNotifications()

      // Set up polling for new notifications
      const interval = setInterval(fetchNotifications, 60000) // Every minute

      return () => clearInterval(interval)
    }
  }, [user])

  // Функция для извлечения имени пользователя из сообщения уведомления
  const extractUsernameFromMessage = (message: string): string => {
    const match = message.match(/^(\w+)/)
    return match ? match[1] : ""
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="p-2 font-semibold border-b">Notifications</div>
        <div className="max-h-[400px] overflow-y-auto">
          {loading && notifications.length === 0 ? (
            <div className="p-4 text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black mx-auto"></div>
            </div>
          ) : notifications.length > 0 ? (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`p-3 cursor-pointer ${!notification.isRead ? "bg-gray-50" : ""}`}
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="flex items-center w-full">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarImage
                      src={
                        notification.initiator
                          ? formatImageUrl(notification.initiator.img)
                          : `/placeholder.svg?height=32&width=32`
                      }
                      alt={notification.initiator?.username || "User"}
                    />
                    <AvatarFallback>
                      {notification.initiator ? notification.initiator.username.slice(0, 2).toUpperCase() : "UN"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col flex-1">
                    <p className={`text-sm ${!notification.isRead ? "font-semibold" : ""}`}>{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">No notifications</div>
          )}
        </div>
        {notifications.length > 0 && (
          <div className="p-2 border-t text-center">
            <Button variant="ghost" size="sm" className="text-xs" onClick={fetchNotifications}>
              Refresh
            </Button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


```

## components\messages\messages-list.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { formatImageUrl } from "@/lib/image-utils"
import { useAuth } from "@/lib/auth-context"
import type { Profile } from "@/lib/types"
import { toast } from "@/hooks/use-toast"

interface MessagesListProps {
  onSelectUser?: (username: string) => void
  isMobile?: boolean
}

export function MessagesList({ onSelectUser, isMobile = false }: MessagesListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Profile[]>([])
  const [recentChats, setRecentChats] = useState<Profile[]>([])
  const [loading, setLoading] = useState(false)
  const [searching, setSearching] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  // Load recent chats
  useEffect(() => {
    const loadRecentChats = async () => {
      if (!user?.token) return

      setLoading(true)
      try {
        // Здесь мы должны загрузить недавние чаты из API
        // Но пока просто загрузим список пользователей для демонстрации
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/search?username=`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          // Фильтруем, чтобы не показывать текущего пользователя
          const filteredUsers = data.users.filter((profile: Profile) => profile.id !== user.id)
          setRecentChats(filteredUsers)
        }
      } catch (error) {
        console.error("Error loading recent chats:", error)
        toast({
          title: "Error loading chats",
          description: "Failed to load recent chats. Please try again.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadRecentChats()
  }, [user])

  // Handle search
  const handleSearch = async () => {
    if (!user?.token || !searchQuery.trim()) return

    setSearching(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/search?username=${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        // Фильтруем, чтобы не показывать текущего пользователя
        const filteredUsers = data.users.filter((profile: Profile) => profile.id !== user.id)
        setSearchResults(filteredUsers)
      }
    } catch (error) {
      console.error("Error searching users:", error)
      toast({
        title: "Error searching users",
        description: "Failed to search users. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSearching(false)
    }
  }

  const handleSelectUser = (username: string) => {
    if (onSelectUser) {
      onSelectUser(username)
    } else {
      router.push(`/messages/${username}`)
    }
  }

  // Show loading state
  if (loading && recentChats.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-[#dbdbdb]">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="pr-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
            onClick={handleSearch}
            disabled={searching || !searchQuery.trim()}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Search results */}
      {searchQuery.trim() && searchResults.length > 0 && (
        <div className="p-4 border-b border-[#dbdbdb]">
          <h3 className="text-sm font-semibold text-[#737373] mb-2">Search Results</h3>
          <div className="space-y-2">
            {searchResults.map((profile) => (
              <div
                key={profile.id}
                className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={() => handleSelectUser(profile.username)}
              >
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                  <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{profile.username}</p>
                  <p className="text-xs text-[#737373]">{profile.bio || `@${profile.username}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No search results */}
      {searchQuery.trim() && searchResults.length === 0 && !searching && (
        <div className="p-4 text-center text-[#737373]">
          <p>No users found matching "{searchQuery}"</p>
        </div>
      )}

      {/* Recent chats */}
      <div className="flex-1 overflow-y-auto">
        {recentChats.length > 0 ? (
          <div className="p-4">
            <h3 className="text-sm font-semibold text-[#737373] mb-2">Recent</h3>
            <div className="space-y-2">
              {recentChats.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  onClick={() => handleSelectUser(profile.username)}
                >
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                    <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{profile.username}</p>
                    <p className="text-xs text-[#737373]">{profile.bio || `@${profile.username}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-4 text-center">
            <p className="text-lg font-semibold mb-2">No messages yet</p>
            <p className="text-[#737373] mb-4">Search for users to start a conversation</p>
          </div>
        )}
      </div>
    </div>
  )
}


```

## components\mobile-navigation.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Compass, MessageCircle, Heart, PlusSquare, X, User } from "lucide-react"
import { SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"
import { notificationApi } from "@/lib/api"

interface MobileNavigationProps {
  className?: string
}

export function MobileNavigation({ className }: MobileNavigationProps) {
  const pathname = usePathname()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0)
  const { user } = useAuth()

  // Получаем количество непрочитанных уведомлений
  useEffect(() => {
    const fetchUnreadNotificationsCount = async () => {
      if (!user?.token) return

      try {
        const notifications = await notificationApi.list(user.token)
        const unreadCount = notifications.filter((notification) => !notification.isRead).length
        setUnreadNotificationsCount(unreadCount)
      } catch (error) {
        console.error("Error fetching notifications:", error)
      }
    }

    // Загружаем при монтировании компонента
    fetchUnreadNotificationsCount()

    // Устанавливаем интервал для периодического обновления
    const interval = setInterval(fetchUnreadNotificationsCount, 60000) // Каждую минуту

    return () => clearInterval(interval)
  }, [user])

  // Сбрасываем счетчик непрочитанных уведомлений при открытии панели уведомлений
  useEffect(() => {
    if (showNotifications) {
      setUnreadNotificationsCount(0)
    }
  }, [showNotifications])

  // Базовые навигационные элементы, доступные всем пользователям
  const publicNavItems = [
    { icon: Home, label: "Home", href: "/feed" },
    { icon: Search, label: "Search", href: "#", onClick: () => setShowSearch(true) },
    { icon: Compass, label: "Explore", href: "/explore" },
  ]

  // Навигационные элементы, доступные только авторизованным пользователям
  const authNavItems = [
    { icon: MessageCircle, label: "Messages", href: "/messages" },
    {
      icon: Heart,
      label: "Notifications",
      href: "#",
      onClick: () => setShowNotifications(true),
      badge: unreadNotificationsCount,
    },
    { icon: PlusSquare, label: "Create", href: "/create" },
  ]

  // Добавляем профиль для всех пользователей (для неавторизованных будет перенаправление на логин)
  const profileItem = {
    icon: User,
    label: "Profile",
    href: user ? `/profile/${user.username}` : "/login",
  }

  // Объединяем навигационные элементы в зависимости от статуса авторизации
  const navItems = user ? [...publicNavItems, ...authNavItems, profileItem] : [...publicNavItems, profileItem]

  // Проверка, активна ли страница Explore или её подстраницы
  const isExploreActive = pathname === "/explore" || pathname.startsWith("/explore/")

  return (
    <>
      <nav className={cn("fixed bottom-0 left-0 z-40 w-full border-t border-[#dbdbdb] bg-white", className)}>
        <div className="flex items-center justify-around py-2 relative">
          {navItems.map((item) => {
            // Специальная проверка для Explore
            const isActive = item.label === "Explore" ? isExploreActive : pathname === item.href

            if (item.onClick) {
              return (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className={cn("flex flex-col items-center p-2 text-xs", isActive ? "text-black" : "text-gray-500")}
                >
                  <div className="relative">
                    <item.icon className="h-6 w-6" />
                    {item.badge > 0 && (
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                        {item.badge > 99 ? "99+" : item.badge}
                      </span>
                    )}
                  </div>
                  <span className="mt-1">{item.label}</span>
                </button>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("flex flex-col items-center p-2 text-xs", isActive ? "text-black" : "text-gray-500")}
              >
                <item.icon className="h-6 w-6" />
                <span className="mt-1">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* На мобильных устройствах панели должны быть полноэкранными */}
      {showSearch && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4 border-b border-[#dbdbdb] flex items-center">
            <button onClick={() => setShowSearch(false)} className="mr-4">
              <X className="h-6 w-6" />
            </button>
            <h2 className="font-semibold text-lg">Search</h2>
          </div>
          <div className="p-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
              <Input type="text" placeholder="Search" className="pl-10 pr-10 h-10 bg-[#efefef] border-none" autoFocus />
            </div>
          </div>
        </div>
      )}

      {showNotifications && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4 border-b border-[#dbdbdb] flex items-center">
            <button onClick={() => setShowNotifications(false)} className="mr-4">
              <X className="h-6 w-6" />
            </button>
            <h2 className="font-semibold text-lg">Notifications</h2>
          </div>
          <div className="p-4 border-b border-[#dbdbdb]">
            <h3 className="font-medium text-sm">New</h3>
          </div>
          <div className="p-6 text-center">
            <p className="text-[#737373]">No notifications yet</p>
          </div>
        </div>
      )}
    </>
  )
}


```

## components\navbar.tsx

```typescript



```

## components\notifications-dropdown.tsx

```typescript
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { notificationApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"
import { formatImageUrl } from "@/lib/image-utils"
import type { Notification } from "@/lib/types"

interface NotificationsDropdownProps {
  isOpen: boolean
  onClose: () => void
}

// Интерфейс для расширенного уведомления с данными пользователя
interface EnhancedNotification extends Notification {
  userProfile?: Profile
}

// Define the Profile interface
interface Profile {
  username: string
  img: string
}

export function NotificationsDropdown({ isOpen, onClose }: NotificationsDropdownProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const dropdownRef = useRef(null)
  const { user } = useAuth()
  const router = useRouter()

  useOnClickOutside(dropdownRef, onClose)

  useEffect(() => {
    if (isOpen && user?.token) {
      fetchNotifications()
    }
  }, [isOpen, user])

  const fetchNotifications = async () => {
    setLoading(true)
    try {
      const notificationsList = await notificationApi.list(user!.token)

      setNotifications(notificationsList)
    } catch (err) {
      console.error("Error fetching notifications:", err)
      // Если API недоступно, используем моковые данные как запасной вариант
      setNotifications([
        {
          id: 1,
          type: "like",
          message: "sashaa liked your photo.",
          createdAt: new Date().toISOString(),
          isRead: false,
          initiator: {
            id: 101,
            username: "sashaa",
            img: "/placeholder.svg?height=32&width=32",
          },
        },
        {
          id: 2,
          type: "comment",
          message: "sashaa commented on your photo.",
          createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          isRead: true,
          initiator: {
            id: 101,
            username: "sashaa",
            img: "/placeholder.svg?height=32&width=32",
          },
        },
        {
          id: 3,
          type: "follow",
          message: "sashaa started following you.",
          createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
          isRead: false,
          initiator: {
            id: 101,
            username: "sashaa",
            img: "/placeholder.svg?height=32&width=32",
          },
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleNotificationClick = async (notification: Notification) => {
    if (!user?.token) return

    // Закрываем дропдаун
    onClose()

    // Если уведомление не прочитано, отмечаем его как прочитанное
    if (!notification.isRead) {
      try {
        await notificationApi.markAsRead(notification.id, user.token)
        // Обновляем локальное состояние
        setNotifications(notifications.map((n) => (n.id === notification.id ? { ...n, isRead: true } : n)))
      } catch (err) {
        console.error("Error marking notification as read:", err)
      }
    }

    // Перенаправляем на профиль пользователя-инициатора
    if (notification.initiator) {
      router.push(`/profile/${notification.initiator.username}`)
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={dropdownRef}
      className="absolute top-14 right-0 z-50 w-96 bg-white rounded-lg shadow-lg border border-[#dbdbdb] overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-4 border-b border-[#dbdbdb]">
        <h2 className="font-semibold text-lg">Notifications</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
        </div>
      ) : (
        <>
          <div className="p-4 border-b border-[#dbdbdb]">
            <h3 className="font-medium text-sm">New</h3>
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-[#737373]">No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-center p-4 hover:bg-gray-50 border-b border-[#dbdbdb] ${
                    !notification.isRead ? "bg-blue-50" : ""
                  } cursor-pointer`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src={
                        notification.initiator
                          ? formatImageUrl(notification.initiator.img)
                          : `/placeholder.svg?height=32&width=32`
                      }
                      alt={notification.initiator?.username || "User"}
                    />
                    <AvatarFallback>
                      {notification.initiator ? notification.initiator.username.slice(0, 2).toUpperCase() : "UN"}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      {notification.message}{" "}
                      <span className="text-[#737373]">{new Date(notification.createdAt).toLocaleDateString()}</span>
                    </p>
                  </div>

                  {notification.type === "post" && (
                    <div className="ml-2 w-10 h-10 relative">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Post thumbnail"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="p-3 text-center">
            <Link href="/notifications" className="text-sm text-[#0095f6] font-medium" onClick={onClose}>
              See All Notifications
            </Link>
          </div>
        </>
      )}
    </div>
  )
}


```

## components\notifications-panel.tsx

```typescript
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { notificationApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"
import type { Notification } from "@/lib/types"
import { formatImageUrl } from "@/lib/image-utils"

interface NotificationsPanelProps {
  isOpen: boolean
  onClose: () => void
}

// Определяем интерфейс Profile
interface Profile {
  id: string
  username: string
  img: string
}

// Интерфейс для расширенного уведомления с данными пользователя
interface EnhancedNotification extends Notification {
  userProfile?: Profile
}

// Добавим обработку прочтения уведомлений при открытии панели
export function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const panelRef = useRef<HTMLDivElement>(null)
  const { user } = useAuth()
  const router = useRouter()

  useOnClickOutside(panelRef, onClose)

  useEffect(() => {
    if (isOpen && user?.token) {
      fetchNotifications()
    }
  }, [isOpen, user])

  const fetchNotifications = async () => {
    setLoading(true)
    try {
      const notificationsList = await notificationApi.list(user!.token)

      setNotifications(notificationsList)

      // Автоматически отмечаем все уведомления как прочитанные при открытии панели
      const unreadNotifications = notificationsList.filter((notification) => !notification.isRead)
      if (unreadNotifications.length > 0) {
        // Отмечаем каждое непрочитанное уведомление как прочитанное
        await Promise.all(
          unreadNotifications.map((notification) => notificationApi.markAsRead(notification.id, user!.token)),
        )
      }
    } catch (err) {
      console.error("Error fetching notifications:", err)
      // Если API недоступно, используем моковые данные как запасной вариант
      setNotifications([
        {
          id: 1,
          type: "like",
          message: "sashaa liked your photo.",
          createdAt: new Date().toISOString(),
          isRead: false,
          initiator: {
            id: 101,
            username: "sashaa",
            img: "/placeholder.svg?height=32&width=32",
          },
        },
        {
          id: 2,
          type: "comment",
          message: "sashaa commented on your photo.",
          createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          isRead: true,
          initiator: {
            id: 101,
            username: "sashaa",
            img: "/placeholder.svg?height=32&width=32",
          },
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  // Обновим функцию handleNotificationClick, чтобы использовать initiator
  const handleNotificationClick = async (notification: Notification) => {
    if (!user?.token) return

    // Закрываем панель
    onClose()

    // Если уведомление не прочитано, отмечаем его как прочитанное
    if (!notification.isRead) {
      try {
        await notificationApi.markAsRead(notification.id, user.token)
      } catch (err) {
        console.error("Error marking notification as read:", err)
      }
    }

    // Перенаправляем на профиль пользователя-инициатора
    if (notification.initiator) {
      router.push(`/profile/${notification.initiator.username}`)
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={panelRef}
      className="absolute top-0 left-[240px] z-50 w-[350px] bg-white rounded-r-lg shadow-lg border border-[#dbdbdb] border-l-0 h-screen overflow-hidden"
    >
      <div className="p-4 border-b border-[#dbdbdb]">
        <h2 className="font-semibold text-lg">Notifications</h2>
      </div>

      <div className="p-4 border-b border-[#dbdbdb]">
        <h3 className="font-medium text-sm">New</h3>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
        </div>
      ) : (
        <div className="max-h-[calc(100vh-120px)] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-[#737373]">No notifications yet</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center p-4 hover:bg-gray-50 ${!notification.isRead ? "bg-blue-50" : ""} cursor-pointer`}
                onClick={() => handleNotificationClick(notification)}
              >
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage
                    src={
                      notification.initiator
                        ? formatImageUrl(notification.initiator.img)
                        : `/placeholder.svg?height=32&width=32`
                    }
                    alt={notification.initiator?.username || "User"}
                  />
                  <AvatarFallback>
                    {notification.initiator ? notification.initiator.username.slice(0, 2).toUpperCase() : "UN"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    {notification.message}
                    <span className="text-[#737373] ml-2">{new Date(notification.createdAt).toLocaleDateString()}</span>
                  </p>
                </div>
                {notification.type === "post" && (
                  <div className="ml-2 w-10 h-10 relative">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Post thumbnail"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      <div className="p-3 text-center border-t border-[#dbdbdb] mt-auto">
        <Link href="/notifications" className="text-sm text-[#0095f6] font-medium" onClick={onClose}>
          See All Notifications
        </Link>
      </div>
    </div>
  )
}


```

## components\post-grid.tsx

```typescript
"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, MessageCircle } from "lucide-react"
import type { Post } from "@/lib/types"
import { formatImageUrl } from "@/lib/image-utils"
import { useEffect, useState } from "react"
import { postApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"

interface PostGridProps {
  posts: Post[]
  loading?: boolean
  emptyMessage?: string
  emptyIcon?: React.ReactNode
}

export function PostGrid({ posts, loading, emptyMessage = "No posts yet", emptyIcon }: PostGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        {emptyIcon}
        <p className="text-lg font-medium mb-2">{emptyMessage}</p>
        <p className="text-muted-foreground">When you post photos, they'll appear here.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((post) => (
        <GridPostItem key={post.id} post={post} />
      ))}
    </div>
  )
}

interface GridPostItemProps {
  post: Post
}

function GridPostItem({ post }: GridPostItemProps) {
  const [stats, setStats] = useState({ likes: post.favoritesCount, comments: post.comments?.length || 0 })
  const { user } = useAuth()
  const [liked, setLiked] = useState(!!post.favorited)
  const router = useRouter()

  useEffect(() => {
    const fetchPostStats = async () => {
      if (!user?.token) return

      try {
        const postStats = await postApi.getStats(post.slug, user.token)
        setStats(postStats)
      } catch (error) {
        console.error("Error fetching post stats:", error)
        setStats({
          likes: post.favoritesCount,
          comments: post.comments?.length || 0,
        })
      }
    }

    fetchPostStats()
  }, [post.slug, post.favoritesCount, post.comments?.length, user])

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!user?.token) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
      return
    }

    try {
      setLiked(!liked)

      if (liked) {
        await postApi.unfavorite(post.slug, user.token)
      } else {
        await postApi.favorite(post.slug, user.token)
      }

      const postStats = await postApi.getStats(post.slug, user.token)
      setStats(postStats)
    } catch (err) {
      console.error("Error toggling like:", err)
      setLiked(liked)
    }
  }

  return (
    <Link key={post.id} href={`/p/${post.slug}`} className="relative aspect-square">
      <Image
        src={formatImageUrl(post.img) || "/placeholder.svg"}
        alt={post.title || "Post"}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 hover:opacity-100">
        <div className="flex items-center space-x-4 text-white">
          <div className="flex items-center" onClick={handleLike}>
            <Heart className={`h-5 w-5 mr-1 ${liked ? "fill-white" : ""}`} />
            <span>{stats.likes}</span>
          </div>
          <div className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-1" />
            <span>{stats.comments}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}


```

## components\post-options-menu.tsx

```typescript
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { postApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"

interface PostOptionsMenuProps {
  postId: number
  slug: string
  isOpen: boolean
  onClose: () => void
  isCurrentUserPost: boolean
  profileId: string
}

export function PostOptionsMenu({ postId, slug, isOpen, onClose, isCurrentUserPost, profileId }: PostOptionsMenuProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  if (!isOpen) return null

  const handleEdit = () => {
    onClose()
    router.push(`/p/${slug}/edit`)
  }

  const handleGoToPost = () => {
    onClose()
    router.push(`/p/${slug}`)
  }

  const handleCopyLink = () => {
    const url = `${window.location.origin}/p/${slug}`
    navigator.clipboard
      .writeText(url)
      .then(() => {
        onClose()
        // Здесь можно добавить уведомление об успешном копировании
      })
      .catch((err) => {
        console.error("Failed to copy link:", err)
      })
  }

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true)
  }

  const handleConfirmDelete = async () => {
    if (!user || !user.token) return

    setIsDeleting(true)
    try {
      // Удаляем пост
      await postApi.delete(slug, user.token)

      setShowDeleteConfirm(false)
      onClose()
      router.push(`/profile/${profileId}`)
    } catch (error) {
      console.error("Error deleting post:", error)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false)
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" onClick={onClose}>
        <div className="bg-white rounded-xl w-full max-w-sm overflow-hidden" onClick={(e) => e.stopPropagation()}>
          {isCurrentUserPost && (
            <button
              className="w-full p-4 text-center text-red-500 font-semibold border-b border-[#dbdbdb]"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          )}

          {isCurrentUserPost && (
            <button className="w-full p-4 text-center border-b border-[#dbdbdb]" onClick={handleEdit}>
              Edit
            </button>
          )}

          <button className="w-full p-4 text-center border-b border-[#dbdbdb]" onClick={handleGoToPost}>
            Go to post
          </button>

          <button className="w-full p-4 text-center border-b border-[#dbdbdb]" onClick={handleCopyLink}>
            Copy link
          </button>

          <button className="w-full p-4 text-center" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelDelete} disabled={isDeleting}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              className="bg-red-500 hover:bg-red-600"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}


```

## components\post.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { Post as PostType } from "@/lib/types"
import { postApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"
import { formatImageUrl } from "@/lib/image-utils"

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(post.favorited === true)
  const [likesCount, setLikesCount] = useState(post.favoritesCount)
  const [commentsCount, setCommentsCount] = useState(post.comments?.length || 0)
  const { user } = useAuth()

  useEffect(() => {
    const fetchPostStats = async () => {
      if (!user?.token) return

      try {
        const stats = await postApi.getStats(post.slug, user.token)
        setLikesCount(stats.likes)
        setCommentsCount(stats.comments)
      } catch (error) {
        console.error("Error fetching post stats:", error)
        setLikesCount(post.favoritesCount)
        setCommentsCount(post.comments?.length || 0)
      }
    }

    fetchPostStats()
    setLiked(post.favorited === true)
  }, [post.slug, post.favoritesCount, post.comments?.length, post.favorited, user])

  const handleLike = async () => {
    if (!user?.token) return

    try {
      setLiked(!liked)
      const newLikesCount = liked ? likesCount - 1 : likesCount + 1
      setLikesCount(newLikesCount)

      if (liked) {
        await postApi.unfavorite(post.slug, user.token)
      } else {
        await postApi.favorite(post.slug, user.token)
      }

      const stats = await postApi.getStats(post.slug, user.token)
      setLikesCount(stats.likes)
      setCommentsCount(stats.comments)
    } catch (err) {
      console.error("Error toggling like:", err)
      setLiked(liked)
      setLikesCount(likesCount)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return "0d"
    } else if (diffDays < 7) {
      return `${diffDays}d`
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)}w`
    } else {
      return `${Math.floor(diffDays / 30)}mo`
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return new Intl.NumberFormat().format(num)
  }

  return (
    <article className="border-b border-[#dbdbdb] pb-6">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
          <Link href={`/profile/${post.author.username}`} className="flex items-center">
            <Avatar className="h-8 w-8 mr-3">
              <AvatarImage src={formatImageUrl(post.author.img)} alt={post.author.username} />
              <AvatarFallback>{post.author.username.slice(0, 2).toUpperCase()} </AvatarFallback>
            </Avatar>
            <div className="flex items-center">
              <span className="font-medium mr-2">{post.author.username}</span>
              <span className="text-[#737373] text-sm">• {formatDate(post.createdAt)}</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          {user && user.id !== post.author.id && (
            <Button variant="ghost" size="sm" className="text-[#0095f6] hover:text-[#0095f6] hover:bg-transparent px-2">
              Follow
            </Button>
          )}
        </div>
      </div>

      <div className="relative aspect-square w-full overflow-hidden">
        <Link href={`/p/${post.slug}`}>
          <Image
            src={formatImageUrl(post.img) || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4 py-3">
        <button onClick={handleLike}>
          <Heart className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : ""}`} />
        </button>
        <Link href={`/p/${post.slug}`}>
          <MessageCircle className="h-6 w-6" />
        </Link>
      </div>

      <div className="mb-2">
        <p className="font-medium">
          {formatNumber(likesCount)} {likesCount === 1 ? "like" : "likes"}
        </p>
      </div>

      <div className="mb-2">
        <span className="font-medium">{post.author.username}</span> <span>{post.content}</span>
      </div>

      <Link href={`/p/${post.slug}`} className="text-sm text-[#737373]">
        {commentsCount > 0
          ? `View all ${formatNumber(commentsCount)} comments`
          : post.comments && post.comments.length > 0
            ? `View all ${post.comments.length} comments`
            : "Be the first to comment"}
      </Link>
    </article>
  )
}


```

## components\search-dropdown.tsx

```typescript
"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { formatImageUrl } from "@/lib/image-utils"

// Имитация данных пользователей для поиска
const MOCK_USERS = [
  {
    id: "101",
    username: "sashaa",
    fullName: "Sasha",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: true,
  },
  {
    id: "102",
    username: "nature_lover",
    fullName: "Nature Photography",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: false,
  },
  {
    id: "103",
    username: "traveler",
    fullName: "World Traveler",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: false,
  },
]

interface SearchDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchDropdown({ isOpen, onClose }: SearchDropdownProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [loading, setLoading] = useState(false)
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)

  useOnClickOutside(dropdownRef, onClose)

  // Фокус на поле ввода при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus()
      }, 100)
    }
  }, [isOpen])

  // Загрузка недавних поисков из localStorage при инициализации
  useEffect(() => {
    if (isOpen) {
      const savedSearches = localStorage.getItem("recentSearches")
      if (savedSearches) {
        try {
          setRecentSearches(JSON.parse(savedSearches))
        } catch (e) {
          console.error("Error parsing recent searches:", e)
          setRecentSearches([])
        }
      } else {
        // Если нет сохраненных поисков, добавляем один для демонстрации
        const defaultRecent = [MOCK_USERS[0]]
        setRecentSearches(defaultRecent)
        localStorage.setItem("recentSearches", JSON.stringify(defaultRecent))
      }
    }
  }, [isOpen])

  // Поиск пользователей при вводе запроса
  useEffect(() => {
    if (searchQuery.trim()) {
      setLoading(true)

      // Имитация запроса к API
      setTimeout(() => {
        const results = MOCK_USERS.filter(
          (user) =>
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.fullName.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setSearchResults(results)
        setLoading(false)
      }, 300)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  // Добавление пользователя в недавние поиски
  const addToRecentSearches = (user) => {
    // Проверяем, есть ли уже такой пользователь в недавних поисках
    const isExisting = recentSearches.some((item) => item.id === user.id)

    if (!isExisting) {
      const updatedSearches = [user, ...recentSearches].slice(0, 5) // Ограничиваем до 5 последних поисков
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    }

    onClose()
  }

  // Удаление пользователя из недавних поисков
  const removeFromRecentSearches = (userId, e) => {
    e.stopPropagation()
    e.preventDefault()

    const updatedSearches = recentSearches.filter((user) => user.id !== userId)
    setRecentSearches(updatedSearches)
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
  }

  // Очистка поискового запроса
  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  if (!isOpen) return null

  return (
    <div
      ref={dropdownRef}
      className="absolute top-14 left-0 z-50 w-96 bg-white rounded-lg shadow-lg border border-[#dbdbdb] overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-4 border-b border-[#dbdbdb]">
        <h2 className="font-semibold text-lg mb-3">Search</h2>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 h-10 bg-[#efefef] border-none"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] hover:text-black"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="max-h-[400px] overflow-y-auto">
        {searchQuery ? (
          loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="divide-y divide-[#dbdbdb]">
              {searchResults.length > 0 ? (
                searchResults.map((user) => (
                  <Link
                    key={user.id}
                    href={`/profile/${user.username}`}
                    onClick={() => addToRecentSearches(user)}
                    className="flex items-center p-4 hover:bg-gray-50"
                  >
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={formatImageUrl(user.avatar)} alt={user.username} />
                      <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold">{user.username}</p>
                      <p className="text-sm text-[#737373]">{user.fullName}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-6 text-center">
                  <p className="text-[#737373]">No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          )
        ) : (
          recentSearches.length > 0 && (
            <>
              <div className="p-4 border-b border-[#dbdbdb]">
                <h3 className="font-medium text-sm">Recent</h3>
              </div>

              <div className="divide-y divide-[#dbdbdb]">
                {recentSearches.map((user) => (
                  <Link key={user.id} href={`/profile/${user.id}`} className="flex items-center p-4 hover:bg-gray-50">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={formatImageUrl(user.avatar)} alt={user.username} />
                      <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold">{user.username}</p>
                    </div>

                    <button
                      onClick={(e) => removeFromRecentSearches(user.id, e)}
                      className="text-[#737373] hover:text-black"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Link>
                ))}
              </div>
            </>
          )
        )}
      </div>

      <div className="p-3 text-center border-t border-[#dbdbdb]">
        <Link href="/search" className="text-sm text-[#0095f6] font-medium" onClick={onClose}>
          See All Results
        </Link>
      </div>
    </div>
  )
}


```

## components\search-panel.tsx

```typescript
"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { userApi } from "@/lib/api"
import type { User } from "@/lib/types"
import { formatImageUrl } from "@/lib/image-utils"

interface SearchPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<User[]>([])
  const [recentSearches, setRecentSearches] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useOnClickOutside(panelRef, onClose)

  // Фокус на поле ввода при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Загрузка недавних поисков из localStorage при инициализации
  useEffect(() => {
    if (isOpen) {
      const savedSearches = localStorage.getItem("recentSearches")
      if (savedSearches) {
        try {
          setRecentSearches(JSON.parse(savedSearches))
        } catch (e) {
          console.error("Error parsing recent searches:", e)
          setRecentSearches([])
        }
      }
    }
  }, [isOpen])

  // Поиск пользователей при вводе запроса
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const searchUsers = async () => {
      setLoading(true)
      try {
        const { users } = await userApi.search(searchQuery)
        setSearchResults(users)
      } catch (err) {
        console.error("Error searching users:", err)
        setSearchResults([])
      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(() => {
      searchUsers()
    }, 300)

    return () => clearTimeout(debounce)
  }, [searchQuery])

  // Добавление пользователя в недавние поиски
  const addToRecentSearches = (user: User) => {
    // Проверяем, есть ли уже такой пользователь в недавних поисках
    const isExisting = recentSearches.some((item) => item.id === user.id)

    if (!isExisting) {
      const updatedSearches = [user, ...recentSearches].slice(0, 5) // Ограничиваем до 5 последних поисков
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    }

    onClose()
  }

  // Удаление пользователя из недавних поисков
  const removeFromRecentSearches = (userId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()

    const updatedSearches = recentSearches.filter((user) => user.id !== userId)
    setRecentSearches(updatedSearches)
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
  }

  // Очистка поискового запроса
  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  if (!isOpen) return null

  return (
    <div
      ref={panelRef}
      className="absolute top-0 left-[240px] z-50 w-[350px] bg-white rounded-r-lg shadow-lg border border-[#dbdbdb] border-l-0 h-screen overflow-hidden"
    >
      <div className="p-4 border-b border-[#dbdbdb]">
        <h2 className="font-semibold text-lg mb-3">Search</h2>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 h-10 bg-[#efefef] border-none"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] hover:text-black"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="max-h-[calc(100vh-120px)] overflow-y-auto">
        {searchQuery ? (
          loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="divide-y divide-[#dbdbdb]">
              {searchResults.length > 0 ? (
                searchResults.map((user) => (
                  <Link
                    key={user.id}
                    href={`/profile/${user.username}`}
                    onClick={() => addToRecentSearches(user)}
                    className="flex items-center p-4 hover:bg-gray-50"
                  >
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={formatImageUrl(user.img)} alt={user.username} />
                      <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold">{user.username}</p>
                      <p className="text-sm text-[#737373]">{user.bio}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-6 text-center">
                  <p className="text-[#737373]">No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          )
        ) : (
          recentSearches.length > 0 && (
            <>
              <div className="p-4 border-b border-[#dbdbdb]">
                <h3 className="font-medium text-sm">Recent</h3>
              </div>

              <div className="divide-y divide-[#dbdbdb]">
                {recentSearches.map((user) => (
                  <Link
                    key={user.id}
                    href={`/profile/${user.username}`}
                    className="flex items-center p-4 hover:bg-gray-50"
                  >
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={formatImageUrl(user.img)} alt={user.username} />
                      <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold">{user.username}</p>
                    </div>

                    <button
                      onClick={(e) => removeFromRecentSearches(user.id, e)}
                      className="text-[#737373] hover:text-black"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Link>
                ))}
              </div>
            </>
          )
        )}
      </div>
    </div>
  )
}


```

## components\sidebar.tsx

```typescript
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Compass, MessageCircle, Heart, PlusSquare, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { NotificationsPanel } from "./notifications-panel"
import { SearchPanel } from "./search-panel"
import { useAuth } from "@/lib/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatImageUrl } from "@/lib/image-utils"
import { notificationApi } from "@/lib/api"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0)

  // Always call useAuth to prevent hook order issues
  const auth = useAuth()
  const user = auth.user
  const logout = auth.logout

  // Получаем количество непрочитанных уведомлений
  useEffect(() => {
    const fetchUnreadNotificationsCount = async () => {
      if (!user?.token) return

      try {
        const notifications = await notificationApi.list(user.token)
        const unreadCount = notifications.filter((notification) => !notification.isRead).length
        setUnreadNotificationsCount(unreadCount)
      } catch (error) {
        console.error("Error fetching notifications:", error)
      }
    }

    // Загружаем при монтировании компонента
    fetchUnreadNotificationsCount()

    // Устанавливаем интервал для периодического обновления
    const interval = setInterval(fetchUnreadNotificationsCount, 60000) // Каждую минуту

    return () => clearInterval(interval)
  }, [user])

  // Сбрасываем счетчик непрочитанных уведомлений при открытии панели уведомлений
  useEffect(() => {
    if (showNotifications) {
      setUnreadNotificationsCount(0)
    }
  }, [showNotifications])

  // Проверка, активна ли страница Explore или её подстраницы
  const isExploreActive = pathname === "/explore" || pathname.startsWith("/explore/")

  // Базовые навигационные элементы, доступные всем пользователям
  const publicNavItems = [
    { icon: Home, label: "Home", href: "/feed" },
    { icon: Search, label: "Search", href: "#", onClick: () => setShowSearch(!showSearch) },
    { icon: Compass, label: "Explore", href: "/explore" },
  ]

  // Навигационные элементы, доступные только авторизованным пользователям
  const authNavItems = [
    { icon: MessageCircle, label: "Messages", href: "/messages" },
    {
      icon: Heart,
      label: "Notifications",
      href: "#",
      onClick: () => setShowNotifications(!showNotifications),
      badge: unreadNotificationsCount,
    },
    { icon: PlusSquare, label: "Create", href: "/create" },
  ]

  // Объединяем навигационные элементы в зависимости от статуса авторизации
  const navItems = user ? [...publicNavItems, ...authNavItems] : publicNavItems

  return (
    <aside
      className={cn("fixed top-0 left-0 z-40 h-full w-[240px] flex-col border-r border-[#dbdbdb] bg-white", className)}
    >
      <div className="flex h-full flex-col p-4">
        <Link href="/" className="mb-8 py-4 text-2xl font-bold italic tracking-tighter">
          RealtyGRAM
        </Link>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              // Специальная проверка для Explore
              const isActive = item.label === "Explore" ? isExploreActive : pathname === item.href

              return (
                <li key={item.label} className="relative">
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className={cn(
                        "flex w-full items-center rounded-md px-3 py-3 text-sm font-medium transition-colors",
                        isActive ? "bg-black text-white" : "hover:bg-gray-100",
                      )}
                    >
                      <div className="relative">
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.badge > 0 && (
                          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                            {item.badge > 99 ? "99+" : item.badge}
                          </span>
                        )}
                      </div>
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-md px-3 py-3 text-sm font-medium transition-colors",
                        isActive ? "bg-black text-white" : "hover:bg-gray-100",
                      )}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}

            {user && (
              <>
                <li className="relative">
                  <Link
                    href={`/profile/${user.username}`}
                    className={cn(
                      "flex items-center rounded-md px-3 py-3 text-sm font-medium transition-colors",
                      pathname === `/profile/${user.username}` ? "bg-black text-white" : "hover:bg-gray-100",
                    )}
                  >
                    <Avatar className="h-5 w-5 mr-3">
                      <AvatarImage src={formatImageUrl(user.img)} alt={user.username} />
                      <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    Profile
                  </Link>
                </li>
                <li className="relative">
                  <button
                    onClick={logout}
                    className="flex w-full items-center rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-gray-100"
                  >
                    <LogOut className="mr-3 h-5 w-5" />
                    Logout
                  </button>
                </li>
              </>
            )}

            {/* Добавляем кнопку входа, если пользователь не авторизован */}
            {!user && (
              <li className="relative mt-4">
                <Link
                  href="/login"
                  className="flex w-full items-center justify-center rounded-md bg-[#0095f6] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0095f6]/90"
                >
                  Log in
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Выплывающие панели */}
      {showSearch && <SearchPanel isOpen={showSearch} onClose={() => setShowSearch(false)} />}
      {showNotifications && (
        <NotificationsPanel isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
      )}
    </aside>
  )
}


```

## components\spinner.tsx

```typescript
interface SpinnerProps {
  size?: "sm" | "md" | "lg"
}

export function Spinner({ size = "md" }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-500 ${sizeClasses[size]}`}
      ></div>
    </div>
  )
}


```

## components\theme-provider.tsx

```typescript
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

```

## components\ui\accordion.tsx

```typescript
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```

## components\ui\alert-dialog.tsx

```typescript
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

```

## components\ui\alert.tsx

```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

```

## components\ui\aspect-ratio.tsx

```typescript
"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }

```

## components\ui\avatar.tsx

```typescript
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

```

## components\ui\badge.tsx

```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```

## components\ui\breadcrumb.tsx

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

```

## components\ui\button.tsx

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

## components\ui\calendar.tsx

```typescript
"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

```

## components\ui\card.tsx

```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

## components\ui\carousel.tsx

```typescript
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

```

## components\ui\chart.tsx

```typescript
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

```

## components\ui\checkbox.tsx

```typescript
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

```

## components\ui\collapsible.tsx

```typescript
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

```

## components\ui\command.tsx

```typescript
"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

```

## components\ui\context-menu.tsx

```typescript
"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}

```

## components\ui\dialog.tsx

```typescript
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

```

## components\ui\drawer.tsx

```typescript
"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

```

## components\ui\dropdown-menu.tsx

```typescript
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

```

## components\ui\form.tsx

```typescript
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

```

## components\ui\hover-card.tsx

```typescript
"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }

```

## components\ui\input-otp.tsx

```typescript
"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

```

## components\ui\input.tsx

```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

```

## components\ui\label.tsx

```typescript
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

## components\ui\menubar.tsx

```typescript
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}

```

## components\ui\navigation-menu.tsx

```typescript
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}

```

## components\ui\pagination.tsx

```typescript
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}

```

## components\ui\popover.tsx

```typescript
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }

```

## components\ui\progress.tsx

```typescript
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

```

## components\ui\radio-group.tsx

```typescript
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

```

## components\ui\resizable.tsx

```typescript
"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

```

## components\ui\scroll-area.tsx

```typescript
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }

```

## components\ui\select.tsx

```typescript
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

```

## components\ui\separator.tsx

```typescript
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

```

## components\ui\sheet.tsx

```typescript
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

```

## components\ui\sidebar.tsx

```typescript
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

```

## components\ui\skeleton.tsx

```typescript
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }

```

## components\ui\slider.tsx

```typescript
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

```

## components\ui\sonner.tsx

```typescript
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

```

## components\ui\switch.tsx

```typescript
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

```

## components\ui\table.tsx

```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```

## components\ui\tabs.tsx

```typescript
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

## components\ui\textarea.tsx

```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }

```

## components\ui\toast.tsx

```typescript
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

```

## components\ui\toaster.tsx

```typescript
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

```

## components\ui\toggle-group.tsx

```typescript
"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }

```

## components\ui\toggle.tsx

```typescript
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }

```

## components\ui\tooltip.tsx

```typescript
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

## components\ui\use-mobile.tsx

```typescript
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

```

## components\ui\use-toast.ts

```typescript
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }

```

## components\user-search.tsx

```typescript
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { profileApi } from "@/lib/api"
import { formatImageUrl } from "@/lib/image-utils"
import type { Profile } from "@/lib/types"

interface UserSearchProps {
  onSelectUser?: (profile: Profile) => void
  placeholder?: string
  className?: string
}

export function UserSearch({ onSelectUser, placeholder = "Search users...", className = "" }: UserSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Profile[]>([])
  const [recentSearches, setRecentSearches] = useState<Profile[]>([])
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const savedSearches = localStorage.getItem("recentUserSearches")
      if (savedSearches) {
        setRecentSearches(JSON.parse(savedSearches))
      }
    } catch (error) {
      console.error("Error loading recent searches:", error)
    }
  }, [])

  // Search for users when query changes
  useEffect(() => {
    if (!searchQuery.trim() || !user?.token) {
      setSearchResults([])
      return
    }

    const searchUsers = async () => {
      setLoading(true)
      try {
        // Try to get user by username first
        try {
          const { profile } = await profileApi.get(searchQuery, user.token)
          setSearchResults([profile])
        } catch (error) {
          // If not found, try to search by partial match
          const response = await fetch(
            `https://api.panchenko.work/users/search?username=${encodeURIComponent(searchQuery)}`,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
              },
            },
          )

          if (response.ok) {
            const data = await response.json()
            setSearchResults(data.users || [])
          } else {
            setSearchResults([])
          }
        }
      } catch (error) {
        console.error("Error searching users:", error)
        setSearchResults([])
      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(() => {
      searchUsers()
    }, 500)

    return () => clearTimeout(debounce)
  }, [searchQuery, user])

  // Add user to recent searches
  const addToRecentSearches = (profile: Profile) => {
    // Check if already in recent searches
    const isExisting = recentSearches.some((item) => item.id === profile.id)

    if (!isExisting) {
      const updatedSearches = [profile, ...recentSearches].slice(0, 5) // Keep only 5 most recent
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentUserSearches", JSON.stringify(updatedSearches))
    }

    // Call the onSelectUser callback if provided
    if (onSelectUser) {
      onSelectUser(profile)
    }
  }

  // Remove user from recent searches
  const removeFromRecentSearches = (userId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()

    const updatedSearches = recentSearches.filter((user) => user.id !== userId)
    setRecentSearches(updatedSearches)
    localStorage.setItem("recentUserSearches", JSON.stringify(updatedSearches))
  }

  // Clear search query
  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Search input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 h-10 bg-[#efefef] border-none"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] hover:text-black"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search results or recent searches */}
      <div className="bg-white rounded-lg shadow-sm border border-[#dbdbdb] overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-20">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : searchQuery ? (
          // Search results
          searchResults.length > 0 ? (
            <div className="divide-y divide-[#dbdbdb]">
              {searchResults.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => addToRecentSearches(profile)}
                >
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                    <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold">{profile.username}</p>
                    <p className="text-sm text-[#737373]">{profile.bio || profile.email}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-[#737373]">No results found for "{searchQuery}"</p>
            </div>
          )
        ) : recentSearches.length > 0 ? (
          // Recent searches
          <>
            <div className="p-4 border-b border-[#dbdbdb]">
              <h3 className="font-medium text-sm">Recent</h3>
            </div>

            <div className="divide-y divide-[#dbdbdb]">
              {recentSearches.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => addToRecentSearches(profile)}
                >
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                    <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold">{profile.username}</p>
                  </div>

                  <button
                    onClick={(e) => removeFromRecentSearches(profile.id, e)}
                    className="text-[#737373] hover:text-black"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          // No recent searches
          <div className="p-6 text-center">
            <p className="text-[#737373]">Search for users</p>
          </div>
        )}
      </div>
    </div>
  )
}


```

## constants.ts

```typescript
export const API_URL = "https://api.panchenko.work"


```

## hooks\use-auth.ts

```typescript
"use client"

import { useContext } from "react"
import { AuthContext } from "@/lib/auth-context"

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}


```

## hooks\use-click-outside.ts

```typescript
"use client"

import { useEffect, type RefObject } from "react"

export function useOnClickOutside(ref: RefObject<HTMLElement>, handler: (event: MouseEvent | TouchEvent) => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}


```

## hooks\use-media-query.ts

```typescript
"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // Update the state with the current value
    const updateMatches = () => {
      setMatches(media.matches)
    }

    // Set the initial value
    updateMatches()

    // Add the listener
    media.addEventListener("change", updateMatches)

    // Clean up
    return () => {
      media.removeEventListener("change", updateMatches)
    }
  }, [query])

  return matches
}


```

## hooks\use-mobile.tsx

```typescript
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

```

## hooks\use-toast.ts

```typescript
"use client"

// Inspired by react-hot-toast library
import * as React from "react"
import { toast as sonnerToast } from "sonner"

import type { ToastActionElement, ToastProps as ShadToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ShadToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

type ToastProps = {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

const toast = ({ title, description, variant = "default" }: ToastProps) => {
  if (variant === "destructive") {
    return sonnerToast.error(title, {
      description,
    })
  }

  return sonnerToast.success(title, {
    description,
  })
}

export { useToast, toast }


```

## lib\api.ts

```typescript
import type {
  User,
  LoginUser,
  RegisterUser,
  UpdateUser,
  Post,
  CreatePost,
  UpdatePost,
  Comment,
  CreateComment,
  Profile,
  Notification,
  ChatMessage,
} from "./types"

const API_URL = "https://api.panchenko.work"

async function apiRequest<T>(endpoint: string, method = "GET", body?: any, token?: string): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const config: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      const errorMessage = errorData.message || `API error: ${response.status}`
      throw new Error(errorMessage)
    }

    if (method === "DELETE") {
      return {} as T
    }

    const data = await response.json()
    return data as T
  } catch (error) {
    console.error("API request failed:", error)
    throw error
  }
}

export const userApi = {
  register: (user: RegisterUser) => apiRequest<{ user: User }>("/users", "POST", { user }),

  login: (user: LoginUser) => apiRequest<{ user: User }>("/users/login", "POST", { user }),

  current: (token: string) => apiRequest<{ user: User }>("/user", "GET", undefined, token),

  update: (user: UpdateUser, token: string) => apiRequest<{ user: User }>("/user", "PUT", { user }, token),

  search: (username: string) => apiRequest<{ users: User[] }>(`/users/search?username=${encodeURIComponent(username)}`),
}

export const postApi = {
  create: (post: CreatePost, token: string) => apiRequest<{ post: Post }>("/posts", "POST", { post }, token),

  list: (params: { author?: string; favorited?: string; limit?: number; offset?: number } = {}, token?: string) => {
    const queryParams = new URLSearchParams()
    if (params.author) queryParams.append("author", params.author)
    if (params.favorited) queryParams.append("favorited", params.favorited)
    if (params.limit) queryParams.append("limit", params.limit.toString())
    if (params.offset) queryParams.append("offset", params.offset.toString())

    const query = queryParams.toString() ? `?${queryParams.toString()}` : ""
    return apiRequest<{ posts: Post[]; postsCount: number }>(`/posts${query}`, "GET", undefined, token)
  },

  feed: (params: { limit?: number; offset?: number } = {}, token: string) => {
    const queryParams = new URLSearchParams()
    if (params.limit) queryParams.append("limit", params.limit.toString())
    if (params.offset) queryParams.append("offset", params.offset.toString())

    const query = queryParams.toString() ? `?${queryParams.toString()}` : ""
    return apiRequest<{ posts: Post[]; postsCount: number }>(`/posts/feed${query}`, "GET", undefined, token)
  },

  get: (slug: string, token?: string) => apiRequest<{ post: Post }>(`/posts/${slug}`, "GET", undefined, token),

  update: async (slug: string, post: UpdatePost, token: string) => {
    if (!post.img) {
      throw new Error("img should not be empty")
    }

    try {
      return await apiRequest<{ post: Post }>(`/posts/${slug}`, "PUT", { post }, token)
    } catch (error) {
      throw error
    }
  },

  delete: (slug: string, token: string) => apiRequest<void>(`/posts/${slug}`, "DELETE", undefined, token),

  favorite: (slug: string, token: string) =>
    apiRequest<{ post: Post }>(`/posts/${slug}/favorite`, "POST", undefined, token),

  unfavorite: (slug: string, token: string) =>
    apiRequest<{ post: Post }>(`/posts/${slug}/favorite`, "DELETE", undefined, token),

  getStats: async (slug: string, token?: string) => {
    try {
      return await apiRequest<{ likes: number; comments: number }>(`/posts/${slug}/stats`, "GET", undefined, token)
    } catch (error) {
      return { likes: 0, comments: 0 }
    }
  },
}

export const commentApi = {
  list: (slug: string) => apiRequest<Comment[]>(`/posts/${slug}/comments`),

  create: (slug: string, comment: CreateComment, token: string) =>
    apiRequest<Comment>(`/posts/${slug}/comments`, "POST", { comment }, token),

  delete: (slug: string, commentId: number, token: string) =>
    apiRequest<void>(`/posts/${slug}/comments/${commentId}`, "DELETE", undefined, token),
}

export const profileApi = {
  get: (username: string, token?: string) =>
    apiRequest<{ profile: Profile }>(`/profiles/${username}`, "GET", undefined, token),

  follow: (username: string, token: string) =>
    apiRequest<{ profile: Profile }>(`/profiles/${username}/follow`, "POST", undefined, token),

  unfollow: (username: string, token: string) =>
    apiRequest<{ profile: Profile }>(`/profiles/${username}/follow`, "DELETE", undefined, token),
}

export const notificationApi = {
  list: (token: string) => apiRequest<Notification[]>("/notifications", "GET", undefined, token),

  markAsRead: (id: number, token: string) => apiRequest<void>(`/notifications/${id}/read`, "PATCH", undefined, token),
}

export const uploadApi = {
  userAvatar: async (file: File, token: string) => {
    const formData = new FormData()
    formData.append("image", file)

    const response = await fetch(`${API_URL}/user/avatar`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status}`)
    }

    return (await response.json()) as { user: User }
  },

  postImage: async (slug: string, file: File, token: string) => {
    const formData = new FormData()
    formData.append("image", file)

    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      if (!response.ok) {
        const postResponse = await fetch(`${API_URL}/posts/${slug}/uploadImage`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })

        if (!postResponse.ok) {
          const errorText = await postResponse.text()
          throw new Error(`Upload failed: ${postResponse.status}`)
        }

        return (await postResponse.json()) as { post: Post }
      }

      const uploadResult = await response.json()
      const imageUrl = uploadResult.url || uploadResult.path || ""
      return await apiRequest<{ post: Post }>(`/posts/${slug}`, "PUT", { post: { img: imageUrl } }, token)
    } catch (error) {
      throw error
    }
  },

  uploadImage: async (file: File, token: string) => {
    const formData = new FormData()
    formData.append("image", file)

    try {
      const endpoints = [`${API_URL}/upload`, `${API_URL}/images/upload`, `${API_URL}/api/upload`]
      let response = null
      let error = null

      for (const endpoint of endpoints) {
        try {
          response = await fetch(endpoint, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          })

          if (response.ok) {
            break
          }
        } catch (err) {
          error = err
        }
      }

      if (!response || !response.ok) {
        throw error || new Error("All upload endpoints failed")
      }

      const result = await response.json()
      return result.url || result.path || result.image || ""
    } catch (error) {
      throw error
    }
  },
}

export const chatApi = {
  sendMessage: async (
    message: { roomId: string; senderId: number; recipientId: number; content: string },
    token: string,
  ) => {
    return apiRequest<{ message: ChatMessage }>("/chat/messages", "POST", { message }, token)
  },

  getMessages: async (roomId: string, token: string) => {
    try {
      return await apiRequest<{ messages: ChatMessage[] }>(`/chat/rooms/${roomId}/messages`, "GET", undefined, token)
    } catch (error) {
      try {
        return await apiRequest<{ messages: ChatMessage[] }>(`/messages/${roomId}`, "GET", undefined, token)
      } catch (secondError) {
        return { messages: [] }
      }
    }
  },

  getRooms: async (token: string) => {
    try {
      return await apiRequest<{ rooms: string[] }>("/chat/rooms", "GET", undefined, token)
    } catch (error) {
      return { rooms: [] }
    }
  },

  markAsRead: async (messageId: number, token: string) => {
    return apiRequest<void>(`/chat/messages/${messageId}/read`, "PATCH", undefined, token)
  },
}


```

## lib\auth-context.tsx

```typescript
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


```

## lib\auth-service.ts

```typescript
import axios from "axios"
import { API_URL } from "@/constants"

interface RegisterData {
  username: string
  email: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

export const register = async (data: RegisterData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      user: data,
    })
    return response.data
  } catch (error) {
    console.error("Registration error:", error)
    throw error
  }
}

export const login = async (data: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      user: data,
    })
    return response.data
  } catch (error) {
    console.error("Login error:", error)
    throw error
  }
}

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem("token")

    if (!token) {
      return null
    }

    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  } catch (error) {
    console.error("Get current user error:", error)
    return null
  }
}


```

## lib\auth.ts

```typescript
// Функция для сохранения токена в localStorage
export const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_token", token)
  }
}

// Функция для получения токена из localStorage
export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth_token")
  }
  return null
}

// Функция для удаления токена из localStorage (выход)
export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_token")
  }
}

// Функция для проверки авторизации пользователя
export const isAuthenticated = () => {
  const token = getToken()
  return !!token
}

// Функция для добавления токена к запросам
export const authFetch = async (url: string, options: RequestInit = {}) => {
  const token = getToken()

  const headers = {
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  }

  const response = await fetch(url, {
    ...options,
    headers,
  })

  return response
}


```

## lib\chat-api.ts

```typescript
import type { ChatMessage } from "./types"

const API_URL = "https://api.panchenko.work"

async function apiRequest<T>(endpoint: string, method = "GET", body?: any, token?: string): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const config: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      const errorMessage = errorData.message || `API error: ${response.status}`
      throw new Error(errorMessage)
    }

    const data = await response.json()
    return data as T
  } catch (error) {
    throw error
  }
}

export const chatApi = {
  sendMessage: async (
    message: { roomId: string; senderId: number; recipientId: number; content: string },
    token: string,
  ) => {
    return apiRequest<{ message: ChatMessage }>("/chat/messages", "POST", { message }, token)
  },

  getMessages: async (roomId: string, token: string) => {
    return apiRequest<{ messages: ChatMessage[] }>(`/chat/rooms/${roomId}/messages`, "GET", undefined, token)
  },

  getRooms: async (token: string) => {
    return apiRequest<{ rooms: string[] }>("/chat/rooms", "GET", undefined, token)
  },

  markAsRead: async (messageId: number, token: string) => {
    return apiRequest<void>(`/chat/messages/${messageId}/read`, "PATCH", undefined, token)
  },
}


```

## lib\chat-service.ts

```typescript
import type { Message } from "./types"
import io, { type Socket } from "socket.io-client"

class ChatService {
  private socket: Socket | null = null
  private currentUserId: number | null = null
  private apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.panchenko.work"
  private token: string | null = null
  private messageListeners: ((message: Message) => void)[] = []

  // Статический метод для генерации roomId
  static generateRoomId(userId1: number, userId2: number): string {
    return `room_${Math.min(userId1, userId2)}_${Math.max(userId1, userId2)}`
  }

  // Устанавливаем текущего пользователя
  setCurrentUser(userId: number) {
    this.currentUserId = userId
  }

  // Устанавливаем токен авторизации
  setToken(token: string) {
    this.token = token
  }

  // Регистрируем обработчик сообщений
  onMessage(callback: (message: Message) => void) {
    this.messageListeners.push(callback)

    // Возвращаем функцию для отписки
    return () => {
      this.messageListeners = this.messageListeners.filter((listener) => listener !== callback)
    }
  }

  // Подключение к WebSocket
  async connectToSocket(roomId: string, onMessageReceived: (message: Message) => void) {
    try {
      // Проверяем, имеет ли пользователь доступ к этой переписке
      if (this.currentUserId && !this.isUserParticipant(this.currentUserId, roomId)) {
        console.error("Access denied: User is not a participant of this conversation")
        return Promise.reject(new Error("Access denied"))
      }

      if (this.socket) {
        this.socket.disconnect()
      }

      this.socket = io(this.apiUrl, {
        transports: ["websocket"],
        extraHeaders: this.token
          ? {
              Authorization: `Bearer ${this.token}`,
            }
          : {},
      })

      return new Promise<void>((resolve, reject) => {
        if (!this.socket) {
          reject(new Error("Socket not initialized"))
          return
        }

        this.socket.on("connect", () => {
          this.socket?.emit("joinRoom", { roomId })
          resolve()
        })

        this.socket.on("connect_error", (error) => {
          console.error("WebSocket connection error:", error)
          reject(error)
        })

        this.socket.on("receiveMessage", (message: Message) => {
          // Проверяем, является ли текущий пользователь участником этого сообщения
          if (
            this.currentUserId &&
            message.senderId !== this.currentUserId &&
            message.recipientId !== this.currentUserId
          ) {
            console.error("Received message for another conversation, ignoring")
            return
          }

          onMessageReceived(message)

          // Уведомляем всех слушателей о новом сообщении
          this.messageListeners.forEach((listener) => {
            try {
              listener(message)
            } catch (error) {
              console.error("Error in message listener:", error)
            }
          })
        })

        this.socket.on("messageError", (error) => {
          console.error("Message error:", error)
        })
      })
    } catch (error) {
      console.error("Error connecting to socket:", error)
      return Promise.resolve() // Return resolved promise to prevent errors
    }
  }

  // Отключение от WebSocket
  disconnectFromSocket() {
    if (this.socket) {
      try {
        this.socket.disconnect()
      } catch (error) {
        console.error("Error disconnecting socket:", error)
      }
      this.socket = null
    }
  }

  // Отправка сообщения через WebSocket
  async sendMessage(message: Message): Promise<boolean> {
    try {
      // Проверяем, является ли текущий пользователь отправителем сообщения
      if (this.currentUserId && message.senderId !== this.currentUserId) {
        console.error("Access denied: User is not the sender of this message")
        return false
      }

      return new Promise<boolean>((resolve) => {
        if (!this.socket || !this.socket.connected) {
          this.sendMessageViaREST(message)
            .then(() => resolve(true))
            .catch((error) => {
              console.error("Failed to send message via REST API:", error)
              resolve(false)
            })
          return
        }

        this.socket.emit(
          "sendMessage",
          {
            roomId: message.roomId,
            senderId: message.senderId,
            recipientId: message.recipientId,
            content: message.content,
            clientMessageId: message.clientMessageId,
          },
          (response: any) => {
            if (response && response.error) {
              console.error("Error sending message via WebSocket:", response.error)
              // Пробуем отправить через REST API как запасной вариант
              this.sendMessageViaREST(message)
                .then(() => resolve(true))
                .catch((error) => {
                  console.error("Failed to send message via REST API:", error)
                  resolve(false)
                })
            } else {
              resolve(true)
            }
          },
        )

        // Также пробуем сохранить через REST API для надежности
        this.sendMessageViaREST(message).catch((error) => {
          console.warn("Failed to save message via REST API:", error)
          // Не отклоняем промис, так как это дополнительная отправка
        })
      })
    } catch (error) {
      console.error("Error in sendMessage:", error)
      return false
    }
  }

  // Отправка сообщения через REST API
  async sendMessageViaREST(message: Message): Promise<boolean> {
    try {
      // Проверяем, является ли текущий пользователь отправителем сообщения
      if (this.currentUserId && message.senderId !== this.currentUserId) {
        console.error("Access denied: User is not the sender of this message")
        return false
      }

      // Пробуем несколько эндпоинтов для повышения надежности
      const endpoints = [`${this.apiUrl}/chat/messages`, `${this.apiUrl}/messages`, `${this.apiUrl}/api/chat/messages`]

      let success = false
      let lastError = null

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
            },
            body: JSON.stringify({ message }),
          })

          if (response.ok) {
            success = true
            break
          } else {
            console.warn(`Endpoint ${endpoint} returned status ${response.status}`)
          }
        } catch (error) {
          lastError = error
          console.warn(`Failed to send message to ${endpoint}:`, error)
        }
      }

      if (!success && lastError) {
        throw lastError
      }

      return success
    } catch (error) {
      console.error("Error sending message via REST API:", error)
      return false
    }
  }

  // Метод для проверки, является ли пользователь участником переписки
  isUserParticipant(userId: number, roomId: string): boolean {
    if (!userId || !roomId) return false

    // Извлекаем ID участников из roomId
    // Формат roomId: "room_{userId1}_{userId2}", где userId1 < userId2
    const parts = roomId.split("_")
    if (parts.length !== 3) return false

    const participant1 = Number.parseInt(parts[1])
    const participant2 = Number.parseInt(parts[2])

    // Проверяем, является ли пользователь одним из участников
    return userId === participant1 || userId === participant2
  }

  // Получение сообщений из API
  async fetchMessagesFromAPI(roomId: string): Promise<Message[]> {
    try {
      // Проверяем, имеет ли пользователь доступ к этой переписке
      if (this.currentUserId && !this.isUserParticipant(this.currentUserId, roomId)) {
        console.error("Access denied: User is not a participant of this conversation")
        return []
      }

      // Используем только проверенный эндпоинт
      const endpoint = `${this.apiUrl.replace(/\/$/, "")}/chat/rooms/${roomId}/messages`

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
        },
      })

      if (!response.ok) {
        console.warn(`Endpoint ${endpoint} returned status ${response.status}`)
        // Сразу возвращаем пустой массив вместо попыток использовать другие эндпоинты
        return []
      }

      const data = await response.json()

      // Проверяем различные форматы ответа
      let messages: any[] = []

      if (Array.isArray(data)) {
        // Если ответ - это массив
        messages = data
      } else if (data.messages && Array.isArray(data.messages)) {
        // Если ответ - это объект с полем messages
        messages = data.messages
      } else {
        console.warn("Unexpected API response format:", data)
        return []
      }

      // Фильтруем сообщения, чтобы показывать только те, в которых пользователь является участником
      const filteredMessages = messages.filter((msg) => {
        const senderId = msg.senderId || (msg.sender && msg.sender.id)
        const recipientId = msg.recipientId || (msg.recipient && msg.recipient.id)

        return this.currentUserId && (senderId == this.currentUserId || recipientId == this.currentUserId)
      })

      // Преобразуем сообщения в нужный формат
      return filteredMessages.map((msg) => this.convertApiMessageToMessage(msg, roomId))
    } catch (error) {
      console.error("Error fetching messages from API:", error)
      return []
    }
  }

  // Получение сообщений
  async getMessages(roomId: string, currentUserId: number, recipientId: number): Promise<Message[]> {
    try {
      // Проверяем, имеет ли пользователь доступ к этой переписке
      if (!this.isUserParticipant(currentUserId, roomId)) {
        console.error("Access denied: User is not a participant of this conversation")
        return []
      }

      // Сначала пробуем получить из API
      const apiMessages = await this.fetchMessagesFromAPI(roomId)

      if (apiMessages && apiMessages.length > 0) {
        // Нормализуем сообщения и сохраняем в localStorage
        const normalizedMessages = this.normalizeMessages(apiMessages, roomId, currentUserId, recipientId)
        this.saveMessagesToLocalStorage(roomId, normalizedMessages)
        return normalizedMessages
      }

      // Если из API не получилось, берем из localStorage
      return this.getMessagesFromLocalStorage(roomId)
    } catch (error) {
      console.error("Error getting messages:", error)
      // В случае ошибки возвращаем сообщения из localStorage
      return this.getMessagesFromLocalStorage(roomId)
    }
  }

  // Нормализация сообщений (исправление полей, если они отсутствуют)
  normalizeMessages(messages: any[], roomId: string, currentUserId: number, recipientId: number): Message[] {
    return messages
      .filter((msg) => {
        // Пропускаем сообщения без необходимых полей
        if (!msg.content) {
          console.warn("Skipping message without content:", msg)
          return false
        }

        // Проверяем, является ли текущий пользователь участником этого сообщения
        const senderId = this.getSenderId(msg, currentUserId, recipientId)
        const msgRecipientId = this.getRecipientId(msg, currentUserId, recipientId)

        if (senderId !== currentUserId && msgRecipientId !== currentUserId) {
          console.warn("Skipping message - user is not a participant:", msg)
          return false
        }

        return true
      })
      .map((msg) => {
        // Нормализуем формат сообщения
        const normalizedMsg: Message = {
          id: msg.id?.toString() || Date.now().toString(),
          content: msg.content || "",
          roomId: msg.roomId || roomId,
          createdAt: msg.createdAt || new Date().toISOString(),
          // Восстанавливаем senderId и recipientId, если они отсутствуют
          senderId: this.getSenderId(msg, currentUserId, recipientId),
          recipientId: this.getRecipientId(msg, currentUserId, recipientId),
        }
        return normalizedMsg
      })
  }

  // Получение senderId из сообщения или восстановление из контекста
  private getSenderId(msg: any, currentUserId: number, recipientId: number): number {
    // Если есть прямое поле senderId, используем его
    if (msg.senderId !== undefined && msg.senderId !== null) {
      return Number(msg.senderId)
    }

    // Если есть sender.id, используем его
    if (msg.sender && msg.sender.id !== undefined) {
      return Number(msg.sender.id)
    }

    // Если есть recipientId и это не текущий пользователь, значит отправитель - текущий пользователь
    if (msg.recipientId !== undefined && Number(msg.recipientId) !== currentUserId) {
      return currentUserId
    }

    // Если ничего не помогло, предполагаем, что это либо текущий пользователь, либо собеседник
    // на основе других данных (например, если сообщение отправлено "мной", то senderId = currentUserId)
    if (msg.isMine || msg.isFromMe) {
      return currentUserId
    }

    // В крайнем случае, если ничего не помогло, возвращаем recipientId как запасной вариант
    return recipientId
  }

  // Получение recipientId из сообщения или восстановление из контекста
  private getRecipientId(msg: any, currentUserId: number, recipientId: number): number {
    // Если есть прямое поле recipientId, используем его
    if (msg.recipientId !== undefined && msg.recipientId !== null) {
      return Number(msg.recipientId)
    }

    // Если есть recipient.id, используем его
    if (msg.recipient && msg.recipient.id !== undefined) {
      return Number(msg.recipient.id)
    }

    // Если есть senderId и это не текущий пользователь, значит получатель - текущий пользователь
    if (msg.senderId !== undefined && Number(msg.senderId) !== currentUserId) {
      return currentUserId
    }

    // Если ничего не помогло, предполагаем, что это либо текущий пользователь, либо собеседник
    if (msg.isMine || msg.isFromMe) {
      return recipientId
    }

    // В крайнем случае, если ничего не помогло, возвращаем currentUserId как запасной вариант
    return currentUserId
  }

  // Сохранение сообщений в localStorage
  saveMessagesToLocalStorage(roomId: string, messages: Message[]) {
    try {
      localStorage.setItem(`chat_messages_${roomId}`, JSON.stringify(messages))
    } catch (error) {
      console.error("Error saving messages to localStorage:", error)
    }
  }

  // Получение сообщений из localStorage
  getMessagesFromLocalStorage(roomId: string): Message[] {
    try {
      // Проверяем, имеет ли пользователь доступ к этой переписке
      if (this.currentUserId && !this.isUserParticipant(this.currentUserId, roomId)) {
        console.error("Access denied: User is not a participant of this conversation")
        return []
      }

      const messagesJson = localStorage.getItem(`chat_messages_${roomId}`)
      if (messagesJson) {
        const messages = JSON.parse(messagesJson)

        // Фильтруем сообщения, чтобы показывать только те, в которых пользователь является участником
        return messages.filter((msg: Message) => {
          return this.currentUserId && (msg.senderId == this.currentUserId || msg.recipientId == this.currentUserId)
        })
      }
    } catch (error) {
      console.error("Error getting messages from localStorage:", error)
    }
    return []
  }

  // Очистка сообщений из localStorage
  clearMessagesToLocalStorage(roomId: string) {
    try {
      localStorage.removeItem(`chat_messages_${roomId}`)
    } catch (error) {
      console.error("Error clearing messages from localStorage:", error)
    }
  }

  // Добавим новый метод для преобразования сообщений из API
  private convertApiMessageToMessage(apiMessage: any, roomId: string): Message {
    try {
      // Проверяем структуру данных из API

      // Извлекаем senderId и recipientId из объектов sender и recipient
      let senderId = apiMessage.senderId
      let recipientId = apiMessage.recipientId

      // Если senderId и recipientId не числа, а объекты sender и recipient
      if (!senderId && apiMessage.sender && typeof apiMessage.sender === "object") {
        senderId = apiMessage.sender.id
      }

      if (!recipientId && apiMessage.recipient && typeof apiMessage.recipient === "object") {
        recipientId = apiMessage.recipient.id
      }

      // Проверяем, что senderId и recipientId определены
      if (!senderId || !recipientId) {
        console.warn("Message missing senderId or recipientId:", apiMessage)
        // Используем значения по умолчанию, если не удалось извлечь
        senderId = senderId || this.currentUserId || 0
        recipientId = recipientId || 0
      }

      // Преобразуем в числа для безопасности
      senderId = Number(senderId)
      recipientId = Number(recipientId)

      // Проверяем, является ли текущий пользователь участником этого сообщения
      if (this.currentUserId && senderId !== this.currentUserId && recipientId !== this.currentUserId) {
        console.warn("Skipping message - user is not a participant:", apiMessage)
        throw new Error("User is not a participant of this message")
      }

      return {
        id: apiMessage.id?.toString() || Date.now().toString(),
        content: apiMessage.content || "",
        roomId: apiMessage.roomId || roomId,
        createdAt: apiMessage.createdAt || new Date().toISOString(),
        senderId: senderId,
        recipientId: recipientId,
        read: apiMessage.read || false,
      }
    } catch (error) {
      console.error("Error converting API message:", error)
      // Return a default message object to prevent errors
      return {
        id: Date.now().toString(),
        content: apiMessage.content || "Error displaying message",
        roomId: roomId,
        createdAt: new Date().toISOString(),
        senderId: 0,
        recipientId: 0,
        read: false,
      }
    }
  }

  // Альтернативный метод загрузки чатов
  loadChatsAlternative = async (user: any, addSampleChat: any) => {
    if (!user?.token) return

    try {
      // Пробуем получить сообщения через эндпоинт chat/messages вместо /messages
      const response = await fetch("https://api.panchenko.work/chat/messages", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      // Остальной код обработки данных...
    } catch (error) {
      console.error("Error loading chats alternative:", error)
      // Если и этот метод не сработал, сразу добавляем пример чата
      // без попыток использовать другие эндпоинты
      addSampleChat()
    }
  }
}

export const chatService = new ChatService()


```

## lib\image-utils.ts

```typescript
export function formatImageUrl(imageUrl: string | undefined | null): string {
  if (!imageUrl) {
    return "/placeholder.svg?height=400&width=400"
  }

  if (imageUrl.startsWith("http")) {
    return imageUrl
  }

  if (imageUrl.startsWith("uploads/")) {
    return `https://api.panchenko.work/${imageUrl}`
  }

  return imageUrl
}


```

## lib\types.ts

```typescript
export interface User {
  id: number
  username: string
  email: string
  bio: string
  img: string
  token: string
}

export interface LoginUser {
  email: string
  password: string
}

export interface RegisterUser {
  username: string
  email: string
  password: string
}

export interface UpdateUser {
  username?: string
  email?: string
  bio?: string
  img?: string
  password?: string
}

export interface Post {
  id: number
  slug: string
  title: string
  content: string
  img: string
  tagList: string[]
  favoritesCount: number
  author: Profile
  comments: Comment[]
  createdAt: string
  updatedAt: string
  favorited: boolean
}

export interface CreatePost {
  title: string
  content: string
  img: string
  tagList?: string[]
}

export interface UpdatePost {
  title?: string
  content?: string
  img?: string
  tagList?: string[]
}

export interface Comment {
  id: number
  body: string
  createdAt: string
  author: Profile
}

export interface CreateComment {
  body: string
}

export interface Profile {
  id: number
  username: string
  bio: string
  img: string
  following: boolean
  followersCount: number
  followingCount: number
}

export interface Notification {
  id: number
  type: string
  message: string
  createdAt: string
  isRead: boolean
  initiator?: {
    id: number
    username: string
    img?: string
    bio?: string
  }
}

export interface ChatMessage {
  id: number
  content: string
  senderId: number
  recipientId: number
  roomId: string
  createdAt: string
  read?: boolean
  clientMessageId?: string
  pending?: boolean
}

export interface SendChatMessage {
  roomId: string
  senderId: number
  recipientId: number
  content: string
  clientMessageId?: string
}

export interface ChatConversation {
  id: string
  participants: Profile[]
  lastMessage?: ChatMessage
  unreadCount: number
}

export type Message = ChatMessage


```

## lib\utils.ts

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return new Intl.NumberFormat().format(num)
}


```

## lib\validation.ts

```typescript
// Валидация email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Валидация имени пользователя
export const isValidUsername = (username: string): boolean => {
  // Имя пользователя должно содержать только буквы, цифры, точки и подчеркивания
  // и быть длиной от 3 до 30 символов
  const usernameRegex = /^[a-zA-Z0-9._]{3,30}$/
  return usernameRegex.test(username)
}

// Валидация пароля
export const isValidPassword = (password: string): boolean => {
  // Пароль должен быть не менее 6 символов
  return password.length >= 6
}

// Валидация полного имени
export const isValidFullName = (fullName: string): boolean => {
  // Полное имя должно содержать хотя бы 2 символа
  return fullName.trim().length >= 2
}

// Функция для валидации всех полей формы регистрации
export const validateSignupForm = (
  email: string,
  fullName: string,
  username: string,
  password: string,
): { isValid: boolean; error?: string } => {
  if (!email || !fullName || !username || !password) {
    return { isValid: false, error: "All fields are required" }
  }

  if (!isValidEmail(email)) {
    return { isValid: false, error: "Invalid email format" }
  }

  if (!isValidFullName(fullName)) {
    return { isValid: false, error: "Full name must be at least 2 characters" }
  }

  if (!isValidUsername(username)) {
    return {
      isValid: false,
      error: "Username must be 3-30 characters and can only contain letters, numbers, periods, and underscores",
    }
  }

  if (!isValidPassword(password)) {
    return { isValid: false, error: "Password must be at least 6 characters" }
  }

  return { isValid: true }
}


```

## middleware.ts

```typescript
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


```

## next-env.d.ts

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

## styles\globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

```

## tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        instagram: {
          blue: "#0095f6",
          darkBlue: "#00376b",
          gray: "#dbdbdb",
          lightGray: "#fafafa",
          text: "#737373",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}


```

# Дополнительные файлы

⚠️ Файл **index.html** не найден и пропущен.

