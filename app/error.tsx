"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Логирование ошибки на сервер
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar className="hidden md:flex" />

      <main className="flex-1 border-l border-[#dbdbdb] md:ml-[240px]">
        <div className="container mx-auto max-w-5xl py-12 px-4 md:py-20">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <div className="relative h-40 w-40">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Error illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">Something went wrong!</h1>

            <div className="space-y-4 text-[#737373] mb-8 max-w-lg">
              <p>We're experiencing some technical difficulties.</p>
              <p>Please try again or return to the home page.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={reset} className="bg-[#0095f6] hover:bg-[#0095f6]/90">
                Try again
              </Button>

              <Button variant="outline" asChild className="border-[#dbdbdb]">
                <Link href="/">Go to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <MobileNavigation className="md:hidden" />
    </div>
  )
}

