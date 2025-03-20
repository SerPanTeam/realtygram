"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Link2 } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { uploadApi } from "@/lib/api"
import { toast } from "@/hooks/use-toast"
import { formatImageUrl } from "@/lib/image-utils"

export default function EditProfilePage() {
  const [profile, setProfile] = useState({
    username: "",
    name: "",
    avatar: "/placeholder.svg?height=150&width=150",
    bio: "",
    website: "",
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [bioLength, setBioLength] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { user, updateUser } = useAuth()

  const MAX_BIO_LENGTH = 150

  useEffect(() => {
    // If user is not logged in, redirect to login
    if (!user && !loading) {
      router.push("/login")
      return
    }

    // Load user profile data
    if (user) {
      setProfile({
        username: user.username,
        name: user.username, // Using username as name if not available
        avatar: user.img || "/placeholder.svg?height=150&width=150",
        bio: user.bio || "",
        website: "", // Add website field if available in your user model
      })
      setBioLength(user.bio?.length || 0)
      setLoading(false)
    }
  }, [user, loading, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "bio") {
      setBioLength(value.length)
    }

    setProfile({
      ...profile,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      // Update user profile
      await updateUser({
        username: profile.username,
        bio: profile.bio,
        // Add other fields as needed
      })

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      })

      // After successful save, redirect to profile page
      router.push(`/profile/${profile.username}`)
    } catch (error) {
      console.error("Error updating profile:", error)
      toast({
        title: "Update failed",
        description: "Failed to update your profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !user?.token) return

    setUploading(true)
    try {
      // Upload the avatar
      const { user: updatedUser } = await uploadApi.userAvatar(file, user.token)

      // Update local state
      setProfile({
        ...profile,
        avatar: updatedUser.img,
      })

      // Update auth context
      updateUser(updatedUser)

      toast({
        title: "Avatar updated",
        description: "Your profile picture has been successfully updated.",
      })
    } catch (error) {
      console.error("Error uploading avatar:", error)
      toast({
        title: "Upload failed",
        description: "Failed to upload your profile picture. Please try again.",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
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
        <div className="mx-auto max-w-2xl py-8 px-4">
          <h1 className="text-2xl font-bold mb-8">Edit profile</h1>

          <form onSubmit={handleSubmit}>
            {/* Profile photo */}
            <div className="bg-[#fafafa] rounded-lg p-6 mb-6">
              <div className="flex items-center">
                <div
                  className="relative h-16 w-16 rounded-full overflow-hidden mr-4 cursor-pointer"
                  onClick={handleAvatarClick}
                >
                  {uploading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                    </div>
                  )}
                  <Image
                    src={formatImageUrl(profile.avatar) || "/placeholder.svg"}
                    alt={profile.username}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{profile.username}</h2>
                  <p className="text-sm text-[#737373]">Click on the photo to change your profile picture</p>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={uploading}
                />

                <Button
                  type="button"
                  className="bg-[#0095f6] hover:bg-[#0095f6]/90 text-white"
                  onClick={handleAvatarClick}
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "New photo"}
                </Button>
              </div>
            </div>

            {/* Username */}
            <div className="mb-6">
              <label htmlFor="username" className="block font-medium mb-2">
                Username
              </label>
              <Input
                id="username"
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="border-[#dbdbdb]"
              />
            </div>

            {/* Website */}
            <div className="mb-6">
              <label htmlFor="website" className="block font-medium mb-2">
                Website
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Link2 className="h-4 w-4 text-[#737373]" />
                </div>
                <Input
                  id="website"
                  name="website"
                  value={profile.website}
                  onChange={handleChange}
                  className="border-[#dbdbdb] pl-10"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <label htmlFor="bio" className="block font-medium mb-2">
                About
              </label>
              <Textarea
                id="bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                maxLength={MAX_BIO_LENGTH}
                rows={5}
                className="border-[#dbdbdb] resize-none"
              />
              <div className="text-right text-xs text-[#737373] mt-1">
                {bioLength} / {MAX_BIO_LENGTH}
              </div>
            </div>

            {/* Save button */}
            <Button type="submit" className="w-full bg-[#0095f6] hover:bg-[#0095f6]/90 text-white" disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
          </form>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

