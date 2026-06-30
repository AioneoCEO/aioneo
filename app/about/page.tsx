import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata: Metadata = genMeta({
  title: 'About Aioneo',
  description:
    'Learn the story behind Aioneo — a healthier system of restoration services, free of microplastics and toxic chemicals. Home of Reclaimed Auto Care.',
  path: '/about',
})

const VALUES = [
  {
    name: 'Health First',
    description:
      'Every service we offer relies on non-toxic, low-VOC, biodegradable products. No microplastics, no harsh chemicals — for you and the people you care for.',
  },
  {
    name: 'Integrity',
    description:
      'We don\'t make claims we can\'t back up. We respond to every customer. This is what integrity looks like in practice.',
  },
  {
    name: 'Restoration Over Replacement',
    description:
      'We believe in restoring what\'s already valuable instead of throwing it away — starting with your car, and growing from there.',
  },
  {
    name: 'Community',
    description:
      'Aioneo is built alongside the people we serve, not above them. Your feedback shapes what we offer. Your trust is what we protect most.',
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
            Building a Healthier Way to Restore
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Aioneo is on a mission to create a healthy system of restoration services so people can live clean — without worrying about microplastics or toxic chemicals.
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
              Aioneo started with a simple frustration: most car care and household products rely on harsh chemicals and microplastics that are bad for people and bad for the planet. We wanted a better way to restore the things we already own — without that trade-off.
            </p>
            <p>
              Reclaimed Auto Care, our first service, brings professional detailing to your vehicle using non-toxic, biodegradable products from start to finish — every wash, every wipe, every coat.
            </p>
            <p>
              It&apos;s just the beginning. Aioneo&apos;s long-term vision is a full system of restoration services, all built on the same standard: clean, healthy, and effective. We move when we&apos;re ready — not before.
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

      {/* Future Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]" aria-labelledby="divisions-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8B89A] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Growing With Purpose</p>
            <h2 id="divisions-heading" className="font-serif text-4xl text-white">Where We&apos;re Headed</h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">
              Reclaimed Auto Care is our first service. Over time, Aioneo plans to expand into more restoration services — each one clean and healthy by design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Reclaimed Auto Care', status: 'Available Now', description: 'Professional, non-toxic car detailing services.' },
              { name: 'Home Restoration', status: 'Future', description: 'Clean, healthy restoration services for the home.' },
              { name: 'More to Come', status: 'Future', description: 'Additional services, all held to the same standard.' },
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
          Explore Reclaimed Auto Care and book the service your vehicle deserves.
        </p>
        <Link
          href="/reclaimed-auto-care"
          className="inline-flex items-center gap-2 bg-[#2D4A35] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#243d2b] transition-colors"
        >
          Explore Reclaimed Auto Care
        </Link>
      </section>
    </div>
  )
}
