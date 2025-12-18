"use client";

import Image from "next/image";
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

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  const apps = [
    {
      name: "DailyIntention",
      tagline: "Manifest Your Dreams Daily",
      description: "A beautiful manifestation and intention-setting app that helps users align their daily actions with their long-term goals.",
      icon: "✨",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      features: [
        "Daily intention prompts",
        "Manifestation journal",
        "Progress tracking",
        "Mindfulness reminders",
        "Beautiful UI/UX design",
      ],
      techStack: ["React Native", "Expo", "TypeScript", "Firebase"],
      screenshots: 3, // Number of screenshot placeholders
      appStore: "#", // Replace with actual link
      playStore: "#", // Replace with actual link
    },
    {
      name: "SpeedDots",
      tagline: "Test Your Reflexes",
      description: "An addictive arcade game testing reaction speed with fast-paced dot-tapping gameplay and global leaderboards.",
      icon: "🎯",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      features: [
        "Multiple game modes",
        "Global leaderboards",
        "Real-time scoring",
        "Arcade progression system",
        "Achievement badges",
      ],
      techStack: ["React Native", "Expo", "TypeScript", "Firebase", "Firestore"],
      screenshots: 3,
      appStore: "https://apps.apple.com/app/speeddots/id6739234096",
      playStore: "https://play.google.com/store/apps/details?id=com.alexprv.speeddots",
    },
  ];

  const services = [
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Custom iOS and Android apps built with React Native for maximum code reuse and faster time to market.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love. We focus on user experience and modern design principles.",
    },
    {
      icon: "🚀",
      title: "App Store Deployment",
      description: "End-to-end support from development to App Store and Play Store submission and management.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Lightning-fast apps with smooth animations and optimized performance for the best user experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Elex Creatives
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
                Portfolio
              </Link>
              <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 font-medium text-sm">Mobile App Development Duo</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting Mobile
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're a passionate duo building innovative React Native apps that combine beautiful design
              with powerful functionality. From manifestation tools to arcade games, we create experiences
              users love.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                View Our Work
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-purple-600 transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Team Introduction */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold mb-2">Alexandre Prevost</h3>
              <p className="text-purple-600 font-medium mb-3">Developer & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Full-stack developer specializing in React Native and mobile app architecture.
                Passionate about creating performant, scalable applications.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-3xl">
                👩‍💻
              </div>
              <h3 className="text-2xl font-bold mb-2">[Partner Name]</h3>
              <p className="text-pink-600 font-medium mb-3">Designer & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                UI/UX designer focused on creating beautiful, intuitive interfaces that users love.
                Expert in user research and design systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a mobile app development duo based in [Location], combining technical expertise
              with creative design to build apps that make a difference. Our focus is on React Native
              development, allowing us to deliver high-quality apps for both iOS and Android efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Create mobile experiences that are both beautiful and functional, helping users
                achieve their goals.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Our Approach</h3>
              <p className="text-gray-600">
                Agile development with a focus on user feedback, rapid iteration, and continuous improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Quality over quantity, user-first design, and transparent communication throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Apps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our latest mobile applications built with React Native
            </p>
          </div>

          <div className="space-y-24">
            {apps.map((app, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* App Info */}
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="mb-6">
                    <div className="text-6xl mb-4">{app.icon}</div>
                    <h3 className="text-4xl font-bold mb-2">{app.name}</h3>
                    <p className="text-xl text-gray-500 mb-4">{app.tagline}</p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {app.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {app.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Store Links */}
                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={app.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
                    >
                      <span>🍎</span>
                      <span>App Store</span>
                    </a>
                    <a
                      href={app.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                      <span>🤖</span>
                      <span>Play Store</span>
                    </a>
                  </div>
                </div>

                {/* Device Mockups - Screenshot Placeholders */}
                <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="relative">
                    {/* iPhone Frame */}
                    <div className="relative mx-auto w-full max-w-sm">
                      {/* Phone frame */}
                      <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>

                        {/* Screen */}
                        <div className={`relative bg-gradient-to-br ${app.gradient} rounded-[2.5rem] overflow-hidden aspect-[9/19.5]`}>
                          {/* Screenshot Placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center bg-white/90">
                            <div className="text-center p-8">
                              <div className="text-6xl mb-4">{app.icon}</div>
                              <p className="text-gray-400 text-sm font-medium">
                                Replace with actual screenshot
                                <br />
                                (see README for instructions)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating mini screenshots */}
                      <div className="absolute -right-4 top-1/4 w-24 h-52 bg-white rounded-2xl shadow-xl border-4 border-black overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                        <div className={`w-full h-full bg-gradient-to-br ${app.gradient} flex items-center justify-center`}>
                          <span className="text-2xl">{app.icon}</span>
                        </div>
                      </div>

                      <div className="absolute -left-4 bottom-1/4 w-24 h-52 bg-white rounded-2xl shadow-xl border-4 border-black overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                        <div className={`w-full h-full bg-gradient-to-br ${app.gradient} flex items-center justify-center`}>
                          <span className="text-2xl">{app.icon}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile app development services from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-8">Technologies We Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React Native",
                "Expo",
                "TypeScript",
                "Firebase",
                "Firestore",
                "React Navigation",
                "Redux",
                "Tailwind CSS",
                "Node.js",
                "Next.js",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600">
              Have a project in mind? We'd love to hear about it.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className={`w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 ${
                  formStatus === "sending" ? "opacity-50 cursor-not-allowed" : "hover:shadow-xl hover:shadow-purple-500/50"
                }`}
              >
                {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Message Sent! ✓" : "Send Message"}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Or reach us directly at:</p>
              <a
                href="mailto:contact@elexcreatives.com"
                className="text-purple-600 hover:text-purple-700 font-medium text-lg"
              >
                contact@elexcreatives.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Elex Creatives
              </h3>
              <p className="text-gray-400">
                Mobile app development duo creating innovative React Native experiences.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#portfolio" className="block text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
                <Link href="#services" className="block text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 Elex Creatives. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
