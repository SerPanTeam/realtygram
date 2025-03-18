"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { formatImageUrl } from "@/lib/image-utils"

const MOCK_USERS = [
  {
    id: "101",
    username: "sashaa",
    fullName: "Sasha",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: true,
  },
  {
    id: "102",
    username: "nature_lover",
    fullName: "Nature Photography",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: false,
  },
  {
    id: "103",
    username: "traveler",
    fullName: "World Traveler",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: false,
  },
  {
    id: "104",
    username: "photographer",
    fullName: "Professional Photographer",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: true,
  },
  {
    id: "105",
    username: "autumn_fan",
    fullName: "Autumn Colors",
    avatar: "/placeholder.svg?height=32&width=32",
    isVerified: false,
  },
]

const MOCK_POPULAR_POSTS = [
  {
    id: "1",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 1024,
  },
  {
    id: "2",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 876,
  },
  {
    id: "3",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 743,
  },
  {
    id: "4",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 692,
  },
  {
    id: "5",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 581,
  },
  {
    id: "6",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 429,
  },
  {
    id: "7",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 387,
  },
  {
    id: "8",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 352,
  },
  {
    id: "9",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final_project.png-SJh5ACjfbUavtx6G4ZzTCvX4o2EZLl.jpeg",
    likes: 298,
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches))
      } catch (e) {
        console.error("Error parsing recent searches:", e)
        setRecentSearches([])
      }
    } else {
      const defaultRecent = [MOCK_USERS[0]]
      setRecentSearches(defaultRecent)
      localStorage.setItem("recentSearches", JSON.stringify(defaultRecent))
    }
  }, [])

  useEffect(() => {
    if (searchQuery.trim()) {
      setLoading(true)

      setTimeout(() => {
        const results = MOCK_USERS.filter(
          (user) =>
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.fullName.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setSearchResults(results)
        setLoading(false)
      }, 300)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const addToRecentSearches = (user) => {
    const isExisting = recentSearches.some((item) => item.id === user.id)

    if (!isExisting) {
      const updatedSearches = [user, ...recentSearches].slice(0, 5)
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

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-4xl py-8 px-4">
          <div className="relative mb-6">
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

          {searchQuery ? (
            <div className="bg-white rounded-lg shadow-sm border border-[#dbdbdb]">
              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
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
                          <AvatarImage src={formatImageUrl(user.avatar)} alt={user.username} />
                          <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <p className="font-semibold">{user.username}</p>
                          <p className="text-sm text-[#737373]">{user.fullName}</p>
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
              {recentSearches.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm border border-[#dbdbdb] mb-8">
                  <div className="p-4 border-b border-[#dbdbdb] flex justify-between items-center">
                    <h2 className="font-semibold">Recent</h2>
                  </div>

                  <div className="divide-y divide-[#dbdbdb]">
                    {recentSearches.map((user) => (
                      <div key={user.id} className="flex items-center p-4 hover:bg-gray-50">
                        <Link href={`/profile/${user.id}`} className="flex items-center flex-1">
                          <Avatar className="h-12 w-12 mr-3">
                            <AvatarImage src={user.avatar} alt={user.username} />
                            <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>

                          <div className="flex-1 min-w-0">
                            <p className="font-semibold">{user.username}</p>
                            <p className="text-sm text-[#737373]">{user.fullName}</p>
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

              <div className="mt-8">
                <h2 className="font-semibold text-lg mb-4">Explore</h2>
                <div className="grid grid-cols-3 gap-1">
                  {MOCK_POPULAR_POSTS.map((post) => (
                    <Link key={post.id} href={`/p/${post.id}`} className="relative aspect-square">
                      <Image
                        src={formatImageUrl(post.image) || "/placeholder.svg"}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

