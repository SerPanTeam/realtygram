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

