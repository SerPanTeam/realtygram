"use client"

import type React from "react"
import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"
import type { Post } from "@/lib/types"
import { formatImageUrl } from "@/lib/image-utils"
import { useEffect, useState } from "react"
import { postApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"

interface PostGridProps {
  posts: Post[]
  loading?: boolean
  emptyMessage?: string
  emptyIcon?: React.ReactNode
}

export function PostGrid({ posts, loading, emptyMessage = "No posts yet", emptyIcon }: PostGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-1">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="aspect-square w-full" />
        ))}
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8 md:py-12">
        {emptyIcon}
        <p className="text-lg font-medium mb-2">{emptyMessage}</p>
        <p className="text-muted-foreground text-sm md:text-base">When you post photos, they'll appear here.</p>
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
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
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

  // Обработчик для мобильных устройств
  const handleTouch = (e: React.TouchEvent) => {
    e.preventDefault()
    setIsTouched(!isTouched)
  }

  return (
    <Link
      key={post.id}
      href={`/p/${post.slug}`}
      className="relative aspect-square block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouch}
    >
      <img
        src={formatImageUrl(post.img) || "/placeholder.svg"}
        alt={post.title || "Post"}
        className="object-cover w-full h-full"
      />
      {/* Overlay with info on hover or touch */}
      {(isHovered || isTouched) && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <div className="flex items-center space-x-4">
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
      )}
    </Link>
  )
}

