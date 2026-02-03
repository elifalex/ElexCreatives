'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroPage() {
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/dananglife/api/waitlist-count')
      .then(res => res.json())
      .then(data => setWaitlistCount(data.count))
      .catch(() => setWaitlistCount(140))
  }, [])

  return (
    <div className="min-h-screen bg-off-white flex flex-col justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/dananglife-logo.png"
            alt="Da Nang Life"
            width={300}
            height={300}
            className="w-40 md:w-56 h-auto rounded-3xl shadow-lg"
            priority
          />
        </div>

        {/* Value Proposition */}
        <h2 className="text-xl md:text-2xl font-semibold text-charcoal mb-3 max-w-2xl mx-auto">
          <span className="font-bold">The app</span> connecting you to Da Nang's best cafés, restaurants, gyms, co-working spaces, etc.
        </h2>

        <div className="text-base md:text-lg text-charcoal/70 mb-10 max-w-xl mx-auto space-y-1">
          <p>Stay updated on live events, promotions, and new openings.</p>
          <p>Find the right spot to eat, work, exercise, or relax.</p>
          <p>Discover Da Nang.</p>
        </div>

        {/* CTA Introduction */}
        <p className="text-xl md:text-2xl font-semibold text-sunset-orange mb-2">
          Coming Soon • Join the Waitlist
        </p>

        {/* Waitlist Counter */}
        {waitlistCount !== null && (
          <p className="text-sm text-charcoal/60 mb-6">
            <span className="font-semibold text-ocean-blue">{waitlistCount}</span> people already joined
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
          <Link
            href="/dananglife/business"
            className="w-full bg-ocean-blue text-white px-8 py-5 rounded-2xl text-lg font-semibold hover:bg-teal-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            I'm a Business Owner
          </Link>

          <Link
            href="/dananglife/visitor"
            className="w-full bg-white border-2 border-ocean-blue text-ocean-blue px-8 py-5 rounded-2xl text-lg font-semibold hover:bg-light-aqua/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            I'm a Visitor
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-14 text-charcoal/60 text-sm space-y-3">
          <p>Launching Soon in Da Nang 🇻🇳</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/dananglife_app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ocean-blue hover:text-teal-blue font-medium transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:elexcreatives@gmail.com?subject=Da Nang Life - Contact&body=Hi,%0D%0A%0D%0AI'm interested in learning more about Da Nang Life.%0D%0A%0D%0AThanks!"
              className="text-ocean-blue hover:text-teal-blue font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
