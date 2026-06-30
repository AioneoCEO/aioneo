import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { CATEGORIES, PRODUCTS } from '@/lib/products'
import ProductCard from '@/components/sections/ProductCard'
import TrustSignals from '@/components/sections/TrustSignals'

export const metadata: Metadata = genMeta({
  title: 'Reclaimed Auto Care — Premium Automotive Detailing Products',
  description:
    'Shop Reclaimed Auto Care. Professional-grade car wash, ceramic coatings, interior care, glass treatment, and more. Formulated for enthusiasts.',
  path: '/reclaimed-auto-care',
  keywords: ['auto detailing', 'car care', 'ceramic coating', 'car wash products'],
})

const CATEGORY_GRADIENTS: Record<string, string> = {
  interior: 'from-[#2D4A35] to-[#4a7a55]',
  exterior: 'from-[#3a3a3a] to-[#5a5a5a]',
  wash: 'from-[#1a4a6a] to-[#3a7a9a]',
  ceramic: 'from-[#6a4a10] to-[#a07a20]',
  glass: 'from-[#2a4a6a] to-[#4a7aaa]',
  'wheel-tire': 'from-[#2a2a2a] to-[#5a5a5a]',
  accessories: 'from-[#4a3a25] to-[#7a6a45]',
  bundles: 'from-[#2D4A35] to-[#8B6914]',
}

const featuredProducts = PRODUCTS.filter((p) => p.isBestSeller || p.isNew).slice(0, 4)

export default function ReclaimedAutoCarePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2e1f 0%, #2D4A35 70%, #4a7a55 100%)' }}
        aria-labelledby="rac-heading"
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#C8B89A] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Aioneo Division</p>
          <h1 id="rac-heading" className="font-serif text-5xl sm:text-6xl text-white mb-5">
            Reclaimed Auto Care
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Professional-grade automotive detailing products, formulated from first principles by chemists who care. From weekly wash to long-term ceramic protection — we have everything your vehicle needs.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-white text-[#2C2C2C] px-8 py-4 rounded-lg font-semibold hover:bg-[#F7F5F0] transition-colors"
          >
            Shop All Products <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <TrustSignals />

      {/* Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="rac-categories-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="rac-categories-heading" className="font-serif text-4xl sm:text-5xl text-[#2C2C2C]">
              Shop by Category
            </h2>
            <p className="mt-4 text-[#2C2C2C]/60 max-w-xl mx-auto">
              Eight purpose-built product categories — each engineered for a specific job on your vehicle.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => {
              const gradient = CATEGORY_GRADIENTS[cat.slug] || 'from-[#2C2C2C] to-[#4a4a4a]'
              return (
                <Link
                  key={cat.slug}
                  href={`/reclaimed-auto-care/${cat.slug}`}
                  className="group relative rounded-xl overflow-hidden aspect-square flex flex-col justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A35]"
                  aria-label={`Shop ${cat.name}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:scale-105 transition-transform duration-500`} />
                  <div className="relative z-10 p-4">
                    <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cat.name}</h3>
                    <span className="text-white/60 text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      Shop <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="rac-featured-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <h2 id="rac-featured-heading" className="font-serif text-4xl text-[#2C2C2C]">
                Fan Favorites
              </h2>
              <p className="mt-2 text-[#2C2C2C]/60">Our most-loved products, backed by thousands of reviews.</p>
            </div>
            <Link href="/shop" className="text-sm font-medium text-[#2D4A35] hover:underline whitespace-nowrap">
              View all products →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2D4A35]" aria-labelledby="edu-cta-heading">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#C8B89A] text-xs font-semibold tracking-[0.25em] uppercase mb-3">The Aioneo Journal</p>
            <h2 id="edu-cta-heading" className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-white/65 leading-relaxed">
              Our free detail guides cover everything from the basics of the two-bucket wash method to applying a ceramic coating for the first time. Written by chemists and working detailers.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/journal/how-to-apply-ceramic-coating-at-home"
              className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-colors"
            >
              <p className="text-[#C8B89A] text-xs font-medium mb-1">Product Education</p>
              <p className="text-white font-medium text-sm">How to Apply Ceramic Coating at Home</p>
            </Link>
            <Link
              href="/journal/the-two-bucket-wash-method-explained"
              className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-colors"
            >
              <p className="text-[#C8B89A] text-xs font-medium mb-1">Auto Care</p>
              <p className="text-white font-medium text-sm">The Two-Bucket Wash Method Explained</p>
            </Link>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mt-1"
            >
              Browse all guides <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
