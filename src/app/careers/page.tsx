import { ChevronRightIcon } from '@heroicons/react/20/solid'

import clsx from 'clsx'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'

const positions = [
  {
    title: 'Senior MRI Physicist',
    salary: '60k - 90k EUR / year',
    location: 'Paris, France / Partial remote',
    href: 'https://drive.proton.me/urls/ZHAFPXYHA0#ZqFrKOylhJ7t',
    badges: [
      { label: 'Data team', colour: 'indigo' },
      { label: 'Models team', colour: 'sky' },
    ],
  },
  {
    title: 'Senior Clinical Research Associate',
    salary: '40k - 80k EUR / year',
    location: 'Paris, France / Partial remote',
    href: 'https://drive.proton.me/urls/T3DH33GTEM#MwOwTTN22Gon',
    badges: [
      { label: 'Data team', colour: 'indigo' },
    ],
  },
  {
    title: 'Senior Research Scientist',
    salary: '70k - 100k EUR / year',
    location: 'Paris, France / Partial remote',
    href: 'https://drive.proton.me/urls/3GCM6NYQ7R#JEiVUO22eZSc',
    badges: [
      { label: 'Clinical team', colour: 'teal' },
    ],
  },
  {
    title: 'Junior Research Scientist',
    salary: '50k - 75k EUR / year',
    location: 'Paris, France / Partial remote',
    href: 'https://drive.proton.me/urls/4EDG5D897C#pRvRrdYr7LBR',
    badges: [
      { label: 'Models team', colour: 'sky' },
      { label: 'Clinical team', colour: 'teal' },
    ],
  },
]

function Careers() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent">

      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Subheading className="mt-16">Careers</Subheading>
          <Heading>Karavela is hiring!</Heading>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
            We are always looking for talented and motivated individuals to join our team and build a foundation model of the brain.
            If you are passionate about AI and neuroscience, we would love to hear from you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-8 mb-24">
        <div className="mx-auto max-w-2xl">

          <h3 className="text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-3xl mb-8">
            Open positions
          </h3>

          <ul role="list" className="divide-y divide-gray-100">
            {positions.map((position) => (
              <li key={position.title} className="relative flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-base/6 font-semibold text-gray-900">
                      <Link href={position.href}>
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {position.title}
                      </Link>
                    </p>
                    <p className="mt-1 flex text-sm/5 text-gray-500">
                      {position.location}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <div className="flex flex-row gap-1">
                      {position.badges.map((badge) => (
                        <div key={badge.label} className={
                          clsx(
                            `flex-none rounded-full px-2 py-1 text-xs font-medium inset-ring`,
                            badge.colour === 'indigo' ? `bg-indigo-50 text-indigo-700 inset-ring-indigo-700/10` : null,
                            badge.colour === 'sky' ? `bg-sky-50 text-sky-700 inset-ring-sky-700/10` : null,
                            badge.colour === 'teal' ? `bg-teal-50 text-teal-700 inset-ring-teal-700/10` : null,
                          )}>
                          {badge.label}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm/6 text-gray-900 mt-1">{position.salary}</p>
                  </div>
                  <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div >
  )
}



export default function Page() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Navbar />
      <Careers />
      <Footer />
    </main>
  )
}
