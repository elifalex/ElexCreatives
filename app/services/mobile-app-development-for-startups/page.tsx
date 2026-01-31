import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceSchema from '@/app/components/schemas/ServiceSchema'
import FAQSchema from '@/app/components/schemas/FAQSchema'

export const metadata: Metadata = {
  title: 'Mobile App Development for Startups | Fixed Price, 8 Weeks or Less',
  description: 'Turn your startup idea into a production-ready mobile app in 8 weeks. Fixed pricing, unlimited revisions, React Native development for iOS and Android.',
  alternates: {
    canonical: 'https://elexcreatives.com/services/mobile-app-development-for-startups',
  },
  openGraph: {
    title: 'Mobile App Development for Startups | Elex Creatives',
    description: 'Turn your startup idea into a production-ready mobile app in 8 weeks.',
    url: 'https://elexcreatives.com/services/mobile-app-development-for-startups',
  },
}

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema />
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
          Mobile App Development for Startups
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12 pl-5">
          Turn your startup idea into a production-ready mobile app in 8 weeks or less. Fixed pricing, unlimited revisions, and expert React Native development.
        </p>

        {/* Hero Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-black mb-6">Why Startups Choose Elex Creatives</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have an idea that could change your industry. But between fundraising, hiring, and building your business, you don't have time to become a mobile development expert. You need a partner who can take your vision and turn it into a real, working app—fast.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            That's where we come in. Elex Creatives is a mobile app development duo specializing in React Native and Expo. We've built apps for habit tracking, event discovery, and gaming—all delivered on time, on budget, and ready for the App Store.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We don't do lengthy sales calls or complicated proposals. We focus on what matters: building your app and getting it into users' hands.
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-light text-black mb-6">The Problem with Traditional App Development</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-black mb-2">Budget Uncertainty</h3>
              <p className="text-gray-700 leading-relaxed">
                Most agencies quote $50,000-$150,000 for a basic app, with vague timelines and scope creep that drives costs even higher.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-black mb-2">Slow Timelines</h3>
              <p className="text-gray-700 leading-relaxed">
                Traditional development firms take 4-6 months to deliver an MVP. By the time your app launches, the market may have moved on.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-black mb-2">Technical Complexity</h3>
              <p className="text-gray-700 leading-relaxed">
                You're not a developer. You shouldn't have to understand the difference between Swift and Kotlin, or worry about App Store submission guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-black mb-6">Our 8-Week Process</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We've refined a streamlined process that takes your app from concept to the App Store in 8 weeks or less. Here's how it works:
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-medium text-black mb-2">Weeks 1-2: Planning & Design</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                We start with a kickoff call to understand your vision, target users, and core features. Then we:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Define the MVP scope (3-5 key features only)</li>
                <li>Create wireframes and user flows</li>
                <li>Design the UI/UX with your brand in mind</li>
                <li>Finalize the tech stack and architecture</li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="text-xl font-medium text-black mb-2">Weeks 3-6: Development</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                This is where the magic happens. We build your app using React Native and Expo, which means:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>One codebase works on both iOS and Android</li>
                <li>Faster development without compromising quality</li>
                <li>Weekly progress updates with working demos</li>
                <li>Unlimited revisions during this phase</li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="text-xl font-medium text-black mb-2">Weeks 7-8: Testing & Launch</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                The final sprint to the finish line:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>QA testing on real iOS and Android devices</li>
                <li>Bug fixes and performance optimization</li>
                <li>App Store and Google Play asset preparation</li>
                <li>Submission and approval (we handle the entire process)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-black mb-6">Our Tech Stack: React Native + Expo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We exclusively build with <strong>React Native and Expo</strong>, and here's why that matters for your startup:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-black mb-2">Cross-Platform Development</h3>
              <p className="text-gray-700 text-sm">
                One codebase runs on both iOS and Android. You don't need to hire separate developers for each platform, cutting your costs in half.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-black mb-2">Faster Development</h3>
              <p className="text-gray-700 text-sm">
                React Native's component-based architecture and rich ecosystem of libraries mean we can build features faster without sacrificing quality.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-black mb-2">Over-the-Air Updates</h3>
              <p className="text-gray-700 text-sm">
                With Expo, we can push bug fixes and small updates instantly without waiting for App Store approval. This means faster iteration post-launch.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-black mb-2">Proven at Scale</h3>
              <p className="text-gray-700 text-sm">
                Companies like Instagram, Facebook, Airbnb, and Microsoft use React Native. It's not a toy framework—it's production-ready for apps of any size.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            For most startups, React Native is the obvious choice. It lets you launch faster, iterate quicker, and spend less money—without compromising on app quality or performance.
          </p>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-black mb-6">Apps We've Built</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            See our work in action. Here are three apps we've built using the same process we'll use for your project. <Link href="/#apps" className="text-black underline hover:text-gray-600">View our full portfolio →</Link>
          </p>

          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/icons/avid_appIcon_1024.png"
                  alt="Avid App Icon"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="text-xl font-medium text-black">Avid - Local Events Discovery</h3>
                  <p className="text-sm text-gray-400">Timeline: 8 weeks</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A location-based app that helps users discover events happening around them. Features include map integration, real-time event updates, user authentication, and push notifications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Challenge:</strong> Integrating Google Maps with custom markers and real-time data synchronization. <strong>Solution:</strong> Built a custom caching layer to ensure smooth map performance even with hundreds of events.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/icons/SpeedDots_appIcon_android.png"
                  alt="SpeedDots App Icon"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="text-xl font-medium text-black">SpeedDots - Reaction Time Game</h3>
                  <p className="text-sm text-gray-400">Timeline: 4 weeks</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A fast-paced mobile game testing reaction time and hand-eye coordination. Includes leaderboards, achievements, and smooth 60fps animations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Challenge:</strong> Achieving consistent 60fps performance across devices. <strong>Solution:</strong> Optimized rendering using React Native's built-in animation libraries and careful component optimization.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/icons/DailyIntentions_appIcon_android.png"
                  alt="DailyIntentions App Icon"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="text-xl font-medium text-black">DailyIntentions - Habit Tracker</h3>
                  <p className="text-sm text-gray-400">Timeline: 6 weeks</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A morning intention-setting app with streak tracking, push notifications, and an elegant, minimalist design. Helps users start their day with purpose.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Challenge:</strong> Building an offline-first app that syncs across devices. <strong>Solution:</strong> Implemented local-first data storage with cloud sync, ensuring the app works perfectly even without internet.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16 bg-black text-white p-8 rounded-lg">
          <h2 className="text-3xl font-light mb-6">Fixed Pricing, No Surprises</h2>
          <p className="leading-relaxed mb-4">
            We believe in transparent, predictable pricing. No hourly rates, no scope creep, no surprise invoices.
          </p>
          <p className="leading-relaxed mb-4">
            Our fixed-price packages include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
            <li>Full UI/UX design</li>
            <li>React Native development (iOS + Android)</li>
            <li>QA testing on real devices</li>
            <li>App Store and Google Play submission</li>
            <li>Unlimited revisions during the project</li>
            <li>Post-launch support (30 days)</li>
          </ul>
          <p className="leading-relaxed mb-6">
            Want to discuss pricing for your specific project? <Link href="/#contact" className="underline hover:text-gray-300">Get in touch for a custom quote →</Link>
          </p>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-gray-200">
          <h2 className="text-3xl font-light text-black mb-4">Ready to Build Your App?</h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            Let's turn your idea into a real, working mobile app. No lengthy sales process, no confusing jargon—just great apps built fast.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Get Started Today →
          </Link>
        </section>

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-medium text-black mb-4">Learn More</h3>
          <div className="space-y-2">
            <p>
              <Link href="/faq" className="text-black underline hover:text-gray-600">
                → Frequently Asked Questions
              </Link>
            </p>
            <p>
              <Link href="/blog/mobile-app-mvp-guide" className="text-black underline hover:text-gray-600">
                → Building Your First Mobile App MVP: A Founder's Guide
              </Link>
            </p>
            <p>
              <Link href="/blog/react-native-vs-native-development" className="text-black underline hover:text-gray-600">
                → React Native vs Native Development: Which Is Right for Your Startup?
              </Link>
            </p>
            <p>
              <Link href="/#apps" className="text-black underline hover:text-gray-600">
                → View Our App Portfolio
              </Link>
            </p>
          </div>
        </section>
      </article>
    </div>
  )
}
