"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Grid, MessageCircle, Settings, Heart } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { profileApi, postApi } from "@/lib/api"
import type { Profile, Post } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { formatImageUrl } from "@/lib/image-utils"
import { PostGrid } from "@/components/post-grid"
import { useRouter } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProfilePage({ params }: { params: { username: string } }) {
  // Проверим, существует ли этот файл и как он реализован
  // Если файл существует, то путь `/profile/[username]` правильный
  const { username } = params
  const [profile, setProfile] = useState<Profile | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [isFollowing, setIsFollowing] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  // Добавим состояние для лайкнутых постов
  const [likedPosts, setLikedPosts] = useState<Post[]>([])
  const [loadingLiked, setLoadingLiked] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      try {
        // Получаем профиль пользователя (с токеном, если пользователь авторизован)
        const { profile } = await profileApi.get(username, user?.token)
        setProfile(profile)
        setIsFollowing(profile.following)

        // Получаем посты пользователя
        const { posts } = await postApi.list({ author: username }, user?.token)
        setPosts(posts)
      } catch (err) {
        console.error("Error fetching profile:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [username, user])

  // Добавим функцию для загрузки лайкнутых постов
  useEffect(() => {
    const fetchLikedPosts = async () => {
      if (!profile || !user?.token) return

      setLoadingLiked(true)
      try {
        // Получаем посты, которые пользователь лайкнул
        const { posts } = await postApi.list({ favorited: profile.username }, user.token)
        setLikedPosts(posts)
      } catch (err) {
        console.error("Error fetching liked posts:", err)
      } finally {
        setLoadingLiked(false)
      }
    }

    // Загружаем лайкнутые посты только если это профиль текущего пользователя
    if (user && profile && user.id === profile.id) {
      fetchLikedPosts()
    }
  }, [profile, user])

  const handleFollow = async () => {
    if (!user || !user.token || !profile) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
      return
    }

    try {
      let updatedProfile
      if (isFollowing) {
        const { profile: result } = await profileApi.unfollow(profile.username, user.token)
        updatedProfile = result
      } else {
        const { profile: result } = await profileApi.follow(profile.username, user.token)
        updatedProfile = result
      }

      // Обновляем профиль с новыми данными
      setProfile(updatedProfile)
      setIsFollowing(updatedProfile.following)
    } catch (err) {
      console.error("Error toggling follow:", err)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="mx-auto max-w-4xl py-4 md:py-8 px-4 pb-16 md:pb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-6 md:mb-8">
              <Skeleton className="h-20 w-20 md:h-36 md:w-36 rounded-full" />
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                  <Skeleton className="h-6 w-32" />
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-24" />
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-4 w-full max-w-md" />
              </div>
            </div>
            <Skeleton className="h-10 w-full mb-6" />
            <div className="grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="aspect-square w-full" />
              ))}
            </div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-screen p-4 pb-16 md:pb-4">
            <div className="text-center">
              <h1 className="text-xl md:text-2xl font-bold mb-4">User not found</h1>
              <p className="text-[#737373] mb-6">The user you are looking for does not exist.</p>
              <Link href="/feed">
                <Button>Go to Feed</Button>
              </Link>
            </div>
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
        <div className="mx-auto max-w-4xl py-4 md:py-8 px-4 pb-16 md:pb-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-6 md:mb-8">
            <Avatar className="h-20 w-20 md:h-36 md:w-36">
              <AvatarImage src={formatImageUrl(profile.img)} alt={profile.username} />
              <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                <h1 className="text-xl md:text-2xl font-bold">{profile.username}</h1>

                <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
                  {user && user.id !== profile.id && (
                    <Button
                      onClick={handleFollow}
                      variant={isFollowing ? "outline" : "default"}
                      className="w-full sm:w-auto"
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                  )}
                  {user && user.id !== profile.id && (
                    <Link href={`/messages/${profile.username}`} className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </Link>
                  )}
                  {user && user.id === profile.id && (
                    <Link href="/profile/edit" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full">
                        Edit Profile
                      </Button>
                    </Link>
                  )}
                  {user && user.id === profile.id && (
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 mb-4 text-sm md:text-base">
                <div>
                  <strong>{posts.length}</strong> posts
                </div>
                <div>
                  <strong>{profile?.followersCount || 0}</strong> followers
                </div>
                <div>
                  <strong>{profile?.followingCount || 0}</strong> following
                </div>
              </div>

              <div>
                <h2 className="font-medium">{profile.username}</h2>
                <p className="mt-1 text-sm md:text-base">{profile.bio || "No bio yet"}</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="posts">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="posts">
                <Grid className="h-4 w-4 mr-2" />
                Posts
              </TabsTrigger>
              <TabsTrigger value="saved">
                <Heart className="h-4 w-4 mr-2" />
                Saved
              </TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="mt-2 md:mt-6">
              <PostGrid
                posts={posts}
                loading={loading}
                emptyMessage="No posts yet"
                emptyIcon={<Grid className="h-12 w-12 mx-auto mb-4 text-gray-300" />}
              />
            </TabsContent>
            <TabsContent value="saved" className="mt-2 md:mt-6">
              {user && profile && user.id === profile.id ? (
                <PostGrid
                  posts={likedPosts}
                  loading={loadingLiked}
                  emptyMessage="No saved posts yet"
                  emptyIcon={<Heart className="h-12 w-12 mx-auto mb-4 text-gray-300" />}
                />
              ) : (
                <div className="text-center py-8 md:py-12">
                  <p className="text-muted-foreground">This section is only visible to the profile owner</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

