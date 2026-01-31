import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Mobile App Development Blog | Elex Creatives',
  description: 'Insights on React Native, mobile app development, and startup tips from the Elex Creatives team.',
  alternates: {
    canonical: 'https://elexcreatives.com/blog',
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-black hover:text-gray-600 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-light text-black mb-4 border-l-4 border-black pl-4">Blog</h1>
        <p className="text-gray-600 mb-12">Insights on React Native, mobile app development, and startup tips.</p>

        <div className="space-y-8 mt-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-medium text-black hover:text-gray-600 transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <p className="text-sm text-gray-400 mt-2">{post.publishDate}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
