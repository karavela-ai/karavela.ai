import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'karavela.ai',
  description: 'Building a foundation model of the brain with next-gen magnetic resonance',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"></link>
      <body>{children}</body>
    </html>
  )
}
