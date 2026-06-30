'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Mail, Phone, Clock, CheckCircle } from 'lucide-react'

const SUBJECTS = [
  'Order Question',
  'Product Question',
  'Returns & Exchanges',
  'Shipping Issue',
  'Wholesale / Business Inquiry',
  'Press Inquiry',
  'General Feedback',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.'
    if (!form.subject) errs.subject = 'Please select a subject.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    else if (form.message.trim().length < 20) errs.message = 'Please provide a bit more detail (at least 20 characters).'
    return errs
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle size={56} className="text-[#2D4A35] mx-auto mb-6" />
          <h1 className="font-serif text-3xl text-[#2C2C2C] mb-3">Message Received</h1>
          <p className="text-[#2C2C2C]/60 mb-8">
            Thank you for reaching out, {form.name}. We typically respond within 1–2 business days. Check your inbox at <strong>{form.email}</strong>.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-[#2D4A35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#243d2b] transition-colors text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-white mb-3">Get in Touch</h1>
          <p className="text-white/55">We&apos;re a small team and we read every message. Expect a real response.</p>
        </div>
      </section>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-[#2C2C2C]/8 p-8">
            <h2 className="font-serif text-2xl text-[#2C2C2C] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">
                    Full Name <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30 focus:border-[#2D4A35]"
                    placeholder="Your name"
                  />
                  {errors.name && <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">
                    Email Address <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }) }}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30 focus:border-[#2D4A35]"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">
                  Subject <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <select
                  id="contact-subject"
                  value={form.subject}
                  onChange={(e) => { setForm({ ...form, subject: e.target.value }); setErrors({ ...errors, subject: '' }) }}
                  aria-invalid={!!errors.subject}
                  className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30 focus:border-[#2D4A35] bg-white"
                >
                  <option value="">Select a subject…</option>
                  {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.subject && <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">
                  Message <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30 focus:border-[#2D4A35] resize-y"
                  placeholder="How can we help?"
                />
                {errors.message && <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2D4A35] text-white py-4 rounded-lg font-semibold text-sm hover:bg-[#243d2b] transition-colors disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Info panel */}
          <aside aria-label="Contact information">
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@aioneo.com', sub: 'We respond within 1–2 business days.' },
                { icon: Phone, label: 'Phone', value: '1-800-AIONEO-1', sub: 'Mon–Fri, 9am–5pm ET' },
                { icon: Clock, label: 'Support Hours', value: 'Monday – Friday', sub: '9:00 AM – 5:00 PM Eastern' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="bg-white rounded-2xl border border-[#2C2C2C]/8 p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2D4A35]/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#2D4A35]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#2C2C2C]/50 uppercase tracking-wide">{item.label}</p>
                      <p className="font-semibold text-[#2C2C2C] mt-0.5">{item.value}</p>
                      <p className="text-xs text-[#2C2C2C]/50 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                )
              })}

              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-[#2D4A35]/20 to-[#8FA886]/20 rounded-2xl h-48 flex items-center justify-center border border-[#2C2C2C]/8">
                <p className="text-sm text-[#2C2C2C]/40">Asheville, NC — Map Loading</p>
              </div>

              {/* Quick links */}
              <div className="bg-white rounded-2xl border border-[#2C2C2C]/8 p-6">
                <h3 className="text-sm font-semibold text-[#2C2C2C] mb-3">Quick Answers</h3>
                <ul className="space-y-2">
                  {[
                    { label: 'Shipping information', href: '/shipping-policy' },
                    { label: 'Returns & exchanges', href: '/returns' },
                    { label: 'Frequently asked questions', href: '/faq' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-[#2D4A35] hover:underline">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
