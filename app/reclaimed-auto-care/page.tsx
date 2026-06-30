import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { SERVICES } from '@/lib/services'
import TrustSignals from '@/components/sections/TrustSignals'

export const metadata: Metadata = genMeta({
  title: 'Reclaimed Auto Care — Professional Car Detailing Services',
  description:
    'Reclaimed Auto Care, an Aioneo service. Professional, non-toxic car detailing — interior, exterior, ceramic coating, and more. Book your detail today.',
  path: '/reclaimed-auto-care',
  keywords: ['auto detailing', 'car detailing service', 'ceramic coating', 'mobile detailing'],
})

const SERVICE_GRADIENTS: Record<string, string> = {
  interior: 'from-[#2D4A35] to-[#4a7a55]',
  exterior: 'from-[#3a3a3a] to-[#5a5a5a]',
  wash: 'from-[#1a4a6a] to-[#3a7a9a]',
  ceramic: 'from-[#6a4a10] to-[#a07a20]',
  glass: 'from-[#2a4a6a] to-[#4a7aaa]',
  'wheel-tire': 'from-[#2a2a2a] to-[#5a5a5a]',
}

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
          <p className="text-[#C8B89A] text-xs font-semibold tracking-[0.25em] uppercase mb-4">An Aioneo Service</p>
          <h1 id="rac-heading" className="font-serif text-5xl sm:text-6xl text-white mb-5">
            Reclaimed Auto Care
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Professional car detailing, done right — and done clean. Non-toxic, low-VOC, biodegradable products on every job, from a weekly wash to full ceramic protection.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#2C2C2C] px-8 py-4 rounded-lg font-semibold hover:bg-[#F7F5F0] transition-colors"
          >
            Book a Service <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <TrustSignals />

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="rac-services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="rac-services-heading" className="font-serif text-4xl sm:text-5xl text-[#2C2C2C]">
              Our Services
            </h2>
            <p className="mt-4 text-[#2C2C2C]/60 max-w-xl mx-auto">
              Six purpose-built detailing services — each tailored to a specific need for your vehicle.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES.map((service) => {
              const gradient = SERVICE_GRADIENTS[service.slug] || 'from-[#2C2C2C] to-[#4a4a4a]'
              return (
                <Link
                  key={service.slug}
                  href={`/reclaimed-auto-care/${service.slug}`}
                  className="group relative rounded-xl overflow-hidden aspect-square flex flex-col justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A35]"
                  aria-label={`Learn about ${service.name}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:scale-105 transition-transform duration-500`} />
                  <div className="relative z-10 p-4">
                    <h3 className="text-white font-semibold text-sm leading-snug mb-1">{service.name}</h3>
                    <span className="text-white/60 text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              )
            })}
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
              Our free guides cover everything from the basics of the two-bucket wash method to what ceramic coating actually protects against. Written by working detailers.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/journal/how-to-apply-ceramic-coating-at-home"
              className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-colors"
            >
              <p className="text-[#C8B89A] text-xs font-medium mb-1">Detailing Guide</p>
              <p className="text-white font-medium text-sm">How Ceramic Coating Protects Your Paint</p>
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
