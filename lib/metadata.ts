import type { Metadata } from 'next'

const BASE_URL = 'https://aioneo.com'
const SITE_NAME = 'Aioneo'
const DEFAULT_DESCRIPTION =
  'Aioneo — Restore What Matters. Premium lifestyle products crafted for those who care about quality. Home of Reclaimed Auto Care.'

interface MetadataOptions {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  keywords?: string[]
}

export function generateMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = '/og-default.jpg',
  type = 'website',
  noIndex = false,
  keywords = [],
}: MetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Restore What Matters`
  const url = `${BASE_URL}${path}`
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`

  return {
    title: fullTitle,
    description,
    keywords: ['Aioneo', 'Reclaimed Auto Care', 'premium auto detailing', 'car care products', ...keywords],
    authors: [{ name: 'Aioneo' }],
    creator: 'Aioneo',
    publisher: 'Aioneo',
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: fullTitle }],
      type,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@aioneo',
      site: '@aioneo',
    },
  }
}
