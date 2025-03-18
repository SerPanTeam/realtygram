"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ChatConversation } from "@/components/chat/chat-conversation"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { profileApi } from "@/lib/api"
import { chatService } from "@/lib/chat-service"
import { Button } from "@/components/ui/button"

export default function ChatPage({ params }: { params: { username: string } }) {
  const { username } = params
  const { user, isLoading } = useAuth()
  const [recipientExists, setRecipientExists] = useState<boolean | null>(null)
  const [checkingRecipient, setCheckingRecipient] = useState(true)
  const [accessDenied, setAccessDenied] = useState(false)
  const router = useRouter()

  // Check if recipient exists and if user has access to this conversation
  useEffect(() => {
    const checkRecipientAndAccess = async () => {
      if (!user?.token) return

      try {
        setCheckingRecipient(true)

        // Try to get recipient profile
        try {
          const { profile } = await profileApi.get(username, user.token)
          setRecipientExists(!!profile)

          // Check if user has access to this conversation
          if (profile) {
            const roomId = chatService.constructor.generateRoomId(user.id, profile.id)
            const hasAccess = chatService.isUserParticipant(user.id, roomId)

            if (!hasAccess) {
              console.error("Access denied: User is not a participant of this conversation")
              setAccessDenied(true)
            }
          }
        } catch (error) {
          console.error("Error checking recipient:", error)
          setRecipientExists(false)

          // Try to get user ID from username
          const tempId = username.charCodeAt(0) * 1000 + username.length
          const roomId = chatService.constructor.generateRoomId(user.id, tempId)
          const hasAccess = chatService.isUserParticipant(user.id, roomId)

          if (!hasAccess) {
            console.error("Access denied: User is not a participant of this conversation")
            setAccessDenied(true)
          }
        }
      } catch (error) {
        console.error("Error in checkRecipientAndAccess:", error)
        setRecipientExists(false)
        setAccessDenied(true)
      } finally {
        setCheckingRecipient(false)
      }
    }

    if (user?.token) {
      checkRecipientAndAccess()
    }
  }, [username, user])

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading || checkingRecipient) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <div className="flex-1 md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </div>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (accessDenied) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <div className="flex-1 md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
            <p className="text-[#737373] mb-6">You don't have permission to view this conversation.</p>
            <Button onClick={() => router.push("/messages")} className="bg-[#0095f6] hover:bg-[#0095f6]/90 text-white">
              Back to Messages
            </Button>
          </div>
        </div>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (recipientExists === false) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <div className="flex-1 md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-xl font-semibold mb-4">User not found</h2>
            <p className="text-[#737373] mb-6">The user you're trying to message doesn't exist.</p>
            <Button onClick={() => router.push("/messages")} className="bg-[#0095f6] hover:bg-[#0095f6]/90 text-white">
              Back to Messages
            </Button>
          </div>
        </div>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <div className="flex-1 md:ml-[240px] flex flex-col h-screen">
        <ChatConversation recipientUsername={username} isMobile={true} />
      </div>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

