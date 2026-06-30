'use client'

import { useState } from 'react'
import { Package, Heart, Settings, LogIn, UserPlus } from 'lucide-react'

export default function AccountPage() {
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', confirm: '' })

  return (
    <div className="pt-20 min-h-screen bg-[#F7F5F0]">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl text-[#2C2C2C] mb-2">My Account</h1>
            <p className="text-[#2C2C2C]/55 text-sm">
              {tab === 'login' ? 'Sign in to manage your orders and preferences.' : 'Create an account for faster checkout and order tracking.'}
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex bg-white rounded-xl border border-[#2C2C2C]/10 p-1 mb-6" role="tablist">
            <button
              role="tab"
              aria-selected={tab === 'login'}
              onClick={() => setTab('login')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === 'login' ? 'bg-[#2C2C2C] text-white' : 'text-[#2C2C2C]/50 hover:text-[#2C2C2C]'}`}
            >
              <LogIn size={15} /> Sign In
            </button>
            <button
              role="tab"
              aria-selected={tab === 'register'}
              onClick={() => setTab('register')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === 'register' ? 'bg-[#2C2C2C] text-white' : 'text-[#2C2C2C]/50 hover:text-[#2C2C2C]'}`}
            >
              <UserPlus size={15} /> Create Account
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-[#2C2C2C]/8 p-8">
            {tab === 'login' ? (
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
                aria-label="Sign in form"
              >
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Email Address</label>
                  <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="login-password" className="block text-sm font-medium text-[#2C2C2C]">Password</label>
                    <button type="button" className="text-xs text-[#2D4A35] hover:underline">Forgot password?</button>
                  </div>
                  <input
                    id="login-password"
                    type="password"
                    autoComplete="current-password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30"
                    placeholder="••••••••"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2D4A35] text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-[#243d2b] transition-colors mt-2"
                >
                  Sign In
                </button>
                <p className="text-center text-xs text-[#2C2C2C]/40">
                  Authentication coming soon — this is a UI demonstration.
                </p>
              </form>
            ) : (
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
                aria-label="Create account form"
              >
                <div>
                  <label htmlFor="reg-name" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Full Name</label>
                  <input
                    id="reg-name"
                    type="text"
                    autoComplete="name"
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="reg-email" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Email Address</label>
                  <input
                    id="reg-email"
                    type="email"
                    autoComplete="email"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="reg-password" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Password</label>
                  <input
                    id="reg-password"
                    type="password"
                    autoComplete="new-password"
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30"
                    placeholder="At least 8 characters"
                  />
                </div>
                <div>
                  <label htmlFor="reg-confirm" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Confirm Password</label>
                  <input
                    id="reg-confirm"
                    type="password"
                    autoComplete="new-password"
                    value={registerForm.confirm}
                    onChange={(e) => setRegisterForm({ ...registerForm, confirm: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#2C2C2C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30"
                    placeholder="Repeat password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2D4A35] text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-[#243d2b] transition-colors mt-2"
                >
                  Create Account
                </button>
              </form>
            )}
          </div>

          {/* Account features preview */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: Package, label: 'Order History' },
              { icon: Heart, label: 'Wishlist' },
              { icon: Settings, label: 'Preferences' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="bg-white rounded-xl border border-[#2C2C2C]/8 p-4">
                  <Icon size={22} className="text-[#2D4A35] mx-auto mb-2" aria-hidden="true" />
                  <p className="text-xs text-[#2C2C2C]/60 font-medium">{item.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
