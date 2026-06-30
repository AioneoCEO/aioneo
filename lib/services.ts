export interface Service {
  slug: string
  name: string
  description: string
  headline: string
  body: string
  whatsIncluded: string[]
  idealFor: string
}

export const SERVICES: Service[] = [
  {
    slug: 'interior',
    name: 'Interior Detailing',
    description: 'Clean, condition, and protect every interior surface — without harsh, toxic chemicals.',
    headline: 'Restore Every Surface Inside Your Vehicle',
    body: 'From cracked leather to hazy dashboards, our interior detailing service deep-cleans, conditions, and protects every surface inside your cabin using non-toxic, low-VOC products that are safe for you and your family.',
    whatsIncluded: [
      'Full vacuum, including seats, carpets, and trunk',
      'Steam cleaning of upholstery and carpets',
      'Leather and vinyl cleaning and conditioning',
      'Dashboard, console, and trim detailing',
      'Interior glass cleaning',
    ],
    idealFor: 'Vehicles with stained upholstery, pet hair, lingering odors, or general wear.',
  },
  {
    slug: 'exterior',
    name: 'Exterior Detailing & Paint Correction',
    description: 'Hand wash, decontamination, and paint correction for a flawless, healthy finish.',
    headline: 'Paint Perfection, From Every Angle',
    body: 'Surface decontamination, swirl and scratch correction, and finishing — our exterior detailing restores showroom-quality paint using biodegradable, eco-conscious products that don\'t leach into soil and waterways.',
    whatsIncluded: [
      'Two-bucket hand wash and pH-neutral pre-rinse',
      'Clay bar surface decontamination',
      'Machine paint correction for swirls and light scratches',
      'Trim and plastic restoration',
      'Final wipe-down and inspection',
    ],
    idealFor: 'Vehicles with swirl marks, oxidation, water spots, or dull paint.',
  },
  {
    slug: 'ceramic',
    name: 'Ceramic Coating & Protection',
    description: 'Long-lasting, non-toxic ceramic protection that keeps your paint cleaner for longer.',
    headline: 'Professional Protection That Lasts',
    body: 'Our ceramic coating service applies a durable, hydrophobic layer of protection that defends against UV, road grime, and minor contaminants — meaning fewer washes, less product use, and a healthier footprint over time.',
    whatsIncluded: [
      'Full paint decontamination and correction prep',
      'Professional-grade ceramic coating application',
      'Multi-stage cure process',
      'Wheel and trim coating add-on available',
      'Maintenance guidance for long-term care',
    ],
    idealFor: 'Owners who want lasting protection and easier upkeep between details.',
  },
  {
    slug: 'wash',
    name: 'Wash & Maintenance',
    description: 'Routine, pH-neutral washes that keep your vehicle clean between full details.',
    headline: 'The Foundation of Every Great Detail',
    body: 'Your wash routine determines your paint\'s long-term condition. Our maintenance washes use pH-neutral, biodegradable soaps and the two-bucket method to clean safely — every time, without harsh runoff.',
    whatsIncluded: [
      'Two-bucket pH-neutral hand wash',
      'Wheel and tire rinse',
      'Spot-free rinse and microfiber dry',
      'Quick interior tidy-up',
    ],
    idealFor: 'Regular upkeep between full interior or exterior details.',
  },
  {
    slug: 'wheel-tire',
    name: 'Wheel & Tire Care',
    description: 'Brake dust, grime, and road film — eliminated safely.',
    headline: 'From Barrel to Sidewall — Immaculate',
    body: 'We use pH-balanced, non-toxic wheel cleaners and iron removers to safely lift brake dust and grime, finishing with a natural-look tire conditioner that won\'t fling onto your paint.',
    whatsIncluded: [
      'pH-balanced wheel cleaning, all finishes',
      'Iron and brake dust decontamination',
      'Tire cleaning and conditioning',
      'Wheel well rinse',
    ],
    idealFor: 'Wheels with heavy brake dust buildup or dull, dry-looking tires.',
  },
  {
    slug: 'glass',
    name: 'Glass Care',
    description: 'Streak-free clarity, inside and out.',
    headline: 'Crystal Clarity in Every Condition',
    body: 'Ammonia-free, streak-free glass cleaning paired with an optional hydrophobic treatment so you can see the road clearly in any weather.',
    whatsIncluded: [
      'Interior and exterior glass cleaning',
      'Ammonia-free, residue-free formula',
      'Optional rain-repellent hydrophobic treatment',
    ],
    idealFor: 'Anyone wanting better visibility and a streak-free finish.',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
