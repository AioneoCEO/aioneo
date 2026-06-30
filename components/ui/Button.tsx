import Link from 'next/link'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'forest' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface SharedProps {
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonOnlyProps = SharedProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { children: ReactNode; href?: undefined }
type LinkOnlyProps = SharedProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href'> & { children: ReactNode; href: string }

type Props = ButtonOnlyProps | LinkOnlyProps

const variantClasses: Record<Variant, string> = {
  primary: 'bg-[#2C2C2C] text-white hover:bg-[#1a1a1a] focus-visible:ring-[#2C2C2C]',
  secondary: 'bg-transparent text-[#2C2C2C] border border-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white focus-visible:ring-[#2C2C2C]',
  forest: 'bg-[#2D4A35] text-white hover:bg-[#243d2b] focus-visible:ring-[#2D4A35]',
  ghost: 'bg-transparent text-[#2C2C2C] hover:bg-[#2C2C2C]/8 focus-visible:ring-[#2C2C2C]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

export default function Button({ variant = 'primary', size = 'md', children, className = '', href, ...rest }: Props) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
