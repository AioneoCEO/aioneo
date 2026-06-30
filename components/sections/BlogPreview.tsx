import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/blog-posts'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="blog-preview-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <p className="text-[#2D4A35] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              The Aioneo Journal
            </p>
            <h2 id="blog-preview-heading" className="font-serif text-4xl sm:text-5xl text-[#2C2C2C]">
              Detail Guides & Brand Stories
            </h2>
          </div>
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2D4A35] hover:gap-3 transition-all whitespace-nowrap"
          >
            View all articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden border border-[#2C2C2C]/6 shadow-sm hover:shadow-md transition-all">
              {/* Category color bar */}
              <Link href={`/journal/${post.slug}`} className="block" aria-label={`Read: ${post.title}`} tabIndex={-1}>
                <div className="h-48 bg-gradient-to-br from-[#2D4A35] to-[#8FA886] relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(200,184,154,0.5) 0%, transparent 60%)' }}
                    aria-hidden="true"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-[#2C2C2C]/45 mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime} min read</span>
                </div>
                <Link href={`/journal/${post.slug}`}>
                  <h3 className="font-serif text-xl text-[#2C2C2C] leading-snug mb-3 group-hover:text-[#2D4A35] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed line-clamp-3 mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/journal/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4A35] hover:gap-2.5 transition-all"
                >
                  Read article <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
