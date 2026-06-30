'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  {
    label: 'Reclaimed Auto Care',
    href: '/reclaimed-auto-care',
    dropdown: [
      { label: 'Interior Care', href: '/reclaimed-auto-care/interior' },
      { label: 'Exterior Care', href: '/reclaimed-auto-care/exterior' },
      { label: 'Wash', href: '/reclaimed-auto-care/wash' },
      { label: 'Ceramic Protection', href: '/reclaimed-auto-care/ceramic' },
      { label: 'Glass Care', href: '/reclaimed-auto-care/glass' },
      { label: 'Wheel & Tire Care', href: '/reclaimed-auto-care/wheel-tire' },
      { label: 'Accessories', href: '/reclaimed-auto-care/accessories' },
      { label: 'Bundles', href: '/reclaimed-auto-care/bundles' },
    ],
  },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

const CART_COUNT = 0

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const headerBg = scrolled || mobileOpen
    ? 'bg-[#F7F5F0]/95 backdrop-blur-sm border-b border-[#2C2C2C]/10 shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || mobileOpen ? 'text-[#2C2C2C]' : 'text-white'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Wordmark */}
            <Link
              href="/"
              className={`font-serif text-2xl font-bold tracking-tight transition-colors ${textColor}`}
              aria-label="Aioneo — Home"
            >
              Aioneo
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation" ref={dropdownRef}>
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative">
                    <button
                      className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${textColor}`}
                      onClick={() => setDropdownOpen(dropdownOpen === link.label ? null : link.label)}
                      aria-expanded={dropdownOpen === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${dropdownOpen === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {dropdownOpen === link.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-xl border border-[#2C2C2C]/8 py-2 z-50">
                        <div className="px-3 pb-2 mb-1 border-b border-[#2C2C2C]/8">
                          <Link
                            href={link.href}
                            className="text-xs font-semibold text-[#2D4A35] tracking-widest uppercase hover:underline"
                            onClick={() => setDropdownOpen(null)}
                          >
                            View All
                          </Link>
                        </div>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-[#2C2C2C] hover:bg-[#F7F5F0] hover:text-[#2D4A35] transition-colors"
                            onClick={() => setDropdownOpen(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${textColor}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right Icons */}
            <div className={`flex items-center gap-4 ${textColor}`}>
              <Link href="/search" aria-label="Search" className="hidden sm:flex hover:opacity-70 transition-opacity">
                <Search size={20} />
              </Link>
              <Link href="/account" aria-label="Account" className="hidden sm:flex hover:opacity-70 transition-opacity">
                <User size={20} />
              </Link>
              <Link href="/cart" aria-label={`Cart${CART_COUNT > 0 ? `, ${CART_COUNT} items` : ', empty'}`} className="relative hover:opacity-70 transition-opacity">
                <ShoppingCart size={20} />
                {CART_COUNT > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#2D4A35] text-white text-xs w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold leading-none">
                    {CART_COUNT}
                  </span>
                )}
              </Link>
              <button
                className="lg:hidden hover:opacity-70 transition-opacity"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#F7F5F0] pt-20 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col px-6 py-6 gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-4 text-xl font-semibold text-[#2C2C2C] border-b border-[#2C2C2C]/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <div className="pl-4 py-2 flex flex-col gap-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="py-2.5 text-base text-[#2C2C2C]/70 hover:text-[#2D4A35] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-4 text-xl font-semibold text-[#2C2C2C] border-b border-[#2C2C2C]/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-6 flex gap-4">
              <Link
                href="/search"
                className="flex items-center gap-2 text-sm text-[#2C2C2C]/70"
                onClick={() => setMobileOpen(false)}
              >
                <Search size={18} /> Search
              </Link>
              <Link
                href="/account"
                className="flex items-center gap-2 text-sm text-[#2C2C2C]/70"
                onClick={() => setMobileOpen(false)}
              >
                <User size={18} /> Account
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
