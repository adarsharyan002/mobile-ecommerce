import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FetchDataProvider } from './context/ContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <FetchDataProvider>
      <body className={inter.className}>{children}</body>
      </FetchDataProvider>
    </html>
  )
}