import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieConsent from '@/components/layout/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aioneo.com'),
  title: {
    default: 'Aioneo — Restore What Matters',
    template: '%s | Aioneo',
  },
  description:
    'Aioneo creates premium lifestyle products for people who believe in quality. Home of Reclaimed Auto Care — professional-grade automotive detailing products.',
  keywords: ['Aioneo', 'Reclaimed Auto Care', 'car care', 'auto detailing', 'ceramic coating', 'car wash', 'interior care'],
  authors: [{ name: 'Aioneo' }],
  creator: 'Aioneo',
  publisher: 'Aioneo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aioneo.com',
    siteName: 'Aioneo',
    title: 'Aioneo — Restore What Matters',
    description: 'Premium lifestyle products crafted with purpose. Home of Reclaimed Auto Care.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Aioneo — Restore What Matters' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aioneo',
    creator: '@aioneo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#F7F5F0] text-[#2C2C2C] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#2D4A35] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
