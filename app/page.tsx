"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface AppCardProps {
  icon: string;
  name: string;
  category: string;
  timeline: string;
  description: string;
  features: string[];
  challenges: string[];
  techStack: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  screenshots: string[];
  comingSoon?: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

function AppCard({
  icon,
  name,
  category,
  timeline,
  description,
  features,
  challenges,
  techStack,
  appStoreUrl,
  playStoreUrl,
  screenshots,
  comingSoon,
  isExpanded,
  onToggle
}: AppCardProps) {
  return (
    <div
      className={`bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
        isExpanded ? 'ring-2 ring-black/5' : ''
      }`}
      onClick={onToggle}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={icon}
          alt={`${name} icon`}
          width={64}
          height={64}
          className="rounded-2xl flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h3 className="text-xl font-medium text-black">{name}</h3>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
          <p className="text-sm text-gray-400">{timeline}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Expand indicator */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <span>{isExpanded ? '← Click to hide details' : 'Click to view details →'}</span>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="pt-4 border-t border-gray-200/50 space-y-6" onClick={(e) => e.stopPropagation()}>
          {/* Screenshots */}
          {screenshots.length > 0 && (
            <div className="flex justify-center mb-6">
              <ScreenshotCarousel appName={name} screenshots={screenshots} />
            </div>
          )}

          {/* Features */}
          <div>
            <h4 className="text-sm font-medium text-black mb-3">Main features</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              {features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h4 className="text-sm font-medium text-black mb-3">Key challenges tackled</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              {challenges.map((challenge, index) => (
                <li key={index}>• {challenge}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Store Links */}
          <div className="flex gap-4 pt-2">
            {comingSoon ? (
              <div className="inline-block px-6 py-3 border border-gray-300 text-gray-400 text-sm font-medium cursor-not-allowed">
                Coming Soon
              </div>
            ) : (
              <>
                {appStoreUrl && (
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    App Store
                  </a>
                )}
                {playStoreUrl && (
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Google Play
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface ScreenshotCarouselProps {
  appName: string;
  screenshots: string[];
}

function ScreenshotCarousel({ appName, screenshots }: ScreenshotCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = currentTouch - touchStart;
    setDragOffset(diff);
    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <div className="relative">
      <div
        className="w-64 h-[540px] bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 touch-pan-y select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="h-full flex items-center justify-center transition-transform duration-300 ease-out p-4"
          style={{
            transform: isDragging ? `translateX(${dragOffset}px)` : 'translateX(0)',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          <Image
            src={screenshots[currentIndex]}
            alt={`${appName} screenshot ${currentIndex + 1}`}
            width={256}
            height={500}
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>
      </div>

      {screenshots.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous screenshot"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Next screenshot"
          >
            →
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [expandedApp, setExpandedApp] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Replace with actual form handling
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/ElexCreatives Logo.png"
              alt="Elex Creatives"
              width={360}
              height={80}
              className="h-20 w-auto"
            />
          </Link>
          <nav className="flex gap-8 text-sm">
            <Link href="#services" className="text-gray-600 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="#apps" className="text-gray-600 hover:text-black transition-colors">
              Apps
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero - Minimal */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-light text-black mb-6 leading-tight">
            Turn-key mobile applications.<br />From idea to App Store.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Founded by a duo of engineers in London, ElexCreatives is focused on delivering professional React Native solutions.
            We combine our experience and agility to offer services from blank page design to auditing existing code.
          </p>
          <div className="flex gap-4">
            <Link
              href="#services"
              className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Our services
            </Link>
            <Link
              href="#apps"
              className="inline-block px-6 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              View our work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-3xl font-light text-black mb-16">What we do</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Service 1: Turn-key Development */}
          <div className="bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8">
            <h3 className="text-xl font-medium text-black mb-4">Turn-key Development</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From idea to App Store delivery. We handle the complete journey—brand identity, logo design,
              UX/UI, and React Native development for iOS and Android.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-black mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-black">Brand Identity & Logos</p>
                  <p className="text-xs text-gray-600">Visual identity that resonates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-black">UX/UI Design</p>
                  <p className="text-xs text-gray-600">Fluid, modern user experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-black">React Native Development</p>
                  <p className="text-xs text-gray-600">Clean architecture, tested code</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-black">API Integrations</p>
                  <p className="text-xs text-gray-600">OpenAI, Firebase, Google Cloud, RevenueCat, and more</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-black">App Store Launch</p>
                  <p className="text-xs text-gray-600">Full deployment to iOS & Android</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Code Review & Revamp */}
          <div className="bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8">
            <h3 className="text-xl font-medium text-black mb-4">Code Review & Revamp</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Already have a React Native app? We audit your codebase, identify issues, and revamp it
              with best practices, performance improvements, and modern architecture.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-black mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-black">Code Audit</p>
                  <p className="text-xs text-gray-600">Deep dive into your existing codebase</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-black">Performance Optimization</p>
                  <p className="text-xs text-gray-600">Faster load times, smoother interactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-black">Architecture Refactoring</p>
                  <p className="text-xs text-gray-600">Scalable, maintainable code structure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-black">Bug Fixes & Testing</p>
                  <p className="text-xs text-gray-600">Resolve issues, add comprehensive tests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-3xl font-light text-black mb-16">Apps</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <AppCard
            icon="/icons/SpeedDots logo 1024x1024.png"
            name="SpeedDots"
            category="Gaming"
            timeline="4-6 weeks"
            description="Arcade game testing reaction speed with global competition. Players tap dots as fast as possible across multiple game modes."
            features={[
              'Firebase authentication',
              '5-leaderboard system (4 game modes + global player rankings)',
              'AdMob rewarded video ads for extra lives',
              'Real-time score synchronization',
              'Multi-touch gesture handling',
            ]}
            challenges={[
              'Cross-leaderboard score aggregation: Player rankings update dynamically across all game modes',
              'Firebase optimization: 5-minute cache refresh to prevent write conflicts and stay within free tier',
              'Performance: 60fps gameplay with instant haptic feedback on multi-touch interactions',
              'Scalable architecture: Built for 100-1,000 concurrent players, designed to scale to 10,000+',
            ]}
            techStack={['React Native', 'Expo', 'TypeScript', 'Firebase', 'AdMob', 'AI-assisted coding']}
            appStoreUrl="https://apps.apple.com/th/app/speeddots-how-fast-are-you/id6755077344?l=th"
            playStoreUrl="https://play.google.com/store/apps/details?id=com.alexprv.speeddots"
            screenshots={[
              '/screenshots/SpeedDots/SpeedDots - 1.png',
              '/screenshots/SpeedDots/SpeedDots - 2.png',
              '/screenshots/SpeedDots/SpeedDots - 3.png',
              '/screenshots/SpeedDots/SpeedDots - 4.png',
              '/screenshots/SpeedDots/SpeedDots - 5.png',
            ]}
            isExpanded={expandedApp === 'SpeedDots'}
            onToggle={() => setExpandedApp(expandedApp === 'SpeedDots' ? null : 'SpeedDots')}
          />

          <AppCard
            icon="/icons/DailyIntentions_appIcon_android.png"
            name="DailyIntention"
            category="Wellness - Lifestyle"
            timeline="6-8 weeks"
            description="Manifestation and intention-setting app helping users align daily actions with long-term goals through guided prompts and journaling."
            features={[
              'Firebase authentication with local-to-cloud data migration',
              'RevenueCat subscription system (monthly/yearly plans)',
              'Push notifications for daily reminders',
              'Weekly streak tracking for engagement',
              'Personal journal data export',
              'Affiliate marketing integration',
            ]}
            challenges={[
              "Seamless local-to-cloud migration: Users' journal data syncs to Firebase when creating an account",
              'Subscription architecture: Full RevenueCat integration for cross-platform payment handling',
              'User engagement flow: Designed intuitive UI and interaction patterns to create a calm, focused experience',
              'Retention mechanics: Weekly streak system and push notifications to build daily habits',
            ]}
            techStack={['React Native', 'Expo', 'TypeScript', 'Firebase', 'RevenueCat', 'AI-assisted coding']}
            appStoreUrl="https://apps.apple.com/us/app/dailyintentions/id6754063190"
            playStoreUrl="https://play.google.com/store/apps/details?id=com.alexprv.dailyintentions"
            screenshots={[
              '/screenshots/DailyIntentions/DailyIntentions - 1.jpg',
              '/screenshots/DailyIntentions/DailyIntentions - 2.jpg',
              '/screenshots/DailyIntentions/DailyIntentions - 3.jpg',
              '/screenshots/DailyIntentions/DailyIntentions - 4.jpg',
              '/screenshots/DailyIntentions/DailyIntentions - 5.jpg',
            ]}
            isExpanded={expandedApp === 'DailyIntention'}
            onToggle={() => setExpandedApp(expandedApp === 'DailyIntention' ? null : 'DailyIntention')}
          />

          <AppCard
            icon="/icons/Avid Icon.png"
            name="Avid"
            category="Productivity"
            timeline="4-6 weeks"
            description="Minimalistic wellness and goal tracker helping users build sustainable healthy habits through daily to-dos, meal planning, and gamification with streaks and achievement badges."
            features={[
              'Daily to-do tracking with calendar view',
              'Meal planning and calorie tracking',
              'Weekly routines that auto-populate calendar',
              'Long-term goal setting and progress tracking',
              'Gamification with 12+ unlockable badges and achievements',
              'iOS home and lock screen widgets',
              'Firebase authentication with Apple Sign In',
              'Real-time cloud sync across devices',
              'RevenueCat subscription with trial period',
            ]}
            challenges={[
              'iOS Widget development: Building interactive native widgets with React Native using custom plugins',
              'Complex streak logic: Date-based calculations for maintaining and resetting user streaks',
              'Dynamic badge system: Conditional achievement unlocking based on multiple criteria (perfect weeks, task counts, goal completion)',
              'Data persistence architecture: Syncing between local AsyncStorage and Firebase cloud storage with offline support',
              'Apple Sign In OAuth: Integrating native Apple authentication for iOS',
            ]}
            techStack={['React Native', 'Expo', 'TypeScript', 'Firebase', 'RevenueCat', 'iOS Widgets', 'AI-assisted coding']}
            screenshots={[
              '/screenshots/avid/1.png',
              '/screenshots/avid/2.png',
              '/screenshots/avid/3.png',
              '/screenshots/avid/4.png',
              '/screenshots/avid/5.png',
            ]}
            comingSoon={true}
            isExpanded={expandedApp === 'Avid'}
            onToggle={() => setExpandedApp(expandedApp === 'Avid' ? null : 'Avid')}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-200">
        <h2 className="text-3xl font-light text-black mb-16">About</h2>

        <div className="max-w-2xl">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            ElexCreatives is founded by Elif and Alex, a French and Turkish engineering duo helping privates and professionals building mobile apps.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We started working together as we both take pride in turning idea's into real-world products with clear design,
            clean code, and apps that people actually want to use.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We work between London and remote, building React Native apps from concept to launch.
            Every project gets the same attention and focus on simplicity and functionality.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you're working on a project and need people who are agile and understand both the technical and
            design side, ElexCreatives is probably a good fit.
          </p>
        </div>

        {/* What we do */}
        <div className="mt-16 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-medium text-black mb-3">Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              iOS and Android apps with React Native. Clean architecture, tested code,
              and succesfull deployment to both stores.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-black mb-3">Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              User interface and flow focused on working principles, clarity and usability.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-black mb-3">Full Cycle</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From idea to launch. We handle architecture, development, design, testing, and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-200">
        <h2 className="text-3xl font-light text-black mb-16">Contact</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Working on something? Need help with an app? Let's talk.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Email:{" "}
                <a href="mailto:elexcreatives@gmail.com" className="text-black hover:underline">
                  elexcreatives@gmail.com
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 text-black focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 text-black focus:border-black focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Sent" : "Send"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 Elex Creatives</p>
            <p className="text-sm text-gray-400">Alex & Elif · Mobile App Development</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
