"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { profileApi } from "@/lib/api"
import { formatImageUrl } from "@/lib/image-utils"
import type { Profile } from "@/lib/types"

interface UserSearchProps {
  onSelectUser?: (profile: Profile) => void
  placeholder?: string
  className?: string
}

export function UserSearch({ onSelectUser, placeholder = "Search users...", className = "" }: UserSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Profile[]>([])
  const [recentSearches, setRecentSearches] = useState<Profile[]>([])
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const savedSearches = localStorage.getItem("recentUserSearches")
      if (savedSearches) {
        setRecentSearches(JSON.parse(savedSearches))
      }
    } catch (error) {
      console.error("Error loading recent searches:", error)
    }
  }, [])

  // Search for users when query changes
  useEffect(() => {
    if (!searchQuery.trim() || !user?.token) {
      setSearchResults([])
      return
    }

    const searchUsers = async () => {
      setLoading(true)
      try {
        // Try to get user by username first
        try {
          const { profile } = await profileApi.get(searchQuery, user.token)
          setSearchResults([profile])
        } catch (error) {
          // If not found, try to search by partial match
          const response = await fetch(
            `https://api.panchenko.work/users/search?username=${encodeURIComponent(searchQuery)}`,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
              },
            },
          )

          if (response.ok) {
            const data = await response.json()
            setSearchResults(data.users || [])
          } else {
            setSearchResults([])
          }
        }
      } catch (error) {
        console.error("Error searching users:", error)
        setSearchResults([])
      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(() => {
      searchUsers()
    }, 500)

    return () => clearTimeout(debounce)
  }, [searchQuery, user])

  // Add user to recent searches
  const addToRecentSearches = (profile: Profile) => {
    // Check if already in recent searches
    const isExisting = recentSearches.some((item) => item.id === profile.id)

    if (!isExisting) {
      const updatedSearches = [profile, ...recentSearches].slice(0, 5) // Keep only 5 most recent
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentUserSearches", JSON.stringify(updatedSearches))
    }

    // Call the onSelectUser callback if provided
    if (onSelectUser) {
      onSelectUser(profile)
    }
  }

  // Remove user from recent searches
  const removeFromRecentSearches = (userId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()

    const updatedSearches = recentSearches.filter((user) => user.id !== userId)
    setRecentSearches(updatedSearches)
    localStorage.setItem("recentUserSearches", JSON.stringify(updatedSearches))
  }

  // Clear search query
  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Search input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
        <Input
          type="text"
          placeholder={placeholder}
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

      {/* Search results or recent searches */}
      <div className="bg-white rounded-lg shadow-sm border border-[#dbdbdb] overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-20">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : searchQuery ? (
          // Search results
          searchResults.length > 0 ? (
            <div className="divide-y divide-[#dbdbdb]">
              {searchResults.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => addToRecentSearches(profile)}
                >
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                    <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold">{profile.username}</p>
                    <p className="text-sm text-[#737373]">{profile.bio || profile.email}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-[#737373]">No results found for "{searchQuery}"</p>
            </div>
          )
        ) : recentSearches.length > 0 ? (
          // Recent searches
          <>
            <div className="p-4 border-b border-[#dbdbdb]">
              <h3 className="font-medium text-sm">Recent</h3>
            </div>

            <div className="divide-y divide-[#dbdbdb]">
              {recentSearches.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => addToRecentSearches(profile)}
                >
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                    <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold">{profile.username}</p>
                  </div>

                  <button
                    onClick={(e) => removeFromRecentSearches(profile.id, e)}
                    className="text-[#737373] hover:text-black"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          // No recent searches
          <div className="p-6 text-center">
            <p className="text-[#737373]">Search for users</p>
          </div>
        )}
      </div>
    </div>
  )
}

