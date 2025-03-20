import axios from "axios"
import { API_URL } from "@/constants"

interface RegisterData {
  username: string
  email: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

export const register = async (data: RegisterData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      user: data,
    })
    return response.data
  } catch (error) {
    console.error("Registration error:", error)
    throw error
  }
}

export const login = async (data: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      user: data,
    })
    return response.data
  } catch (error) {
    console.error("Login error:", error)
    throw error
  }
}

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem("token")

    if (!token) {
      return null
    }

    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  } catch (error) {
    console.error("Get current user error:", error)
    return null
  }
}

