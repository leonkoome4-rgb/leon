import '../styles/globals.css'
import React from 'react'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' })

export const metadata = {
  title: 'Leon Koome — Software Engineer',
  description: 'Portfolio of Leon Koome, a software engineer building modern, fast, and reliable web applications.',
  openGraph: {
    title: 'Leon Koome — Software Engineer',
    description: 'Portfolio of Leon Koome, a software engineer building modern, fast, and reliable web applications.',
    images: ['/og.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leon Koome — Software Engineer',
    description: 'Portfolio of Leon Koome, a software engineer building modern, fast, and reliable web applications.',
    images: ['/og.png']
  }
}

export const viewport = {
  themeColor: '#07060a'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="site">
          {children}
        </div>
      </body>
    </html>
  )
}
