import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="brand-story-heading">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[#2D4A35] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Our Story
          </p>
          <h2 id="brand-story-heading" className="font-serif text-4xl sm:text-5xl text-[#2C2C2C] leading-tight mb-6">
            Built for People Who Care How Things Are Made
          </h2>
          <div className="space-y-4 text-[#2C2C2C]/70 leading-relaxed">
            <p>
              Aioneo was born from a belief that the products people use every day should be as thoughtfully crafted as the things they protect. Our founder spent fifteen years in product formulation before a single poorly-made car care product pushed him too far.
            </p>
            <p>
              Reclaimed Auto Care, our debut product line, took eighteen months of development. Every formula was lab-validated, tested by working detailers, and refined through real-world feedback before it carried our name. We don&apos;t rush products to market — we make sure they work first.
            </p>
            <p>
              The name <em>Reclaimed</em> reflects our philosophy: restore what&apos;s already valuable. The car you have, the home you&apos;ve built, the life you&apos;re living. We make the products to help you care for it all.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D4A35] hover:gap-3 transition-all"
            >
              Read our full story <ArrowRight size={16} />
            </Link>
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors"
            >
              Our mission
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#2D4A35] to-[#8FA886] relative">
            {/* Decorative elements suggesting photography */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 20%, rgba(200,184,154,0.25) 0%, transparent 60%),
                  radial-gradient(ellipse at 80% 80%, rgba(44,44,44,0.3) 0%, transparent 50%)
                `,
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-end p-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <p className="text-white/90 text-sm font-medium leading-snug">
                  &ldquo;Premium should mean something — not just a price tag.&rdquo;
                </p>
                <p className="text-white/50 text-xs mt-2">David Kessler, Founder</p>
              </div>
            </div>
          </div>
          {/* Floating accent */}
          <div
            className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#C8B89A]/30"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[#2D4A35]/20"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
