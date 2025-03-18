"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { userApi } from "@/lib/api"
import type { User } from "@/lib/types"
import { formatImageUrl } from "@/lib/image-utils"

interface SearchPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<User[]>([])
  const [recentSearches, setRecentSearches] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useOnClickOutside(panelRef, onClose)

  // Фокус на поле ввода при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Загрузка недавних поисков из localStorage при инициализации
  useEffect(() => {
    if (isOpen) {
      const savedSearches = localStorage.getItem("recentSearches")
      if (savedSearches) {
        try {
          setRecentSearches(JSON.parse(savedSearches))
        } catch (e) {
          console.error("Error parsing recent searches:", e)
          setRecentSearches([])
        }
      }
    }
  }, [isOpen])

  // Поиск пользователей при вводе запроса
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const searchUsers = async () => {
      setLoading(true)
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
  }, [searchQuery])

  // Добавление пользователя в недавние поиски
  const addToRecentSearches = (user: User) => {
    // Проверяем, есть ли уже такой пользователь в недавних поисках
    const isExisting = recentSearches.some((item) => item.id === user.id)

    if (!isExisting) {
      const updatedSearches = [user, ...recentSearches].slice(0, 5) // Ограничиваем до 5 последних поисков
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    }

    onClose()
  }

  // Удаление пользователя из недавних поисков
  const removeFromRecentSearches = (userId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()

    const updatedSearches = recentSearches.filter((user) => user.id !== userId)
    setRecentSearches(updatedSearches)
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
  }

  // Очистка поискового запроса
  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  if (!isOpen) return null

  return (
    <div
      ref={panelRef}
      className="absolute top-0 left-[240px] z-50 w-[350px] bg-white rounded-r-lg shadow-lg border border-[#dbdbdb] border-l-0 h-screen overflow-hidden"
    >
      <div className="p-4 border-b border-[#dbdbdb]">
        <h2 className="font-semibold text-lg mb-3">Search</h2>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
          <Input
            ref={inputRef}
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

      <div className="max-h-[calc(100vh-120px)] overflow-y-auto">
        {searchQuery ? (
          loading ? (
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
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={formatImageUrl(user.img)} alt={user.username} />
                      <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold">{user.username}</p>
                      <p className="text-sm text-[#737373]">{user.bio}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-6 text-center">
                  <p className="text-[#737373]">No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          )
        ) : (
          recentSearches.length > 0 && (
            <>
              <div className="p-4 border-b border-[#dbdbdb]">
                <h3 className="font-medium text-sm">Recent</h3>
              </div>

              <div className="divide-y divide-[#dbdbdb]">
                {recentSearches.map((user) => (
                  <Link
                    key={user.id}
                    href={`/profile/${user.username}`}
                    className="flex items-center p-4 hover:bg-gray-50"
                  >
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={formatImageUrl(user.img)} alt={user.username} />
                      <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold">{user.username}</p>
                    </div>

                    <button
                      onClick={(e) => removeFromRecentSearches(user.id, e)}
                      className="text-[#737373] hover:text-black"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Link>
                ))}
              </div>
            </>
          )
        )}
      </div>
    </div>
  )
}

