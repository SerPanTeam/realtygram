"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GlobalError({
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
    <html lang="ru">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
          <div className="w-full max-w-md text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold italic tracking-tighter">ICMGRAM</h1>
            </div>

            <div className="mb-8">
              <div className="relative mx-auto h-40 w-40">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Error illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>

            <p className="mb-8 text-[#737373]">
              We're experiencing some technical difficulties. Please try again later.
            </p>

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
      </body>
    </html>
  )
}

