import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CATEGORIES, PRODUCTS, getProductsByCategory } from '@/lib/products'
import ProductCard from '@/components/sections/ProductCard'
import Breadcrumb from '@/components/ui/Breadcrumb'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const cat = CATEGORIES.find((c) => c.slug === slug)
  if (!cat) return {}
  return {
    title: `${cat.name} | Reclaimed Auto Care`,
    description: `Shop ${cat.name} products from Reclaimed Auto Care. ${cat.description}`,
    openGraph: {
      title: `${cat.name} | Reclaimed Auto Care`,
      description: cat.description,
    },
  }
}

const CATEGORY_COPY: Record<string, { headline: string; body: string }> = {
  interior: {
    headline: 'Restore Every Surface Inside Your Vehicle',
    body: 'From cracked leather to hazy dashboards — our interior care line restores, conditions, and protects every surface inside your cabin. Professionally formulated and safe on all materials.',
  },
  exterior: {
    headline: 'Paint Perfection, From Every Angle',
    body: 'Surface decontamination, paint correction, and finishing — our exterior care products give you the tools to achieve showroom-quality results in your own garage.',
  },
  wash: {
    headline: 'The Foundation of Every Great Detail',
    body: 'Your wash process determines your paint\'s long-term condition. Our pH-neutral, SiO2-infused wash products provide the lubrication and cleaning power your paint deserves — every time.',
  },
  ceramic: {
    headline: 'Professional Protection, DIY Application',
    body: 'Our ceramic coatings bring professional-grade, long-lasting paint protection to enthusiasts. Up to 2 years of hydrophobic, UV-resistant defense — applied in your own driveway.',
  },
  glass: {
    headline: 'Crystal Clarity in Every Condition',
    body: 'Ammonia-free, streak-free glass cleaning and hydrophobic treatment. See the road clearly — and keep it that way.',
  },
  'wheel-tire': {
    headline: 'From Barrel to Sidewall — Immaculate',
    body: 'pH-activated iron removal, professional-grade wheel cleaner, and a tire conditioner that provides natural-looking protection without fling or grease.',
  },
  accessories: {
    headline: 'The Right Tools for Flawless Results',
    body: 'Premium microfibers, applicators, and detail tools. Professional quality without the professional markup.',
  },
  bundles: {
    headline: 'Complete Systems at Exceptional Value',
    body: 'Curated product bundles engineered to work together. Get a complete care system — and save compared to purchasing individually.',
  },
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params
  const category = CATEGORIES.find((c) => c.slug === slug)
  if (!category) notFound()

  const products = getProductsByCategory(slug)
  const copy = CATEGORY_COPY[slug] || { headline: category.name, body: category.description }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#2C2C2C]/8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Reclaimed Auto Care', href: '/reclaimed-auto-care' },
              { label: category.name },
            ]}
          />
        </div>
      </div>

      {/* Category Hero */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(135deg, #1e3528 0%, #2D4A35 100%)' }}
        aria-labelledby="cat-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="cat-heading" className="font-serif text-4xl sm:text-5xl text-white mb-4">{copy.headline}</h1>
          <p className="text-white/65 text-lg leading-relaxed">{copy.body}</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Filter Sidebar */}
            <aside className="w-full md:w-60 shrink-0" aria-label="Filter products">
              <div className="bg-white rounded-xl border border-[#2C2C2C]/8 p-6 sticky top-28">
                <h2 id="products-heading" className="font-semibold text-[#2C2C2C] mb-5 text-sm tracking-wide uppercase">
                  Filter
                </h2>

                {/* Price Range */}
                <div className="mb-6">
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
                <div>
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

                {/* Other categories */}
                <div className="mt-8 pt-6 border-t border-[#2C2C2C]/8">
                  <h3 className="text-xs font-semibold text-[#2C2C2C]/50 uppercase tracking-wide mb-3">
                    Other Categories
                  </h3>
                  <ul className="space-y-1.5">
                    {CATEGORIES.filter((c) => c.slug !== slug).map((cat) => (
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
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {products.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-[#2C2C2C]/50 text-lg mb-4">No products in this category yet.</p>
                  <Link href="/reclaimed-auto-care" className="text-sm font-medium text-[#2D4A35] hover:underline">
                    View all products
                  </Link>
                </div>
              ) : (
                <>
                  <p className="text-sm text-[#2C2C2C]/50 mb-6">
                    {products.length} product{products.length !== 1 ? 's' : ''} in {category.name}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
