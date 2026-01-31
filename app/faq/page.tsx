import type { Metadata } from 'next'
import Link from 'next/link'
import FAQSchema from '@/app/components/schemas/FAQSchema'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Elex Creatives',
  description: 'Common questions about mobile app development, pricing, timelines, and our process. Get answers to your questions about working with Elex Creatives.',
  alternates: {
    canonical: 'https://elexcreatives.com/faq',
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <FAQSchema />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-black hover:text-gray-600 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-light text-black mb-6 border-l-4 border-black pl-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12 pl-5">
          Everything you need to know about working with Elex Creatives.
        </p>

        <div className="space-y-8">
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">How long does it take to build a mobile app?</h2>
            <p className="text-gray-700 leading-relaxed">
              Most projects are completed in <strong>8 weeks or less</strong>, from initial concept to App Store submission. Simple MVPs can be done even faster (4-6 weeks), while more complex apps may take 10-12 weeks. The timeline depends on the scope of features, design complexity, and how quickly we can get feedback during the development process.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">What's included in your fixed pricing?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our fixed-price packages include everything you need to launch:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Full UI/UX design tailored to your brand</li>
              <li>React Native development for iOS and Android</li>
              <li>QA testing on real devices</li>
              <li>App Store and Google Play submission</li>
              <li>Unlimited revisions during the project</li>
              <li>30 days of post-launch support</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              No hourly rates, no scope creep, no surprise invoices.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">Do you work with non-technical founders?</h2>
            <p className="text-gray-700 leading-relaxed">
              Absolutely! Most of our clients are non-technical founders. We guide you through every step and explain technical decisions in plain language. You don't need to know how to code—you just need a great idea. We'll handle all the technical complexity, from choosing the right architecture to submitting to the app stores.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">Which platforms do you develop for?</h2>
            <p className="text-gray-700 leading-relaxed">
              We build for <strong>both iOS and Android</strong> using React Native, ensuring your app works on both platforms from a single codebase. This saves you time and money compared to building separate native apps. Your users will get a native-quality experience on their device, whether they use iPhone or Android.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">What happens after the app is launched?</h2>
            <p className="text-gray-700 leading-relaxed">
              We provide <strong>30 days of post-launch support</strong> to fix any bugs or issues that come up. After that, we can help with updates, new features, performance optimization, and ongoing maintenance. We work on a project basis for one-time updates, or offer monthly retainer packages for continuous development and support.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">Can you help with App Store submission?</h2>
            <p className="text-gray-700 leading-relaxed">
              Yes! We handle the <strong>entire submission process</strong> for both the App Store (iOS) and Google Play (Android). This includes creating screenshots, writing app descriptions, setting up app metadata, and navigating the approval process. We'll make sure your app meets all the guidelines and gets approved as quickly as possible.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">What if I need to add features later?</h2>
            <p className="text-gray-700 leading-relaxed">
              That's expected! Apps evolve based on user feedback and business needs. After launch, we can add new features, update the design, integrate new services, or scale your infrastructure as you grow. We work on a project basis for specific features, or offer monthly retainer packages for ongoing development.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">Do you offer ongoing maintenance and support?</h2>
            <p className="text-gray-700 leading-relaxed">
              Yes. After the initial 30-day post-launch support period, we offer flexible maintenance packages. This can include bug fixes, OS compatibility updates, third-party API updates, performance monitoring, and feature enhancements. We tailor support packages to your specific needs and budget.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">How do I get started?</h2>
            <p className="text-gray-700 leading-relaxed">
              Simple: <Link href="/#contact" className="text-black underline hover:text-gray-600">fill out our contact form</Link> with details about your project. We'll schedule a call to discuss your idea, timeline, and budget. If we're a good fit, we'll send you a proposal with a fixed price quote and timeline. Once you approve, we can start right away.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">What information do you need to provide a quote?</h2>
            <p className="text-gray-700 leading-relaxed">
              To give you an accurate quote, we need to understand:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
              <li>What problem your app solves</li>
              <li>Who your target users are</li>
              <li>Key features you want in the MVP</li>
              <li>Any design preferences or branding you have</li>
              <li>Your target launch date</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Don't worry if you don't have all the details—we'll help you figure it out during our initial call.
            </p>
          </div>

          <div className="pb-8">
            <h2 className="text-2xl font-medium text-black mb-3">Do you sign NDAs?</h2>
            <p className="text-gray-700 leading-relaxed">
              Yes, we're happy to sign a mutual NDA before discussing your project in detail. We understand that your idea is valuable and treat all client information with strict confidentiality.
            </p>
          </div>
        </div>

        {/* CTA */}
        <section className="text-center py-12 mt-12 border-t border-gray-200">
          <h2 className="text-3xl font-light text-black mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            We're here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Contact Us →
          </Link>
        </section>

        {/* Related Links */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-medium text-black mb-4">Learn More</h3>
          <div className="space-y-2">
            <p>
              <Link href="/services/mobile-app-development-for-startups" className="text-black underline hover:text-gray-600">
                → Our Services & Process
              </Link>
            </p>
            <p>
              <Link href="/blog" className="text-black underline hover:text-gray-600">
                → Read Our Blog
              </Link>
            </p>
            <p>
              <Link href="/#apps" className="text-black underline hover:text-gray-600">
                → View Our Portfolio
              </Link>
            </p>
          </div>
        </section>
      </article>
    </div>
  )
}
