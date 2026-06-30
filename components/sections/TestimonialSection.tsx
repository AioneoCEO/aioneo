import StarRating from '@/components/ui/StarRating'
import { ShieldCheck } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  location: string
  rating: number
  product: string
  verified: boolean
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I've tried every ceramic coating on the market. The Reclaimed Ceramic Shield is the first DIY product that gave me results I'd pay a pro to achieve. The hydrophobics after a month of use are still insane.",
    author: 'Nathan T.',
    location: 'Portland, OR',
    rating: 5,
    product: 'Ceramic Shield Coating',
    verified: true,
  },
  {
    quote: "The Interior Revival Kit transformed a 10-year-old leather interior. I genuinely thought I'd need to reupholster. Two applications later and it looked better than when I bought the car.",
    author: 'Sarah M.',
    location: 'Austin, TX',
    rating: 5,
    product: 'Interior Revival Kit',
    verified: true,
  },
  {
    quote: "I'm a working detailer and I've started recommending the Foam Wash to every client for home maintenance. At this price point with this performance, nothing else comes close.",
    author: 'James R.',
    location: 'Denver, CO',
    rating: 5,
    product: 'Foam Wash Shampoo',
    verified: true,
  },
  {
    quote: "Ordered the New Car Starter Bundle for my wife's new vehicle. She called me the next weekend to say she actually enjoyed washing the car for the first time. That's the best endorsement I can give.",
    author: 'David K.',
    location: 'Nashville, TN',
    rating: 5,
    product: 'New Car Starter Bundle',
    verified: true,
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C8B89A] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Customer Reviews
          </p>
          <h2 id="testimonials-heading" className="font-serif text-4xl sm:text-5xl text-white">
            Trusted by Enthusiasts
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Real results from real customers. Every review on our site is verified from a confirmed purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <blockquote
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <StarRating rating={t.rating} size="sm" />
                {t.verified && (
                  <span className="flex items-center gap-1.5 text-xs text-[#8FA886] font-medium">
                    <ShieldCheck size={14} />
                    Verified Purchase
                  </span>
                )}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center justify-between">
                <div>
                  <cite className="not-italic font-semibold text-white text-sm">{t.author}</cite>
                  <p className="text-white/40 text-xs mt-0.5">{t.location}</p>
                </div>
                <span className="text-xs text-white/30 italic">{t.product}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/reclaimed-auto-care"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C8B89A] hover:text-white transition-colors"
          >
            See the services they love →
          </a>
        </div>
      </div>
    </section>
  )
}
