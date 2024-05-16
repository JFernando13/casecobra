import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'
import { Providers } from '../components/Providers'
import './globals.css'

const recursive = Recursive({ subsets: ['latin'] })

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
      <body className={recursive.className}>
        <NavBar />
        <main className='flex flex-col grainy-light min-h-[calc(100vh-3.5rem-1px)]'>
          <div className='flex-1 flex flex-col h-full'>
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  )
}
