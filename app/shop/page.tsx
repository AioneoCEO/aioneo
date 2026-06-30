import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { PRODUCTS, CATEGORIES } from '@/lib/products'
import ProductCard from '@/components/sections/ProductCard'
import Link from 'next/link'

export const metadata: Metadata = genMeta({
  title: 'Shop All Products',
  description: 'Browse the complete Reclaimed Auto Care product lineup. Car wash, ceramic coatings, interior care, glass treatment, and more.',
  path: '/shop',
})

export default function ShopPage() {
  return (
    <div className="pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-3">All Products</h1>
          <p className="text-white/55">The complete Reclaimed Auto Care lineup — {PRODUCTS.length} professional-grade formulas.</p>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full md:w-60 shrink-0" aria-label="Filter products">
            <div className="bg-white rounded-xl border border-[#2C2C2C]/8 p-6 sticky top-28">
              <h2 className="font-semibold text-[#2C2C2C] mb-5 text-sm tracking-wide uppercase">Filter</h2>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-[#2C2C2C] mb-3">Category</h3>
                <ul className="space-y-1.5">
                  <li>
                    <Link href="/shop" className="text-sm text-[#2D4A35] font-semibold">All Products</Link>
                  </li>
                  {CATEGORIES.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/reclaimed-auto-care/${cat.slug}`}
                        className="text-sm text-[#2C2C2C]/60 hover:text-[#2D4A35] transition-colors"
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-6 pt-6 border-t border-[#2C2C2C]/8">
                <h3 className="text-sm font-medium text-[#2C2C2C] mb-3">Price Range</h3>
                <div className="space-y-2">
                  {['Under $25', '$25–$50', '$50–$100', 'Over $100'].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-[#2C2C2C]/30 text-[#2D4A35] focus:ring-[#2D4A35]" />
                      <span className="text-sm text-[#2C2C2C]/70">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="pt-6 border-t border-[#2C2C2C]/8">
                <h3 className="text-sm font-medium text-[#2C2C2C] mb-3">Sort By</h3>
                <select className="w-full text-sm border border-[#2C2C2C]/20 rounded-lg px-3 py-2 text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30 bg-white">
                  <option>Featured</option>
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[#2C2C2C]/50">{PRODUCTS.length} products</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
