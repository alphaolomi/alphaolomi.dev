'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <Container className="flex items-center h-full pt-16 sm:pt-32">
      <div className="flex flex-col items-center">

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Oppss, Something went wrong
        </h1>
        
        <div className="flex">
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
        <Button variant="secondary" className="mt-4" onClick={() => reset()}>
            Try again
            </Button>
        </div>
      </div>
    </Container>
      </body>
    </html>
  )
}