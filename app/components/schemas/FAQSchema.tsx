export default function FAQSchema() {
  const faqs = [
    {
      question: "I have an app idea but no technical skills. Can you still help?",
      answer: "Absolutely! We specialize in working with non-technical people. You describe your idea in plain English, and we handle all the technical work."
    },
    {
      question: "How much does it cost to build an app?",
      answer: "Our projects typically range from $5,000 to $15,000 depending on complexity. We provide a fixed quote upfront so you know exactly what you'll pay."
    },
    {
      question: "Will you sign an NDA to protect my idea?",
      answer: "Yes, we're happy to sign a mutual NDA before you share any details about your project."
    },
    {
      question: "How long does it take to build a mobile app?",
      answer: "Most projects are completed in 8 weeks or less, from initial concept to App Store submission."
    },
    {
      question: "Do I own the app when it's finished?",
      answer: "Yes, 100%. Once the project is complete, you own all the code, designs, and assets. It's your app."
    },
    {
      question: "I'm not building a business, just a personal project. Is that okay?",
      answer: "More than okay! We love passion projects. Not every app needs to make money - if you want to build something for yourself or your community, we're excited to help."
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
