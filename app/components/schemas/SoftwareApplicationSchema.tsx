interface AppSchemaProps {
  name: string
  description: string
  category: string
  appStoreUrl?: string
  playStoreUrl?: string
}

export default function SoftwareApplicationSchema({
  name,
  description,
  category,
  appStoreUrl,
  playStoreUrl
}: AppSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": category,
    "operatingSystem": "iOS, Android",
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  if (appStoreUrl) {
    // @ts-ignore - adding optional property
    schema["downloadUrl"] = appStoreUrl
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
