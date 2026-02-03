'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function VisitorForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    visitorType: '',
    interests: [] as string[],
    whenInDaNang: '',
  })

  const interestOptions = [
    'Coffee spots',
    'Fitness',
    'Nightlife',
    'Co-working',
    'Events',
    'Food',
  ]

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/dananglife/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userType: 'visitor',
          ...formData,
          interests: formData.interests.join(', '),
        }),
      })

      if (response.ok) {
        router.push('/dananglife/thank-you?type=visitor')
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
            Visitor Waitlist
          </h1>
          <p className="text-lg text-gray-600">
            Discover what's happening right now at Da Nang's best cafés, gyms, restaurants, and co-working spaces. Never miss out on the vibe.
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
              placeholder="Sarah Smith"
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
              placeholder="sarah@email.com"
            />
          </div>

          {/* User Type */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              I am a... *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Tourist', 'Digital Nomad', 'Expat', 'Local'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, visitorType: type })}
                  className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                    formData.visitorType === type
                      ? 'bg-ocean-blue text-white border-ocean-blue'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Interested in... <span className="text-gray-400 font-normal">(Select all that apply)</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interestOptions.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`px-4 py-3 rounded-xl border-2 font-medium transition-all text-sm ${
                    formData.interests.includes(interest)
                      ? 'bg-ocean-blue text-white border-ocean-blue'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* When in Da Nang */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              When are you in Da Nang?
            </label>
            <select
              value={formData.whenInDaNang}
              onChange={(e) => setFormData({ ...formData, whenInDaNang: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/10 transition-colors"
            >
              <option value="">Select...</option>
              <option value="Already here">Already here</option>
              <option value="Coming soon">Coming soon</option>
              <option value="Planning to visit">Planning to visit</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !formData.visitorType}
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
