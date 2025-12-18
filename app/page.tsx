import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const apps = [
    {
      name: "SpeedDots",
      description: "Test your reaction speed with fast-paced dot tapping gameplay. Compete on global leaderboards!",
      icon: "🎯",
      gradient: "from-red-500 to-orange-500",
      appStore: "https://apps.apple.com/app/speeddots/id6739234096",
      playStore: "https://play.google.com/store/apps/details?id=com.alexprv.speeddots",
    },
    // Add more apps here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-3xl" />

        <nav className="relative container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">
              Elex <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Creatives</span>
            </h1>
            <div className="flex gap-6">
              <Link href="#apps" className="text-white/80 hover:text-white transition-colors">
                Apps
              </Link>
              <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full">
              <span className="text-purple-300 font-medium">Mobile App Development Studio</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Experiences
              </span>
            </h2>

            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              We design and develop innovative mobile applications that delight users and solve real problems.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="#apps"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                View Our Apps
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Apps Showcase Section */}
      <section id="apps" className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Apps
            </h3>
            <p className="text-xl text-white/60">
              Innovative solutions for iOS and Android
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:transform hover:scale-105"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />

                {/* App Icon */}
                <div className="relative mb-6">
                  <div className="text-6xl">{app.icon}</div>
                </div>

                {/* App Info */}
                <h4 className="text-2xl font-bold text-white mb-3">{app.name}</h4>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {app.description}
                </p>

                {/* Store Links */}
                <div className="flex gap-3">
                  {app.appStore && (
                    <a
                      href={app.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all text-center border border-white/20"
                    >
                      🍎 App Store
                    </a>
                  )}
                  {app.playStore && (
                    <a
                      href={app.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all text-center border border-white/20"
                    >
                      🤖 Play Store
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h3>
            <p className="text-xl text-white/60">
              Passionate developers creating exceptional experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Creator 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl">
                👨‍💻
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Alexandre</h4>
              <p className="text-purple-400 mb-4">Co-Founder & Developer</p>
              <p className="text-white/60 leading-relaxed">
                Passionate about creating innovative mobile experiences with a focus on performance and user delight.
              </p>
            </div>

            {/* Creator 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-5xl">
                👩‍💻
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">[Partner Name]</h4>
              <p className="text-purple-400 mb-4">Co-Founder & Designer</p>
              <p className="text-white/60 leading-relaxed">
                Dedicated to crafting beautiful, intuitive interfaces that users love to interact with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h3>
          <p className="text-xl text-white/60 mb-12">
            Have a project in mind? We'd love to hear from you.
          </p>
          <a
            href="mailto:contact@elexcreatives.com"
            className="inline-block px-12 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60">
              © 2025 Elex Creatives. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
