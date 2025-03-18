export function formatImageUrl(imageUrl: string | undefined | null): string {
  if (!imageUrl) {
    return "/placeholder.svg?height=400&width=400"
  }

  if (imageUrl.startsWith("http")) {
    return imageUrl
  }

  if (imageUrl.startsWith("uploads/")) {
    return `https://api.panchenko.work/${imageUrl}`
  }

  return imageUrl
}

