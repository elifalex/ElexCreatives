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
    <div className="min-h-screen bg-off-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/dananglife-logo.png"
            alt="Da Nang Life"
            width={300}
            height={300}
            className="w-48 md:w-64 h-auto rounded-3xl shadow-lg"
            priority
          />
        </div>

        {/* Value Proposition */}
        <h2 className="text-xl md:text-2xl font-semibold text-charcoal mb-4 max-w-2xl mx-auto">
          <span className="font-bold">The app</span> connecting you to Da Nang's best cafés, restaurants, gyms, co-working spaces, etc.
        </h2>

        <div className="text-base md:text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto space-y-1">
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
          <p className="text-sm text-charcoal/60 mb-8">
            <span className="font-semibold text-ocean-blue">{waitlistCount}</span> people already joined
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href="/dananglife/business"
            className="w-full md:w-auto bg-ocean-blue text-white px-12 py-6 rounded-2xl text-lg font-semibold hover:bg-teal-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            I'm a Business Owner
          </Link>

          <Link
            href="/dananglife/visitor"
            className="w-full md:w-auto bg-white border-2 border-ocean-blue text-ocean-blue px-12 py-6 rounded-2xl text-lg font-semibold hover:bg-light-aqua/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            I'm a Visitor
          </Link>
        </div>

        {/* Social Proof / Coming Soon Badge */}
        <div className="mt-16 text-charcoal/60 text-sm">
          <p className="mb-4">Join the waitlist • Launching Soon in Da Nang 🇻🇳</p>
          <a
            href="mailto:elexcreatives@gmail.com?subject=Da Nang Life - Contact&body=Hi,%0D%0A%0D%0AI'm interested in learning more about Da Nang Life.%0D%0A%0D%0AThanks!"
            className="inline-block text-ocean-blue hover:text-teal-blue font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
