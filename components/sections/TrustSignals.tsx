import { Truck, RotateCcw, FlaskConical, Award } from 'lucide-react'

const SIGNALS = [
  {
    icon: Truck,
    title: 'Free Shipping $75+',
    description: 'Complimentary standard shipping on all orders over $75 within the continental US.',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Not satisfied? Return any product within 30 days for a full refund — no questions asked.',
  },
  {
    icon: FlaskConical,
    title: 'Expert Formulated',
    description: 'Every product is developed by professional chemists and tested by working detailers.',
  },
  {
    icon: Award,
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind every formula. If it doesn\'t perform as described, we make it right.',
  },
]

export default function TrustSignals() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#2C2C2C]/8" aria-label="Why shop with us">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SIGNALS.map((signal) => {
            const Icon = signal.icon
            return (
              <div key={signal.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#2D4A35]/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#2D4A35]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-[#2C2C2C] mb-1.5">{signal.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{signal.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
