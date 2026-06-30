import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blog-posts'

export const metadata: Metadata = genMeta({
  title: 'The Aioneo Journal — Detail Guides, Brand Stories & More',
  description: 'Read the Aioneo Journal for expert auto detailing guides, behind-the-scenes brand stories, product education, seasonal care tips, and gift ideas.',
  path: '/journal',
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function JournalPage() {
  const featured = BLOG_POSTS.find((p) => p.featured)
  const rest = BLOG_POSTS.filter((p) => !p.featured || p !== featured)

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]" aria-labelledby="journal-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C8B89A] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Knowledge & Stories</p>
          <h1 id="journal-heading" className="font-serif text-5xl text-white mb-4">The Aioneo Journal</h1>
          <p className="text-white/55 leading-relaxed">
            Detail guides written by our chemists, brand stories from our founding team, seasonal care tips, and product education — everything you need to get more from your car care routine.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="bg-white border-b border-[#2C2C2C]/10 sticky top-[calc(5rem+0px)] z-30 overflow-x-auto" role="navigation" aria-label="Article categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2 min-w-max">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${cat === 'All' ? 'bg-[#2D4A35] text-white' : 'text-[#2C2C2C]/60 hover:text-[#2C2C2C] hover:bg-[#F7F5F0]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto">
          {/* Featured Article */}
          {featured && (
            <article className="group mb-14 bg-white rounded-2xl overflow-hidden border border-[#2C2C2C]/6 shadow-sm hover:shadow-lg transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <Link href={`/journal/${featured.slug}`} tabIndex={-1} aria-label={`Read: ${featured.title}`}>
                  <div className="aspect-[4/3] md:aspect-auto md:h-full bg-gradient-to-br from-[#2D4A35] to-[#8FA886] relative min-h-[240px]">
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-[#2C2C2C]/45 mb-3">
                    <span className="font-semibold text-[#2D4A35]">{featured.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{featured.readTime} min read</span>
                  </div>
                  <Link href={`/journal/${featured.slug}`}>
                    <h2 className="font-serif text-3xl text-[#2C2C2C] leading-snug mb-4 group-hover:text-[#2D4A35] transition-colors">
                      {featured.title}
                    </h2>
                  </Link>
                  <p className="text-[#2C2C2C]/60 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#2C2C2C]">{featured.author}</p>
                      <p className="text-xs text-[#2C2C2C]/45">{featured.authorTitle}</p>
                    </div>
                    <Link
                      href={`/journal/${featured.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D4A35] hover:gap-3 transition-all"
                    >
                      Read <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden border border-[#2C2C2C]/6 shadow-sm hover:shadow-md transition-all flex flex-col">
                <Link href={`/journal/${post.slug}`} tabIndex={-1} aria-label={`Read: ${post.title}`}>
                  <div className="h-48 bg-gradient-to-br from-[#2C2C2C] to-[#4a4a4a] relative overflow-hidden">
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/10 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-[#2C2C2C]/45 mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readTime} min</span>
                  </div>
                  <Link href={`/journal/${post.slug}`}>
                    <h3 className="font-serif text-xl text-[#2C2C2C] leading-snug mb-3 group-hover:text-[#2D4A35] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-[#2C2C2C]/60 leading-relaxed line-clamp-3 flex-1 mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-xs text-[#2C2C2C]/50">{post.author}</p>
                    <Link
                      href={`/journal/${post.slug}`}
                      className="text-xs font-semibold text-[#2D4A35] hover:underline"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
