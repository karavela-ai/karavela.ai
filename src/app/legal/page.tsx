'use client'

import { GradientBackground } from '@/components/gradient'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'

function Legal() {
  return (
    <div className="relative isolate bg-transparent overflow-hidden">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Heading>Legal notice</Heading>
          <p className="mt-8 text-base/8 text-gray-600 text-justify">
            In accordance with the provisions of article 6(I) (1) of law no. 2004-575 of 21 June 2004 on confidence in the digital economy, the publisher of the website <span className="font-mono text-indigo-500 font-semibold">https://karavela.ai/</span> is:<br /><br />

            Karavela, a simplified joint stock company with capital of EUR 1,500, listed on the Paris Trade and Companies Register (R.C.S.) under number 944 250 448, with registered offices at 15 RUE ROLLIN, 75005 PARIS, FRANCE.<br /><br />

            Contact email address: <span className="font-mono text-indigo-500 font-semibold">contact@karavela.ai</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function NotFoundPage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Navbar />
      <Legal />
      <Footer />
    </main>
  )
}
