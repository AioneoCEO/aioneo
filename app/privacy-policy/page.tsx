import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy',
  description: 'Aioneo Privacy Policy — how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
  noIndex: false,
})

const LAST_UPDATED = 'January 1, 2025'

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl text-white">Privacy Policy</h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-3xl mx-auto prose-aioneo">
          <div className="space-y-10 text-[#2C2C2C]/70 text-sm leading-relaxed">
            <section aria-labelledby="privacy-intro">
              <p className="text-base">
                Aioneo (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at aioneo.com or make a purchase.
              </p>
            </section>

            {[
              {
                id: 'collect',
                title: '1. Information We Collect',
                body: `We collect information you provide directly to us, including: name, email address, shipping and billing address, phone number, and payment information when you make a purchase. We also collect information automatically when you visit our site, such as IP address, browser type, operating system, referring URLs, pages viewed, and time spent on pages. This information is collected through cookies and similar tracking technologies.`,
              },
              {
                id: 'use',
                title: '2. How We Use Your Information',
                body: `We use the information we collect to: process and fulfill orders; communicate with you about your orders, products, and services; send promotional communications (if you have opted in); improve our website and product offerings; analyze usage patterns and trends; prevent fraud and enhance security; comply with legal obligations; and respond to comments and questions.`,
              },
              {
                id: 'cookies',
                title: '3. Cookies and Tracking Technologies',
                body: `We use cookies, web beacons, and similar technologies to enhance your experience, analyze traffic, and for marketing purposes. You can control cookies through your browser settings. Disabling cookies may affect the functionality of some parts of our website. We use first-party cookies (set by Aioneo) and third-party cookies (set by analytics and advertising partners including Google Analytics and Meta Pixel). See our Cookie Policy for full details.`,
              },
              {
                id: 'sharing',
                title: '4. Information Sharing and Third Parties',
                body: `We do not sell your personal information. We share information with third-party service providers who perform services on our behalf, including: payment processors (Stripe), shipping carriers, email marketing platforms, and analytics providers. These providers are contractually required to protect your information and use it only to perform the services we request. We may also disclose information if required by law or to protect the rights and safety of Aioneo, our customers, or others.`,
              },
              {
                id: 'retention',
                title: '5. Data Retention',
                body: `We retain your personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law. Order records are retained for 7 years for legal and accounting purposes. Marketing data is retained until you unsubscribe or request deletion.`,
              },
              {
                id: 'rights',
                title: '6. Your Rights',
                body: `Depending on your location, you may have the following rights: access to your personal data; correction of inaccurate data; deletion of your data; restriction of processing; data portability; and the right to object to processing. California residents have additional rights under CCPA, including the right to know what personal information is collected and the right to opt out of the sale of personal information (we do not sell personal information). To exercise these rights, contact us at privacy@aioneo.com.`,
              },
              {
                id: 'security',
                title: '7. Data Security',
                body: `We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Payment card information is processed by Stripe and is not stored on our servers. However, no data transmission over the internet or storage system is guaranteed to be 100% secure.`,
              },
              {
                id: 'children',
                title: "8. Children's Privacy",
                body: `Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected information from a child under 13, we will delete it promptly.`,
              },
              {
                id: 'changes',
                title: '9. Changes to This Policy',
                body: `We may update this Privacy Policy periodically. We will notify you of material changes by posting the new policy on our website with an updated effective date. Your continued use of our website after changes constitutes acceptance of the updated policy.`,
              },
              {
                id: 'contact-privacy',
                title: '10. Contact Us',
                body: `If you have questions about this Privacy Policy or our data practices, please contact us at: privacy@aioneo.com, or by mail at: Aioneo, Privacy Team, Asheville, NC 28801.`,
              },
            ].map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id} className="font-serif text-xl text-[#2C2C2C] mb-3">{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
