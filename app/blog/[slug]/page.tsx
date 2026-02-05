import { Metadata } from 'next'
import Link from 'next/link'
import { getPost, getAllPosts } from '@/lib/blog'
import BreadcrumbSchema from '@/app/components/schemas/BreadcrumbSchema'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  return {
    title: `${post.title} | Elex Creatives Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://elexcreatives.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://elexcreatives.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishDate,
      authors: ['Elex Creatives'],
      images: [
        {
          url: 'https://elexcreatives.com/icons/ElexCreatives Logo - Website.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['https://elexcreatives.com/icons/ElexCreatives Logo - Website.png'],
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  const wordCount = post.content.split(/\s+/).length

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "wordCount": wordCount,
    "image": "https://elexcreatives.com/icons/ElexCreatives Logo - Website.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://elexcreatives.com/blog/${slug}`
    },
    "author": {
      "@type": "Organization",
      "name": "Elex Creatives",
      "url": "https://elexcreatives.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Elex Creatives",
      "url": "https://elexcreatives.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://elexcreatives.com/icons/ElexCreatives Logo - Website.png"
      }
    }
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://elexcreatives.com' },
    { name: 'Blog', url: 'https://elexcreatives.com/blog' },
    { name: post.title, url: `https://elexcreatives.com/blog/${slug}` }
  ]

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link href="/blog" className="text-black hover:text-gray-600 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-light text-black mb-2 border-l-4 border-black pl-4">{post.title}</h1>
        <p className="text-gray-400 text-sm mt-4 mb-8 pl-5">{post.publishDate}</p>

        <div
          className="prose prose-lg max-w-none mt-8
            prose-headings:font-light prose-headings:text-black
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-black prose-a:underline hover:prose-a:text-gray-600
            prose-strong:text-black prose-strong:font-medium
            prose-ul:text-gray-700 prose-ol:text-gray-700
            prose-code:text-black prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Internal links CTA */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="font-medium text-black mb-2">Need help building your app?</p>
          <Link
            href="/services/mobile-app-development-for-startups"
            className="text-black underline hover:text-gray-600 transition-colors"
          >
            Learn about our services →
          </Link>
        </div>
      </article>
    </div>
  )
}
