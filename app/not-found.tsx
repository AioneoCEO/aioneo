import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-[#F7F5F0] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center py-20">
        {/* Large 404 */}
        <div className="font-serif text-[180px] leading-none text-[#2C2C2C]/8 select-none" aria-hidden="true">
          404
        </div>
        <div className="-mt-8">
          <h1 className="font-serif text-4xl sm:text-5xl text-[#2C2C2C] mb-4">
            Page Not Found
          </h1>
          <p className="text-[#2C2C2C]/55 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Helpful links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Our Services', href: '/reclaimed-auto-care', desc: 'Browse Reclaimed Auto Care' },
            { label: 'The Journal', href: '/journal', desc: 'Detail guides & stories' },
            { label: 'Contact Us', href: '/contact', desc: 'We can help' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white border border-[#2C2C2C]/8 rounded-xl p-5 hover:border-[#2D4A35]/30 hover:shadow-sm transition-all group"
            >
              <p className="font-semibold text-[#2C2C2C] group-hover:text-[#2D4A35] transition-colors text-sm">
                {link.label}
              </p>
              <p className="text-xs text-[#2C2C2C]/45 mt-0.5">{link.desc}</p>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#2D4A35] text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-[#243d2b] transition-colors"
          >
            Go Home <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#2C2C2C] px-8 py-3.5 rounded-lg font-semibold text-sm border border-[#2C2C2C]/15 hover:border-[#2C2C2C]/30 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
