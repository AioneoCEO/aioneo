import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata: Metadata = genMeta({
  title: 'About Aioneo',
  description:
    'Learn the story behind Aioneo — a premium lifestyle brand built on the belief that quality should be more than a price tag. Home of Reclaimed Auto Care.',
  path: '/about',
})

const VALUES = [
  {
    name: 'Craftsmanship',
    description:
      'Every formula, every product, every detail is considered. We don\'t cut corners in our chemistry, and we don\'t expect you to cut corners in your care.',
  },
  {
    name: 'Integrity',
    description:
      'We list our key ingredients. We don\'t make claims we can\'t back up. We respond to every customer. This is what integrity looks like in practice.',
  },
  {
    name: 'Sustainability',
    description:
      'Our formulas are biodegradable where chemistry allows. We use minimal, recyclable packaging. We\'re constantly working to reduce our environmental footprint.',
  },
  {
    name: 'Community',
    description:
      'Aioneo was built alongside the detailing community — not above it. Your feedback shapes our products. Your trust is what we protect most.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C8B89A] text-xs font-semibold tracking-[0.25em] uppercase mb-4">About Aioneo</p>
          <h1 id="about-heading" className="font-serif text-5xl sm:text-6xl text-white mb-6">
            Built on the Belief That Quality Should Mean Something
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Aioneo is a premium lifestyle brand based in Asheville, North Carolina. We create products for people who care how things are made — and who can tell the difference.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="story-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="story-heading" className="font-serif text-3xl sm:text-4xl text-[#2C2C2C] mb-8">
            How Aioneo Began
          </h2>
          <div className="space-y-5 text-[#2C2C2C]/70 leading-relaxed">
            <p>
              It started in a two-car garage in Asheville, North Carolina, with a 1987 Mercedes-Benz 300E and a lot of frustration. David Kessler — our founder and a professional product chemist with fifteen years of industry experience — spent two years trying to find a car care product line that lived up to its claims. He couldn&apos;t find one.
            </p>
            <p>
              &ldquo;The premium segment had a credibility problem,&rdquo; David recalls. &ldquo;Beautiful packaging. Aspirational marketing. And formulas that either didn&apos;t work or damaged what they were supposed to protect. I kept thinking: I have the chemistry background to do this right. Why isn&apos;t anyone doing this right?&rdquo;
            </p>
            <p>
              So he did it himself. Over eighteen months of development — formulating, testing, reformulating, and field-testing with working professional detailers — Reclaimed Auto Care was born. It launched in 2023 with five products and sold out within six weeks.
            </p>
            <p>
              Aioneo, the parent brand, was incorporated to hold the longer vision: a portfolio of premium lifestyle product lines, each holding to the same standard that defines Reclaimed Auto Care. Aioneo Collection (home goods) and Aioneo Living (wellness) are in development. But we move when we&apos;re ready — not before.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="values-heading" className="font-serif text-4xl text-[#2C2C2C]">What We Stand For</h2>
            <p className="mt-3 text-[#2C2C2C]/60 max-w-xl mx-auto">
              These aren&apos;t values we hung on a wall. They&apos;re the principles reflected in every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {VALUES.map((value) => (
              <div key={value.name} className="bg-[#F7F5F0] rounded-2xl p-8 border border-[#2C2C2C]/6">
                <h3 className="font-serif text-2xl text-[#2D4A35] mb-3">{value.name}</h3>
                <p className="text-[#2C2C2C]/65 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="team-heading" className="font-serif text-4xl text-[#2C2C2C]">The People Behind Aioneo</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: 'David Kessler', title: 'Founder & CEO', specialty: 'Product Chemistry' },
              { name: 'Marcus Reid', title: 'Lead Formulation Chemist', specialty: 'R&D & Quality Control' },
              { name: 'Jordan Calloway', title: 'Detail Educator & Brand Lead', specialty: 'Education & Community' },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2D4A35] to-[#8FA886] mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-semibold text-[#2C2C2C]">{person.name}</h3>
                <p className="text-sm text-[#2D4A35] font-medium mt-0.5">{person.title}</p>
                <p className="text-xs text-[#2C2C2C]/50 mt-1">{person.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Divisions */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]" aria-labelledby="divisions-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8B89A] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Coming Soon</p>
            <h2 id="divisions-heading" className="font-serif text-4xl text-white">The Aioneo Portfolio</h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">
              We&apos;re building something larger. Each division shares Aioneo&apos;s commitment to quality — but serves a different corner of your life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Reclaimed Auto Care', status: 'Available Now', description: 'Professional-grade automotive detailing products for enthusiasts.' },
              { name: 'Aioneo Collection', status: 'Coming 2026', description: 'Premium home goods and everyday objects crafted to last.' },
              { name: 'Aioneo Living', status: 'Coming 2026', description: 'Personal care and wellness products made with the same rigor.' },
            ].map((div) => (
              <div key={div.name} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <span className={`text-xs font-semibold tracking-wide ${div.status === 'Available Now' ? 'text-[#8FA886]' : 'text-[#C8B89A]/70'}`}>
                  {div.status}
                </span>
                <h3 className="font-serif text-2xl text-white mt-3 mb-3">{div.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{div.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0] text-center">
        <h2 className="font-serif text-3xl text-[#2C2C2C] mb-4">Ready to Get Started?</h2>
        <p className="text-[#2C2C2C]/60 mb-8">
          Explore Reclaimed Auto Care and find the products your vehicle deserves.
        </p>
        <Link
          href="/reclaimed-auto-care"
          className="inline-flex items-center gap-2 bg-[#2D4A35] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#243d2b] transition-colors"
        >
          Shop Reclaimed Auto Care
        </Link>
      </section>
    </div>
  )
}
