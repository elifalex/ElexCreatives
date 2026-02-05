export default function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development for Startups",
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
    "description": "Turn your startup idea into a production-ready mobile app in 8 weeks or less. Fixed pricing, unlimited revisions, React Native development for iOS and Android.",
    "url": "https://elexcreatives.com/services/mobile-app-development-for-startups",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile App Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Complete mobile app MVP delivered in 8 weeks or less"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cross-Platform Development",
            "description": "Single codebase for iOS and Android using React Native"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Store Submission",
            "description": "Complete App Store and Google Play submission handling"
          }
        }
      ]
    },
    "termsOfService": "Fixed pricing with unlimited revisions during development",
    "slogan": "From Idea to App Store, in Weeks"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
