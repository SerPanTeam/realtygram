"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { formatImageUrl } from "@/lib/image-utils"
import { useAuth } from "@/lib/auth-context"
import { userApi, postApi } from "@/lib/api"
import { Skeleton } from "@/components/ui/skeleton"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [loading, setLoading] = useState(false)
  const [popularPosts, setPopularPosts] = useState([])
  const [loadingPosts, setLoadingPosts] = useState(true)
  const { user } = useAuth()

  // Загрузка недавних поисков из localStorage при инициализации
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches))
      } catch (e) {
        console.error("Error parsing recent searches:", e)
        setRecentSearches([])
      }
    }
  }, [])

  // Загрузка популярных постов
  useEffect(() => {
    const fetchPopularPosts = async () => {
      setLoadingPosts(true)
      try {
        const { posts } = await postApi.list({ limit: 9, sort: "popular" }, user?.token)
        setPopularPosts(posts)
      } catch (err) {
        console.error("Error fetching popular posts:", err)
        setPopularPosts([])
      } finally {
        setLoadingPosts(false)
      }
    }

    fetchPopularPosts()
  }, [user])

  // Поиск пользователей при вводе запроса
  useEffect(() => {
    if (searchQuery.trim()) {
      setLoading(true)

      const searchUsers = async () => {
        try {
          const { users } = await userApi.search(searchQuery)
          setSearchResults(users)
        } catch (err) {
          console.error("Error searching users:", err)
          setSearchResults([])
        } finally {
          setLoading(false)
        }
      }

      const debounce = setTimeout(() => {
        searchUsers()
      }, 300)

      return () => clearTimeout(debounce)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const addToRecentSearches = (user) => {
    const isExisting = recentSearches.some((item) => item.id === user.id)

    if (!isExisting) {
      const updatedSearches = [user, ...recentSearches].slice(0, 5) // Ограничиваем до 5 последних поисков
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    }
  }

  const removeFromRecentSearches = (userId) => {
    const updatedSearches = recentSearches.filter((user) => user.id !== userId)
    setRecentSearches(updatedSearches)
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px] w-full pb-16 md:pb-0">
        <div className="mx-auto max-w-4xl py-4 md:py-8 px-4">
          {/* Поисковая строка */}
          <div className="relative mb-4 md:mb-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-10 bg-[#efefef] border-none"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] hover:text-black"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Результаты поиска или недавние поиски */}
          {searchQuery ? (
            <div className="bg-white rounded-lg shadow-sm border border-[#dbdbdb]">
              {loading ? (
                <div className="p-4 space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-32" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="divide-y divide-[#dbdbdb]">
                  {searchResults.length > 0 ? (
                    searchResults.map((user) => (
                      <Link
                        key={user.id}
                        href={`/profile/${user.username}`}
                        onClick={() => addToRecentSearches(user)}
                        className="flex items-center p-4 hover:bg-gray-50"
                      >
                        <Avatar className="h-12 w-12 mr-3">
                          <AvatarImage src={formatImageUrl(user.img)} alt={user.username} />
                          <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <p className="font-semibold">{user.username}</p>
                          <p className="text-sm text-[#737373]">{user.bio || user.fullName}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-6 text-center">
                      <p className="text-[#737373]">No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Недавние поиски */}
              {recentSearches.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm border border-[#dbdbdb] mb-6">
                  <div className="p-4 border-b border-[#dbdbdb] flex justify-between items-center">
                    <h2 className="font-semibold">Recent</h2>
                  </div>

                  <div className="divide-y divide-[#dbdbdb]">
                    {recentSearches.map((user) => (
                      <div key={user.id} className="flex items-center p-4 hover:bg-gray-50">
                        <Link href={`/profile/${user.username}`} className="flex items-center flex-1">
                          <Avatar className="h-12 w-12 mr-3">
                            <AvatarImage src={formatImageUrl(user.img)} alt={user.username} />
                            <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>

                          <div className="flex-1 min-w-0">
                            <p className="font-semibold">{user.username}</p>
                            <p className="text-sm text-[#737373]">{user.bio || user.fullName}</p>
                          </div>
                        </Link>

                        <button
                          onClick={() => removeFromRecentSearches(user.id)}
                          className="text-[#737373] hover:text-black"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Популярные посты */}
              <div className="mt-4 md:mt-8">
                <h2 className="font-semibold text-lg mb-4">Explore</h2>
                {loadingPosts ? (
                  <div className="grid grid-cols-3 gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <Skeleton key={i} className="aspect-square w-full" />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-1">
                    {popularPosts.map((post) => (
                      <Link key={post.id} href={`/p/${post.slug}`} className="relative aspect-square">
                        <img
                          src={formatImageUrl(post.img) || "/placeholder.svg"}
                          alt={post.title || ""}
                          className="object-cover w-full h-full"
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

