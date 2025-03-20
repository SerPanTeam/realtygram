"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { formatImageUrl } from "@/lib/image-utils"
import { useAuth } from "@/lib/auth-context"
import type { Profile } from "@/lib/types"
import { toast } from "@/hooks/use-toast"

interface MessagesListProps {
  onSelectUser?: (username: string) => void
  isMobile?: boolean
}

export function MessagesList({ onSelectUser, isMobile = false }: MessagesListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Profile[]>([])
  const [recentChats, setRecentChats] = useState<Profile[]>([])
  const [loading, setLoading] = useState(false)
  const [searching, setSearching] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  // Load recent chats
  useEffect(() => {
    const loadRecentChats = async () => {
      if (!user?.token) return

      setLoading(true)
      try {
        // Здесь мы должны загрузить недавние чаты из API
        // Но пока просто загрузим список пользователей для демонстрации
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/search?username=`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          // Фильтруем, чтобы не показывать текущего пользователя
          const filteredUsers = data.users.filter((profile: Profile) => profile.id !== user.id)
          setRecentChats(filteredUsers)
        }
      } catch (error) {
        console.error("Error loading recent chats:", error)
        toast({
          title: "Error loading chats",
          description: "Failed to load recent chats. Please try again.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadRecentChats()
  }, [user])

  // Handle search
  const handleSearch = async () => {
    if (!user?.token || !searchQuery.trim()) return

    setSearching(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/search?username=${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        // Фильтруем, чтобы не показывать текущего пользователя
        const filteredUsers = data.users.filter((profile: Profile) => profile.id !== user.id)
        setSearchResults(filteredUsers)
      }
    } catch (error) {
      console.error("Error searching users:", error)
      toast({
        title: "Error searching users",
        description: "Failed to search users. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSearching(false)
    }
  }

  const handleSelectUser = (username: string) => {
    if (onSelectUser) {
      onSelectUser(username)
    } else {
      router.push(`/messages/${username}`)
    }
  }

  // Show loading state
  if (loading && recentChats.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-[#dbdbdb]">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="pr-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
            onClick={handleSearch}
            disabled={searching || !searchQuery.trim()}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Search results */}
      {searchQuery.trim() && searchResults.length > 0 && (
        <div className="p-4 border-b border-[#dbdbdb]">
          <h3 className="text-sm font-semibold text-[#737373] mb-2">Search Results</h3>
          <div className="space-y-2">
            {searchResults.map((profile) => (
              <div
                key={profile.id}
                className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={() => handleSelectUser(profile.username)}
              >
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                  <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{profile.username}</p>
                  <p className="text-xs text-[#737373]">{profile.bio || `@${profile.username}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No search results */}
      {searchQuery.trim() && searchResults.length === 0 && !searching && (
        <div className="p-4 text-center text-[#737373]">
          <p>No users found matching "{searchQuery}"</p>
        </div>
      )}

      {/* Recent chats */}
      <div className="flex-1 overflow-y-auto">
        {recentChats.length > 0 ? (
          <div className="p-4">
            <h3 className="text-sm font-semibold text-[#737373] mb-2">Recent</h3>
            <div className="space-y-2">
              {recentChats.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  onClick={() => handleSelectUser(profile.username)}
                >
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                    <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{profile.username}</p>
                    <p className="text-xs text-[#737373]">{profile.bio || `@${profile.username}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-4 text-center">
            <p className="text-lg font-semibold mb-2">No messages yet</p>
            <p className="text-[#737373] mb-4">Search for users to start a conversation</p>
          </div>
        )}
      </div>
    </div>
  )
}

