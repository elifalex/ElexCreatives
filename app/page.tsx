"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      // Wait for expansion animation, then scroll
      setTimeout(() => {
        const headerHeight = 80; // Account for sticky header
        const cardTop = cardRef.current!.getBoundingClientRect().top + window.scrollY;
        const scrollTo = cardTop - headerHeight - 20; // 20px padding from header

        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
      }, 100);
    }
  }, [isExpanded]);

  return (
    <div
      ref={cardRef}
      className={`bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden ${
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
        <div className="pt-4 border-t border-gray-200/50 space-y-6 overflow-x-hidden" onClick={(e) => e.stopPropagation()}>
          {/* Screenshots */}
          {screenshots.length > 0 && (
            <div className="flex justify-center mb-6 w-full">
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const imageWidth = isMobile ? 200 : 256;
  const gap = isMobile ? 16 : 24;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="touch-pan-y select-none py-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-4 sm:gap-6 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(50% - ${imageWidth / 2}px - ${currentIndex * (imageWidth + gap)}px + ${isDragging ? dragOffset : 0}px))`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[200px] sm:w-64 transition-all duration-300 ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
              }`}
            >
              <Image
                src={screenshot}
                alt={`${appName} screenshot ${index + 1}`}
                width={256}
                height={500}
                className="w-full h-auto object-contain pointer-events-none rounded-2xl shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {screenshots.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors z-10 shadow-lg text-sm sm:text-base"
            aria-label="Previous screenshot"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors z-10 shadow-lg text-sm sm:text-base"
            aria-label="Next screenshot"
          >
            →
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-black/60 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
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
    projectType: "",
    timeline: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [expandedApp, setExpandedApp] = useState<string | null>(null);
  const [notification, setNotification] = useState<{show: boolean, type: 'success' | 'error', message: string}>({
    show: false,
    type: 'success',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      // EmailJS configuration
      const serviceId = 'service_kme1o1f';
      const templateId = 'template_hnamvvk';  // Template for email to elexcreatives@gmail.com
      const autoReplyTemplateId = 'template_p9o9po7';  // Template for confirmation to user
      const publicKey = 'J85w1TmWlGhUcK7xU';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        timeline: formData.timeline,
        message: formData.message,
        to_email: 'elexcreatives@gmail.com',
      };

      // Send email to elexcreatives@gmail.com (this is the critical one)
      console.log('Sending main email to elexcreatives@gmail.com...');
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Main email sent successfully!');

      // Try to send auto-reply - if this fails, still show success
      try {
        console.log('Sending auto-reply to user...');
        await emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey);
        console.log('Auto-reply sent successfully!');
      } catch (autoReplyError) {
        console.warn('Auto-reply failed (but main email was sent):', autoReplyError);
        // Don't throw - we still want to show success since main email worked
      }

      setFormStatus("sent");
      setFormData({ name: "", email: "", projectType: "", timeline: "", message: "" });
      setNotification({
        show: true,
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you shortly.'
      });

      setTimeout(() => {
        setFormStatus("idle");
        setNotification({show: false, type: 'success', message: ''});
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      setFormStatus("error");
      setNotification({
        show: true,
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email us directly at elexcreatives@gmail.com'
      });

      setTimeout(() => {
        setFormStatus("idle");
        setNotification({show: false, type: 'error', message: ''});
      }, 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showHeader, setShowHeader] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const [scrollAttempt, setScrollAttempt] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling down 100vh (past hero section)
      setShowHeader(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY < window.innerHeight) {
        e.preventDefault();

        if (e.deltaY > 0) { // Scrolling down
          setScrollAttempt(prev => prev + e.deltaY);

          // Release after enough scroll attempts (resistance)
          if (scrollAttempt > 200) {
            setIsScrollLocked(false);
            // Snap directly to the next section
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              const offset = servicesSection.offsetTop;
              window.scrollTo({ top: offset, behavior: 'smooth' });
            }
            setScrollAttempt(0);
          }
        } else if (e.deltaY < 0 && window.scrollY > 0) { // Scrolling up
          // Snap back to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsScrollLocked(true);
          setScrollAttempt(0);
        }

        // Reset scroll attempt after user stops scrolling
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setScrollAttempt(0);
        }, 150);
      } else {
        // Enable normal scrolling after leaving hero
        setIsScrollLocked(false);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY < window.innerHeight) {
        let startY = e.touches[0].clientY;
        let totalDiff = 0;

        const handleTouchMove = (moveEvent: TouchEvent) => {
          const currentY = moveEvent.touches[0].clientY;
          const diff = startY - currentY;

          if (diff > 0) { // Swiping up
            totalDiff += Math.abs(diff - totalDiff);

            // Prevent default scroll until threshold is reached
            if (totalDiff < 100) {
              moveEvent.preventDefault();
            } else if (totalDiff >= 100) {
              setIsScrollLocked(false);
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                const offset = servicesSection.offsetTop;
                window.scrollTo({ top: offset, behavior: 'smooth' });
              }
              document.removeEventListener('touchmove', handleTouchMove);
            }
          }
        };

        const handleTouchEnd = () => {
          setTimeout(() => setScrollAttempt(0), 150);
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      clearTimeout(scrollTimeout);
    };
  }, [isScrollLocked, scrollAttempt]);

  return (
    <div className="min-h-screen bg-white">
      {/* Notification Toast */}
      {notification.show && (
        <div className={`fixed top-28 left-4 right-4 sm:top-32 sm:left-auto sm:right-8 sm:max-w-md z-[60] p-5 rounded-xl shadow-2xl border-2 transform transition-all duration-300 animate-slide-down ${
          notification.type === 'success'
            ? 'bg-green-50 border-green-600 text-green-900'
            : 'bg-red-50 border-red-600 text-red-900'
        }`}>
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0">
              {notification.type === 'success' ? '✅' : '❌'}
            </span>
            <p className="text-sm sm:text-base leading-relaxed font-medium">{notification.message}</p>
          </div>
        </div>
      )}

      {/* Sticky Header - Only shows after scrolling past hero */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-6 flex items-center justify-between gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Scroll to top"
          >
            <Image
              src="/icons/ElexCreatives Logo.png"
              alt="Elex Creatives"
              width={360}
              height={80}
              className="h-12 sm:h-20 w-auto"
            />
          </button>
          <nav className="flex gap-4 sm:gap-8 text-sm sm:text-sm">
            <Link href="#services" className="text-gray-600 hover:text-black transition-colors whitespace-nowrap py-2 px-1 min-h-[44px] flex items-center">
              Services
            </Link>
            <Link href="#apps" className="text-gray-600 hover:text-black transition-colors whitespace-nowrap py-2 px-1 min-h-[44px] flex items-center">
              Apps
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-black transition-colors whitespace-nowrap py-2 px-1 min-h-[44px] flex items-center">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-black transition-colors whitespace-nowrap py-2 px-1 min-h-[44px] flex items-center">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero - Bold USP - Isolated Full Screen */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50" style={{ height: '100vh', minHeight: '100vh', maxHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-[35%_65%] gap-0 items-center">

            {/* Text Content - First on mobile, second on desktop */}
            <div className="text-left flex lg:justify-center order-1 lg:order-2 w-full mb-12 lg:mb-0">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-light text-black mb-6 leading-tight tracking-tight">
                  <span className="whitespace-nowrap">From Idea to App Stores</span><br />
                  <span className="font-bold">In Weeks</span>
                </h1>

                {/* Secondary USP */}
                <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-600 leading-relaxed">
                  Fixed Price, Unlimited Revisions Until You Are Satisfied.
                </p>
              </div>
            </div>

            {/* Animated Glass Icons - Second on mobile, first on desktop */}
            <div className="relative h-64 lg:h-[600px] flex items-center justify-center w-full order-2 lg:order-1 mt-8 lg:mt-0">
              {/* Floating App Icon 1 - DailyIntentions (Medium) */}
              <div className="absolute top-8 left-8 lg:top-20 lg:left-10 animate-float" style={{ animationDelay: '0s' }}>
                <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/icons/DailyIntentions_appIcon_android.png"
                    alt="DailyIntentions"
                    width={80}
                    height={80}
                    className="rounded-xl lg:rounded-2xl w-14 h-14 lg:w-20 lg:h-20"
                  />
                </div>
              </div>

              {/* Floating App Icon 2 - SpeedDots (Largest) */}
              <div className="absolute top-6 right-8 lg:top-40 lg:right-16 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-2xl lg:rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/icons/SpeedDots logo 1024x1024.png"
                    alt="SpeedDots"
                    width={96}
                    height={96}
                    className="rounded-xl lg:rounded-2xl w-16 h-16 lg:w-28 lg:h-28"
                  />
                </div>
              </div>

              {/* Floating App Icon 3 - Avid (Large) */}
              <div className="absolute bottom-8 left-12 lg:bottom-32 lg:left-20 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-18 h-18 lg:w-28 lg:h-28 rounded-2xl lg:rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/icons/Avid Icon.png"
                    alt="Avid"
                    width={112}
                    height={112}
                    className="rounded-xl lg:rounded-2xl w-16 h-16 lg:w-24 lg:h-24"
                  />
                </div>
              </div>

              {/* Floating App Icon 4 - App Store (Small) */}
              <div className="absolute top-28 left-1/2 -translate-x-1/2 lg:top-60 lg:left-20 lg:translate-x-0 animate-float" style={{ animationDelay: '3s' }}>
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/icons/AppleStore-icon.png"
                    alt="App Store"
                    width={64}
                    height={64}
                    className="rounded-lg lg:rounded-xl w-10 h-10 lg:w-14 lg:h-14"
                  />
                </div>
              </div>

              {/* Floating App Icon 5 - Play Store (Small) */}
              <div className="absolute bottom-6 right-10 lg:bottom-40 lg:right-20 animate-float" style={{ animationDelay: '4s' }}>
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/icons/PlayStore.png"
                    alt="Play Store"
                    width={64}
                    height={64}
                    className="rounded-lg lg:rounded-xl w-10 h-10 lg:w-14 lg:h-14"
                  />
                </div>
              </div>

              {/* Floating Decorative Orbs */}
              <div className="absolute top-20 right-1/4 lg:top-10 lg:right-32 w-8 h-8 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-xl animate-float-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-20 right-1/3 lg:bottom-20 lg:right-8 w-10 h-10 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-pink-400/30 to-orange-400/30 backdrop-blur-xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 left-1/3 lg:translate-x-0 lg:left-32 w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-green-400/30 to-teal-400/30 backdrop-blur-xl animate-float-slow" style={{ animationDelay: '2.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow - Fixed at bottom of hero section */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40">
          <button
            onClick={() => {
              setIsScrollLocked(false);
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                const offset = servicesSection.offsetTop;
                window.scrollTo({ top: offset, behavior: 'smooth' });
              }
            }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-black transition-all cursor-pointer group animate-bounce-slow"
            aria-label="Scroll to services"
          >
            <span className="text-sm font-medium uppercase tracking-wider">Scroll</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
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
            icon="/icons/Avid Icon.png"
            name="Avid"
            category="Productivity"
            timeline="<8 weeks"
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
            techStack={['React Native', 'Expo', 'TypeScript', 'Firebase', 'RevenueCat', 'iOS Widgets']}
            screenshots={[
              '/screenshots/avid/1.png',
              '/screenshots/avid/2.png',
              '/screenshots/avid/3.png',
              '/screenshots/avid/4.png',
              '/screenshots/avid/5.png',
              '/screenshots/avid/6.png',
            ]}
            comingSoon={true}
            isExpanded={expandedApp === 'Avid'}
            onToggle={() => setExpandedApp(expandedApp === 'Avid' ? null : 'Avid')}
          />

          <AppCard
            icon="/icons/SpeedDots logo 1024x1024.png"
            name="SpeedDots"
            category="Gaming"
            timeline="<8 weeks"
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
            techStack={['React Native', 'Expo', 'TypeScript', 'Firebase', 'AdMob']}
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
            timeline="<8 weeks"
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
            techStack={['React Native', 'Expo', 'TypeScript', 'Firebase', 'RevenueCat']}
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
              Got an app idea? Need to revamp existing code? Let's discuss your project.
            </p>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                Fill out the form with details about your project, and we'll get back to you within 48 hours with a personalized proposal.
              </p>
              <p>
                Or email us directly at:{" "}
                <a href="mailto:elexcreatives@gmail.com" className="text-black hover:underline font-medium">
                  elexcreatives@gmail.com
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email - Side by side on desktop */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 text-black focus:border-black focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 text-black focus:border-black focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                What do you need? *
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 text-black focus:border-black focus:outline-none transition-colors bg-white"
              >
                <option value="">Select a service</option>
                <option value="New App Development">New App Development</option>
                <option value="Code Review & Audit">Code Review & Audit</option>
                <option value="Feature Addition">Feature Addition to Existing App</option>
                <option value="Not Sure / Consultation">Not Sure / Need Consultation</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                Timeline
              </label>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 text-black focus:border-black focus:outline-none transition-colors bg-white"
              >
                <option value="">Flexible</option>
                <option value="1-2 months">1-2 months</option>
                <option value="2-3 months">2-3 months</option>
                <option value="3+ months">3+ months</option>
                <option value="Just exploring">Just exploring</option>
              </select>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your project *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 text-black focus:border-black focus:outline-none transition-colors resize-none"
                placeholder="Describe your app idea, current challenges, or what you're looking to build..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full px-6 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Sent ✓" : formStatus === "error" ? "Try Again" : "Send Project Details"}
            </button>

            <p className="text-xs text-gray-500 text-center">
              We'll review your project and respond within 48 hours
            </p>
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
