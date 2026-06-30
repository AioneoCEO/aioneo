export interface Product {
  id: string
  slug: string
  name: string
  price: number
  compareAtPrice?: number
  category: string
  categorySlug: string
  description: string
  longDescription: string
  rating: number
  reviewCount: number
  badges: string[]
  isNew: boolean
  isBestSeller: boolean
  details: string[]
  howToUse: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'rac-001',
    slug: 'reclaimed-interior-revival-kit',
    name: 'Interior Revival Kit',
    price: 89.95,
    compareAtPrice: 109.95,
    category: 'Interior Care',
    categorySlug: 'interior',
    description: 'A complete interior transformation system. Restore leather, vinyl, plastic, and fabric surfaces to like-new condition.',
    longDescription:
      'The Interior Revival Kit is our flagship interior care collection, combining our pH-balanced All-Surface Interior Cleaner, Leather Conditioner & Protectant, and UV-Shield Dashboard Protector. Professionally formulated to lift embedded grime without stripping protective coatings. Safe for all interior surfaces including leather, alcantara, vinyl, rubber, and hard plastics.',
    rating: 4.9,
    reviewCount: 312,
    badges: ['Best Seller', 'Bundle'],
    isNew: false,
    isBestSeller: true,
    details: [
      'Kit includes: 16 oz Interior Cleaner, 8 oz Leather Conditioner, 4 oz Dashboard Protector',
      'pH balanced — safe on all interior surfaces',
      'UV-blocking formula prevents fading and cracking',
      'Non-greasy, streak-free finish',
      'Subtle natural scent, no overpowering fragrance',
    ],
    howToUse: [
      'Vacuum interior thoroughly before application',
      'Spray Interior Cleaner onto microfiber cloth — never directly on surface',
      'Wipe surfaces in straight, overlapping passes',
      'Apply Leather Conditioner to leather surfaces and buff in circular motion',
      'Finish with Dashboard Protector on plastic and vinyl trim',
    ],
  },
  {
    id: 'rac-002',
    slug: 'reclaimed-ceramic-shield-coating',
    name: 'Ceramic Shield Coating',
    price: 129.95,
    category: 'Ceramic Protection',
    categorySlug: 'ceramic',
    description: 'Professional-grade SiO2 ceramic coating in a DIY-friendly formula. Up to 2 years of hydrophobic protection.',
    longDescription:
      'Reclaimed Ceramic Shield brings showroom-grade protection to your driveway. Our 30% SiO2 concentration formula bonds at the molecular level, creating a sacrificial layer that repels water, UV rays, bird droppings, road salt, and environmental contaminants. Engineered for the detail-oriented enthusiast who demands professional results without a professional price tag.',
    rating: 4.8,
    reviewCount: 187,
    badges: ['New', 'Pro Formula'],
    isNew: true,
    isBestSeller: false,
    details: [
      '30% SiO2 concentration — professional strength',
      'Up to 24 months protection per application',
      '9H hardness rating',
      'Extreme hydrophobic — 110° water contact angle',
      'Includes application suede cloth and leveling block',
    ],
    howToUse: [
      'Wash and clay bar vehicle surface',
      'Polish if needed to remove swirl marks',
      'Wipe with IPA solution to remove polishing oils',
      'Apply 4–6 drops to suede applicator and spread in crosshatch pattern',
      'Flash cure for 30–60 seconds and buff off with clean microfiber',
      'Allow 24 hours cure time before exposure to water',
    ],
  },
  {
    id: 'rac-003',
    slug: 'reclaimed-foam-wash-shampoo',
    name: 'Foam Wash Shampoo',
    price: 24.95,
    category: 'Wash',
    categorySlug: 'wash',
    description: 'Ultra-concentrated, pH-neutral car wash shampoo. Produces rich foam that encapsulates dirt for scratch-free washing.',
    longDescription:
      'Our Foam Wash Shampoo is designed for enthusiasts who refuse to settle. The ultra-concentrated, pH-neutral formula (just 1–2 oz per bucket) produces a thick, lubricating foam blanket that encapsulates dirt particles and lifts them safely away from your paint. Safe for all coatings, waxes, and sealants — it cleans without stripping protection.',
    rating: 4.7,
    reviewCount: 524,
    badges: ['Best Seller'],
    isNew: false,
    isBestSeller: true,
    details: [
      '32 oz bottle — 100+ washes per bottle',
      'pH neutral — safe for coated, waxed, and bare paint',
      'SiO2-infused for added hydrophobic boost',
      'Streak-free rinse',
      'Biodegradable formula',
    ],
    howToUse: [
      'Add 1–2 oz to wash bucket and fill with water',
      'Pre-rinse vehicle to remove loose debris',
      'Wash with quality wash mitt using two-bucket method',
      'Rinse thoroughly with hose or pressure washer',
      'Dry with plush microfiber drying towel',
    ],
  },
  {
    id: 'rac-004',
    slug: 'reclaimed-glass-clarity-kit',
    name: 'Glass Clarity Kit',
    price: 44.95,
    category: 'Glass Care',
    categorySlug: 'glass',
    description: 'Crystal-clear visibility in every condition. Rain-repellent glass treatment with anti-streak cleaner.',
    longDescription:
      'The Glass Clarity Kit pairs our professional-grade Glass Cleaner with our flagship RainGuard Hydrophobic Treatment. The cleaner dissolves water spots, road film, and haze with zero ammonia — safe for window tints. The RainGuard treatment bonds to glass, causing water to bead and sheet off at speeds above 45 mph, dramatically improving visibility in rain.',
    rating: 4.6,
    reviewCount: 203,
    badges: [],
    isNew: false,
    isBestSeller: false,
    details: [
      'Ammonia-free formula — safe for tinted windows',
      'Streak-free on first pass',
      'RainGuard lasts 3–6 months per application',
      'Works on windshield, side windows, and mirrors',
      'Kit includes 2 waffle-weave glass towels',
    ],
    howToUse: [
      'Clean glass surface with Glass Cleaner first',
      'Buff dry with waffle-weave towel in straight passes',
      'Apply RainGuard to applicator pad',
      'Spread evenly in overlapping passes',
      'Allow 5 minutes to haze, then buff clear',
    ],
  },
  {
    id: 'rac-005',
    slug: 'reclaimed-wheel-tire-care-kit',
    name: 'Wheel & Tire Care Kit',
    price: 59.95,
    category: 'Wheel & Tire Care',
    categorySlug: 'wheel-tire',
    description: 'From barrel to sidewall — our all-in-one kit for immaculate wheels and deep-conditioned tires.',
    longDescription:
      'Brake dust, road grime, and iron particles are no match for our pH-activated Iron Remover and Wheel Cleaner combo. Watch contaminants bleed purple and rinse away effortlessly. Follow up with our Tire Shine & Conditioner for a rich, natural-look finish that lasts weeks — never greasy, never flingy.',
    rating: 4.8,
    reviewCount: 156,
    badges: ['Bundle'],
    isNew: false,
    isBestSeller: false,
    details: [
      'pH-activated iron remover turns purple on contact',
      'Safe for all wheel finishes: chrome, painted, machined, powder-coated',
      'Tire dressing: natural matte or enhanced gloss (your choice)',
      'Anti-fling formula — no mess on fenders',
      'Kit includes wheel brush and tire applicator',
    ],
    howToUse: [
      'Spray Iron Remover on cool, dry wheel surface',
      'Watch the purple reaction — allow 3–5 minutes dwell time',
      'Agitate with wheel brush and rinse thoroughly',
      'Apply Wheel Cleaner for final pass and rinse clean',
      'Apply Tire Conditioner with applicator pad to clean, dry tire sidewall',
    ],
  },
  {
    id: 'rac-006',
    slug: 'reclaimed-clay-bar-kit',
    name: 'Clay Bar Decontamination Kit',
    price: 34.95,
    category: 'Exterior Care',
    categorySlug: 'exterior',
    description: 'Remove embedded contaminants and restore glass-smooth paint before polishing or coating.',
    longDescription:
      'Proper paint decontamination is the foundation of any detail — and our Clay Bar Kit makes it foolproof. Two 100g fine-grade clay bars, a quart of premium clay lubricant, and a fold-up clay storage case. Safely strips embedded iron, rail dust, tree sap, and industrial fallout to leave paint silky smooth and ready for polish or protection.',
    rating: 4.5,
    reviewCount: 89,
    badges: [],
    isNew: false,
    isBestSeller: false,
    details: [
      '2 × 100g fine-grade clay bars included',
      'Safe for clear coat, wrapped, and painted surfaces',
      'Clay lubricant provides adequate slip — zero marring',
      'Storage case keeps clay mold-free between uses',
      'Treats 2–3 full vehicles per kit',
    ],
    howToUse: [
      'Wash vehicle thoroughly before claying',
      'Mist clay lubricant generously on a 2×2 ft section',
      'Glide clay bar back and forth with light pressure',
      'Wipe area dry and move to next section',
      'Re-knead clay frequently to expose fresh surface',
      'Follow with polish or protection product',
    ],
  },
  {
    id: 'rac-007',
    slug: 'reclaimed-microfiber-bundle',
    name: 'Premium Microfiber Bundle',
    price: 49.95,
    category: 'Accessories',
    categorySlug: 'accessories',
    description: "The professional detailer's microfiber collection. 12 towels across 4 specialized types.",
    longDescription:
      'Not all microfiber is created equal. Our Premium Microfiber Bundle includes 12 towels engineered for specific tasks: 4 plush drying towels (1,200 GSM), 4 all-purpose buffing towels (400 GSM), 2 glass and window towels (waffle-weave), and 2 interior detail towels (300 GSM). Edgeless design — zero risk of scratching your finish.',
    rating: 4.9,
    reviewCount: 441,
    badges: ['Best Seller', 'Bundle'],
    isNew: false,
    isBestSeller: true,
    details: [
      '12-towel bundle across 4 specialized types',
      'Ultra-soft split microfiber — 80/20 polyester/nylon blend',
      'Edgeless design — no scratching risk',
      'Machine washable up to 300× without degradation',
      'Color-coded for easy task identification',
    ],
    howToUse: [
      'Wash before first use — no fabric softener',
      'Use plush drying towels for post-wash drying',
      'Use buffing towels for wax, sealant, and coating removal',
      'Use waffle-weave towels exclusively on glass',
      'Use detail towels for interior surfaces',
      'Wash microfibers separately from other laundry',
    ],
  },
  {
    id: 'rac-008',
    slug: 'reclaimed-paint-correction-polish',
    name: 'Paint Correction Polish',
    price: 54.95,
    category: 'Exterior Care',
    categorySlug: 'exterior',
    description: 'Dual-action compound that removes swirls, scratches, and water spots. Jewel-gloss finish by hand or machine.',
    longDescription:
      'Our Paint Correction Polish uses advanced diminishing abrasive technology — heavy enough to remove light scratches and swirl marks on first pass, refined enough to leave behind a flawless high-gloss finish without follow-up polishing. Compatible with rotary and dual-action polishers, or effective by hand on spot corrections.',
    rating: 4.7,
    reviewCount: 134,
    badges: ['New'],
    isNew: true,
    isBestSeller: false,
    details: [
      'Diminishing abrasive technology — cuts and finishes in one step',
      'Compatible with DA and rotary polishers',
      'Silicone-free — safe before ceramic coating application',
      'Works on single-stage and clear-coated paint',
      'Low dust, easy product removal',
    ],
    howToUse: [
      'Work on cool paint in shade',
      'Apply 4–6 pea-sized drops to foam cutting pad',
      'Spread at low speed (1–2) before increasing to working speed (4–5)',
      'Work in 18×18 inch sections with overlapping passes',
      'Reduce speed to 1–2 and buff off residue',
      'Inspect under lighting and repeat if necessary',
    ],
  },
  {
    id: 'rac-009',
    slug: 'reclaimed-waterless-wash',
    name: 'Waterless Wash & Shine',
    price: 19.95,
    category: 'Wash',
    categorySlug: 'wash',
    description: 'Spray, wipe, done. Our waterless wash safely lifts light dust and grime to leave a brilliant shine — no water needed.',
    longDescription:
      'When a full wash isn\'t an option, Reclaimed Waterless Wash & Shine delivers. Our encapsulation formula surrounds and suspends dirt particles, allowing you to safely wipe them away without scratching. Perfect for lightly dusty vehicles, garage queens, show cars, and quick shine-ups between washes.',
    rating: 4.4,
    reviewCount: 67,
    badges: [],
    isNew: false,
    isBestSeller: false,
    details: [
      'Safe for paint, glass, trim, and wheels',
      'Encapsulation technology — zero scratch risk on lightly soiled surfaces',
      'Leaves behind SiO2-infused protective gloss',
      'Streak-free, no water source required',
      '32 oz treats 10–15 full vehicles',
    ],
    howToUse: [
      'Use only on lightly dusty or mildly soiled surfaces',
      'Spray generously onto one panel at a time',
      'Fold microfiber into quarters and wipe in straight lines',
      'Flip to clean side of towel frequently',
      'Buff any remaining residue with a clean, dry microfiber',
    ],
  },
  {
    id: 'rac-010',
    slug: 'reclaimed-new-car-starter-bundle',
    name: 'New Car Starter Bundle',
    price: 149.95,
    compareAtPrice: 189.75,
    category: 'Bundles',
    categorySlug: 'bundles',
    description: 'Everything you need to establish proper protection on a new vehicle from day one. Our most comprehensive value bundle.',
    longDescription:
      'The New Car Starter Bundle is designed for new vehicle owners who want to get protection right from the start. Includes our Foam Wash Shampoo, Ceramic Shield Coating, Glass Clarity Kit, Waterless Wash & Shine, and our 6-piece Microfiber Starter Set — every product you need to protect and maintain your new car\'s finish for years to come.',
    rating: 4.9,
    reviewCount: 98,
    badges: ['Bundle', 'Best Value'],
    isNew: false,
    isBestSeller: true,
    details: [
      'Includes 5 full-size products + microfiber starter set',
      'Save $39.80 vs purchasing items individually',
      'Perfect for: new car owners, gifting, starting fresh',
      'Products complement each other for a complete care system',
      'Detailed instruction card included',
    ],
    howToUse: [
      'Begin with Foam Wash to clean the vehicle',
      'Apply Ceramic Shield Coating for long-term protection',
      'Treat glass with Glass Clarity Kit',
      'Use Waterless Wash for quick maintenance between washes',
      'Refer to individual product instructions for detailed steps',
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug)
}

export const CATEGORIES = [
  { name: 'Interior Care', slug: 'interior', description: 'Clean, condition, and protect every interior surface.' },
  { name: 'Exterior Care', slug: 'exterior', description: 'Restore and maintain your paint to showroom perfection.' },
  { name: 'Wash', slug: 'wash', description: 'pH-balanced wash products for a safe, scratch-free clean.' },
  { name: 'Ceramic Protection', slug: 'ceramic', description: 'Professional-grade coatings for long-term paint defense.' },
  { name: 'Glass Care', slug: 'glass', description: 'Crystal clarity and rain-repellent protection.' },
  { name: 'Wheel & Tire Care', slug: 'wheel-tire', description: 'Brake dust, grime, and road film — eliminated.' },
  { name: 'Accessories', slug: 'accessories', description: 'Professional tools and microfibers for flawless results.' },
  { name: 'Bundles', slug: 'bundles', description: 'Curated product systems at exceptional value.' },
]
