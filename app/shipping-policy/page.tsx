import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata: Metadata = genMeta({
  title: 'Shipping Policy',
  description: 'Aioneo Shipping Policy — rates, processing times, delivery windows, and international shipping information.',
  path: '/shipping-policy',
})

const RATES = [
  { method: 'Standard (USPS Ground / UPS Ground)', time: '3–5 business days', threshold: '$75+', cost: 'Free' },
  { method: 'Standard (USPS Ground / UPS Ground)', time: '3–5 business days', threshold: 'Under $75', cost: '$8.95' },
  { method: 'Expedited (UPS 2-Day Air)', time: '2 business days', threshold: 'Any order', cost: '$19.95' },
  { method: 'Overnight (UPS Next Day Air)', time: '1 business day', threshold: 'Any order', cost: '$39.95' },
  { method: 'Canada Standard', time: '7–14 business days', threshold: 'Any order', cost: '$24.95' },
]

export default function ShippingPolicyPage() {
  return (
    <div className="pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl text-white">Shipping Policy</h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: January 1, 2025</p>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-3xl mx-auto space-y-10 text-[#2C2C2C]/70 text-sm leading-relaxed">
          <section aria-labelledby="processing">
            <h2 id="processing" className="font-serif text-xl text-[#2C2C2C] mb-3">Processing Time</h2>
            <p>
              Orders are processed within 1–2 business days of placement (Monday–Friday, excluding federal holidays). Orders placed before 12:00 PM ET on business days are typically processed and shipped the same day. You will receive a shipping confirmation email with tracking information once your order ships.
            </p>
          </section>

          <section aria-labelledby="rates">
            <h2 id="rates" className="font-serif text-xl text-[#2C2C2C] mb-4">Shipping Rates & Delivery Times</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-[#2C2C2C]/8">
                <thead>
                  <tr className="bg-[#2C2C2C] text-white">
                    <th className="text-left px-4 py-3 font-semibold">Shipping Method</th>
                    <th className="text-left px-4 py-3 font-semibold">Delivery Time</th>
                    <th className="text-left px-4 py-3 font-semibold">Order Total</th>
                    <th className="text-left px-4 py-3 font-semibold">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2C2C2C]/8">
                  {RATES.map((rate, i) => (
                    <tr key={i} className="hover:bg-[#F7F5F0]">
                      <td className="px-4 py-3">{rate.method}</td>
                      <td className="px-4 py-3">{rate.time}</td>
                      <td className="px-4 py-3">{rate.threshold}</td>
                      <td className={`px-4 py-3 font-semibold ${rate.cost === 'Free' ? 'text-[#2D4A35]' : ''}`}>{rate.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#2C2C2C]/50">
              Delivery times are estimates and begin from the date of shipment, not order date. Holiday periods may add 1–3 business days.
            </p>
          </section>

          <section aria-labelledby="tracking">
            <h2 id="tracking" className="font-serif text-xl text-[#2C2C2C] mb-3">Order Tracking</h2>
            <p>
              Once your order ships, you will receive an email with a tracking number. Tracking updates may take 24–48 hours to appear after initial scan. If your tracking has not updated after 3 business days, please contact us at hello@aioneo.com with your order number.
            </p>
          </section>

          <section aria-labelledby="international">
            <h2 id="international" className="font-serif text-xl text-[#2C2C2C] mb-3">International Shipping</h2>
            <p>
              We currently ship to the United States and Canada. For Canadian orders, the recipient is responsible for any applicable duties, taxes, and brokerage fees assessed upon delivery. Aioneo is not responsible for customs delays. We do not ship to freight forwarders or consolidators for re-export.
            </p>
            <p className="mt-3">
              International expansion to the UK, EU, and Australia is planned for 2026. Join our newsletter to be notified.
            </p>
          </section>

          <section aria-labelledby="address">
            <h2 id="address" className="font-serif text-xl text-[#2C2C2C] mb-3">Address Changes</h2>
            <p>
              If you need to change your shipping address after placing an order, contact us immediately at hello@aioneo.com. We can make address changes before an order ships. Once shipped, address changes must go through the carrier and are subject to a fee.
            </p>
          </section>

          <section aria-labelledby="lost">
            <h2 id="lost" className="font-serif text-xl text-[#2C2C2C] mb-3">Lost or Damaged Packages</h2>
            <p>
              If your package appears lost in transit (no movement for 7+ business days) or arrives damaged, please contact us at hello@aioneo.com within 14 days of the expected delivery date. We will work with the carrier to resolve the issue and, when appropriate, reship your order at no additional charge.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
