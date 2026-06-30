'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Check } from 'lucide-react'
import StarRating from '@/components/ui/StarRating'
import Badge from '@/components/ui/Badge'
import type { Product } from '@/lib/products'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const [added, setAdded] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  // Gradient based on category
  const gradients: Record<string, string> = {
    interior: 'from-[#2D4A35]/80 to-[#8FA886]/60',
    exterior: 'from-[#2C2C2C]/80 to-[#4a4a4a]/60',
    wash: 'from-[#4a7a9b]/80 to-[#6ba3c4]/60',
    ceramic: 'from-[#8B6914]/70 to-[#c49a20]/60',
    glass: 'from-[#4a6e8b]/70 to-[#8fa8c8]/60',
    'wheel-tire': 'from-[#3a3a3a]/80 to-[#6a6a6a]/60',
    accessories: 'from-[#5a4a35]/80 to-[#8a7a5a]/60',
    bundles: 'from-[#2D4A35]/70 to-[#8B6914]/60',
  }

  const gradient = gradients[product.categorySlug] || gradients.exterior

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#2C2C2C]/6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <Link href={`/products/${product.slug}`} className="block relative" aria-label={`View ${product.name}`} tabIndex={-1}>
        {/* Image placeholder */}
        <div className={`aspect-square bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <span className="text-white/60 text-xs font-medium text-center leading-tight px-2">
                {product.category}
              </span>
            </div>
          </div>
          {/* Badges */}
          {product.badges.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              {product.badges.slice(0, 2).map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-semibold text-[#2C2C2C] text-sm leading-snug hover:text-[#2D4A35] transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>

        <p className="text-xs text-[#2C2C2C]/50 mb-2">{product.category}</p>

        <div className="mb-3">
          <StarRating rating={product.rating} size="sm" reviewCount={product.reviewCount} />
        </div>

        <p className="text-xs text-[#2C2C2C]/60 leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg text-[#2C2C2C]">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-[#2C2C2C]/40 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            aria-label={added ? 'Added to cart' : `Add ${product.name} to cart`}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              added
                ? 'bg-[#2D4A35] text-white'
                : 'bg-[#2C2C2C] text-white hover:bg-[#1a1a1a]'
            }`}
          >
            {added ? <Check size={14} /> : <ShoppingCart size={14} />}
            {added ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </article>
  )
}
