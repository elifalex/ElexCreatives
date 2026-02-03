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
    businessType: [] as string[],
    location: '',
    instagram: '',
    willPay: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/dananglife/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userType: 'business',
          ...formData,
          businessType: formData.businessType.join(', '),
        }),
      })

      if (response.ok) {
        router.push('/dananglife/thank-you?type=business')
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
        <Link href="/dananglife" className="inline-flex items-center text-charcoal/60 hover:text-ocean-blue mb-8 transition-colors">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors text-charcoal bg-white"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors text-charcoal bg-white"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors text-charcoal bg-white"
              placeholder="The Coffee House"
            />
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Business Type * <span className="text-gray-400 font-normal">(Select all that apply)</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Café', 'Restaurant', 'Gym', 'Co-working Space', 'Bar', 'Other'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData(prev => ({
                    ...prev,
                    businessType: prev.businessType.includes(type)
                      ? prev.businessType.filter(t => t !== type)
                      : [...prev.businessType, type]
                  }))}
                  className={`px-4 py-3 rounded-xl border-2 font-medium transition-all text-sm ${
                    formData.businessType.includes(type)
                      ? 'bg-ocean-blue text-white border-ocean-blue'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
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
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors text-charcoal bg-white"
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
                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors text-charcoal bg-white"
                placeholder="yourcafe"
              />
            </div>
          </div>

          {/* Monthly Budget */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              How much would you pay per month? <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <p className="text-xs text-charcoal/50 mb-3">
              To publish posts about events, promotions, and get listed on the app
            </p>
            <div className="flex items-center">
              <span className="bg-gray-100 px-4 py-3 border border-r-0 border-gray-300 rounded-l-xl text-gray-600">
                $
              </span>
              <input
                type="number"
                min="0"
                value={formData.willPay}
                onChange={(e) => setFormData({ ...formData, willPay: e.target.value })}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors text-charcoal bg-white"
                placeholder="25"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || formData.businessType.length === 0}
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
