import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Loficity | Focusing with Lofi',
  description: 'Loficity - Use Lofi for focus. Every moment of buildinghis app is made with Lofi.',
  keywords: ['music', 'player', 'next.js', 'streaming', 'audio', 'beats'],
  authors: [{ name: 'Durian Designs' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
