"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ArrowLeft, X } from "lucide-react"
import { formatImageUrl } from "@/lib/image-utils"
import { useAuth } from "@/lib/auth-context"
import { profileApi } from "@/lib/api"
import type { Profile } from "@/lib/types"

export default function NewMessagePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Profile[]>([])
  const [selectedUsers, setSelectedUsers] = useState<Profile[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  // Search for users
  useEffect(() => {
    if (!searchQuery.trim() || !user?.token) {
      setSearchResults([])
      return
    }

    const searchUsers = async () => {
      setLoading(true)
      try {
        // In a real app, you would use an API endpoint to search users
        // For now, we'll use a mock implementation
        const { profile } = await profileApi.get(searchQuery, user.token)
        setSearchResults([profile])
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

  // Toggle user selection
  const toggleUserSelection = (profile: Profile) => {
    if (selectedUsers.some((u) => u.id === profile.id)) {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== profile.id))
    } else {
      // For simplicity, we'll only allow one user for now
      // In a real app, you might want to support group chats
      setSelectedUsers([profile])
    }
  }

  // Remove selected user
  const removeSelectedUser = (userId: number) => {
    setSelectedUsers(selectedUsers.filter((user) => user.id !== userId))
  }

  // Create chat
  const createChat = () => {
    if (selectedUsers.length === 0) return

    // For now, we only support one-on-one chats
    const recipient = selectedUsers[0]
    router.push(`/messages/${recipient.username}`)
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <div className="flex-1 md:ml-[240px] flex flex-col h-screen">
        {/* Header */}
        <div className="p-4 border-b border-[#dbdbdb] flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => router.push("/messages")} className="mr-3">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h2 className="font-bold text-lg">New Message</h2>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-[#0095f6]"
            onClick={createChat}
            disabled={selectedUsers.length === 0}
          >
            Next
          </Button>
        </div>

        {/* Selected users and search */}
        <div className="p-4 border-b border-[#dbdbdb]">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <div className="font-semibold mr-2">To:</div>

            {selectedUsers.map((user) => (
              <div key={user.id} className="flex items-center bg-[#efefef] rounded-full px-3 py-1">
                <span className="text-sm">{user.username}</span>
                <button onClick={() => removeSelectedUser(user.id)} className="ml-2">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}

            <div className="flex-1 min-w-[150px]">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-8"
              />
            </div>
          </div>
        </div>

        {/* Search results */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div>
              {searchResults.length > 0 ? (
                <div className="divide-y divide-[#dbdbdb]">
                  {searchResults.map((profile) => (
                    <div
                      key={profile.id}
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                      onClick={() => toggleUserSelection(profile)}
                    >
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-3">
                          <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
                          <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="font-semibold">{profile.username}</p>
                          <p className="text-sm text-[#737373]">{profile.fullName || profile.bio}</p>
                        </div>
                      </div>

                      {selectedUsers.some((u) => u.id === profile.id) && (
                        <div className="h-5 w-5 rounded-full bg-[#0095f6] flex items-center justify-center text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="p-6 text-center">
                  <p className="text-[#737373]">No users found</p>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-[#737373]">Search for real estate professionals to message</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

