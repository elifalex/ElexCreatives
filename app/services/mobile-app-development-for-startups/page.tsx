import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceSchema from '@/app/components/schemas/ServiceSchema'
import FAQSchema from '@/app/components/schemas/FAQSchema'
import BreadcrumbSchema from '@/app/components/schemas/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Turn Your App Idea Into Reality | No Coding Required | Elex Creatives',
  description: 'Have an app idea but no technical skills? We build mobile apps for people with ideas. Fixed pricing, plain English, and your app in the App Store in 8 weeks.',
  keywords: ['app idea', 'build my app', 'turn app idea into reality', 'hire app developer', 'mobile app development', 'no coding', 'app for personal project'],
  alternates: {
    canonical: 'https://elexcreatives.com/services/mobile-app-development-for-startups',
  },
  openGraph: {
    title: 'Turn Your App Idea Into Reality | Elex Creatives',
    description: 'Have an app idea but no technical skills? We build mobile apps for people with ideas. Fixed pricing, your app in the App Store in 8 weeks.',
    url: 'https://elexcreatives.com/services/mobile-app-development-for-startups',
    type: 'website',
    images: [
      {
        url: 'https://elexcreatives.com/icons/ElexCreatives Logo - Website.png',
        width: 1200,
        height: 630,
        alt: 'Elex Creatives - Turn Your App Idea Into Reality',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turn Your App Idea Into Reality | Elex Creatives',
    description: 'Have an app idea but no technical skills? We build mobile apps for people with ideas.',
    images: ['https://elexcreatives.com/icons/ElexCreatives Logo - Website.png'],
  },
}

export default function MobileAppDevelopmentPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://elexcreatives.com' },
    { name: 'Services', url: 'https://elexcreatives.com/services' },
    { name: 'Turn Your App Idea Into Reality', url: 'https://elexcreatives.com/services/mobile-app-development-for-startups' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema />
      <FAQSchema />
      <BreadcrumbSchema items={breadcrumbs} />

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
          You Have an App Idea.<br />We'll Make It Real.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12 pl-5">
          No coding skills? No problem. We build mobile apps for people with ideas—not tech backgrounds. Tell us your vision, and we'll handle everything from design to the App Store.
        </p>

        {/* Hero Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-black mb-6">You've Had This Idea for a While...</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Maybe it came to you in the shower. Maybe you've been sketching it on napkins for months. You <em>know</em> this app could help people—or maybe it's just something you want to exist in the world.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            But every time you look into building it, you hit the same walls: confusing technical jargon, agencies quoting $100,000+, or freelancers who disappear after taking your deposit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>You don't need to learn to code.</strong> You don't need to become a "tech founder." You just need someone who will listen to your idea and build it—without the BS.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That's what we do at Elex Creatives. We're a small team that specializes in working with people like you: creative thinkers with great ideas and zero interest in learning Swift or Kotlin.
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-light text-black mb-6">Why Building an App Feels Impossible</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-black mb-2">"I Don't Understand Any of This"</h3>
              <p className="text-gray-700 leading-relaxed">
                APIs, backends, frameworks, native vs. cross-platform... it's overwhelming. You shouldn't need a computer science degree to get your app built. We explain everything in plain English—no jargon, no condescension.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-black mb-2">"The Quotes Are Insane"</h3>
              <p className="text-gray-700 leading-relaxed">
                Agency prices reflect agency overhead—not the actual cost of building your app. We're a lean two-person team. You pay for the work, not for fancy offices and layers of management.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-black mb-2">"I'm Scared Someone Will Steal My Idea"</h3>
              <p className="text-gray-700 leading-relaxed">
                We get it. Your idea is precious. We're happy to sign an NDA before you share any details. And honestly? Ideas are everywhere—execution is what matters. We're here to help you execute, not compete with you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-black mb-2">"What If I Get Ripped Off?"</h3>
              <p className="text-gray-700 leading-relaxed">
                Horror stories are real. That's why we use fixed pricing (you know the cost upfront), milestone payments (you don't pay everything at once), and weekly updates with working demos (you see progress every step of the way).
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-black mb-6">How It Works (In Plain English)</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We've helped teachers, nurses, artists, retirees, and first-time creators bring their app ideas to life. Here's our simple process:
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-medium text-black mb-2">Step 1: Tell Us Your Idea</h3>
              <p className="text-gray-700 leading-relaxed">
                Fill out our contact form or send us an email. Describe your app idea in your own words—bullet points, voice memos, napkin sketches, whatever works for you. We'll schedule a free call to discuss it and see if we're a good fit.
              </p>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="text-xl font-medium text-black mb-2">Step 2: We Design It Together</h3>
              <p className="text-gray-700 leading-relaxed">
                We create wireframes (simple sketches of each screen) and a design mockup so you can see exactly what your app will look like before we write a single line of code. You give feedback, we refine. Repeat until you love it.
              </p>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="text-xl font-medium text-black mb-2">Step 3: We Build It</h3>
              <p className="text-gray-700 leading-relaxed">
                Over the next 4-6 weeks, we build your app. Every week, you get a working demo you can actually tap through on your phone. You can request changes as we go—unlimited revisions are included.
              </p>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="text-xl font-medium text-black mb-2">Step 4: We Launch It</h3>
              <p className="text-gray-700 leading-relaxed">
                We handle the entire App Store and Google Play submission process. Screenshots, descriptions, app review—all of it. Within 8 weeks of starting, your app is live and available for download worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* What You Don't Need */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-black mb-6">What You Don't Need to Bring</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-black mb-2">❌ Technical Knowledge</h3>
              <p className="text-gray-700 text-sm">
                We translate tech-speak into human language. You don't need to know what an API is or how databases work.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-black mb-2">❌ A Detailed Specification</h3>
              <p className="text-gray-700 text-sm">
                "I want an app that does X" is enough to start. We'll help you figure out the details together.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-black mb-2">❌ Existing Designs</h3>
              <p className="text-gray-700 text-sm">
                Design is included. We'll create a beautiful, intuitive interface based on your vision and preferences.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-black mb-2">❌ A Business Plan</h3>
              <p className="text-gray-700 text-sm">
                Some of our best work has been passion projects. If you have a vision you care deeply about, that's all the reason we need.
              </p>
            </div>
          </div>
        </section>

        {/* Apps We've Built */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-black mb-6">Apps We've Brought to Life</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Real apps, built for real people. Here's what we've created using the same process we'll use for your project.
          </p>

          <div className="space-y-8">
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
                  <h3 className="text-xl font-medium text-black">DailyIntentions</h3>
                  <p className="text-sm text-gray-400">Personal wellness app • 6 weeks to launch</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A simple, beautiful app for setting daily intentions and tracking streaks. The creator wanted a calmer alternative to aggressive habit trackers—something gentle that encouraged rather than guilt-tripped.
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
                  <h3 className="text-xl font-medium text-black">SpeedDots</h3>
                  <p className="text-sm text-gray-400">Mobile game • 4 weeks to launch</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A fast-paced reaction time game with leaderboards and achievements. Started as a personal project, now enjoyed by thousands of players on both iOS and Android.
              </p>
            </div>

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
                  <h3 className="text-xl font-medium text-black">Avid</h3>
                  <p className="text-sm text-gray-400">Local events discovery • 8 weeks to launch</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                An app for discovering events happening nearby. Map integration, real-time updates, and push notifications—all built from a simple idea: "I wish I knew what was happening around me."
              </p>
            </div>
          </div>

          <p className="text-center mt-8">
            <Link href="/#apps" className="text-black underline hover:text-gray-600">
              View our full portfolio →
            </Link>
          </p>
        </section>

        {/* Pricing */}
        <section className="mb-16 bg-black text-white p-8 rounded-lg">
          <h2 className="text-3xl font-light mb-6">Why Pay Agency Prices?</h2>
          <p className="leading-relaxed mb-4">
            If you've shopped around, you've probably seen quotes that made your heart sink. Agencies charge premium rates because they have premium overhead—offices, sales teams, account managers, and layers of process between you and the people actually building your app.
          </p>
          <p className="leading-relaxed mb-4">
            We're a two-person studio. You work directly with us—the people designing and coding your app. No middlemen. No fluff. That's why we can deliver the same quality work for a fraction of what agencies charge.
          </p>
          <p className="leading-relaxed mb-6">
            Fixed pricing, so you know exactly what you're paying before we start. No hourly surprises, no scope creep.
          </p>
          <p className="leading-relaxed">
            <Link href="/#contact" className="underline hover:text-gray-300">Tell us about your idea →</Link> and we'll send you a quote within 48 hours. You might be surprised.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-black mb-8">Common Questions</h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium text-black mb-2">What if my idea isn't fully formed yet?</h3>
              <p className="text-gray-700 leading-relaxed">
                That's fine! Most people come to us with rough concepts. We'll help you shape the idea during our initial conversations. You don't need a perfect plan—just enthusiasm.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium text-black mb-2">Will you sign an NDA?</h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. We're happy to sign a mutual NDA before you share any details about your project. Your idea stays between us.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium text-black mb-2">I'm not trying to build a business. Is that okay?</h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. Some of our favorite projects have been personal passions—apps built because someone cared deeply about an idea and wanted to see it exist. That kind of conviction often leads to the best results.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium text-black mb-2">How do payments work?</h3>
              <p className="text-gray-700 leading-relaxed">
                We split the project into milestones. You pay a deposit to start (typically 30%), then payments at key checkpoints. You're never paying for work that hasn't been done.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium text-black mb-2">What if I want to make changes after the app launches?</h3>
              <p className="text-gray-700 leading-relaxed">
                We include 30 days of post-launch support for bug fixes. After that, we're happy to continue working with you on new features—just reach out when you're ready.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-medium text-black mb-2">Do I own the app?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, 100%. Once the project is complete, you own all the code, designs, and assets. It's your app. We just help you build it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-gray-200">
          <h2 className="text-3xl font-light text-black mb-4">Ready to Finally Build That App?</h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            You've been thinking about this long enough. Tell us your idea—in your own words, no tech-speak required—and let's make it happen.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Share Your Idea →
          </Link>
        </section>

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-medium text-black mb-4">Learn More</h3>
          <div className="space-y-2">
            <p>
              <Link href="/faq" className="text-black underline hover:text-gray-600">
                → More Frequently Asked Questions
              </Link>
            </p>
            <p>
              <Link href="/blog/mobile-app-mvp-guide" className="text-black underline hover:text-gray-600">
                → Building Your First App: A Beginner's Guide
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
