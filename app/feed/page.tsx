"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar";
import { MobileNavigation } from "@/components/mobile-navigation";
import { Check } from "lucide-react";
import { postApi } from "@/lib/api";
import type { Post as PostType } from "@/lib/types";
import { useAuth } from "@/lib/auth-context";
import { FeedPost } from "@/components/feed-post";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeedPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      console.log(user);
      try {
        if (user && user.token) {
          // Get feed for logged in user
          const { posts } = await postApi.feed({}, user.token);
          setPosts(posts);
        } else {
          // If user is not logged in, redirect to login page
          window.location.href = "/login";
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [user]);

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-4xl px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full">
                    <div className="flex items-center mb-2">
                      <Skeleton className="h-10 w-10 rounded-full mr-2" />
                      <div>
                        <Skeleton className="h-4 w-24 mb-1" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </div>
                    <Skeleton className="h-[300px] w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen p-4">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()} className="px-4 py-2 bg-[#0095f6] text-white rounded-md">
              Try again
            </Button>
          </div>
        </main>
        <MobileNavigation className="md:hidden" />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex min-h-screen bg-white">
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
          <div className="flex flex-col justify-center items-center h-screen p-4">
            <h2 className="text-xl font-semibold mb-2">Welcome to your feed</h2>
            <p className="text-[#737373] mb-4">Follow users to see their posts here</p>
            <Link href="/explore">
              <Button className="px-4 py-2 bg-[#0095f6] text-white rounded-md">Explore users</Button>
            </Link>
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
        <div className="mx-auto max-w-4xl py-6 px-4">
          {/* Посты в ленте в две колонки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <FeedPost key={`${post.id}-${index}`} post={post} />
            ))}
          </div>

          {/* Индикатор конца ленты */}
          <div className="mt-12 flex flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#dbdbdb]">
              <Check className="h-8 w-8 text-[#0095f6]" />
            </div>
            <h3 className="mt-4 text-lg font-medium">You've seen all the updates</h3>
            <p className="text-sm text-[#737373]">You have viewed all new publications</p>
          </div>

          {/* Футер */}
          <footer className="mt-8 text-center text-xs text-[#737373] pb-16 md:pb-4">
            <p>© 2025 RealtyGRAM</p>
          </footer>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  );
}
