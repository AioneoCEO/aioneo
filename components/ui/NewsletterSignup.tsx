'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface Props {
  dark?: boolean
  placeholder?: string
  buttonLabel?: string
}

export default function NewsletterSignup({
  dark = false,
  placeholder = 'Enter your email address',
  buttonLabel = 'Subscribe',
}: Props) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (val: string) => {
    if (!val) return 'Email address is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email address.'
    return ''
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const err = validate(email)
    if (err) { setError(err); return }
    setLoading(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`flex items-center gap-3 ${dark ? 'text-white' : 'text-[#2D4A35]'}`}>
        <CheckCircle size={22} />
        <p className="text-sm font-medium">You&apos;re in! Check your inbox for a welcome note.</p>
      </div>
    )
  }

  const inputBg = dark
    ? 'bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-white/60'
    : 'bg-white border-[#2C2C2C]/20 text-[#2C2C2C] placeholder-[#2C2C2C]/40 focus:border-[#2D4A35]'

  const btnBg = dark
    ? 'bg-[#C8B89A] text-[#2C2C2C] hover:bg-[#b8a88a]'
    : 'bg-[#2D4A35] text-white hover:bg-[#243d2b]'

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Newsletter signup">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError('') }}
            placeholder={placeholder}
            aria-invalid={!!error}
            aria-describedby={error ? 'newsletter-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30 ${inputBg}`}
          />
          {error && (
            <p id="newsletter-error" role="alert" className={`mt-1.5 text-xs ${dark ? 'text-red-300' : 'text-red-600'}`}>
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 disabled:opacity-60 whitespace-nowrap ${btnBg}`}
        >
          {loading ? 'Subscribing…' : buttonLabel}
          {!loading && <ArrowRight size={16} />}
        </button>
      </div>
      <p className={`mt-2.5 text-xs ${dark ? 'text-white/40' : 'text-[#2C2C2C]/40'}`}>
        No spam. Unsubscribe at any time. By subscribing you agree to our{' '}
        <a href="/privacy-policy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  )
}
