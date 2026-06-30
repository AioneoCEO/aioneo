'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'
import { BLOG_POSTS } from '@/lib/blog-posts'
import ProductCard from '@/components/sections/ProductCard'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(query.trim())
  }

  const clearSearch = () => {
    setQuery('')
    setSubmitted('')
  }

  const q = submitted.toLowerCase()
  const productResults = submitted
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    : []
  const blogResults = submitted
    ? BLOG_POSTS.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : []
  const totalResults = productResults.length + blogResults.length

  return (
    <div className="pt-20">
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl text-white text-center mb-8">Search Aioneo</h1>
          <form onSubmit={handleSubmit} role="search">
            <label htmlFor="search-input" className="sr-only">Search products and articles</label>
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2C2C2C]/40" aria-hidden="true" />
              <input
                id="search-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, guides, and more…"
                className="w-full pl-12 pr-12 py-4 rounded-xl bg-white text-[#2C2C2C] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/50 placeholder-[#2C2C2C]/40"
                autoFocus
              />
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2C2C2C]/40 hover:text-[#2C2C2C] transition-colors"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {/* No search yet */}
          {!submitted && (
            <div className="text-center py-20">
              <Search size={48} className="text-[#2C2C2C]/20 mx-auto mb-4" aria-hidden="true" />
              <p className="text-[#2C2C2C]/50 text-lg">Start typing to search products and articles.</p>
              <div className="mt-8">
                <p className="text-sm text-[#2C2C2C]/40 mb-4">Popular searches:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['ceramic coating', 'interior kit', 'foam wash', 'microfiber', 'car detailing'].map((term) => (
                    <button
                      key={term}
                      onClick={() => { setQuery(term); setSubmitted(term) }}
                      className="px-4 py-2 bg-white rounded-full text-sm text-[#2C2C2C]/60 hover:text-[#2D4A35] border border-[#2C2C2C]/10 hover:border-[#2D4A35]/30 transition-all"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* No results */}
          {submitted && totalResults === 0 && (
            <div className="text-center py-20">
              <p className="text-[#2C2C2C] font-semibold text-xl mb-2">No results for &ldquo;{submitted}&rdquo;</p>
              <p className="text-[#2C2C2C]/50 mb-8">Try a different search term or browse our categories below.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { label: 'All Products', href: '/shop' },
                  { label: 'Interior Care', href: '/reclaimed-auto-care/interior' },
                  { label: 'Exterior Care', href: '/reclaimed-auto-care/exterior' },
                  { label: 'Journal', href: '/journal' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="px-5 py-2.5 bg-white rounded-lg text-sm font-medium text-[#2C2C2C] hover:text-[#2D4A35] border border-[#2C2C2C]/10 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {submitted && totalResults > 0 && (
            <div>
              <p className="text-sm text-[#2C2C2C]/50 mb-8">
                {totalResults} result{totalResults !== 1 ? 's' : ''} for &ldquo;<strong className="text-[#2C2C2C]">{submitted}</strong>&rdquo;
              </p>

              {productResults.length > 0 && (
                <section className="mb-14" aria-labelledby="product-results-heading">
                  <h2 id="product-results-heading" className="font-serif text-2xl text-[#2C2C2C] mb-6">
                    Products ({productResults.length})
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {productResults.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </section>
              )}

              {blogResults.length > 0 && (
                <section aria-labelledby="article-results-heading">
                  <h2 id="article-results-heading" className="font-serif text-2xl text-[#2C2C2C] mb-6">
                    Articles ({blogResults.length})
                  </h2>
                  <div className="space-y-4">
                    {blogResults.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/journal/${post.slug}`}
                        className="block bg-white rounded-xl border border-[#2C2C2C]/8 p-6 hover:border-[#2D4A35]/30 hover:shadow-sm transition-all"
                      >
                        <span className="text-xs font-semibold text-[#2D4A35]">{post.category}</span>
                        <h3 className="font-serif text-xl text-[#2C2C2C] mt-1 mb-2">{post.title}</h3>
                        <p className="text-sm text-[#2C2C2C]/60 line-clamp-2">{post.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
