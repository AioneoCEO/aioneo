import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'
import Link from 'next/link'

export const metadata: Metadata = genMeta({
  title: 'Cookie Policy',
  description: 'Learn about how Aioneo uses cookies and similar tracking technologies on our website.',
  path: '/cookie-policy',
})

export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl text-white">Cookie Policy</h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: January 1, 2025</p>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-3xl mx-auto space-y-8 text-[#2C2C2C]/70 text-sm leading-relaxed">
          <p className="text-base">
            This Cookie Policy explains how Aioneo uses cookies and similar technologies when you visit our website. By using our site, you consent to our use of cookies as described here.
          </p>

          {[
            {
              title: 'What Are Cookies?',
              body: 'Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, remember your preferences, and provide information to website owners. Cookies cannot run programs or deliver viruses; they are uniquely assigned to you and can only be read by the server that issued them.',
            },
            {
              title: 'Types of Cookies We Use',
              body: '',
              list: [
                { name: 'Strictly Necessary Cookies', desc: 'Essential for the website to function. These include cookies that maintain your session and enable secure logins. These cannot be disabled.' },
                { name: 'Performance & Analytics Cookies', desc: 'These cookies collect anonymized information about how visitors use our site — pages visited, time on site, and error messages. We use Google Analytics for this purpose. You can opt out via your browser settings.' },
                { name: 'Functional Cookies', desc: 'These allow our website to remember your preferences (such as language or region) to provide a more personalized experience.' },
                { name: 'Marketing & Targeting Cookies', desc: 'Used by us and third parties (Meta/Facebook, Google) to deliver advertisements relevant to your interests. These cookies track your activity across websites. You can opt out via your browser or the platforms themselves.' },
              ],
            },
            {
              title: 'Third-Party Cookies',
              body: 'We use the following third-party services that may set cookies: Google Analytics (web analytics), Meta Pixel (advertising), Stripe (payment security), and Klaviyo (email marketing). Each third party has its own cookie and privacy policies.',
            },
            {
              title: 'How to Manage Cookies',
              body: 'You can control cookies through your browser settings. Most browsers allow you to block, delete, or receive notifications about cookies. Note that blocking some cookies may impact website functionality. You can also use industry opt-out tools such as the NAI opt-out (networkadvertising.org) or the DAA opt-out (aboutads.info).',
            },
            {
              title: 'Cookie Consent',
              body: 'When you first visit our website, you will see a cookie consent banner. Accepting allows us to use all cookies described in this policy. Declining will disable non-essential cookies. You can change your preferences at any time by clearing your browser cookies and revisiting our site.',
            },
          ].map((section) => (
            <section key={section.title} aria-labelledby={section.title}>
              <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">{section.title}</h2>
              {section.body && <p className="mb-3">{section.body}</p>}
              {section.list && (
                <ul className="space-y-3 mt-3">
                  {section.list.map((item) => (
                    <li key={item.name} className="pl-4 border-l-2 border-[#2D4A35]/30">
                      <strong className="text-[#2C2C2C] font-semibold">{item.name}:</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <p>
            Questions? Contact us at <a href="mailto:privacy@aioneo.com" className="text-[#2D4A35] hover:underline">privacy@aioneo.com</a>. See also our <Link href="/privacy-policy" className="text-[#2D4A35] hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
