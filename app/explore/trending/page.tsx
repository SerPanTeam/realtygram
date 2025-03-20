"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
import { Skeleton } from "@/components/ui/skeleton"

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

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-full md:max-w-3xl py-4 px-3 md:py-6 md:px-4 pb-16 md:pb-4">
          <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-6">Trending</h1>

          <p className="text-[#737373] mb-4 md:mb-6 text-sm md:text-base">
            See what's trending on RealtyGRAM right now.
          </p>

          {loading ? (
            <div className="space-y-4 md:space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-[#dbdbdb] rounded-lg overflow-hidden">
                  <div className="p-3 md:p-4 flex items-center">
                    <Skeleton className="h-8 w-8 rounded-full mr-3" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="aspect-square w-full" />
                  <div className="p-3 md:p-4 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 md:space-y-8">
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

  const imageUrl = formatImageUrl(post.img)

  return (
    <div className="border border-[#dbdbdb] rounded-lg overflow-hidden">
      {/* Шапка поста */}
      <div className="flex items-center justify-between p-3 md:p-4">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 mr-2 md:mr-3">
            <AvatarImage
              src={formatImageUrl(post.author.img) || "/placeholder.svg?height=32&width=32"}
              alt={post.author.username}
            />
            <AvatarFallback>{post.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div>
            <div className="flex items-center">
              <Link
                href={`/profile/${post.author.username}`}
                className="font-semibold hover:underline text-sm md:text-base"
              >
                {post.author.username}
              </Link>
            </div>
          </div>
        </div>

        <Button variant="ghost" size="sm" className="text-[#0095f6] text-xs md:text-sm">
          {post.author.following ? "Following" : "Follow"}
        </Button>
      </div>

      {/* Изображение поста */}
      <div className="relative aspect-square w-full">
        <Link href={`/p/${post.slug}`}>
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={post.title || "Post image"}
            className="object-cover w-full h-full"
          />
        </Link>
      </div>

      {/* Информация о посте */}
      <div className="p-3 md:p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Обновим отображение иконки лайка */}
            <button onClick={handleLike}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
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
                className="h-5 w-5 md:h-6 md:w-6"
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
                className="h-5 w-5 md:h-6 md:w-6"
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
              className="h-5 w-5 md:h-6 md:w-6"
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
          <p className="font-medium text-sm md:text-base">{formatNumber(likesCount)} likes</p>
        </div>

        <div className="mb-2">
          <Link href={`/profile/${post.author.username}`} className="font-medium text-sm md:text-base hover:underline">
            {post.author.username}
          </Link>{" "}
          <span className="text-sm md:text-base">
            {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
          </span>
        </div>

        <Link href={`/p/${post.slug}`} className="text-xs md:text-sm text-[#737373]">
          View all {formatNumber(stats.comments)} comments
        </Link>
      </div>
    </div>
  )
}

