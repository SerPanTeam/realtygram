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

