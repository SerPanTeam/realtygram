"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { MobileNavigation } from "@/components/mobile-navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { postApi } from "@/lib/api";
import type { Post } from "@/lib/types";
import { useAuth } from "@/lib/auth-context";
import { formatImageUrl } from "@/lib/image-utils";
import { Skeleton } from "@/components/ui/skeleton";

// Категории для табов
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "land", label: "Land" },
  { id: "rental", label: "Rental" },
  { id: "luxury", label: "Luxury" },
  { id: "investment", label: "Investment" },
  { id: "foreclosure", label: "Foreclosure" },
];

export default function ExplorePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Получаем все посты
        const { posts } = await postApi.list({}, user?.token);
        setPosts(posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [user]);

  // Фильтрация постов по категории (в данном примере просто возвращаем все)
  const getFilteredPosts = () => {
    if (selectedCategory === "all") return posts;
    return posts;
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />
      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="mx-auto max-w-full md:max-w-7xl py-4 px-3 md:py-6 md:px-4 pb-16 md:pb-4">
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Explore</h1>

          {/* Категории - скролл на мобильных устройствах */}
          <div className="mb-4 md:mb-6 overflow-x-auto hide-scrollbar px-3 -mx-3 w-screen md:w-auto">
            <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
              <TabsList className="bg-transparent h-auto p-0 w-full">
                <div className="flex space-x-2 pb-1 overflow-x-auto hide-scrollbar">
                  {CATEGORIES.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="rounded-full bg-[#efefef] px-3 py-1.5 md:px-4 md:py-2 text-sm whitespace-nowrap data-[state=active]:bg-black data-[state=active]:text-white"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </div>
              </TabsList>

              {CATEGORIES.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-4 md:mt-6">
                  {loading ? (
                    <div className="columns-2 md:columns-3 gap-2">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Skeleton key={i} className="mb-4 break-inside-avoid aspect-[3/4] w-full" />
                      ))}
                    </div>
                  ) : (
                    // Используем CSS columns для masonry-эффекта
                    <div className="columns-2 md:columns-3 gap-2">
                      {filteredPosts.map((post) => (
                        <div key={post.id} className="mb-4 break-inside-avoid">
                          <ExplorePostCard post={post} token={user?.token} />
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>
      <MobileNavigation className="md:hidden" />
    </div>
  );
}

interface ExplorePostCardProps {
  post: Post;
  token?: string;
}

function ExplorePostCard({ post, token }: ExplorePostCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [stats, setStats] = useState({ likes: post.favoritesCount, comments: post.comments?.length || 0 });
  const [liked, setLiked] = useState(post.favorited === true);
  const [likesCount, setLikesCount] = useState(stats.likes);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPostStats = async () => {
      if (!token) return;
      try {
        const postStats = await postApi.getStats(post.slug, token);
        setStats(postStats);
        setLikesCount(postStats.likes);
      } catch (error) {
        console.error("Error fetching post stats:", error);
        setStats({
          likes: post.favoritesCount,
          comments: post.comments?.length || 0,
        });
        setLikesCount(post.favoritesCount);
      }
    };

    fetchPostStats();
    setLiked(post.favorited === true);
  }, [post.slug, post.favoritesCount, post.comments?.length, post.favorited, token]);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user?.token) return;

    try {
      setLiked(!liked);
      const newLikesCount = liked ? likesCount - 1 : likesCount + 1;
      setLikesCount(newLikesCount);
      if (liked) {
        await postApi.unfavorite(post.slug, user.token);
      } else {
        await postApi.favorite(post.slug, user.token);
      }
    } catch (err) {
      console.error("Error toggling like:", err);
      setLiked(liked);
      setLikesCount(likesCount);
    }
  };

  const handleTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsTouched(!isTouched);
  };

  const imageUrl = formatImageUrl(post.img);

  return (
    <Link
      href={`/p/${post.slug}`}
      className="block overflow-hidden rounded relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouch}
    >
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={post.title || "Post image"}
        className="object-cover w-full transition-transform duration-300 ease-in-out hover:scale-105"
      />
      {(isHovered || isTouched) && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <button onClick={handleLike} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 md:h-6 md:w-6 md:mr-2"
                  fill={liked ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color={liked ? "#ed4956" : "currentColor"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-sm md:text-base">{likesCount}</span>
              </button>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 md:h-6 md:w-6 md:mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-sm md:text-base">{stats.comments}</span>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
}
