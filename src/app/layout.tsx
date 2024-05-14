import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CaseCobra',
  description:
    'Capture your favorite memories with your own one-of-one phone case. CaseCobra allows you to protect your memories, not your phone case.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
