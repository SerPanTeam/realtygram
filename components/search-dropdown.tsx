"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { formatImageUrl } from "@/lib/image-utils"

// Имитация данных пользователей для поиска
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
]

interface SearchDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchDropdown({ isOpen, onClose }: SearchDropdownProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [loading, setLoading] = useState(false)
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)

  useOnClickOutside(dropdownRef, onClose)

  // Фокус на поле ввода при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus()
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
      } else {
        // Если нет сохраненных поисков, добавляем один для демонстрации
        const defaultRecent = [MOCK_USERS[0]]
        setRecentSearches(defaultRecent)
        localStorage.setItem("recentSearches", JSON.stringify(defaultRecent))
      }
    }
  }, [isOpen])

  // Поиск пользователей при вводе запроса
  useEffect(() => {
    if (searchQuery.trim()) {
      setLoading(true)

      // Имитация запроса к API
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

  // Добавление пользователя в недавние поиски
  const addToRecentSearches = (user) => {
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
  const removeFromRecentSearches = (userId, e) => {
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
      ref={dropdownRef}
      className="absolute top-14 left-0 z-50 w-96 bg-white rounded-lg shadow-lg border border-[#dbdbdb] overflow-hidden"
      onClick={(e) => e.stopPropagation()}
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

      <div className="max-h-[400px] overflow-y-auto">
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
          )
        ) : (
          recentSearches.length > 0 && (
            <>
              <div className="p-4 border-b border-[#dbdbdb]">
                <h3 className="font-medium text-sm">Recent</h3>
              </div>

              <div className="divide-y divide-[#dbdbdb]">
                {recentSearches.map((user) => (
                  <Link key={user.id} href={`/profile/${user.id}`} className="flex items-center p-4 hover:bg-gray-50">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={formatImageUrl(user.avatar)} alt={user.username} />
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

      <div className="p-3 text-center border-t border-[#dbdbdb]">
        <Link href="/search" className="text-sm text-[#0095f6] font-medium" onClick={onClose}>
          See All Results
        </Link>
      </div>
    </div>
  )
}

