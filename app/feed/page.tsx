"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Check } from "lucide-react"
import { postApi } from "@/lib/api"
import type { Post as PostType } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { FeedPost } from "@/components/feed-post"

export default function FeedPage() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        if (user && user.token) {
          // Get feed for logged in user
          const { posts } = await postApi.feed({}, user.token)
          setPosts(posts)
        } else {
          // If user is not logged in, redirect to login page
          window.location.href = "/login"
        }
      } catch (err) {
        console.error("Error fetching posts:", err)
        setError("Failed to load posts. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [user])

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <p className="text-red-500 mb-4">{error}</p>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-[#0095f6] text-white rounded-md">
              Try again
            </button>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-xl font-semibold mb-2">Welcome to your feed</h2>
            <p className="text-[#737373] mb-4">Follow users to see their posts here</p>
            <button
              onClick={() => (window.location.href = "/explore")}
              className="px-4 py-2 bg-[#0095f6] text-white rounded-md"
            >
              Explore users
            </button>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-5xl py-6 px-4">
          {/* Двухколоночная сетка для постов на десктопе */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {posts.map((post, index) => (
              <FeedPost key={`${post.id}-${index}`} post={post} />
            ))}
          </div>

          {/* Индикатор конца ленты */}
          <div className="mt-12 flex flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#dbdbdb]">
              <Check className="h-8 w-8 text-[#0095f6]" />
            </div>
            <h3 className="mt-4 text-lg font-medium">You've seen all the updates</h3>
            <p className="text-sm text-[#737373]">You have viewed all new publications</p>
          </div>

          {/* Футер */}
          <footer className="mt-8 text-center text-xs text-[#737373] pb-16 md:pb-4">
            <p>© 2025 RealtyGRAM</p>
          </footer>
        </div>
      </main>

      {/* Мобильная навигация */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[#dbdbdb] bg-white md:hidden z-10">
        <div className="flex justify-around py-3">
          <a href="/feed" className="flex flex-col items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198c.031-.028.062-.056.091-.086L12 5.43z" />
            </svg>
            <span>Home</span>
          </a>
          <a href="/search" className="flex flex-col items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search</span>
          </a>
          <a href="/explore" className="flex flex-col items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Explore</span>
          </a>
          <a href="/messages" className="flex flex-col items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Messages</span>
          </a>
          <a href="/profile" className="flex flex-col items-center text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Profile</span>
          </a>
        </div>
      </div>
    </div>
  )
}

