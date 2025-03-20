"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { Post as PostType } from "@/lib/types"
import { postApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"
import { formatImageUrl } from "@/lib/image-utils"
import { useRouter } from "next/navigation"

interface FeedPostProps {
  post: PostType
}

export function FeedPost({ post }: FeedPostProps) {
  const [liked, setLiked] = useState(post.favorited === true)
  console.log(post);
  const [likesCount, setLikesCount] = useState(post.favoritesCount)
  const [commentsCount, setCommentsCount] = useState(post.comments?.length || 0)
  const { user } = useAuth()
  const router = useRouter()

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
    if (!user?.token) {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
      return
    }

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
    const diffMinutes = Math.floor(diffTime / (1000 * 60))
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffMinutes < 1) {
      return "just now"
    } else if (diffMinutes < 60) {
      return `${diffMinutes}m`
    } else if (diffHours < 24) {
      return `${diffHours}h`
    } else if (diffDays < 7) {
      return `${diffDays}d`
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)}w`
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

  const imageUrl = formatImageUrl(post.img) || "/placeholder.svg"

  return (
    <article className="mb-6 border border-[#dbdbdb] rounded-sm bg-white">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <Link href={`/profile/${encodeURIComponent(post.author.username)}`} className="flex items-center">
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
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={post.title || "Post image"}
            className="object-cover w-full h-full"
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
          <Link href={`/profile/${encodeURIComponent(post.author.username)}`} className="font-semibold mr-1">
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
              href={`/profile/${encodeURIComponent(post.comments[post.comments.length - 1].author.username)}`}
              className="font-semibold mr-1 hover:underline"
            >
              {post.comments[post.comments.length - 1].author.username}
            </Link>
            <span>
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

