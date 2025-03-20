"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="container mx-auto max-w-5xl py-12 px-4 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Изображение телефона */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[280px] h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=280"
                  alt="Instagram mobile app"
                  width={280}
                  height={500}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Текстовый контент */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Oops! Page Not Found (404 Error)</h1>

              <div className="space-y-4 text-[#737373] mb-8">
                <p>We're sorry, but the page you're looking for doesn't seem to exist.</p>
                <p>If you typed the URL manually, please double-check the spelling.</p>
                <p>If you clicked on a link, it may be outdated or broken.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={() => router.push("/")} className="bg-[#0095f6] hover:bg-[#0095f6]/90">
                  Go to Home
                </Button>

                <Button variant="outline" onClick={() => router.back()} className="border-[#dbdbdb]">
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

