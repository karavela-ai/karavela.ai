"use client"

import { useEffect, useState } from 'react'
import { GradientBackground } from '@/components/gradient'
import Script from 'next/script'

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && typeof window !== 'undefined' && window.Tally) {
      window.Tally.loadEmbeds()
    }
  }, [mounted])

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <div className="h-screen mt-16 mb-32 flex justify-center">
        {mounted && (
          <iframe
            data-tally-src="https://tally.so/r/wg2aNN?transparentBackground=1"
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Waitlist for Cephalonauts study"
          />
        )}
        <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
        />
      </div>
    </main>
  )
}
