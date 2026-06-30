'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Plus, Minus, X, Tag, ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'

interface CartItem {
  id: string
  name: string
  price: number
  category: string
  qty: number
  slug: string
}

// Demo cart with two items
const DEMO_CART: CartItem[] = [
  { id: PRODUCTS[0].id, name: PRODUCTS[0].name, price: PRODUCTS[0].price, category: PRODUCTS[0].category, qty: 1, slug: PRODUCTS[0].slug },
  { id: PRODUCTS[2].id, name: PRODUCTS[2].name, price: PRODUCTS[2].price, category: PRODUCTS[2].category, qty: 2, slug: PRODUCTS[2].slug },
]

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(DEMO_CART)
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoError, setPromoError] = useState('')

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item)
        .filter((item) => item.qty > 0)
    )
  }

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id))

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const discount = promoApplied ? subtotal * 0.15 : 0
  const shippingThreshold = 75
  const shipping = subtotal - discount >= shippingThreshold ? 0 : 8.95
  const total = subtotal - discount + shipping

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'RESTORE15') {
      setPromoApplied(true)
      setPromoError('')
    } else {
      setPromoError('Invalid promo code. Try RESTORE15 for 15% off your first order.')
    }
  }

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-[#F7F5F0] flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center py-20">
          <ShoppingBag size={64} className="text-[#2C2C2C]/20 mx-auto mb-6" aria-hidden="true" />
          <h1 className="font-serif text-3xl text-[#2C2C2C] mb-3">Your Cart is Empty</h1>
          <p className="text-[#2C2C2C]/55 mb-8">
            Discover our collection of professional-grade car care products and find your perfect routine.
          </p>
          <Link href="/reclaimed-auto-care" className="inline-flex items-center gap-2 bg-[#2D4A35] text-white px-8 py-4 rounded-lg font-semibold text-sm hover:bg-[#243d2b] transition-colors">
            Shop Reclaimed Auto Care <ArrowRight size={16} />
          </Link>
          <p className="mt-4 text-xs text-[#2C2C2C]/40">Free shipping on orders over $75</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2C2C2C]">
            Your Cart ({items.reduce((s, i) => s + i.qty, 0)} items)
          </h1>
          <Link href="/reclaimed-auto-care" className="text-sm text-[#2D4A35] hover:underline flex items-center gap-1">
            ← Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Line items */}
          <div>
            {/* Free shipping progress */}
            {subtotal - discount < shippingThreshold && (
              <div className="bg-[#2D4A35]/8 border border-[#2D4A35]/20 rounded-xl p-4 mb-6">
                <p className="text-sm text-[#2D4A35] font-medium">
                  Add <strong>${(shippingThreshold - (subtotal - discount)).toFixed(2)}</strong> more to unlock free shipping!
                </p>
                <div className="mt-2 bg-[#2D4A35]/15 rounded-full h-2">
                  <div
                    className="bg-[#2D4A35] h-2 rounded-full transition-all"
                    style={{ width: `${Math.min(100, ((subtotal - discount) / shippingThreshold) * 100)}%` }}
                    role="progressbar"
                    aria-valuenow={subtotal - discount}
                    aria-valuemax={shippingThreshold}
                    aria-label="Progress toward free shipping"
                  />
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl border border-[#2C2C2C]/8 divide-y divide-[#2C2C2C]/8">
              {items.map((item) => (
                <div key={item.id} className="p-5 flex gap-4 items-start">
                  {/* Image placeholder */}
                  <Link href={`/products/${item.slug}`}>
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#2D4A35]/60 to-[#8FA886]/60 shrink-0 flex items-center justify-center" aria-hidden="true">
                      <span className="text-white/40 text-xs text-center px-1 leading-snug">{item.category}</span>
                    </div>
                  </Link>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link href={`/products/${item.slug}`} className="font-semibold text-[#2C2C2C] hover:text-[#2D4A35] transition-colors text-sm">
                          {item.name}
                        </Link>
                        <p className="text-xs text-[#2C2C2C]/45 mt-0.5">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-[#2C2C2C]/30 hover:text-[#2C2C2C] transition-colors p-1"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-[#2C2C2C]/15 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="px-3 py-1.5 hover:bg-[#F7F5F0] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-4 py-1.5 text-sm font-medium min-w-[2.5rem] text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="px-3 py-1.5 hover:bg-[#F7F5F0] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-semibold text-[#2C2C2C]">
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <aside aria-label="Order summary">
            <div className="bg-white rounded-2xl border border-[#2C2C2C]/8 p-6 sticky top-28">
              <h2 className="font-semibold text-[#2C2C2C] mb-5">Order Summary</h2>

              {/* Promo code */}
              <div className="mb-5">
                <label htmlFor="promo-input" className="block text-xs font-medium text-[#2C2C2C] mb-1.5">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2C2C2C]/40" aria-hidden="true" />
                    <input
                      id="promo-input"
                      type="text"
                      value={promoCode}
                      onChange={(e) => { setPromoCode(e.target.value.toUpperCase()); setPromoError('') }}
                      disabled={promoApplied}
                      placeholder="Enter code"
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-[#2C2C2C]/20 focus:outline-none focus:ring-2 focus:ring-[#2D4A35]/30 disabled:bg-[#F7F5F0] disabled:text-[#2C2C2C]/50"
                    />
                  </div>
                  <button
                    onClick={applyPromo}
                    disabled={promoApplied || !promoCode}
                    className="px-4 py-2.5 bg-[#2C2C2C] text-white text-sm font-medium rounded-lg hover:bg-[#1a1a1a] transition-colors disabled:opacity-40"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p role="alert" className="mt-1.5 text-xs text-red-600">{promoError}</p>}
                {promoApplied && <p className="mt-1.5 text-xs text-[#2D4A35] font-medium">RESTORE15 applied — 15% off!</p>}
              </div>

              {/* Line items summary */}
              <div className="space-y-3 border-t border-[#2C2C2C]/8 pt-5 mb-5">
                <div className="flex justify-between text-sm text-[#2C2C2C]/70">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sm text-[#2D4A35] font-medium">
                    <span>Discount (RESTORE15)</span>
                    <span>−${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-[#2C2C2C]/70">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
              </div>

              <div className="border-t border-[#2C2C2C]/8 pt-4 flex justify-between font-bold text-[#2C2C2C]">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="mt-5 w-full bg-[#2D4A35] text-white py-4 rounded-xl font-semibold hover:bg-[#243d2b] transition-colors flex items-center justify-center gap-2">
                Proceed to Checkout <ArrowRight size={16} />
              </button>

              <p className="text-center text-xs text-[#2C2C2C]/40 mt-3">
                Secure checkout · SSL encrypted
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
