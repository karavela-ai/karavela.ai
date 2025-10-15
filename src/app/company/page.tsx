import {
  ArrowTrendingUpIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

import { CompanyHero } from '@/components/companyHero'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const stats = [
  { label: 'Hours of brain data', value: '10 000+' },
  { label: 'Unique participants', value: '1 000+' },
  { label: 'Acquisition centers', value: '10+' },
]

function Mission() {
  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Our pursuit
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl/8 text-gray-600">
              First and foremost, our mission is to collected much needed data
              on the human brain. We are working hard to collect - and, in part,
              share - the dataset that is missing to advance most clinical
              trials in psychiatry and neurology: large high-quality brain
              activity data during naturalistic tasks in healthy participants.
            </p>
            <p className="mt-10 max-w-xl text-base/7 text-gray-700">
              Using this data, we will build models that better understand what
              is common and different across individuals, ultimately leading to
              more personalized and effective treatments.
            </p>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

const values = [
  {
    name: 'Be bold.',
    description:
      "Let's take risks and try new things. Also, if you got that pun, maybe you should write to us.",
    icon: BoltIcon,
  },
  {
    name: 'Be a teamplayer.',
    description:
      'We like working with others, and like people who keep the team spirits high.',
    icon: UserGroupIcon,
  },
  {
    name: 'Be transparent.',
    description:
      'We believe that scientific knowledge and data, just like chocolate, are better when shared.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Stay open-minded.',
    description:
      "It's hard to know what we don't know. Let's be open to new ideas and perspectives.",
    icon: SparklesIcon,
  },
  {
    name: 'Think long-term.',
    description:
      'Impactful research can take time to bear fruit. Project yourself for the long run.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Enjoy the ride.',
    description:
      'We are set for a fantastic adventure, make sure to savour the journey!',
    icon: SunIcon,
  },
]

function Values() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Our values
        </h2>
        <p className="mt-6 text-lg/8 text-gray-700">
          We strive to build a diverse team of independent, cool-headed and
          dedicated experts who share a set of common core values.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
        {values.map((value) => (
          <div key={value.name} className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <value.icon
                aria-hidden="true"
                className="absolute top-1 left-1 size-5 text-indigo-600"
              />
              {value.name}
            </dt>{' '}
            <dd className="inline">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

const team = [
  {
    name: 'Antoine Collas',
    role: 'Models team lead',
    imageUrl: '/team/antoine-collas.jpeg',
  },
  {
    name: 'Louis Jalouzot',
    role: 'Models team scientist',
    imageUrl: '/team/louis-jalouzot.jpg',
  },
  {
    name: 'Charles Maussion',
    role: 'Co-founder / CPO',
    imageUrl: '/team/charles-maussion.jpeg',
  },
  {
    name: 'Bertrand Thirion',
    role: 'Co-founder / CSO',
    imageUrl: '/team/bertrand-thirion.jpeg',
  },
  {
    name: 'Alexis Thual',
    role: 'Co-founder / CEO',
    imageUrl: '/team/alexis-thual.jpeg',
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffleArray = (array: any[]) => {
  const shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  return shuffled
}

function Team() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a team of researchers, engineers and clinicians who are
            passionate about the brain and want their work to make a difference
            in clinical research.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {shuffleArray(team).map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto size-24 rounded-full object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm/6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// function Join() {
//   return (
//     <div className="bg-white">
//       <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
//             Feeling like this could be a good fit?
//           </h2>
//           <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
//             Karavela is always looking for talented individuals who are
//             passionate about advancing brain research. We are open to
//             spontaneous applications and would love to hear from you.
//           </p>
//           <div className="mt-10 flex items-center justify-center gap-x-6">
//             <a
//               href="contact"
//               className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Get in touch
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

function Join() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Feeling like this
            <br />
            could be a good fit?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
            Karavela is always looking for talented individuals who are
            passionate about advancing brain research. We are open to
            spontaneous applications and would love to hear from you.
          </p>
        </div>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <Link
            href="contact"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get in touch
          </Link>
          {/* <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 hover:opacity-80"
          >
            Learn more
            <span aria-hidden="true">→</span>
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default function CompanyPage() {
  return (
    <div className="bg-white">
      {/* <GradientBackground /> */}
      <Container>
        <Navbar />
      </Container>

      <main className="isolate">
        <CompanyHero />
        <Mission />

        {/* <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            className="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl"
          />
        </div> */}

        <Container className="mt-32 bg-indigo-50 sm:mt-40">
          <Team />
        </Container>

        <Values />
        <Join />
      </main>

      <Footer />
    </div>
  )
}
