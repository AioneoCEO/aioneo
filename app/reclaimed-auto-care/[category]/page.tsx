import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { SERVICES, getServiceBySlug } from '@/lib/services'
import Breadcrumb from '@/components/ui/Breadcrumb'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ category: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.name} | Reclaimed Auto Care`,
    description: service.description,
    openGraph: {
      title: `${service.name} | Reclaimed Auto Care`,
      description: service.description,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { category: slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const otherServices = SERVICES.filter((s) => s.slug !== slug)

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#2C2C2C]/8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Reclaimed Auto Care', href: '/reclaimed-auto-care' },
              { label: service.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(135deg, #1e3528 0%, #2D4A35 100%)' }}
        aria-labelledby="service-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="service-heading" className="font-serif text-4xl sm:text-5xl text-white mb-4">{service.headline}</h1>
          <p className="text-white/65 text-lg leading-relaxed">{service.body}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#2C2C2C] px-7 py-3.5 rounded-lg font-semibold hover:bg-[#F7F5F0] transition-colors mt-8"
          >
            Book This Service <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]" aria-labelledby="included-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* What's Included */}
            <div className="flex-1 bg-white rounded-xl border border-[#2C2C2C]/8 p-8">
              <h2 id="included-heading" className="font-semibold text-[#2C2C2C] mb-5 text-sm tracking-wide uppercase">
                What&apos;s Included
              </h2>
              <ul className="space-y-3 mb-8">
                {service.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#2C2C2C]/75">
                    <Check size={16} className="text-[#2D4A35] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <h2 className="font-semibold text-[#2C2C2C] mb-2 text-sm tracking-wide uppercase">
                Ideal For
              </h2>
              <p className="text-sm text-[#2C2C2C]/65 leading-relaxed">{service.idealFor}</p>
            </div>

            {/* Other services */}
            <aside className="w-full md:w-64 shrink-0" aria-label="Other services">
              <div className="bg-white rounded-xl border border-[#2C2C2C]/8 p-6 sticky top-28">
                <h3 className="text-xs font-semibold text-[#2C2C2C]/50 uppercase tracking-wide mb-3">
                  Other Services
                </h3>
                <ul className="space-y-1.5">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/reclaimed-auto-care/${s.slug}`}
                        className="text-sm text-[#2C2C2C]/60 hover:text-[#2D4A35] transition-colors"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
