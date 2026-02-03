'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function BusinessOwnerForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    businessType: '',
    location: '',
    instagram: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userType: 'business',
          ...formData,
        }),
      })

      if (response.ok) {
        router.push('/thank-you?type=business')
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-charcoal/60 hover:text-ocean-blue mb-8 transition-colors">
          ← Back
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Business Owner Waitlist
          </h1>
          <p className="text-lg text-charcoal/70">
            Get discovered by tourists and digital nomads when you have availability, events, or special vibes happening at your venue.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors"
              placeholder="Alex Nguyen"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors"
              placeholder="alex@mycafe.com"
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Business Name *
            </label>
            <input
              type="text"
              required
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors"
              placeholder="The Coffee House"
            />
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Business Type *
            </label>
            <select
              required
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors"
            >
              <option value="">Select type...</option>
              <option value="Café">Café</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Gym">Gym</option>
              <option value="Co-working Space">Co-working Space</option>
              <option value="Bar">Bar</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Location (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Location / Neighborhood <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors"
              placeholder="My Khe Beach, An Thuong, etc."
            />
          </div>

          {/* Instagram (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Instagram Handle <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <div className="flex items-center">
              <span className="bg-gray-100 px-4 py-3 border border-r-0 border-gray-300 rounded-l-xl text-gray-600">
                @
              </span>
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors"
                placeholder="yourcafe"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ocean-blue text-white py-4 rounded-xl font-semibold text-lg hover:bg-teal-blue transition-colors disabled:bg-charcoal/40 disabled:cursor-not-allowed"
          >
            {loading ? 'Joining...' : 'Join Waitlist'}
          </button>

          <p className="text-xs text-gray-500 text-center">
            We'll email you when Da Nang Life launches. No spam, promise.
          </p>
        </form>
      </div>
    </div>
  )
}
