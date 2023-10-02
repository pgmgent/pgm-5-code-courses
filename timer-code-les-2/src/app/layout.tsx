import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Timer',
  description: 'Timer by pgm-5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
