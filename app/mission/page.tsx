import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { Leaf, Microscope, Heart } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Our Mission',
  description: 'Aioneo\'s mission: to create products worthy of the things you love. Learn about our three core pillars — quality, transparency, and stewardship.',
  path: '/mission',
})

const PILLARS = [
  {
    icon: Microscope,
    title: 'Uncompromising Quality',
    description:
      'Every formula starts in our lab and doesn\'t leave until it\'s the best we\'ve ever tested. We partner with independent analytical chemists to verify our claims, and we run real-world field tests with professional detailers before any product reaches a customer. "Good enough" isn\'t in our vocabulary — because you deserve better.',
  },
  {
    icon: Heart,
    title: 'Radical Transparency',
    description:
      'We list our key active ingredients, explain what they do, and tell you honestly what our products won\'t do. We don\'t use meaningless buzzwords. We don\'t inflate performance numbers. We share test data. If we don\'t know something, we say so. You can\'t make informed choices without honest information.',
  },
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    description:
      'Premium shouldn\'t come at the planet\'s expense. Our formulas are biodegradable where chemistry allows. Our packaging is minimal and recyclable. We\'re actively exploring concentrated refill formats to cut plastic use. We measure our impact, report it honestly, and work to improve it every year.',
  },
]

export default function MissionPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="min-h-[60vh] flex items-center justify-center relative overflow-hidden"
        aria-labelledby="mission-heading"
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #1a2e1f 0%, #2D4A35 60%, #8FA886 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#C8B89A] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Our Mission</p>
          <h1 id="mission-heading" className="font-serif text-5xl sm:text-6xl text-white mb-6 leading-tight">
            Products Worthy of the Things You Love
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            We exist to make products that meet the standard of the objects they protect — and the people who use them.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="statement-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="statement-heading" className="font-serif text-3xl sm:text-4xl text-[#2C2C2C] mb-8">
            What We&apos;re Here to Do
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 leading-relaxed mb-6">
            Aioneo&apos;s mission is to create premium lifestyle products that are genuinely worth the trust people place in them — formulated with scientific rigor, described honestly, and designed to last.
          </p>
          <p className="text-[#2C2C2C]/55 leading-relaxed">
            We believe the gap between &ldquo;premium&rdquo; and &ldquo;performant&rdquo; is artificial. You shouldn&apos;t have to choose between a beautiful product and an effective one. Between caring about quality and caring about the environment. We close that gap — one product at a time.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="pillars-heading" className="font-serif text-4xl text-[#2C2C2C]">
              Three Commitments We Never Compromise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-[#2D4A35]/10 flex items-center justify-center mb-6">
                    <Icon size={26} className="text-[#2D4A35]" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#2C2C2C] mb-4">{pillar.title}</h3>
                  <p className="text-[#2C2C2C]/65 leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-6">
            &ldquo;We make products for people who believe the things they love deserve to be cared for properly.&rdquo;
          </blockquote>
          <cite className="not-italic text-white/50 text-sm">David Kessler, Founder of Aioneo</cite>
        </div>
      </section>
    </div>
  )
}
