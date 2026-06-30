import Link from 'next/link'
import NewsletterSignup from '@/components/ui/NewsletterSignup'
import { SERVICES } from '@/lib/services'

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  )
}

function PinterestIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  )
}

const SERVICE_LINKS = SERVICES.map((s) => ({ label: s.name, href: `/reclaimed-auto-care/${s.slug}` }))

const COMPANY_LINKS = [
  { label: 'About Aioneo', href: '/about' },
  { label: 'Our Mission', href: '/mission' },
  { label: 'Journal', href: '/journal' },
]

const SUPPORT_LINKS = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Accessibility', href: '/accessibility' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white/80" aria-label="Site footer">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-white mb-2">Stay in the Loop</h2>
            <p className="text-white/60 mb-6 text-sm">
              Detailing guides, service updates, and tips for cleaner, healthier living — delivered to your inbox. Unsubscribe any time.
            </p>
            <NewsletterSignup dark />
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl font-bold text-white tracking-tight" aria-label="Aioneo home">
              Aioneo
            </Link>
            <p className="mt-4 text-sm text-white/55 leading-relaxed">
              We&apos;re building a healthier way to live and restore — clean, non-toxic services and products, free of microplastics and harsh chemicals.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/aioneo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aioneo on Instagram"
                className="text-white/50 hover:text-white transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://facebook.com/aioneo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aioneo on Facebook"
                className="text-white/50 hover:text-white transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://youtube.com/@aioneo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aioneo on YouTube"
                className="text-white/50 hover:text-white transition-colors"
              >
                <YoutubeIcon size={20} />
              </a>
              <a
                href="https://pinterest.com/aioneo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aioneo on Pinterest"
                className="text-white/50 hover:text-white transition-colors"
              >
                <PinterestIcon size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Services</h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Company</h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Support */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Support</h3>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Aioneo. All rights reserved. Reclaimed Auto Care is a service of Aioneo.
          </p>
          <nav className="flex gap-6" aria-label="Legal navigation">
            {[
              { label: 'Privacy', href: '/privacy-policy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Cookies', href: '/cookie-policy' },
              { label: 'Accessibility', href: '/accessibility' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
