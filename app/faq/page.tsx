'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const FAQ_SECTIONS = [
  {
    title: 'Orders & Shipping',
    items: [
      {
        q: 'How long does shipping take?',
        a: 'Standard orders ship within 1–2 business days. Standard shipping typically arrives in 3–5 business days. Expedited options are available at checkout. Orders placed before 12pm ET on business days often ship the same day.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes — all orders over $75 within the continental United States qualify for complimentary standard shipping. This threshold is applied after any discounts.',
      },
      {
        q: 'Can I change or cancel my order after placing it?',
        a: 'We process orders quickly, but if you contact us within 2 hours of placing your order at hello@aioneo.com, we\'ll do our best to accommodate changes or cancellations. Once an order has been fulfilled, we cannot make changes.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Currently, we ship to the United States and Canada. International expansion is planned for 2026. For Canada orders, shipping rates and delivery times vary by province. Please note that duties and taxes are the responsibility of the recipient.',
      },
      {
        q: 'My order tracking isn\'t updating. What should I do?',
        a: 'Tracking updates can sometimes lag 24–48 hours after pickup. If your tracking hasn\'t updated after 3 business days, contact us at hello@aioneo.com with your order number and we\'ll investigate.',
      },
      {
        q: 'Can I ship to a PO Box?',
        a: 'Standard USPS shipments can be delivered to PO Boxes. However, some expedited carriers (FedEx, UPS) cannot deliver to PO Boxes. If you enter a PO Box address, we\'ll automatically select an appropriate carrier.',
      },
    ],
  },
  {
    title: 'Returns & Refunds',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day return window from the date of delivery. Products must be in their original condition — unused and in original packaging. If a product didn\'t perform as expected, we want to hear about it even if it\'s been opened.',
      },
      {
        q: 'How do I start a return?',
        a: 'Email hello@aioneo.com with your order number and the reason for your return. We\'ll provide a prepaid return label and instructions. Refunds are processed within 5 business days of receiving the returned item.',
      },
      {
        q: 'Can I return an opened product?',
        a: 'Yes — if you tried a product and it didn\'t work for you, we still want to make it right. Contact us and explain the issue. We may ask for photos or more information to help us improve. Customer satisfaction is our first priority.',
      },
      {
        q: 'How long do refunds take?',
        a: 'Once we receive and inspect your return (typically 1–2 business days), we issue the refund within 5 business days. Your bank or card issuer may take an additional 3–10 business days to post the credit.',
      },
      {
        q: 'What if I received the wrong item or a damaged product?',
        a: 'We sincerely apologize. Email us photos of the damage or wrong item within 7 days of delivery and we\'ll ship a replacement at no charge — no return required in most cases.',
      },
    ],
  },
  {
    title: 'Products & Ingredients',
    items: [
      {
        q: 'Are your products safe for ceramic-coated vehicles?',
        a: 'Yes. All Reclaimed Auto Care wash and maintenance products are pH-neutral and safe for use on ceramic-coated vehicles. Our Foam Wash Shampoo is specifically formulated to clean effectively without stripping or degrading ceramic coatings.',
      },
      {
        q: 'Are your products safe for paint protection film (PPF)?',
        a: 'Our pH-neutral wash products are safe for PPF. For our Ceramic Coating, we recommend consulting with your PPF installer before application over PPF, as compatibility can vary by film brand.',
      },
      {
        q: 'Are your formulas biodegradable?',
        a: 'Our wash products are formulated with biodegradable surfactants. Specialty products (coatings, iron removers) contain compounds that may not be fully biodegradable — we\'re transparent about this and are actively working on reformulations.',
      },
      {
        q: 'Do you test on animals?',
        a: 'No. Aioneo does not conduct or commission animal testing for any of our products or ingredients.',
      },
      {
        q: 'Where are your products manufactured?',
        a: 'Our products are formulated and manufactured in the United States. We use domestic suppliers for the majority of our raw materials and work with ISO-certified contract manufacturers.',
      },
      {
        q: 'How long do your products last in storage?',
        a: 'Shelf life varies by product. Most liquid products have a 2–3 year shelf life when stored in a cool, dry environment out of direct sunlight. Ceramic coatings should be used within 12 months of opening. Check individual product labels for specific guidance.',
      },
    ],
  },
  {
    title: 'Account & Subscriptions',
    items: [
      {
        q: 'Do I need an account to place an order?',
        a: 'No — guest checkout is available. However, creating an account gives you access to order history, saved addresses, wishlist, and faster checkout on future purchases.',
      },
      {
        q: 'How do I reset my password?',
        a: 'On the login page, click "Forgot password" and enter the email address associated with your account. You\'ll receive a password reset link within a few minutes.',
      },
      {
        q: 'Do you offer a subscription or auto-replenishment program?',
        a: 'A subscribe-and-save program is in development and expected to launch in late 2025. Join our newsletter to be notified when it becomes available.',
      },
      {
        q: 'Is my payment information stored securely?',
        a: 'We do not store payment card data on our servers. All payment processing is handled by Stripe, which maintains PCI DSS Level 1 compliance — the highest level of payment security certification.',
      },
      {
        q: 'How can I delete my account?',
        a: 'To request account deletion, email hello@aioneo.com from the email address on your account. We\'ll process your request within 30 days per our Privacy Policy.',
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
