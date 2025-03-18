// Функция для сохранения токена в localStorage
export const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_token", token)
  }
}

// Функция для получения токена из localStorage
export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth_token")
  }
  return null
}

// Функция для удаления токена из localStorage (выход)
export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_token")
  }
}

// Функция для проверки авторизации пользователя
export const isAuthenticated = () => {
  const token = getToken()
  return !!token
}

// Функция для добавления токена к запросам
export const authFetch = async (url: string, options: RequestInit = {}) => {
  const token = getToken()

  const headers = {
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  }

  const response = await fetch(url, {
    ...options,
    headers,
  })

  return response
}

