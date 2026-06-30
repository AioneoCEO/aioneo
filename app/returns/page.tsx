import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'
import Link from 'next/link'

export const metadata: Metadata = genMeta({
  title: 'Return Policy',
  description: 'Aioneo Return Policy — 30-day returns, step-by-step return process, and refund information.',
  path: '/returns',
})

const STEPS = [
  {
    step: '01',
    title: 'Contact Us',
    body: 'Email hello@aioneo.com with your order number, the item(s) you\'d like to return, and the reason for your return. Our team will respond within 1–2 business days.',
  },
  {
    step: '02',
    title: 'Receive Your Return Label',
    body: 'Once your return is approved, we\'ll email you a prepaid return shipping label. You don\'t need to pay for return shipping on defective, damaged, or incorrect items. For change-of-mind returns, return shipping is free on orders over $75.',
  },
  {
    step: '03',
    title: 'Pack and Ship',
    body: 'Pack the item(s) securely in the original packaging when possible. Attach the prepaid label and drop the package at the carrier location listed on the label. Please ship within 7 days of receiving your label.',
  },
  {
    step: '04',
    title: 'Receive Your Refund',
    body: 'Once we receive and inspect your return (1–2 business days), we\'ll issue your refund within 5 business days to the original payment method. Your bank may take an additional 3–10 business days to post the credit.',
  },
]

export default function ReturnsPage() {
  return (
    <div className="pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl text-white">Return Policy</h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: January 1, 2025</p>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-3xl mx-auto">
          {/* Summary box */}
          <div className="bg-[#2D4A35]/8 border border-[#2D4A35]/20 rounded-2xl p-6 mb-12">
            <h2 className="font-serif text-xl text-[#2D4A35] mb-2">Our 30-Day Return Promise</h2>
            <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
              If you&apos;re not completely satisfied with your Aioneo purchase, return it within 30 days of delivery for a full refund. No questions asked. We stand behind everything we make.
            </p>
          </div>

          {/* Return process */}
          <section className="mb-12" aria-labelledby="process-heading">
            <h2 id="process-heading" className="font-serif text-2xl text-[#2C2C2C] mb-8">How to Return an Item</h2>
            <div className="space-y-6">
              {STEPS.map((step) => (
                <div key={step.step} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-[#2D4A35] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">{step.title}</h3>
                    <p className="text-sm text-[#2C2C2C]/65 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-8 text-sm text-[#2C2C2C]/70 leading-relaxed">
            {[
              {
                title: 'Eligible Items',
                body: 'Most items are eligible for return within 30 days of delivery. Items must be in their original or undamaged condition. We accept returns on opened products if the product did not perform as described — please contact us to explain the issue.',
              },
              {
                title: 'Non-Returnable Items',
                body: 'The following items are non-returnable: items returned after 30 days from delivery; items that have been clearly used extensively and show significant wear; digital downloads; and gift cards.',
              },
              {
                title: 'Exchanges',
                body: 'We do not process direct exchanges. To exchange an item, return your original order for a refund and place a new order for the item you want.',
              },
              {
                title: 'Damaged or Incorrect Items',
                body: 'If you receive a damaged or incorrect item, please contact us within 7 days of delivery with photos. We will reship the correct item at no cost — a return of the original item may not be required.',
              },
              {
                title: 'Refund Method',
                body: 'Refunds are issued to the original payment method. We do not issue refunds in the form of store credit unless specifically requested.',
              },
            ].map((s) => (
              <section key={s.title} aria-labelledby={s.title}>
                <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">{s.title}</h2>
                <p>{s.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl border border-[#2C2C2C]/8 p-6 text-center">
            <p className="font-semibold text-[#2C2C2C] mb-2">Ready to start a return?</p>
            <p className="text-sm text-[#2C2C2C]/55 mb-4">Email us your order number and we&apos;ll handle the rest.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2D4A35] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#243d2b] transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
