'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'aioneo_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        const timer = setTimeout(() => setVisible(true), 1500)
        return () => clearTimeout(timer)
      }
    } catch {
      // localStorage unavailable
    }
  }, [])

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch { /* noop */ }
    setVisible(false)
  }

  const handleDecline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined')
    } catch { /* noop */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      aria-describedby="cookie-desc"
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
    >
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-[#2C2C2C]/8 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
          <div className="flex-1">
            <h2 className="font-serif text-lg text-[#2C2C2C] font-semibold mb-2">
              We value your privacy
            </h2>
            <p id="cookie-desc" className="text-sm text-[#2C2C2C]/65 leading-relaxed">
              We use cookies to personalize your experience, analyze site traffic, and support our marketing efforts. By clicking{' '}
              <strong>Accept</strong>, you consent to our use of cookies as described in our{' '}
              <Link href="/cookie-policy" className="text-[#2D4A35] underline underline-offset-2 hover:opacity-80">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:shrink-0">
            <button
              onClick={handleDecline}
              className="px-5 py-2.5 text-sm font-medium text-[#2C2C2C] border border-[#2C2C2C]/20 rounded-lg hover:bg-[#F7F5F0] transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#2D4A35] rounded-lg hover:bg-[#243d2b] transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
