"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { postApi } from "@/lib/api"
import { useAuth } from "@/lib/auth-context"

interface PostOptionsMenuProps {
  postId: number
  slug: string
  isOpen: boolean
  onClose: () => void
  isCurrentUserPost: boolean
  profileId: string
}

export function PostOptionsMenu({ postId, slug, isOpen, onClose, isCurrentUserPost, profileId }: PostOptionsMenuProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  if (!isOpen) return null

  const handleEdit = () => {
    onClose()
    router.push(`/p/${slug}/edit`)
  }

  const handleGoToPost = () => {
    onClose()
    router.push(`/p/${slug}`)
  }

  const handleCopyLink = () => {
    const url = `${window.location.origin}/p/${slug}`
    navigator.clipboard
      .writeText(url)
      .then(() => {
        onClose()
        // Здесь можно добавить уведомление об успешном копировании
      })
      .catch((err) => {
        console.error("Failed to copy link:", err)
      })
  }

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true)
  }

  const handleConfirmDelete = async () => {
    if (!user || !user.token) return

    setIsDeleting(true)
    try {
      // Удаляем пост
      await postApi.delete(slug, user.token)

      setShowDeleteConfirm(false)
      onClose()
      router.push(`/profile/${profileId}`)
    } catch (error) {
      console.error("Error deleting post:", error)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false)
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" onClick={onClose}>
        <div className="bg-white rounded-xl w-full max-w-sm overflow-hidden" onClick={(e) => e.stopPropagation()}>
          {isCurrentUserPost && (
            <button
              className="w-full p-4 text-center text-red-500 font-semibold border-b border-[#dbdbdb]"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          )}

          {isCurrentUserPost && (
            <button className="w-full p-4 text-center border-b border-[#dbdbdb]" onClick={handleEdit}>
              Edit
            </button>
          )}

          <button className="w-full p-4 text-center border-b border-[#dbdbdb]" onClick={handleGoToPost}>
            Go to post
          </button>

          <button className="w-full p-4 text-center border-b border-[#dbdbdb]" onClick={handleCopyLink}>
            Copy link
          </button>

          <button className="w-full p-4 text-center" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelDelete} disabled={isDeleting}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              className="bg-red-500 hover:bg-red-600"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

