// Валидация email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Валидация имени пользователя
export const isValidUsername = (username: string): boolean => {
  // Имя пользователя должно содержать только буквы, цифры, точки и подчеркивания
  // и быть длиной от 3 до 30 символов
  const usernameRegex = /^[a-zA-Z0-9._]{3,30}$/
  return usernameRegex.test(username)
}

// Валидация пароля
export const isValidPassword = (password: string): boolean => {
  // Пароль должен быть не менее 6 символов
  return password.length >= 6
}

// Валидация полного имени
export const isValidFullName = (fullName: string): boolean => {
  // Полное имя должно содержать хотя бы 2 символа
  return fullName.trim().length >= 2
}

// Функция для валидации всех полей формы регистрации
export const validateSignupForm = (
  email: string,
  fullName: string,
  username: string,
  password: string,
): { isValid: boolean; error?: string } => {
  if (!email || !fullName || !username || !password) {
    return { isValid: false, error: "All fields are required" }
  }

  if (!isValidEmail(email)) {
    return { isValid: false, error: "Invalid email format" }
  }

  if (!isValidFullName(fullName)) {
    return { isValid: false, error: "Full name must be at least 2 characters" }
  }

  if (!isValidUsername(username)) {
    return {
      isValid: false,
      error: "Username must be 3-30 characters and can only contain letters, numbers, periods, and underscores",
    }
  }

  if (!isValidPassword(password)) {
    return { isValid: false, error: "Password must be at least 6 characters" }
  }

  return { isValid: true }
}

