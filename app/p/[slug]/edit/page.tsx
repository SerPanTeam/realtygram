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

