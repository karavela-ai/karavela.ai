import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'

function Header() {
  return (
    <div className="bg-white px-6 pt-32 text-justify lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <Subheading>Cephalonauts One</Subheading>
        <Heading>Page under construction</Heading>

        <p className="mt-6 text-xl/8">
          This page will provide detailed information about the downstream
          applications of the data collected in the Cephalonauts One study.
        </p>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main>
      <GradientBackground />
      <Navbar />
      <Header />
      <Footer />
    </main>
  )
}
