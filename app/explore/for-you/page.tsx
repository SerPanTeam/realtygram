"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { postApi } from "@/lib/api"
import type { Post } from "@/lib/types"
import { formatImageUrl } from "@/lib/image-utils"
import { Skeleton } from "@/components/ui/skeleton"

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
        <div className="mx-auto max-w-full md:max-w-7xl py-4 px-3 md:py-6 md:px-4 pb-16 md:pb-4">
          <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-6">For You</h1>

          <p className="text-[#737373] mb-4 md:mb-6 text-sm md:text-base">
            Posts we think you might like, based on your activity and interests.
          </p>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="aspect-square w-full rounded-md" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {posts.map((post) => (
                <div key={post.id} className="space-y-2">
                  <Link href={`/p/${post.slug}`} className="relative aspect-square block overflow-hidden rounded-md">
                    <img
                      src={formatImageUrl(post.img) || "/placeholder.svg"}
                      alt={post.title || "Post image"}
                      className="object-cover w-full h-full"
                    />
                  </Link>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/profile/${post.author.username}`}
                      className="font-medium hover:underline text-sm md:text-base"
                    >
                      {post.author.username}
                    </Link>

                    <div className="flex items-center space-x-2 text-xs md:text-sm text-[#737373]">
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

