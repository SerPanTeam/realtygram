export function formatImageUrl(url: string | undefined | null): string {
  if (!url) return "/placeholder.svg?height=300&width=300"

  // Если URL уже абсолютный (начинается с http:// или https://)
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url
  }

  // Если URL относительный (начинается с /uploads/)
  if (url.startsWith("/uploads/")) {
    return `https://api.panchenko.work${url}`
  }

  // Если URL относительный (начинается с uploads/)
  if (url.startsWith("uploads/")) {
    return `https://api.panchenko.work/${url}`
  }

  // Для других случаев возвращаем как есть
  return url
}

