export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Elex Creatives",
    "url": "https://elexcreatives.com",
    "logo": "https://elexcreatives.com/icons/ElexCreatives Logo - Website.png",
    "description": "Mobile app development duo specializing in React Native and Expo",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "elexcreatives@gmail.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/elexcreatives/"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
