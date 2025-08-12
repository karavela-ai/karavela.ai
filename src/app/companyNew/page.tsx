import {
  ArrowTrendingUpIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

import { Container } from '@/componentsNew/container'
import { Footer } from '@/componentsNew/footer'
import { Navbar } from '@/componentsNew/navbar'

function Hero() {
  return (
    <div className="relative isolate -z-10">
      {/* <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg> */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
          }}
          className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                We’re on a mission to model the dynamics of the human brain
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                At Karavela, we are building a foundation model of the brain
                using next-gen magnetic resonance imaging. Our goal is to
                collect the largest dataset of the human brain’s dynamics to
                enhance clinical trials with AI and crack brain decoding.
              </p>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                <div className="relative">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div className="relative">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div className="relative">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
      'We like working with others, and like people who keep the team spirit high.',
    icon: UserGroupIcon,
  },
  {
    name: 'Be transparent.',
    description:
      'We believe that scientific knowledge, just like a good dessert, is better when shared.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Stay open.',
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
      'We are set for a fantastic adventure, don\'t forget to enjoy the journey!',
    icon: SunIcon,
  },
]

function Values() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
          Our values
        </h2>
        <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
          We strive to build a diverse team of independent, cool-headed and
          dedicated experts who share a set of common core values.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16 dark:text-gray-400">
        {values.map((value) => (
          <div key={value.name} className="relative pl-9">
            <dt className="inline font-semibold text-gray-900 dark:text-white">
              <value.icon
                aria-hidden="true"
                className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-500"
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
    imageUrl:
      '/team/antoine-collas.jpeg',
  },
  // {
  //   name: 'Louis Jalouzot',
  //   role: 'Models team scientist',
  //   imageUrl:
  //     '/team/louis-jalouzot.jpeg',
  // },
  {
    name: 'Charles Maussion',
    role: 'Co-founder / CPO',
    imageUrl:
      '/team/charles-maussion.jpeg',
  },
  {
    name: 'Bertrand Thirion',
    role: 'Co-founder / CSO',
    imageUrl:
      '/team/bertrand-thirion.jpeg',
  },
  {
    name: 'Alexis Thual',
    role: 'Co-founder / CEO',
    imageUrl:
      '/team/alexis-thual.jpeg',
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
                className="mx-auto size-24 rounded-full outline-1 -outline-offset-1 outline-black/5 object-cover"
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
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
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
            className="text-sm/6 font-semibold text-gray-900 hover:opacity-80 dark:text-gray-100"
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
        <Hero />
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
