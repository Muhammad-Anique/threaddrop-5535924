import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ThreadDrop | Premium Streetwear',
  description: 'Join the waitlist for exclusive streetwear drops. Premium T-shirts for the culture.',
  keywords: ['streetwear', 't-shirt', 'fashion', 'drop', 'thread', 'clothing'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-td-black text-td-white">
        {children}
      </body>
    </html>
  )
}