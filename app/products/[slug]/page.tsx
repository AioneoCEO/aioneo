'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useState, use } from 'react'
import { ShoppingCart, Minus, Plus, ChevronDown, Check } from 'lucide-react'
import { PRODUCTS, getProductBySlug } from '@/lib/products'
import StarRating from '@/components/ui/StarRating'
import Badge from '@/components/ui/Badge'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ProductCard from '@/components/sections/ProductCard'

interface Props {
  params: Promise<{ slug: string }>
}

export default function ProductPage({ params }: Props) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState<'description' | 'how-to-use' | 'reviews'>('description')
  const [accordionOpen, setAccordionOpen] = useState<string | null>(null)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
  ).slice(0, 4)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    sku: product.id,
    brand: { '@type': 'Brand', name: 'Reclaimed Auto Care' },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://aioneo.com/products/${product.slug}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  }

  return (
    <div className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#2C2C2C]/8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Reclaimed Auto Care', href: '/reclaimed-auto-care' },
              { label: product.category, href: `/reclaimed-auto-care/${product.categorySlug}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Main Product */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#2D4A35] to-[#8FA886] relative overflow-hidden mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/40">
                  <div className="w-32 h-32 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-sm font-medium text-white/60">{product.category}</span>
                  </div>
                  <p className="text-xs">Product Image Placeholder</p>
                </div>
              </div>
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {product.badges.map((b) => <Badge key={b}>{b}</Badge>)}
              </div>
            </div>
            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`aspect-square rounded-lg bg-gradient-to-br from-[#2D4A35]/60 to-[#8FA886]/60 cursor-pointer border-2 transition-all ${n === 1 ? 'border-[#2D4A35]' : 'border-transparent hover:border-[#2C2C2C]/30'}`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-[#2D4A35] text-xs font-semibold tracking-widest uppercase mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-4xl text-[#2C2C2C] mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-5">
              <StarRating rating={product.rating} size="md" showValue reviewCount={product.reviewCount} />
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-[#2C2C2C]">${product.price.toFixed(2)}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-[#2C2C2C]/40 line-through">${product.compareAtPrice.toFixed(2)}</span>
              )}
              {product.compareAtPrice && (
                <span className="text-sm text-[#2D4A35] font-semibold">
                  Save ${(product.compareAtPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-[#2C2C2C]/70 leading-relaxed mb-8">{product.description}</p>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-[#2C2C2C]/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  aria-label="Decrease quantity"
                  className="px-4 py-3 hover:bg-[#F7F5F0] transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-3 font-semibold text-[#2C2C2C] min-w-[3rem] text-center" aria-label={`Quantity: ${qty}`}>
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  aria-label="Increase quantity"
                  className="px-4 py-3 hover:bg-[#F7F5F0] transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-3 py-3.5 px-8 rounded-lg font-semibold text-sm transition-all duration-200 ${added ? 'bg-[#2D4A35] text-white' : 'bg-[#2C2C2C] text-white hover:bg-[#1a1a1a]'}`}
                aria-label={added ? 'Added to cart' : 'Add to cart'}
              >
                {added ? <Check size={18} /> : <ShoppingCart size={18} />}
                {added ? `Added to Cart` : `Add to Cart — $${(product.price * qty).toFixed(2)}`}
              </button>
            </div>

            {/* Quick trust signals */}
            <div className="border-t border-[#2C2C2C]/8 pt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Free Shipping', sub: 'Orders $75+' },
                { label: '30-Day Returns', sub: 'No questions' },
                { label: 'In Stock', sub: 'Ships same day' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold text-[#2C2C2C]">{item.label}</p>
                  <p className="text-xs text-[#2C2C2C]/45">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-[#2C2C2C]/12 mb-10" role="tablist">
            {(['description', 'how-to-use', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium transition-all capitalize border-b-2 -mb-px ${activeTab === tab ? 'border-[#2D4A35] text-[#2D4A35]' : 'border-transparent text-[#2C2C2C]/50 hover:text-[#2C2C2C]'}`}
              >
                {tab === 'how-to-use' ? 'How to Use' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'description' && (
            <div>
              <p className="text-[#2C2C2C]/70 leading-relaxed mb-8">{product.longDescription}</p>
              {/* Accordion */}
              {[{ label: 'Product Details', items: product.details }].map((section) => (
                <div key={section.label} className="border border-[#2C2C2C]/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setAccordionOpen(accordionOpen === section.label ? null : section.label)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-[#2C2C2C] hover:bg-[#F7F5F0] transition-colors"
                    aria-expanded={accordionOpen === section.label}
                  >
                    {section.label}
                    <ChevronDown size={18} className={`transition-transform ${accordionOpen === section.label ? 'rotate-180' : ''}`} />
                  </button>
                  {accordionOpen === section.label && (
                    <ul className="border-t border-[#2C2C2C]/8 p-5 space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-sm text-[#2C2C2C]/65 flex gap-2">
                          <span className="text-[#2D4A35] mt-0.5" aria-hidden="true">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'how-to-use' && (
            <ol className="space-y-5">
              {product.howToUse.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#2D4A35]/10 text-[#2D4A35] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-[#2C2C2C]/70 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center gap-6 mb-10 p-6 bg-[#F7F5F0] rounded-2xl">
                <div className="text-center">
                  <p className="text-5xl font-bold text-[#2C2C2C]">{product.rating.toFixed(1)}</p>
                  <StarRating rating={product.rating} size="sm" />
                  <p className="text-xs text-[#2C2C2C]/50 mt-1">{product.reviewCount} reviews</p>
                </div>
              </div>
              <p className="text-sm text-[#2C2C2C]/50 text-center">
                Verified reviews are loaded dynamically. Integration with review platform pending.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="related-heading" className="font-serif text-3xl text-[#2C2C2C] mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
