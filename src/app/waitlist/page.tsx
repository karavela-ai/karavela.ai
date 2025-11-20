"use client"

import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import Script from 'next/script'


export default function Page() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Navbar />
      <div className="mb-8 px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Subheading className="mt-16">Cephalonauts One</Subheading>
          <Heading className="mb-16">Apply to our cohort of healthy participants</Heading>

          <iframe
            data-tally-src="https://tally.so/embed/wg2aNN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="1486"
            title="Cephalonauts One study"
          />
          <Script
            id="tally-js"
            src="https://tally.so/widgets/embed.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
