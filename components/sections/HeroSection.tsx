import Link from 'next/link'
import Button from '@/components/ui/Button'

interface Props {
  headline?: string
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  gradientFrom?: string
  gradientTo?: string
  eyebrow?: string
  fullHeight?: boolean
}

export default function HeroSection({
  headline = 'Restore What Matters',
  subheadline = 'Professional-grade car care products formulated for the enthusiast who refuses to settle. Crafted with precision. Made to perform.',
  primaryCta = { label: 'Shop Reclaimed Auto Care', href: '/reclaimed-auto-care' },
  secondaryCta = { label: 'Our Story', href: '/about' },
  gradientFrom = '#1a2e1f',
  gradientTo = '#2D4A35',
  eyebrow,
  fullHeight = true,
}: Props) {
  return (
    <section
      className={`relative flex items-center justify-center ${fullHeight ? 'min-h-screen' : 'min-h-[70vh]'} overflow-hidden`}
      aria-labelledby="hero-headline"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 50%, #8FA886 100%)`,
        }}
        aria-hidden="true"
      />
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(200,184,154,0.4) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(143,168,134,0.3) 0%, transparent 50%)`,
        }}
        aria-hidden="true"
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(247,245,240,0.15))' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {eyebrow && (
          <p className="text-[#C8B89A] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            {eyebrow}
          </p>
        )}
        <h1
          id="hero-headline"
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
        >
          {headline}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryCta.href} variant="secondary" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-[#2C2C2C]">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="ghost" size="lg" className="!text-white/80 hover:!bg-white/10">
            {secondaryCta.label}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50" aria-hidden="true">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
