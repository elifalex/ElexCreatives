'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-light-aqua/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Thank You Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
          You're on the list! 🎉
        </h1>

        <p className="text-xl text-gray-600 mb-4">
          {type === 'business'
            ? "Thanks for joining! We'll email you when Da Nang Life launches so you can start connecting with tourists and digital nomads."
            : "Thanks for joining! We'll email you when Da Nang Life launches so you can discover what's happening live in Da Nang."
          }
        </p>

        <p className="text-lg text-gray-500 mb-12">
          Keep an eye on your inbox for updates.
        </p>

        {/* Instagram QR Code */}
        <div className="mb-12">
          <p className="text-sm text-charcoal/70 mb-4">Follow us on Instagram for updates</p>
          <div className="flex justify-center">
            <Image
              src="/dananglife-instagram-qr.png"
              alt="Da Nang Life Instagram QR Code"
              width={200}
              height={200}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <p className="text-xs text-charcoal/60 mt-3">@dananglife_app</p>
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
