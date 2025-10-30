import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'

function Explain() {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <Subheading>
            Safety and ethics
          </Subheading>
          <Heading>Open and safe research at Karavela</Heading>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                At Karavela, we strive to push the boundaries of brain research by collecting one of the largest datasets in the world.
                To this end, we scan healthy participants all across the globe using advanced MRI technology.
              </p>
              <p className="mt-8">
                This data is then used to train AI models that can help us better understand the activity of the human brain with minimal social and genetic biases.
                In particular, these models will be used to help the development of new treatments for neurological and psychiatric disorders.
              </p>
            </div>
            <div>
              <p>
                While doing so, we are committed to ensuring the safety and well-being of all participants.
                As legally required, our protocols are approved by independent ethics committees which carefully review our research plans.
              </p>
              <p className="mt-8">
                Finally, while we take extensive measures to protect participant data, we also pledge to openly share some of our data with the scientific community, always with the explicit consent of the participants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const faqs = [
  {
    id: 1,
    question: "Is Magnetic Resonance Imaging dangerous?",
    answer:
      "No, Magnetic Resonance Imaging (MRI) is not inherently dangerous. In particular, contrary to X-rays or CT scans, it does not use ionizing radiation."
  },
  {
    id: 2,
    question: "Is it harmful to repeatedly participate in MRI sessions?",
    answer:
      "No, there is no evidence to suggest that repeated MRI sessions are harmful. Several studies involving hundreds of MRI sessions per participant have shown no adverse effects."
  },
  {
    id: 3,
    question: "Are there any side effects of MRI?",
    answer:
      "There can be. MRI is a non-invasive imaging technique and does not use ionizing radiation, so it is generally considered safe. However, some patients may experience mild side effects such as anxiety or claustrophobia due to the enclosed space of the MRI machine. Moreover, as MRI scanners can be very loud, ear plugs are generally provided to protect participants."
  },
  {
    id: 4,
    question: "What measures are taken to ensure participant safety?",
    answer:
      "At Karavela, we prioritize the safety and well-being of our participants. We adhere to strict ethical guidelines and protocols to ensure a safe research environment. This includes thorough screening processes, informed consent, earing protection and continuous monitoring throughout our studies."
  },
  {
    id: 5,
    question: "Can I get my brain scanned?",
    answer:
      "Maybe! We are actively recruiting participants for our MRI studies. If you fit the inclusion criteria of one or several of our research protocols, you may be eligible to participate."
  },
  {
    id: 6,
    question: "Will my data be shared openly?",
    answer: "Only if you want to. We encourage participants who attend sessions repeatedly to share their data, but the choice remains yours."
  }
]

function FAQ() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Frequently asked questions
        </h2>
        <dl className="mt-20 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <main>
      <GradientBackground />
      <Navbar />
      <Explain />
      <FAQ />
      <Footer />
    </main>
  )
}
