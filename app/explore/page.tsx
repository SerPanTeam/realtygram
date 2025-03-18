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

