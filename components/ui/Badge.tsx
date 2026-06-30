import type { ReactNode } from 'react'

type Variant = 'default' | 'new' | 'bestseller' | 'sale' | 'bundle' | 'forest' | 'sand'

interface Props {
  children: ReactNode
  variant?: Variant
  className?: string
}

const variantClasses: Record<Variant, string> = {
  default: 'bg-[#2C2C2C]/10 text-[#2C2C2C]',
  new: 'bg-[#2D4A35] text-white',
  bestseller: 'bg-[#8B6914] text-white',
  sale: 'bg-red-600 text-white',
  bundle: 'bg-[#C8B89A] text-[#2C2C2C]',
  forest: 'bg-[#2D4A35]/15 text-[#2D4A35]',
  sand: 'bg-[#C8B89A]/30 text-[#2C2C2C]',
}

function badgeTextForLabel(label: string): Variant {
  const lower = label.toLowerCase()
  if (lower === 'new') return 'new'
  if (lower === 'best seller' || lower === 'bestseller') return 'bestseller'
  if (lower === 'bundle') return 'bundle'
  if (lower === 'sale') return 'sale'
  return 'default'
}

export default function Badge({ children, variant, className = '' }: Props) {
  const resolvedVariant = variant ?? (typeof children === 'string' ? badgeTextForLabel(children) : 'default')
  return (
    <span
      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded tracking-wide ${variantClasses[resolvedVariant]} ${className}`}
    >
      {children}
    </span>
  )
}
