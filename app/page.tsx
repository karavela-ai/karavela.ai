import Image from "next/image"
import WaveBackground from "@/components/wave-background"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      <WaveBackground />

      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Image src="/karavela.png" alt="karavela.ai logo" width={48} height={48} className="h-7 md:h-10 w-auto" />
              <h1 className="text-4xl md:text-6xl font-semibold">
                <span className="text-indigo-500">karavela.ai</span>
              </h1>
            </div>
            <p className="text-lg md:text-2xl sm:text-xl text-gray-600 mb-10 leading-relaxed">
              Building a foundation model of the brain<br/>
              with next-gen magnetic resonance
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:contact@karavela.ai"
                className="px-8 py-3 bg-indigo-50/40 text-indigo-800 backdrop-opacity-50 border border-indigo-100 rounded-md hover:bg-indigo-100/60 hover:backdrop-opacity-100 hover:border-indigo-200 transition-colors"
                rel="noopener noreferrer"
                aria-label="Contact Karavela AI via email"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} karavela.ai - All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
