import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ŠlepajMe — Direktorijum šlep službi Crne Gore',
  description:
    'Pronađite provjerene šlep i auto-pomoć servise u Crnoj Gori. Direktan kontakt bez posrednika. Dostupno 24/7.',
  keywords: ['šlep', 'šlep služba', 'auto pomoć', 'Crna Gora', 'vučenje vozila', 'šlepanje'],
  authors: [{ name: 'ŠlepajMe' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5C518',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
