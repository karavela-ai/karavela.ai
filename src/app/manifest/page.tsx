import { CheckCircleIcon } from '@heroicons/react/20/solid'

import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'

function Manifest() {
  return (
    <div className="px-6 py-32 text-justify lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <Subheading>Karavela manifest</Subheading>
        <Heading>A pledge for open and responsible science</Heading>

        <p className="mt-6 text-xl/8">
          At Karavela, we are committed to advancing brain research through open
          and responsible science. We advocate that sharing data and
          collaborating with the scientific community is essential for
          accelerating discoveries, improving treatments for neurological and
          psychiatric disorders and generally understanding the brain better.
        </p>

        <div className="mt-10 max-w-2xl text-gray-600">
          <p>
            Karavela is on a mission to collect one of the largest datasets of
            brain scans in the world. We believe that this data can help us
            better understand the human brain and develop new treatments for
            neurological and psychiatric disorders. Because this data is both
            very valuable and sensitive, we are committed to sharing it
            responsibly all the while protecting the privacy and rights of
            individuals who participate in our research.
          </p>

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  For science -
                </strong>{' '}
                We believe science is safer when shared, double-checked and
                openly discussed, which is why we will share part of our data,
                models and results with the scientific community.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  For patients -
                </strong>{' '}
                We are committed to put our data and models to good use, which
                is why we prioritise utility in clinical research centered on
                psychiatry and neurology related disorders.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  For global impact -
                </strong>{' '}
                All brains are different, and we intend to collect data that can
                benefit the largest number of people across the globe,
                regardless of age, gender, or background.
              </span>
            </li>
          </ul>

          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Open science is faster and safer
          </h2>

          <p className="mt-6">
            Research is most valuable when it is shared and discussed: we pledge
            to openly share our model training methods and results for the
            community to inspect our work and to foster reproducibility and
            allow this field to move at the fastest pace.
          </p>

          <p className="mt-8">
            Moreover, data acquisition and model training are very expensive and
            time-consuming, which is why we will allow other teams to use some
            of our hardly-obtained ressources to advance our common
            understanding of the brain.
          </p>

          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Clinical research is at the center of our mission
          </h2>

          <p className="mt-6">
            We are a passionate team of researchers, engineers and clinicians
            who are fascinated by the human brain and its mysteries.
            Nevertheless, we want to make sure that our work converts into
            activable scientific insights that can bring tangible benefits to
            patients and the broader community.
          </p>

          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>All models are wrong, but some of them are useful.</p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                alt="George Box"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/GeorgeEPBox.jpg/250px-GeorgeEPBox.jpg"
                className="size-6 flex-none rounded-full bg-gray-50 object-cover"
              />
              <div className="text-sm/6">
                <strong className="font-semibold text-gray-900">
                  George Box
                </strong>{' '}
                – Statistician
              </div>
            </figcaption>
          </figure>

          <p className="mt-10">
            Our data collection and modelling endeavours are not the end game,
            but necessary steps to building tools that are useful for patients
            and medical professionals.
          </p>
        </div>

        {/* <figure className="mt-16">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            className="aspect-video rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <InformationCircleIcon
              aria-hidden="true"
              className="mt-0.5 size-5 flex-none text-gray-300"
            />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure> */}

        <div className="mt-16 max-w-2xl text-gray-600">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Every brain is different, and our data reflects that
          </h2>

          <p className="mt-6">
            Brains are widely different from one person to another. Building
            models of the brain which are useful to the largest proportion of
            the population requires a diverse dataset that captures this
            variability. We pledge to acquire data from participants with very
            diverse backgrounds, including age, gender, ethnicity, and
            neurological conditions, to ensure our models are representative and
            effective for everyone.
          </p>

          <p className="mt-8">
            Moreover, our data acquisition programs are designed to include many
            international partners, ensuring a wide range of perspectives and
            expertise in our research efforts all the while making sure that the
            protocols we develop can be applied globally.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main>
      <GradientBackground />
      <Navbar />
      <Manifest />
      <Footer />
    </main>
  )
}
