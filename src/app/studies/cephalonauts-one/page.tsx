import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

function Header() {
  return (
    <div className="bg-white px-6 pt-32 text-justify lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <Subheading>Cephalonauts One</Subheading>
        <Heading>Get your brain scanned and help advance science</Heading>

        <p className="mt-6 text-xl/8">
          Karavela is recruiting healthy volunteers to participate in a large
          brain MRI study. Embark on this journey with us and help advance
          neuroscience by listening to your favorite content while getting your
          brain scanned.
        </p>

        <div className="mt-10 max-w-2xl text-gray-600">
          <p className="mt-6">
            This study consists in scanning a large number of healthy volunteers
            using magnetic resonance imaging (MRI). Each participant will
            undergo multiple MRI sessions. The goal is to gather data to better
            understand the way the human brain processes complex information,
            and provide valuable information to clinical trials that design new
            treatments for neurological and psychiatric disorders.
          </p>

          <h2 className="mt-10 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Protocol description
          </h2>

          <p className="mt-6">
            Sessions will last between 1 and 1.5 hours, divided in shorter runs
            of about 15 minutes each. Participants should stay still in the
            scanner while listening to natural speech (e.g. podcasts) in their
            mother tongue. They should pay close attention to the content, and
            will be asked to answer questions about it after the session.
          </p>

          {/* <p className="mt-6">
            All participants will be financially compensated for taking part in
            the study. Scanning facilities can be accessed in Paris (France),
            Orléans (France), London (United-Kingdom), Würzburg (Germany) and
            Taipei (Taiwan).
          </p> */}
        </div>
      </div>
    </div>
  )
}

function Conditions() {
  return (
    <div className="bg-white px-6 pt-24 text-justify lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <div className="max-w-2xl text-gray-600">
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Finding the right cohort
          </h2>

          <p className="mt-6">
            Depending on your availability and motivation, you can choose to
            join one of three different cohorts: <i>Crew</i>, <i>Voyager</i> and{' '}
            <i>Explorer</i>. These cohorts require different levels of
            commitment, allowing you to select the one that best fits your
            profile.
          </p>
        </div>
      </div>
    </div>
  )
}

function AdditionalConditions() {
  return (
    <div className="bg-white px-6 pt-24 pb-32 text-justify lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <div className="max-w-2xl text-gray-600">
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Security and privacy
          </h2>

          <p className="mt-6">
            MRI is a non-invasive and safe imaging technique that does not use
            ionizing radiation. However, MRI scanners are noisy and can be a bit
            uncomfortable. Participants will be provided with ear protection and
            will be able to communicate with the MRI technician at all times.
          </p>

          <p className="mt-6">
            All data collected will be stored securely by Karavela. Depending on
            the cohort, collected data will be shared openly with the rest of
            the scientific community. In all cases, the identity of participants
            will be kept confidential.
          </p>
        </div>
      </div>
    </div>
  )
}

const cohorts = [
  {
    name: 'Crew',
    id: 'cohort-crew',
    href: '#',
    sessions: '2+',
    mostPopular: false,
  },
  {
    name: 'Voyager',
    id: 'cohort-voyager',
    href: '#',
    sessions: '5+',
    mostPopular: false,
  },
  {
    name: 'Explorer',
    id: 'cohort-explorer',
    href: '#',
    sessions: '15+',
    mostPopular: false,
  },
]
const sections = [
  {
    name: 'Protocol details',
    features: [
      {
        name: 'Financial compensation',
        cohorts: { Crew: true, Voyager: true, Explorer: true },
      },
      {
        name: 'Choose stimulus content',
        cohorts: { Crew: '0%', Voyager: '30%', Explorer: '50%' },
      },
    ],
  },
  {
    name: 'Freebies',
    features: [
      {
        name: 'Cephalonauts badge and sticker',
        cohorts: { Crew: true, Voyager: true, Explorer: true },
      },
      {
        name: 'Exclusive newsletter',
        cohorts: { Crew: true, Voyager: true, Explorer: true },
      },
      {
        name: '3D printed individual cortex',
        cohorts: { Crew: false, Voyager: true, Explorer: true },
      },
      {
        name: 'Dedicated web viewer',
        cohorts: { Crew: false, Voyager: false, Explorer: true },
      },
    ],
  },
  {
    name: 'Data usage policy',
    features: [
      {
        name: 'AI model training',
        cohorts: {
          Crew: 'Mandatory',
          Voyager: 'Mandatory',
          Explorer: 'Mandatory',
        },
      },
      {
        name: 'Downstream medical applications',
        cohorts: {
          Crew: 'Mandatory',
          Voyager: 'Mandatory',
          Explorer: 'Mandatory',
        },
      },
      {
        name: 'Open access (pseudonimised)',
        cohorts: {
          Crew: "Mandatory",
          Voyager: "Mandatory",
          Explorer: 'Mandatory',
        },
      },
    ],
  },
]

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

