import type { Metadata } from 'next'
import { Leaf, Microscope, Heart } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedCategories from '@/components/sections/FeaturedCategories'
import TrustSignals from '@/components/sections/TrustSignals'
import BrandStory from '@/components/sections/BrandStory'
import TestimonialSection from '@/components/sections/TestimonialSection'
import BlogPreview from '@/components/sections/BlogPreview'
import NewsletterSignup from '@/components/ui/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Aioneo — Restore What Matters',
  description:
    'Aioneo builds a healthier system of services and products so people can live clean — free of microplastics and toxic chemicals. Home of Reclaimed Auto Care.',
  openGraph: {
    title: 'Aioneo — Restore What Matters',
    description: 'A healthier system of restoration services, free of microplastics and toxic chemicals.',
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
  description: 'A healthier system of restoration services. Home of Reclaimed Auto Care.',
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

const PILLARS = [
  {
    icon: Leaf,
    title: 'No Microplastics, No Toxins',
    description: 'Every service we offer relies on non-toxic, biodegradable products — better for you, and for the planet.',
  },
  {
    icon: Microscope,
    title: 'Restoration, Not Replacement',
    description: 'We believe in restoring what\'s already valuable — your car, your home, your life — instead of throwing it away.',
  },
  {
    icon: Heart,
    title: 'Built to Grow With You',
    description: 'Reclaimed Auto Care is our first service. Over time, Aioneo will expand into more restoration services — all clean, all healthy.',
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <HeroSection
        headline="Restore What Matters"
        subheadline="Aioneo is building a healthier system of services so you can live clean — without worrying about microplastics or toxic chemicals."
        primaryCta={{ label: 'Explore Reclaimed Auto Care', href: '/reclaimed-auto-care' }}
        secondaryCta={{ label: 'Our Mission', href: '/mission' }}
        eyebrow="A Healthier Way to Restore"
      />

      {/* Mission Pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#2D4A35] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Why Aioneo</p>
            <h2 id="pillars-heading" className="font-serif text-4xl sm:text-5xl text-[#2C2C2C]">
              Clean by Design
            </h2>
            <p className="mt-4 text-[#2C2C2C]/60 max-w-xl mx-auto">
              Our mission is simple: help people stay clean and healthy by restoring what they already have — without compromise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-[#2D4A35]/10 flex items-center justify-center mb-4 mx-auto sm:mx-0">
                    <Icon size={22} className="text-[#2D4A35]" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-2">{pillar.title}</h3>
                  <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <TrustSignals />

      <FeaturedCategories />

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
            Detail guides, service updates, and tips for cleaner, healthier living. We respect your inbox.
          </p>
          <NewsletterSignup dark />
        </div>
      </section>
    </>
  )
}
