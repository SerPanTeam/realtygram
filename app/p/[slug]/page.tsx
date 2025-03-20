"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Smile,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/sidebar";
import { MobileNavigation } from "@/components/mobile-navigation";
import { PostOptionsMenu } from "@/components/post-options-menu";
import { postApi, commentApi, profileApi } from "@/lib/api";
import type { Post, Comment } from "@/lib/types";
import { useAuth } from "@/lib/auth-context";
import { formatImageUrl } from "@/lib/image-utils";
import axios from "axios";

export default function PostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const commentInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { user } = useAuth();

  async function checkIfPostLiked(userId: number, postId: number) {
    try {
      const response = await axios.get(
        "https://api.panchenko.work/posts/liked",
        {
          params: { userId, postId },
        }
      );
      console.log(response, userId, postId);
      // Предполагаем, что сервер возвращает объект { liked: true/false }
      return response.data.liked === true;
    } catch (error) {
      console.error("Ошибка при запросе:", error);
      return false; // Если произошла ошибка, по умолчанию вернём false
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        // Получаем пост без токена, если пользователь не авторизован
        const { post } = await postApi.get(slug, user?.token);
        setPost(post);
        setLikesCount(post.favoritesCount);
        console.log(post);
        setLiked(await checkIfPostLiked(user?.id, post.id));
        console.log("liked", liked);
        // setLiked(post.favorited || false);
        setIsFollowing(post.author.following || false);
        setComments(post.comments || []);
      } catch (err) {
        console.error("Error fetching post:", err);
        router.push("/feed");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, user, router]);

  const handleLike = async () => {
    if (!user?.token || !post) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push("/login");
      return;
    }

    try {
      if (liked) {
        await postApi.unfavorite(post.slug, user.token);
        setLikesCount(likesCount - 1);
      } else {
        await postApi.favorite(post.slug, user.token);
        setLikesCount(likesCount + 1);
      }
      setLiked(!liked);
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  const handleFollow = async () => {
    if (!user?.token || !post) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push("/login");
      return;
    }

    try {
      if (isFollowing) {
        await profileApi.unfollow(post.author.username, user.token);
      } else {
        await profileApi.follow(post.author.username, user.token);
      }
      setIsFollowing(!isFollowing);
    } catch (err) {
      console.error("Error toggling follow:", err);
    }
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user?.token) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push("/login");
      return;
    }

    if (!comment.trim() || !post) return;

    try {
      const newComment = await commentApi.create(
        post.slug,
        { body: comment },
        user.token
      );
      setComments([...comments, newComment]);
      setComment("");

      // Обновляем пост с новым комментарием
      if (post) {
        // Создаем копию поста с обновленным списком комментариев
        const updatedPost = {
          ...post,
          comments: [...(post.comments || []), newComment],
        };
        setPost(updatedPost);
      }
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  const handleCommentFocus = () => {
    if (!user) {
      // Если пользователь не авторизован, перенаправляем на страницу входа
      router.push("/login");
      return;
    }
    commentInputRef.current?.focus();
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-screen pb-16 md:pb-0">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen pb-16 md:pb-0">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-[#737373] mb-6">
              The post you are looking for does not exist.
            </p>
            <Button onClick={() => router.push("/feed")}>Go to Feed</Button>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-[935px] pb-16 md:pb-0">
          <div className="flex flex-col md:flex-row border border-[#dbdbdb] rounded-sm overflow-hidden">
            {/* Изображение поста */}
            <div className="relative aspect-square w-full md:w-[60%] bg-black">
              <img
                src={formatImageUrl(post.img) || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Информация о посте */}
            <div className="flex flex-col w-full md:w-[40%]">
              {/* Шапка поста */}
              <div className="flex items-center justify-between p-3 border-b border-[#dbdbdb]">
                <div className="flex items-center">
                  <Link
                    href={`/profile/${post.author.username}`}
                    className="flex items-center"
                  >
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage
                        src={formatImageUrl(post.author.img)}
                        alt={post.author.username}
                      />
                      <AvatarFallback>
                        {post.author.username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center">
                      <span className="font-semibold text-sm">
                        {post.author.username}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="flex items-center">
                  {user && user.id !== post.author.id && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#0095f6] hover:text-[#0095f6] hover:bg-transparent px-2 text-sm"
                      onClick={handleFollow}
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setShowOptionsMenu(true)}
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Контент поста и комментарии */}
              <div className="flex-1 overflow-y-auto max-h-[calc(100vh-13rem)]">
                {/* Подпись автора */}
                <div className="flex items-start p-3">
                  <Avatar className="h-8 w-8 mr-3 mt-1">
                    <AvatarImage
                      src={formatImageUrl(post.author.img)}
                      alt={post.author.username}
                    />
                    <AvatarFallback>
                      {post.author.username.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div>
                      <span className="font-semibold text-sm">
                        {post.author.username}
                      </span>{" "}
                      <span className="text-sm whitespace-pre-line">
                        {post.content}
                      </span>
                    </div>
                    <p className="text-xs text-[#737373] mt-1">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Список комментариев */}
                <div className="px-3 space-y-3">
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <div key={comment.id} className="flex items-start">
                        <Avatar className="h-8 w-8 mr-3 mt-1">
                          <AvatarImage
                            src={formatImageUrl(comment.author.img)}
                            alt={comment.author.username}
                          />
                          <AvatarFallback>
                            {comment.author.username.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <Link
                              href={`/profile/${encodeURIComponent(
                                comment.author.username
                              )}`}
                              className="font-semibold text-sm mr-1 hover:underline"
                            >
                              {comment.author.username}
                            </Link>
                            <span className="text-sm">{comment.body}</span>
                          </div>
                          <div className="flex items-center mt-1 space-x-3 text-xs text-[#737373]">
                            <span>
                              {new Date(comment.createdAt).toLocaleDateString()}
                            </span>
                            {/* {user && <button className="font-semibold">Reply</button>} */}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-3 text-center text-[#737373]">
                      No comments yet. Be the first to comment!
                    </div>
                  )}
                </div>
              </div>

              {/* Действия с постом */}
              <div className="border-t border-[#dbdbdb] p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <button onClick={handleLike}>
                      <Heart
                        className={`h-6 w-6 ${
                          liked ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                    </button>
                    <button onClick={handleCommentFocus}>
                      <MessageCircle className="h-6 w-6" />
                    </button>
                    <button>
                      <Send className="h-6 w-6" />
                    </button>
                  </div>
                  <button>
                    <Bookmark className="h-6 w-6" />
                  </button>
                </div>

                {/* Лайки */}
                <div className="mb-1">
                  <p className="font-semibold text-sm">
                    {formatNumber(likesCount)} likes
                  </p>
                </div>

                {/* Дата */}
                <div className="mb-3">
                  <p className="text-[10px] uppercase text-[#737373]">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {/* Форма комментария */}
                <form
                  onSubmit={handleComment}
                  className="flex items-center border-t border-[#dbdbdb] pt-3"
                >
                  <button type="button" className="mr-2">
                    <Smile className="h-6 w-6 text-[#262626]" />
                  </button>
                  <Input
                    ref={commentInputRef}
                    type="text"
                    placeholder={user ? "Add comment..." : "Log in to comment"}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm"
                    disabled={!user}
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="sm"
                    className={`text-[#0095f6] font-semibold text-sm ${
                      !comment.trim() || !user
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={!comment.trim() || !user}
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <PostOptionsMenu
            postId={post.id}
            slug={post.slug}
            isOpen={showOptionsMenu}
            onClose={() => setShowOptionsMenu(false)}
            isCurrentUserPost={user?.id === post.author.id}
            profileId={post.author.username}
          />
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  );
}
