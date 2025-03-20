"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ChatList } from "@/components/chat/chat-list"
import { ChatConversation } from "@/components/chat/chat-conversation"
import { useAuth } from "@/lib/auth-context"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ErrorBoundary } from "@/components/error-boundary"
import { Skeleton } from "@/components/ui/skeleton"

export default function MessagesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const username = searchParams.get("username")
  const [selectedUser, setSelectedUser] = useState<string | null>(username)
  const [isMobileView, setIsMobileView] = useState(false)
  const { user, isLoading } = useAuth()

  // Check if we're on mobile
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    setIsMobileView(isMobile)
  }, [isMobile])

  // Update selected user when URL param changes
  useEffect(() => {
    if (username) {
      setSelectedUser(username)
    }
  }, [username])

  const handleSelectUser = (username: string) => {
    setSelectedUser(username)

    // For mobile view, we need to navigate to the specific chat page
    if (isMobileView) {
      router.push(`/messages/${username}`)
    } else {
      // Update URL with query parameter for desktop view
      const url = new URL(window.location.href)
      url.searchParams.set("username", username)
      router.replace(url.pathname + url.search)
    }
  }

  const handleBack = () => {
    setSelectedUser(null)
  }

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <div className="flex-1 md:ml-[240px]">
          <div className="flex h-full">
            <div className="w-[350px] h-full border-r border-[#dbdbdb] hidden md:block">
              <div className="p-4 border-b border-[#dbdbdb] flex items-center justify-between">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
              <div className="p-3 border-b border-[#dbdbdb]">
                <Skeleton className="h-9 w-full" />
              </div>
              <div className="p-4 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center">
                    <Skeleton className="h-12 w-12 rounded-full mr-3" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          </div>
        </div>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  // If not authenticated, don't render anything (redirect will happen)
  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <div className="flex-1 md:ml-[240px] flex flex-col h-screen pb-16 md:pb-0">
        <div className="flex h-full">
          {/* On mobile, show either the chat list or the conversation */}
          {isMobileView ? (
            selectedUser ? (
              <div className="w-full h-full pb-16 md:pb-0">
                <ErrorBoundary
                  fallback={<div className="p-4">Не удалось загрузить переписку. Пожалуйста, попробуйте позже.</div>}
                >
                  <ChatConversation recipientUsername={selectedUser} onBack={handleBack} isMobile={true} />
                </ErrorBoundary>
              </div>
            ) : (
              <div className="w-full h-full pb-16 md:pb-0">
                <ErrorBoundary
                  fallback={
                    <div className="p-4">Не удалось загрузить список переписок. Пожалуйста, попробуйте позже.</div>
                  }
                >
                  <ChatList selectedUserId={selectedUser || undefined} onSelectUser={handleSelectUser} />
                </ErrorBoundary>
              </div>
            )
          ) : (
            // On desktop, show both
            <>
              <div className="w-[350px] h-full border-r border-[#dbdbdb]">
                <ErrorBoundary
                  fallback={
                    <div className="p-4">Не удалось загрузить список переписок. Пожалуйста, попробуйте позже.</div>
                  }
                >
                  <ChatList selectedUserId={selectedUser || undefined} onSelectUser={handleSelectUser} />
                </ErrorBoundary>
              </div>
              <div className="flex-1 h-full">
                {selectedUser ? (
                  <ErrorBoundary
                    fallback={<div className="p-4">Не удалось загрузить переписку. Пожалуйста, попробуйте позже.</div>}
                  >
                    <ChatConversation recipientUsername={selectedUser} />
                  </ErrorBoundary>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center p-4">
                    <h3 className="text-lg font-semibold mb-2">Your Messages</h3>
                    <p className="text-[#737373] text-center">Select a conversation from the list or start a new one</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

