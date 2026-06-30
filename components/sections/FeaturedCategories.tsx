import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Category {
  name: string
  description: string
  href: string
  gradient: string
  accentColor: string
}

const CATEGORIES: Category[] = [
  {
    name: 'Interior Care',
    description: 'Restore leather, vinyl, and fabric to their original condition.',
    href: '/reclaimed-auto-care/interior',
    gradient: 'from-[#2D4A35] to-[#4a7a55]',
    accentColor: '#8FA886',
  },
  {
    name: 'Exterior & Paint',
    description: 'Professional-grade coatings and correction products for flawless paint.',
    href: '/reclaimed-auto-care/exterior',
    gradient: 'from-[#2C2C2C] to-[#4a4a4a]',
    accentColor: '#C8B89A',
  },
  {
    name: 'Protection & Coatings',
    description: 'Long-lasting ceramic and sealant protection for your investment.',
    href: '/reclaimed-auto-care/ceramic',
    gradient: 'from-[#8B6914] to-[#c49a20]',
    accentColor: '#F7F5F0',
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#2D4A35] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Reclaimed Auto Care
          </p>
          <h2 id="categories-heading" className="font-serif text-4xl sm:text-5xl text-[#2C2C2C]">
            Our Services
          </h2>
          <p className="mt-4 text-[#2C2C2C]/60 max-w-xl mx-auto">
            Every Reclaimed Auto Care service is tailored to a specific need. Find what your vehicle needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A35] focus-visible:ring-offset-2"
              aria-label={`Learn about ${cat.name}`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} transition-transform duration-700 group-hover:scale-105`} />

              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(circle at 70% 30%, white 0%, transparent 60%)`,
                }}
                aria-hidden="true"
              />

              {/* Decorative circle */}
              <div
                className="absolute top-8 right-8 w-24 h-24 rounded-full border-2 opacity-20 transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                style={{ borderColor: cat.accentColor }}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10 p-8">
                <h3 className="font-serif text-2xl text-white font-semibold mb-2">{cat.name}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">{cat.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/reclaimed-auto-care"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2D4A35] hover:gap-3 transition-all"
          >
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
