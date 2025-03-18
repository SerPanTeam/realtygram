import type { ChatMessage } from "./types"

const API_URL = "https://api.panchenko.work"

async function apiRequest<T>(endpoint: string, method = "GET", body?: any, token?: string): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const config: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      const errorMessage = errorData.message || `API error: ${response.status}`
      throw new Error(errorMessage)
    }

    const data = await response.json()
    return data as T
  } catch (error) {
    throw error
  }
}

export const chatApi = {
  sendMessage: async (
    message: { roomId: string; senderId: number; recipientId: number; content: string },
    token: string,
  ) => {
    return apiRequest<{ message: ChatMessage }>("/chat/messages", "POST", { message }, token)
  },

  getMessages: async (roomId: string, token: string) => {
    return apiRequest<{ messages: ChatMessage[] }>(`/chat/rooms/${roomId}/messages`, "GET", undefined, token)
  },

  getRooms: async (token: string) => {
    return apiRequest<{ rooms: string[] }>("/chat/rooms", "GET", undefined, token)
  },

  markAsRead: async (messageId: number, token: string) => {
    return apiRequest<void>(`/chat/messages/${messageId}/read`, "PATCH", undefined, token)
  },
}

