import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DSS',
  description: 'Digital Support Solutions',
  generator: 'DSS.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
