"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

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
          <Link href="/" className="text-xl font-medium text-black">
            Elex Creatives
          </Link>
          <nav className="flex gap-8 text-sm">
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
            We build mobile apps.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Alex and Elif. French and Turkish engineers. We design and develop React Native apps full-time.
          </p>
          <Link
            href="#apps"
            className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            View our work
          </Link>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-200">
        <h2 className="text-3xl font-light text-black mb-16">Apps</h2>

        {/* DailyIntention */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-medium text-black mb-4">DailyIntention</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A manifestation app that helps you set daily intentions and track your goals.
                Simple, focused, and designed to help you align actions with aspirations.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-black mb-3">What it does</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Daily intention prompts</li>
                  <li>Manifestation journal</li>
                  <li>Progress tracking</li>
                  <li>Mindfulness reminders</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-medium text-black mb-3">Built with</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs">React Native</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs">Expo</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs">Firebase</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://apps.apple.com/us/app/dailyintentions/id6754063190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.alexprv.dailyintentions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>

            {/* Screenshot placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-64 h-[500px] bg-gray-100 rounded-3xl flex items-center justify-center border border-gray-200">
                <div className="text-center px-8">
                  <p className="text-gray-400 text-sm">Screenshot placeholder</p>
                  <p className="text-gray-300 text-xs mt-2">Add your screenshot to<br />public/screenshots/</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SpeedDots */}
        <div>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Screenshot first on this one */}
            <div className="flex items-center justify-center md:order-2">
              <div className="w-64 h-[500px] bg-gray-100 rounded-3xl flex items-center justify-center border border-gray-200">
                <div className="text-center px-8">
                  <p className="text-gray-400 text-sm">Screenshot placeholder</p>
                  <p className="text-gray-300 text-xs mt-2">Add your screenshot to<br />public/screenshots/</p>
                </div>
              </div>
            </div>

            <div className="md:order-1">
              <h3 className="text-2xl font-medium text-black mb-4">SpeedDots</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                An arcade game testing reaction speed and reflexes. Fast-paced dot-tapping gameplay
                with multiple modes, global leaderboards, and real-time scoring.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-black mb-3">What it does</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Multiple game modes</li>
                  <li>Global leaderboards</li>
                  <li>Real-time scoring system</li>
                  <li>Arcade progression</li>
                  <li>Achievement system</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-medium text-black mb-3">Built with</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs">React Native</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs">Expo</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs">Firebase</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs">Firestore</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://apps.apple.com/th/app/speeddots-how-fast-are-you/id6755077344?l=th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.alexprv.speeddots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-200">
        <h2 className="text-3xl font-light text-black mb-16">About</h2>

        <div className="max-w-2xl">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            We're Alex and Elif. A French and Turkish engineering duo building mobile apps full-time.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We started working together because we both care about the same things: clear design,
            clean code, and apps that people actually want to use. No fluff, no over-engineering.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We work between London and remote, building React Native apps from concept to launch.
            Every project gets the same attention—obsessive focus on simplicity and function.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you're working on something and need people who understand both the technical and
            design side, we're probably a good fit.
          </p>
        </div>

        {/* What we do */}
        <div className="mt-16 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-medium text-black mb-3">Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              iOS and Android apps with React Native. Clean architecture, tested code,
              and deployment to both stores.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-black mb-3">Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Interface design focused on clarity and usability. No trends for the sake of trends.
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
