import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedCategories from '@/components/sections/FeaturedCategories'
import TrustSignals from '@/components/sections/TrustSignals'
import BrandStory from '@/components/sections/BrandStory'
import TestimonialSection from '@/components/sections/TestimonialSection'
import BlogPreview from '@/components/sections/BlogPreview'
import NewsletterSignup from '@/components/ui/NewsletterSignup'
import { PRODUCTS } from '@/lib/products'
import ProductCard from '@/components/sections/ProductCard'

export const metadata: Metadata = {
  title: 'Aioneo — Restore What Matters',
  description:
    'Premium automotive detailing products and lifestyle goods crafted for people who care. Shop Reclaimed Auto Care — professional-grade formulas for enthusiasts.',
  openGraph: {
    title: 'Aioneo — Restore What Matters',
    description: 'Professional-grade car care products for the enthusiast who refuses to settle.',
    url: 'https://aioneo.com',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aioneo',
  url: 'https://aioneo.com',
  logo: 'https://aioneo.com/logo.png',
  description: 'Premium lifestyle products. Home of Reclaimed Auto Care.',
  sameAs: [
    'https://instagram.com/aioneo',
    'https://facebook.com/aioneo',
    'https://youtube.com/@aioneo',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@aioneo.com',
    availableLanguage: 'English',
  },
}

const featuredProducts = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4)

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <HeroSection
        headline="Restore What Matters"
        subheadline="Professional-grade car care products formulated for the enthusiast who refuses to settle. Crafted with precision. Proven in the field."
        primaryCta={{ label: 'Shop Reclaimed Auto Care', href: '/reclaimed-auto-care' }}
        secondaryCta={{ label: 'Our Story', href: '/about' }}
        eyebrow="Introducing Reclaimed Auto Care"
      />

      <TrustSignals />

      <FeaturedCategories />

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="featured-products-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#2D4A35] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Top Performers</p>
            <h2 id="featured-products-heading" className="font-serif text-4xl sm:text-5xl text-[#2C2C2C]">
              Best Sellers
            </h2>
            <p className="mt-4 text-[#2C2C2C]/60 max-w-xl mx-auto">
              The products our customers reach for again and again. Start here if you&apos;re new to Reclaimed Auto Care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <BrandStory />

      <TestimonialSection />

      <BlogPreview />

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2D4A35]" aria-labelledby="newsletter-heading">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="newsletter-heading" className="font-serif text-3xl sm:text-4xl text-white mb-3">
            Join the Aioneo Community
          </h2>
          <p className="text-white/60 mb-8 text-sm">
            Detail guides, product launches, and exclusive offers. We respect your inbox.
          </p>
          <NewsletterSignup dark />
        </div>
      </section>
    </>
  )
}