function Cohorts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* xs to lg */}
        <div className="mx-auto max-w-md space-y-8 lg:hidden">
          {cohorts.map((cohort) => (
            <section
              key={cohort.id}
              className={classNames(
                cohort.mostPopular
                  ? 'rounded-xl bg-gray-400/5 inset-ring inset-ring-gray-200'
                  : '',
                'p-8',
              )}
            >
              <h3
                id={cohort.id}
                className="text-sm/6 font-semibold text-indigo-700"
              >
                {cohort.name}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1 text-gray-900">
                <span className="text-4xl font-semibold">
                  {cohort.sessions}
                </span>
                <span className="text-sm font-semibold text-gray-700">
                  sessions
                </span>
              </p>
              {/* <a
                href={cohort.href}
                aria-describedby={cohort.id}
                className={classNames(
                  cohort.mostPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'text-indigo-600 inset-ring inset-ring-indigo-200 hover:inset-ring-indigo-300',
                  'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                Join waitlist
              </a> */}
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm/6 text-gray-900"
              >
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.cohorts[cohort.name as 'Crew' | 'Voyager' | 'Explorer'] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-indigo-600"
                            />
                            <span>
                              {feature.name}{' '}
                              {typeof feature.cohorts[cohort.name as 'Crew' | 'Voyager' | 'Explorer'] ===
                              'string' ? (
                                <span className="text-sm/6 text-gray-500">
                                  ({feature.cohorts[cohort.name as 'Crew' | 'Voyager' | 'Explorer']})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null,
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {cohorts.some((cohort) => cohort.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  style={{
                    marginLeft: `${(cohorts.findIndex((cohort) => cohort.mostPopular) + 1) * 25}%`,
                  }}
                  aria-hidden="true"
                  className="flex w-1/4 px-4"
                >
                  <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {cohorts.map((cohort) => (
                    <th
                      key={cohort.id}
                      scope="col"
                      className="px-6 pt-6 xl:px-8 xl:pt-8"
                    >
                      <div className="text-sm/7 font-semibold text-indigo-700">
                        {cohort.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {cohorts.map((cohort) => (
                    <td key={cohort.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-gray-900">
                        <span className="text-4xl font-semibold">
                          {cohort.sessions}
                        </span>
                        <span className="text-sm/6 font-semibold text-gray-700">
                          sessions
                        </span>
                      </div>
                      {/* <a
                        href={cohort.href}
                        className={classNames(
                          cohort.mostPopular
                            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                            : 'text-indigo-600 inset-ring inset-ring-indigo-200 hover:inset-ring-indigo-300',
                          'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                        )}
                      >
                        Join waitlist
                      </a> */}
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 text-sm/6 font-semibold text-gray-900',
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th
                          scope="row"
                          className="py-4 text-sm/6 font-normal text-gray-900"
                        >
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                        </th>
                        {cohorts.map((cohort) => {
                          type CohortName = 'Crew' | 'Voyager' | 'Explorer';
                          const cohortKey = cohort.name as CohortName;
                          const value = feature.cohorts[cohortKey];
                          return (
                            <td key={cohort.id} className="px-6 py-4 xl:px-8">
                              {typeof value === 'string' ? (
                                <div className="text-center text-sm/6 text-gray-500">
                                  {value}
                                </div>
                              ) : (
                                <>
                                  {value === true ? (
                                    <CheckIcon
                                      aria-hidden="true"
                                      className="mx-auto size-5 text-indigo-600"
                                    />
                                  ) : (
                                    <MinusIcon
                                      aria-hidden="true"
                                      className="mx-auto size-5 text-gray-400"
                                    />
                                  )}

                                  <span className="sr-only">
                                    {value === true
                                      ? 'Included'
                                      : 'Not included'}{' '}
                                    in {cohort.name}
                                  </span>
                                </>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function CTA() {
  return (
    <div className="overflow-hidden bg-white pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            {/* <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Embark on this research project with us
            </h2>
            <p className="mt-6 text-xl/8 text-gray-700">
              Whether you want to learn more about your brain or help us shape
              the future of psychiatry and neurology research, we welcome you
              aboard!
            </p> */}
            {/* <p className="mt-6 text-base/7 text-gray-600">
              All participants will be financially compensated for taking part
              in the study. Scanning facilities can be accessed in Paris
              (France), Orléans (France), London (United-Kingdom), Würzburg
              (Germany) and Taipei (Taiwan).
            </p> */}
            <p className="mt-6 text-base/7 text-gray-600">
              Whether you want to learn more about your brain or help us shape
              the future of psychiatry and neurology research, we welcome you
              aboard! Simply add your name to our waitlist. Our data acquisition
              team will be in touch shortly to find the best way for you to take
              part to this journey.
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join waitlist <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt=""
                src="/company/scan_2.jpg"
                className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                <img
                  alt=""
                  src="/company/headset.jpg"
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  alt=""
                  src="/company/session_2.jpg"
                  className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  alt=""
                  src="/company/brain-cockpit-single.png"
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Navbar />
      <Header />
      <CTA />
      <Conditions />
      <Cohorts />
      <AdditionalConditions />
      <Footer />
    </main>
  )
}
