import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { Leaf, Microscope, Heart } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Our Mission',
  description: 'Aioneo\'s mission: a healthy system of restoration services, free of microplastics and toxic chemicals. Learn about our three core commitments.',
  path: '/mission',
})

const PILLARS = [
  {
    icon: Microscope,
    title: 'No Microplastics, No Toxins',
    description:
      'Every product we use is chosen to be non-toxic, low-VOC, and free of microplastics where possible. We don\'t cut corners on what goes into our process — because what touches your car, your home, and your life shouldn\'t come with a hidden cost to your health.',
  },
  {
    icon: Heart,
    title: 'Restoration Over Replacement',
    description:
      'We believe in restoring what\'s already valuable instead of throwing it away. It starts with your car through Reclaimed Auto Care, and it\'s growing from there — toward a full system of restoration services built on the same standard.',
  },
  {
    icon: Leaf,
    title: 'Clean for the Long Run',
    description:
      'Health shouldn\'t come at the planet\'s expense. We prioritize biodegradable, eco-conscious products throughout our process and are transparent about any exceptions. We measure our impact and work to improve it as we grow.',
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
            A Healthy System of Restoration
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            We exist to help people live clean — restoring what they already own, without worrying about microplastics or toxic chemicals.
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
            Aioneo&apos;s mission is to create a healthy system of restoration services so people can live clean — without worrying about microplastics or other toxic chemicals.
          </p>
          <p className="text-[#2C2C2C]/55 leading-relaxed">
            We believe restoring what&apos;s already valuable is better than replacing it. Reclaimed Auto Care is where we started. Over time, we&apos;re building out more restoration services — each one held to the same standard: clean, healthy, and effective.
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
            &ldquo;We believe what you already own deserves to be restored properly — without the trade-off.&rdquo;
          </blockquote>
          <cite className="not-italic text-white/50 text-sm">Founder, Aioneo</cite>
        </div>
      </section>
    </div>
  )
}
