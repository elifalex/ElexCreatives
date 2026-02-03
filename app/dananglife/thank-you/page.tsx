'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'

const SHARE_URL = 'https://elexcreatives.com/dananglife'
const SHARE_TEXT = "Da Nang Life is coming — the app to discover the best cafés, gyms & hangouts in Da Nang. Join the waitlist!"

function ThankYouContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(SHARE_URL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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

        {/* Instagram Follow */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-charcoal mb-1">Follow us on Instagram</h2>
          <p className="text-sm text-charcoal/50 mb-5">Stay in the loop on launch news & Da Nang tips</p>
          <div className="flex justify-center mb-5">
            <a
              href="https://www.instagram.com/dananglife_app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/dananglife-instagram-qr.png"
                alt="Da Nang Life Instagram QR Code"
                width={200}
                height={200}
                className="rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              />
            </a>
          </div>
          <a
            href="https://www.instagram.com/dananglife_app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-ocean-blue text-white py-3 rounded-xl text-base font-semibold hover:bg-teal-blue transition-colors"
          >
            Follow @dananglife_app
          </a>
        </div>

        {/* Share with friends */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-charcoal mb-1">Share the waitlist</h2>
          <p className="text-sm text-charcoal/50 mb-5">Tell your travel friends about Da Nang Life</p>
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + '\n' + SHARE_URL)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white py-3 rounded-xl text-base font-semibold hover:bg-green-600 transition-colors"
            >
              Share on WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}&quote=${encodeURIComponent(SHARE_TEXT)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-base font-semibold hover:bg-blue-700 transition-colors"
            >
              Share on Facebook
            </a>
            <button
              onClick={handleCopy}
              className="w-full bg-charcoal text-white py-3 rounded-xl text-base font-semibold hover:bg-charcoal/80 transition-colors"
            >
              {copied ? 'Link Copied!' : 'Copy Link'}
            </button>
          </div>
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
