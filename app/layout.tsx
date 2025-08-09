import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LUMIC - Modern Web Çözümleri',
  description: 'Full-Stack Web Geliştirme | React, Next.js, Node.js ile modern ve hızlı web çözümleri üretiyoruz.',
  keywords: 'web geliştirme, react, nextjs, nodejs, e-ticaret, kurumsal web sitesi',
  authors: [{ name: 'LUMIC' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
