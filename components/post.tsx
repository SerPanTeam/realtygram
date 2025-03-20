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

