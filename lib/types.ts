export interface User {
  id: number
  username: string
  email: string
  bio: string
  img: string
  token: string
}

export interface LoginUser {
  email: string
  password: string
}

export interface RegisterUser {
  username: string
  email: string
  password: string
}

export interface UpdateUser {
  username?: string
  email?: string
  bio?: string
  img?: string
  password?: string
}

export interface Post {
  id: number
  slug: string
  title: string
  content: string
  img: string
  tagList: string[]
  favoritesCount: number
  author: Profile
  comments: Comment[]
  createdAt: string
  updatedAt: string
  favorited: boolean
}

export interface CreatePost {
  title: string
  content: string
  img: string
  tagList?: string[]
}

export interface UpdatePost {
  title?: string
  content?: string
  img?: string
  tagList?: string[]
}

export interface Comment {
  id: number
  body: string
  createdAt: string
  author: Profile
}

export interface CreateComment {
  body: string
}

export interface Profile {
  id: number
  username: string
  bio: string
  img: string
  following: boolean
  followersCount: number
  followingCount: number
}

export interface Notification {
  id: number
  type: string
  message: string
  createdAt: string
  isRead: boolean
  initiator?: {
    id: number
    username: string
    img?: string
    bio?: string
  }
}

export interface ChatMessage {
  id: number
  content: string
  senderId: number
  recipientId: number
  roomId: string
  createdAt: string
  read?: boolean
  clientMessageId?: string
  pending?: boolean
}

export interface SendChatMessage {
  roomId: string
  senderId: number
  recipientId: number
  content: string
  clientMessageId?: string
}

export interface ChatConversation {
  id: string
  participants: Profile[]
  lastMessage?: ChatMessage
  unreadCount: number
}

export type Message = ChatMessage

