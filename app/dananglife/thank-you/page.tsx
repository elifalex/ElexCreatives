'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')

  return (
    <div className="min-h-screen bg-off-white flex flex-col justify-center px-4 py-20">
      <div className="max-w-md mx-auto w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-light-aqua/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Thank You Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
          You're on the list! 🎉
        </h1>

        <p className="text-base text-charcoal/70 mb-2">
          {type === 'business'
            ? "Thanks for joining! We'll email you when Da Nang Life launches so you can start connecting with tourists and digital nomads."
            : "Thanks for joining! We'll email you when Da Nang Life launches so you can discover what's happening live in Da Nang."
          }
        </p>

        <p className="text-sm text-charcoal/50 mb-10">
          Keep an eye on your inbox for updates.
        </p>

        {/* Instagram QR Code */}
        <div>
          <p className="text-sm text-charcoal/70 mb-4">Follow us for updates</p>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/dananglife_app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/dananglife-instagram-qr.png"
                alt="Da Nang Life Instagram QR Code"
                width={180}
                height={180}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              />
            </a>
          </div>
          <a
            href="https://www.instagram.com/dananglife_app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-ocean-blue hover:text-teal-blue font-medium mt-3 transition-colors"
          >
            @dananglife_app
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="text-charcoal">Loading...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}
