'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import clsx from 'clsx'
import { useState } from 'react'

const navigation = [
  { name: 'Manifest', href: 'manifest' },
  { name: 'Company', href: 'companyNew' },
  { name: 'News', href: 'news' },
  { name: 'Contact', href: 'contact' },
]

// export function Navbar2({ showCAT = true }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="inset-x-0 top-0 z-50">
//       <nav
//         aria-label="Global"
//         className="flex items-center justify-between p-6 lg:px-8"
//       >
//         <div className="flex lg:flex-1">
//           <a href="#" className="-m-1.5 p-1.5">
//             <span className="sr-only">Karavela</span>
//             <img alt="Karavela" src="/karavela.png" className="h-8" />
//           </a>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(true)}
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon aria-hidden="true" className="size-6" />
//           </button>
//         </div>
//         <div className="hidden lg:flex lg:gap-x-12">
//           {navigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="text-sm/6 font-semibold text-gray-900"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Log in <span aria-hidden="true">&rarr;</span>
//           </a> */}
//           {showCAT && (
//             <a
//               href="#"
//               className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Get scanned
//             </a>
//           )}
//         </div>
//       </nav>
//       <Dialog
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}
//         className="lg:hidden"
//       >
//         <div className="fixed inset-0 z-50" />
//         <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Karavela</span>
//               <img alt="Karavela" src="/karavela.png" className="h-8" />
//               {/* <img
//                 alt=""
//                 src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                 className="h-8 w-auto"
//               /> */}
//             </a>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(false)}
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon aria-hidden="true" className="size-6" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//               <div className="py-6">
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Log in
//                 </a>
//               </div>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </header>
//   )
// }

export function Navbar({ showCAT = true, absolute = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={clsx(
        absolute ? 'absolute' : 'relative',
        'z-50 w-full bg-transparent',
      )}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Karavela</span>
            <img alt="Karavela" src="/karavela.png" className="h-8" />
            {/* <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            /> */}
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {/* <a href="#" className="hidden text-sm/6 font-semibold text-gray-900 lg:block">
            Log in
          </a> */}
          {showCAT && (
            <Link
              href="#"
              className="hidden rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:block"
            >
              Get scanned
            </Link>
          )}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Karavela</span>
              <img alt="Karavela" src="/karavela.png" className="h-8" />
              {/* <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
            </Link>
            <Link
              href="#"
              className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
