import type {
  User,
  LoginUser,
  RegisterUser,
  UpdateUser,
  Post,
  CreatePost,
  UpdatePost,
  Comment,
  CreateComment,
  Profile,
  Notification,
  ChatMessage,
} from "./types";

// Fix the API_URL constant to ensure it doesn't end with a slash
const API_URL = "https://api.panchenko.work";

async function apiRequest<T>(
  endpoint: string,
  method = "GET",
  body?: any,
  token?: string
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.message || `API error: ${response.status}`;
      throw new Error(errorMessage);
    }

    if (method === "DELETE") {
      return {} as T;
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}

export const userApi = {
  register: (user: RegisterUser) =>
    apiRequest<{ user: User }>("/users", "POST", { user }),

  login: (user: LoginUser) =>
    apiRequest<{ user: User }>("/users/login", "POST", { user }),

  current: (token: string) =>
    apiRequest<{ user: User }>("/user", "GET", undefined, token),

  update: (user: UpdateUser, token: string) =>
    apiRequest<{ user: User }>("/user", "PUT", { user }, token),

  search: (username: string) =>
    apiRequest<{ users: User[] }>(
      `/users/search?username=${encodeURIComponent(username)}`
    ),
};

export const postApi = {
  create: (post: CreatePost, token: string) =>
    apiRequest<{ post: Post }>("/posts", "POST", { post }, token),

  list: (
    params: {
      author?: string;
      favorited?: string;
      limit?: number;
      offset?: number;
    } = {},
    token?: string
  ) => {
    const queryParams = new URLSearchParams();
    if (params.author) queryParams.append("author", params.author);
    if (params.favorited) queryParams.append("favorited", params.favorited);
    if (params.limit) queryParams.append("limit", params.limit.toString());
    if (params.offset) queryParams.append("offset", params.offset.toString());

    const query = queryParams.toString() ? `?${queryParams.toString()}` : "";
    return apiRequest<{ posts: Post[]; postsCount: number }>(
      `/posts${query}`,
      "GET",
      undefined,
      token
    );
  },

  feed: (params: { limit?: number; offset?: number } = {}, token: string) => {
    const queryParams = new URLSearchParams();
    if (params.limit) queryParams.append("limit", params.limit.toString());
    if (params.offset) queryParams.append("offset", params.offset.toString());

    const query = queryParams.toString() ? `?${queryParams.toString()}` : "";

    return apiRequest<{ posts: Post[]; postsCount: number }>(
      `/posts/feed${query}`,
      "GET",
      undefined,
      token
    );
  },

  get: (slug: string, token?: string) =>
    apiRequest<{ post: Post }>(`/posts/${slug}`, "GET", undefined, token),

  update: async (slug: string, post: UpdatePost, token: string) => {
    if (!post.img) {
      throw new Error("img should not be empty");
    }

    try {
      return await apiRequest<{ post: Post }>(
        `/posts/${slug}`,
        "PUT",
        { post },
        token
      );
    } catch (error) {
      throw error;
    }
  },

  delete: (slug: string, token: string) =>
    apiRequest<void>(`/posts/${slug}`, "DELETE", undefined, token),

  favorite: (slug: string, token: string) =>
    apiRequest<{ post: Post }>(
      `/posts/${slug}/favorite`,
      "POST",
      undefined,
      token
    ),

  unfavorite: (slug: string, token: string) =>
    apiRequest<{ post: Post }>(
      `/posts/${slug}/favorite`,
      "DELETE",
      undefined,
      token
    ),

  getStats: async (slug: string, token?: string) => {
    try {
      return await apiRequest<{ likes: number; comments: number }>(
        `/posts/${slug}/stats`,
        "GET",
        undefined,
        token
      );
    } catch (error) {
      return { likes: 0, comments: 0 };
    }
  },
};

export const commentApi = {
  list: (slug: string) => apiRequest<Comment[]>(`/posts/${slug}/comments`),

  create: (slug: string, comment: CreateComment, token: string) =>
    apiRequest<Comment>(`/posts/${slug}/comments`, "POST", { comment }, token),

  delete: (slug: string, commentId: number, token: string) =>
    apiRequest<void>(
      `/posts/${slug}/comments/${commentId}`,
      "DELETE",
      undefined,
      token
    ),
};

export const profileApi = {
  get: async (username: string, token: string) => {
    const response = await fetch(
      `https://api.panchenko.work/profiles/${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    return await response.json();
  },

  follow: (username: string, token: string) =>
    apiRequest<{ profile: Profile }>(
      `/profiles/${username}/follow`,
      "POST",
      undefined,
      token
    ),

  unfollow: (username: string, token: string) =>
    apiRequest<{ profile: Profile }>(
      `/profiles/${username}/follow`,
      "DELETE",
      undefined,
      token
    ),
};

export const notificationApi = {
  list: (token: string) =>
    apiRequest<Notification[]>("/notifications", "GET", undefined, token),

  markAsRead: (id: number, token: string) =>
    apiRequest<void>(`/notifications/${id}/read`, "PATCH", undefined, token),
};

export const uploadApi = {
  userAvatar: async (file: File, token: string) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(`${API_URL}/user/avatar`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status}`);
    }

    return (await response.json()) as { user: User };
  },

  postImage: async (slug: string, file: File, token: string) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`${API_URL}/posts/${slug}/uploadImage`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed: ${response.status}`);
      }

      return (await response.json()) as { post: Post };
    } catch (error) {
      throw error;
    }
  },

  uploadImage: async (file: File, token: string) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status}`);
      }

      const result = await response.json();
      return result.url || result.path || "";
    } catch (error) {
      throw error;
    }
  },
};

export const chatApi = {
  sendMessage: async (
    message: {
      roomId: string;
      senderId: number;
      recipientId: number;
      content: string;
    },
    token: string
  ) => {
    return apiRequest<{ message: ChatMessage }>(
      "/chat/messages",
      "POST",
      { message },
      token
    );
  },

  getMessages: async (roomId: string, token: string) => {
    try {
      return await apiRequest<{ messages: ChatMessage[] }>(
        `/chat/rooms/${roomId}/messages`,
        "GET",
        undefined,
        token
      );
    } catch (error) {
      return { messages: [] };
    }
  },

  getRooms: async (token: string) => {
    try {
      return await apiRequest<{ rooms: string[] }>(
        "/chat/rooms",
        "GET",
        undefined,
        token
      );
    } catch (error) {
      return { rooms: [] };
    }
  },

  markAsRead: async (messageId: number, token: string) => {
    return apiRequest<void>(
      `/chat/messages/${messageId}/read`,
      "PATCH",
      undefined,
      token
    );
  },
};
