import React from "react";

export default function Hero(){
  return(

    <div class="bg-hero-image h-screen bg-no-repeat">

      <div class="px-6 py-6 lg:px-8 bg-black bg-opacity-40">
        <div>
          <nav class="flex h-9 items-center justify-between" aria-label="Global">
            <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="test" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
              </a>
            </div>
            <div class="flex lg:hidden">
              <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              <a href="test" class="font-semibold text-white hover:text-gray-900">About</a>
    
              <a href="test" class="font-semibold text-white hover:text-gray-900">Testimonials</a>
    
              <a href="test" class="font-semibold text-white hover:text-gray-900">Programs</a>
    
              <a href="test" class="font-semibold text-white hover:text-gray-900">Training</a>
            </div>
            <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a href="test" class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 bg-orange-btn text-white shadow-sm ring-1 ring-white hover:ring-gray-900/20">Contact</a>
            </div>
          </nav>
          <div role="dialog" aria-modal="true">
            <div focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div class="flex h-9 items-center justify-between">
                <div class="flex">
                  <a href="test" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8" src="/assets/images/logo.png" alt="" />
                  </a>
                </div>
                <div class="flex">
                  <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                    <a href="test" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">About</a>
    
                    <a href="test" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">Testimonials</a>
    
                    <a href="test" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">Classes</a>
    
                    <a href="test" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">Training</a>
                  </div>
                  <div class="py-6">
                    <a href="test" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-gray-400/10">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div class="relative px-6 lg:px-8">
          <div class="mx-auto max-w-3xl pt-40 pb-32 sm:pt-80">
            <div>
              <div class="hidden sm:mb-8 sm:flex sm:justify-center">

              </div>
              <div>

                <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-white">Personal training in Christchurch</h1>
                <p class="mt-6 text-lg leading-8 text-white sm:text-center">Jimmy provides personal training to help busy men & women stop "trying to get in shape", and finally achieve a health & body transformation they won’t rebound from.</p>
                <div class="mt-8 flex gap-x-4 sm:justify-center">
                  <a href="test" class="inline-block rounded-lg bg-orange-btn px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-white hover:bg-white hover:text-orange-btn">
                    Get started
                    <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                  </a>
                  <a href="test" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 bg-gray-500 text-white ring-1 ring-white hover:text-gray-500 hover:bg-white">
                    Testimonials
                    <span class="text-gray-400" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
    

  )
}
