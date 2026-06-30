import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Crumb {
  label: string
  href?: string
}

interface Props {
  items: Crumb[]
}

export default function Breadcrumb({ items }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://aioneo.com${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-[#2C2C2C]/50">
        <Link href="/" className="hover:text-[#2C2C2C] transition-colors">
          Home
        </Link>
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-1.5">
            <ChevronRight size={12} aria-hidden="true" />
            {item.href && idx < items.length - 1 ? (
              <Link href={item.href} className="hover:text-[#2C2C2C] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#2C2C2C]" aria-current="page">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
