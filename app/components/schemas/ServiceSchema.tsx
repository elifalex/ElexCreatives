export default function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development for Non-Technical Creators",
    "serviceType": "Mobile Application Development",
    "provider": {
      "@type": "Organization",
      "name": "Elex Creatives",
      "url": "https://elexcreatives.com",
      "logo": "https://elexcreatives.com/icons/ElexCreatives Logo - Website.png"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "description": "Turn your app idea into reality without coding skills. We build mobile apps for people with ideas - fixed pricing, plain English, and your app in the App Store in 8 weeks.",
    "url": "https://elexcreatives.com/services/mobile-app-development-for-startups",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile App Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Idea to Reality",
            "description": "Complete mobile app from your idea delivered in 8 weeks or less"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design & Development",
            "description": "Full UI/UX design and cross-platform development for iOS and Android"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Store Launch",
            "description": "Complete App Store and Google Play submission - we handle everything"
          }
        }
      ]
    },
    "termsOfService": "Fixed pricing with unlimited revisions during development",
    "slogan": "You have an app idea. We'll make it real."
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
