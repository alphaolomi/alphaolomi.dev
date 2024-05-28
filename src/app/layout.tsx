import { type Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Alpha Olomi',
    default:
      'Alpha Olomi - Software engineer, community leader, and open source enthusiast',
  },
  description:
    'I’m Alpha, a software engineer and open source enthusiast based in Tanzania. Building Openpesa, where we develop technologies that facilitate payments systems and integrations',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
