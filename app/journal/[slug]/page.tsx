import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BLOG_POSTS, getBlogPostBySlug } from '@/lib/blog-posts'
import Breadcrumb from '@/components/ui/Breadcrumb'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)
  const fallbackRelated = related.length < 3 ? BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3 - related.length) : []
  const relatedPosts = [...related, ...fallbackRelated].slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'Aioneo', url: 'https://aioneo.com' },
  }

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#2C2C2C]/8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Journal', href: '/journal' }, { label: post.title }]} />
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#2D4A35] to-[#4a7a55] py-16 px-4 sm:px-6 lg:px-8" aria-hidden="false">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            {post.category}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
            <div>
              <span className="font-semibold text-white">{post.author}</span>
              <span className="text-white/40 ml-1">— {post.authorTitle}</span>
            </div>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
          {/* Article content */}
          <article>
            <p className="text-xl text-[#2C2C2C]/70 leading-relaxed mb-10 font-medium border-l-4 border-[#2D4A35] pl-6">
              {post.excerpt}
            </p>
            <div
              className="prose prose-lg max-w-none text-[#2C2C2C]/75 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {post.content.trim().split('\n\n').map((block, i) => {
                if (block.startsWith('## ')) {
                  return (
                    <h2 key={i} className="font-serif text-2xl text-[#2C2C2C] mt-10 mb-4">
                      {block.slice(3)}
                    </h2>
                  )
                }
                return (
                  <p key={i} className="mb-5 leading-[1.85] text-[#2C2C2C]/70">
                    {block}
                  </p>
                )
              })}
            </div>

            {/* Share */}
            <div className="mt-14 pt-8 border-t border-[#2C2C2C]/12 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm font-semibold text-[#2C2C2C]">Share this article:</p>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://aioneo.com/journal/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2C2C2C]/15 text-sm text-[#2C2C2C]/60 hover:text-[#2C2C2C] hover:border-[#2C2C2C]/30 transition-all"
                >
                  𝕏 Twitter
                </a>
                <a
                  href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://aioneo.com/journal/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2C2C2C]/15 text-sm text-[#2C2C2C]/60 hover:text-[#2C2C2C] hover:border-[#2C2C2C]/30 transition-all"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-10">
              <Link href="/journal" className="inline-flex items-center gap-2 text-sm font-medium text-[#2D4A35] hover:gap-3 transition-all">
                <ArrowLeft size={14} /> Back to Journal
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside aria-label="Related content">
            <div className="bg-white rounded-2xl border border-[#2C2C2C]/6 p-6 sticky top-28">
              <h2 className="font-semibold text-[#2C2C2C] text-sm uppercase tracking-wide mb-5">Related Articles</h2>
              <ul className="space-y-5">
                {relatedPosts.map((rp) => (
                  <li key={rp.slug} className="border-b border-[#2C2C2C]/8 pb-5 last:border-0 last:pb-0">
                    <span className="text-xs font-semibold text-[#2D4A35] block mb-1">{rp.category}</span>
                    <Link href={`/journal/${rp.slug}`} className="text-sm font-medium text-[#2C2C2C] hover:text-[#2D4A35] transition-colors leading-snug">
                      {rp.title}
                    </Link>
                    <p className="text-xs text-[#2C2C2C]/45 mt-1">{rp.readTime} min read</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
