import type { Metadata } from 'next'
import { Inria_Sans } from 'next/font/google'
import './globals.css'

const inriaSans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'Next Prodigy - Enterprise IT Solutions',
  description: 'Next Prodigy provides enterprise-grade IT infrastructure, networking, and security solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inriaSans.className}>{children}</body>
    </html>
  )
}
