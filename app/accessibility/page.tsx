import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'
import Link from 'next/link'

export const metadata: Metadata = genMeta({
  title: 'Accessibility Statement',
  description: 'Aioneo is committed to web accessibility and WCAG 2.2 AA compliance. Learn about our accessibility efforts and how to request accommodations.',
  path: '/accessibility',
})

export default function AccessibilityPage() {
  return (
    <div className="pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl text-white">Accessibility Statement</h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: January 1, 2025</p>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-3xl mx-auto space-y-8 text-[#2C2C2C]/70 text-sm leading-relaxed">
          <section>
            <p className="text-base">
              Aioneo is committed to ensuring that our website, aioneo.com, is accessible to everyone — including people with disabilities. We work continuously to improve the accessibility of our website to ensure we provide equal access and equal opportunity.
            </p>
          </section>

          {[
            {
              title: 'Our Standard',
              body: 'We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. These guidelines explain how to make web content more accessible to people with disabilities. Conformance with these guidelines helps make the web more user-friendly for everyone.',
            },
            {
              title: 'What We\'re Doing',
              body: 'Our ongoing accessibility efforts include: using semantic HTML5 elements; providing text alternatives for non-text content; ensuring color contrast ratios meet or exceed WCAG AA minimums (4.5:1 for normal text, 3:1 for large text); maintaining keyboard navigation throughout the site; providing visible focus indicators; including ARIA labels on interactive elements; ensuring form inputs have associated labels; using skip navigation links; and testing with screen readers including NVDA, JAWS, and VoiceOver.',
            },
            {
              title: 'Known Limitations',
              body: 'While we strive for full conformance, some portions of our website may not yet fully meet WCAG 2.2 AA standards. We are actively working to address these areas. If you encounter a specific accessibility barrier, please contact us and we\'ll work to address it as quickly as possible.',
            },
            {
              title: 'Assistive Technologies',
              body: 'Our website is designed to be compatible with the following assistive technologies: screen readers (NVDA, JAWS, VoiceOver, TalkBack); keyboard-only navigation; browser zoom up to 200%; and high contrast mode. We test on the latest versions of Chrome, Firefox, Safari, and Edge.',
            },
            {
              title: 'Requesting Accommodation',
              body: 'If you experience any accessibility barriers on our website, or if you need information in an alternative format, please contact our accessibility team. We are committed to providing reasonable accommodations and responding to requests within 2 business days.',
            },
          ].map((s) => (
            <section key={s.title} aria-labelledby={s.title}>
              <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}

          {/* Contact box */}
          <div className="bg-white rounded-2xl border border-[#2C2C2C]/8 p-6 mt-8">
            <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">Contact Our Accessibility Team</h2>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> <a href="mailto:accessibility@aioneo.com" className="text-[#2D4A35] hover:underline">accessibility@aioneo.com</a></p>
              <p><strong>Response time:</strong> Within 2 business days</p>
              <p><strong>Alternative:</strong> <Link href="/contact" className="text-[#2D4A35] hover:underline">Contact form</Link></p>
            </div>
            <p className="mt-4 text-xs text-[#2C2C2C]/50">
              We welcome feedback on accessibility. Your input helps us improve the experience for all users.
            </p>
          </div>

          <section aria-labelledby="formal-complaints">
            <h2 id="formal-complaints" className="font-serif text-xl text-[#2C2C2C] mb-3">Formal Complaints</h2>
            <p>
              If you are not satisfied with our response to your accessibility concern, you may contact the U.S. Department of Justice (for ADA concerns) or your regional disability rights organization. We are committed to resolving all accessibility concerns in good faith.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
