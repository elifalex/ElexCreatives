export default function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile App Development",
    "provider": {
      "@type": "Organization",
      "name": "Elex Creatives"
    },
    "areaServed": "Worldwide",
    "description": "Turn-key mobile app development using React Native and Expo"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
