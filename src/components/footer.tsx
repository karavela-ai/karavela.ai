import clsx from 'clsx'

import { Badge } from '@/components/catalyst/badge'
import { WaveBackground } from '@/components/wave-background'

const navigationFooter = {
  trials: [
    { name: 'Cephalonauts One', href: '/trials/cephalonauts-one', badge: <Badge color="zinc">Soon</Badge> },
    { name: 'FAQ', href: '/faq' },
  ],
  community: [
    { name: 'GitHub', href: 'https://github.com/karavela-ai/' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/karavela-ai/' },
  ],
  company: [
    { name: 'Manifest', href: '/manifest' },
    { name: 'About us', href: '/company' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ],
  // legal: [
  //   { name: 'Terms of service', href: '#' },
  //   { name: 'Privacy policy', href: '#' },
  //   { name: 'License', href: '#' },
  // ],
}

export function Footer({ showDivier = true, showSpins = true }) {
  return (
    <footer className="relative bg-white overflow-hidden">
      {showSpins && (
        <div className="absolute h-full w-screen">
          <WaveBackground fade={'radial'} />
        </div>
      )}

      <div
        className={clsx(
          showDivier && 'border-t border-gray-900/10',
          'mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32 relative',
        )}
      >
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex flex-row items-center gap-x-4">
              <img alt="Karavela" src="/karavela.png" className="h-7" />
              <p className="text-gradient text-3xl font-semibold text-indigo-500">
                karavela.ai
              </p>
            </div>
            <p className="text-sm/6 text-balance text-gray-600">
              Exploring the human brain, one person at a time.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Community
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigationFooter.community.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigationFooter.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Clinical Trials
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigationFooter.trials.map((item) => (
                    <li key={item.name} className="flex items-center">
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                      {item.badge && (
                        <span className="ml-2 inline-block">
                          {item.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigationFooter.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t-0 border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-600">
            &copy; {new Date().getFullYear()} Karavela Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
