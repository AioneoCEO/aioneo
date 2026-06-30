'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const FAQ_SECTIONS = [
  {
    title: 'Booking a Service',
    items: [
      {
        q: 'How do I book a detailing service?',
        a: 'Reach out through our contact page with the service you\'re interested in and your vehicle details. We\'ll follow up to confirm a time and location.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'We recommend booking at least a few days ahead, especially for full details or ceramic coating appointments. We\'ll always do our best to accommodate shorter notice.',
      },
      {
        q: 'Can I reschedule or cancel my appointment?',
        a: 'Yes — just contact us as soon as you know, and we\'ll find a new time that works for you.',
      },
      {
        q: 'How long does a typical service take?',
        a: 'It depends on the service. A maintenance wash usually takes under an hour, while a full interior and exterior detail or ceramic coating can take several hours. We\'ll give you a time estimate when you book.',
      },
    ],
  },
  {
    title: 'Our Products & Process',
    items: [
      {
        q: 'Are the products you use safe and non-toxic?',
        a: 'Yes. Every product we use is chosen to be non-toxic, low-VOC, and free of microplastics where possible — safe for you, your family, and the environment.',
      },
      {
        q: 'Are your products safe for ceramic-coated vehicles?',
        a: 'Yes. Our wash and maintenance products are pH-neutral and safe for use on ceramic-coated vehicles.',
      },
      {
        q: 'Are your formulas biodegradable?',
        a: 'We prioritize biodegradable, eco-conscious products throughout our process and are transparent about any exceptions.',
      },
      {
        q: 'Do you offer mobile detailing?',
        a: 'Reach out and let us know your location — we\'ll let you know whether mobile service is available in your area.',
      },
    ],
  },
  {
    title: 'Pricing & Payment',
    items: [
      {
        q: 'How much does a service cost?',
        a: 'Pricing depends on your vehicle\'s size, condition, and the service selected. Contact us for a quote.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept major payment methods at the time of service. We\'ll confirm details when you book.',
      },
    ],
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#2C2C2C]/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 hover:text-[#2D4A35] transition-colors group"
        aria-expanded={open}
      >
        <span className="font-medium text-[#2C2C2C] group-hover:text-[#2D4A35] transition-colors text-sm sm:text-base">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-0.5 text-[#2C2C2C]/40 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm text-[#2C2C2C]/65 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-white mb-3">Frequently Asked Questions</h1>
          <p className="text-white/55">Can&apos;t find the answer? <Link href="/contact" className="text-[#C8B89A] hover:underline">Contact our team</Link> — we respond within 1–2 business days.</p>
        </div>
      </section>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-3xl mx-auto space-y-12">
          {FAQ_SECTIONS.map((section) => (
            <section key={section.title} aria-labelledby={`faq-${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <h2
                id={`faq-${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-serif text-2xl text-[#2C2C2C] mb-6"
              >
                {section.title}
              </h2>
              <div className="bg-white rounded-2xl border border-[#2C2C2C]/8 px-6">
                {section.items.map((item, i) => (
                  <AccordionItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <h2 className="font-serif text-2xl text-[#2C2C2C] mb-3">Still Have Questions?</h2>
        <p className="text-[#2C2C2C]/55 mb-6">Our team is here to help. Reach out and we&apos;ll get back to you quickly.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D4A35] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#243d2b] transition-colors text-sm">
          Contact Us
        </Link>
      </section>
    </div>
  )
}
