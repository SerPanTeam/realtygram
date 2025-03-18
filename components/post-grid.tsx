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

