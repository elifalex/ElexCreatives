export default function FAQSchema() {
  const faqs = [
    {
      question: "How long does it take to build a mobile app?",
      answer: "Most projects are completed in 8 weeks or less, from initial concept to App Store submission."
    },
    {
      question: "What's included in your fixed pricing?",
      answer: "Design, development, testing, App Store submission, and unlimited revisions during the project."
    },
    {
      question: "Do you work with non-technical founders?",
      answer: "Yes! We guide you through every step and explain technical decisions in plain language."
    },
    {
      question: "Which platforms do you develop for?",
      answer: "We build for both iOS and Android using React Native, ensuring your app works on both platforms."
    },
    {
      question: "What happens after the app is launched?",
      answer: "We provide post-launch support and can help with updates, new features, and scaling."
    },
    {
      question: "Can you help with App Store submission?",
      answer: "Yes, we handle the entire App Store and Google Play submission process for you."
    }
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
