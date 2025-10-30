import { CheckCircleIcon } from '@heroicons/react/20/solid'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'

function Solutions() {
  return (
    <div className="bg-white px-6 py-32 text-justify lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <Subheading>Karavela solutions</Subheading>
        <Heading>Boosting clinical trials with valuable insights</Heading>

        <p className="mt-6 text-xl/8">
          Karavela is a team of brain and AI experts bringing together
          cutting-edge technology and a massive dataset to enhance our
          understanding of the human brain. We acquire and model brain data
          collected in healthy participants to better understand the
          similarities and differences between individuals and develop tools
          that can help pharmacological teams take the best decisions in
          clinical trials.
        </p>

        <div className="mt-10 max-w-2xl text-gray-600">
          <p>
            There are many ways that clinical researchers can interact with
            Karavela, from collaborating on research projects in the form of
            partnerships, to using our pre-trained models to enhance existing or
            future clinical trials, to leveraging our expertise in MRI data
            collection.
          </p>

          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Research collaborations
          </h2>

          <p className="mt-6">
            The Karavela team has extensive experience in MRI signal analysis
            tailored for the brain. We can deploy our skill set where it is most
            impactful and collaborate with your team to advance existing or new
            research projects, based on retrospective or prospective data
            collections. In particular, there are a number of aspects that
            Karavela can help bring insights on:
          </p>

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Response to treatment -
                </strong>{' '}
                Track and predict how cohort participants respond to treatment
                over time based on brain recordings.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Patient stratification -
                </strong>{' '}
                Identify and group patients based on their brain data to improve
                treatment outcomes.
              </span>
            </li>
          </ul>

          {/* <p className="mt-8">
            Moreover, data acquisition and model training are very expensive and
            time-consuming, which is why we will allow other teams to use some
            of our hardly-obtained ressources to advance our common
            understanding of the brain.
          </p> */}

          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Accessing Karavela’s core pre-trained models and fine-tuning them
            for clinical applications
          </h2>

          <p className="mt-6">
            While the previously mentioned research collaborations can happen
            without the need to rely on data collected by Karavela, leveraging
            our pre-trained models can significantly enhance the accuracy of
            trained models.
          </p>

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Feature extraction -
                </strong>{' '}
                Use our pre-trained models to extract features from cohort data
                and train simple model on top of these features, allowing for
                quick and efficient model training with minimal data.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Fine-tuning on cohort data -
                </strong>{' '}
                Use our pre-trained models as a starting point to fine-tune them
                on your cohort data, improving the accuracy and relevance of the
                models for your specific research needs.
              </span>
            </li>
          </ul>

          <p className="mt-6">
            Note that Karavela does not provide access to the raw data collected
            internally, but rather to the AI models that have been trained on
            this data. This allows researchers to leverage the power of our
            models while ensuring privacy and security of the participants
            scanned.
          </p>

          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            New data collection
          </h2>

          <p className="mt-6">
            Karavela builds a robust and efficient data acquisition pipeline
            that can be adapted to new protocols. We can help design and
            implement new data collection endeavours, ensuring that the data
            collected is of the highest quality and tailored to the specific
            needs of your research.
          </p>

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Healthy volunteers -
                </strong>{' '}
                Karavela builds a network of acquisition sites capable of
                rapidly acquiring data in healthy volunteers, allowing for
                large-scale data collection with rich stimuli and
                deep-phenotyping strategies.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Rich MRI settings -
                </strong>{' '}
                Karavela can help design, implement and deploy new MRI settings
                to acquire data that is tailored to the specific needs of your
                research, including advanced imaging techniques and protocols.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Trial() {
  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Get in touch with our sales team
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
          Our sales team is ready to assist you with any inquiries you may have.
          Whether you are interested in our research collaborations, accessing
          our pre-trained models, or exploring new data collection
          opportunities, we are here to help you find the best solutions for
          your needs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/contact"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <GradientBackground />
      <Navbar />
      <Solutions />
      <Container className="bg-indigo-50">
        <Trial />
      </Container>
      <Footer showDivier={false} />
    </main>
  )
}
