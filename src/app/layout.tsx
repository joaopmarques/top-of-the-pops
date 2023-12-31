import './globals.css'

import Head from 'next/head'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Top of the Pops',
  description:
    'Serving bops every day, every week. Check out the top Genius songs of the week.',
  authors: [{ name: 'João P. Marques', url: 'https://jpmarqu.es' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://top-of-the-pops.vercel.app/',
    images: [
      {
        url: 'https://top-of-the-pops.vercel.app/top-of-the-pops-og.png',
        width: 1200,
        height: 630,
        alt: 'Top of the Pops',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
