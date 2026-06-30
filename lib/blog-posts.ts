export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  authorTitle: string
  date: string
  readTime: number
  featured: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-001',
    slug: 'how-to-apply-ceramic-coating-at-home',
    title: 'How to Apply Ceramic Coating at Home: A Step-by-Step Guide',
    excerpt:
      'Professional ceramic coating is no longer reserved for the shop. With the right preparation and our Ceramic Shield formula, you can achieve lasting protection in your own garage.',
    content: `
Ceramic coating has become one of the most sought-after forms of paint protection in the automotive world — and for good reason. A properly applied ceramic coat can repel water, resist UV damage, and protect your clear coat for up to two years. The catch has always been the application process.

We engineered our Ceramic Shield Coating to bridge the gap between professional results and DIY accessibility. Here's how to get it right.

## What You'll Need

Before you begin, gather: Ceramic Shield Coating, IPA (isopropyl alcohol) solution at 70%, lint-free surface wipes, suede applicator cloth, clean microfiber buffing towels, and access to a shaded workspace.

## Step 1: Preparation Is Everything

Start with a thorough wash using our Foam Wash Shampoo. Clay bar the entire vehicle to remove embedded contaminants — your hand should glide across the paint without resistance. If you have swirl marks or light scratches, now is the time to polish them out. Ceramic coating is a protectant, not a corrective product.

## Step 2: Decontaminate with IPA

Wipe every painted surface with your IPA solution using a lint-free wipe. This removes any remaining polish oils or wax residue that would prevent the coating from bonding. Work panel by panel and allow each section to fully evaporate before moving on.

## Step 3: Apply the Coating

Apply 4–6 drops of Ceramic Shield to your suede applicator. Begin with a single horizontal pass across the panel, then follow with a vertical pass — crosshatch pattern. Work in 18×24 inch sections to maintain control.

## Step 4: Flash and Remove

After 30–60 seconds, you'll notice the coating begin to "flash" — it will appear hazy or rainbow-like. This is your cue to buff it off with a clean microfiber. Use light pressure in straight passes.

## Step 5: Cure Time

Keep the vehicle out of rain and away from water for 24 hours. Full hardness is achieved at 7 days. During this time, avoid touching the surface and keep it in a sheltered location if possible.

The results speak for themselves. Customers who follow this process report water-beading performance that rivals professional shop applications at a fraction of the cost.
    `,
    category: 'Product Education',
    author: 'Marcus Reid',
    authorTitle: 'Lead Formulation Chemist, Reclaimed Auto Care',
    date: '2025-05-14',
    readTime: 7,
    featured: true,
  },
  {
    id: 'blog-002',
    slug: 'the-two-bucket-wash-method-explained',
    title: 'The Two-Bucket Wash Method: Why It Matters More Than You Think',
    excerpt:
      'Most swirl marks aren\'t from polishing mistakes — they\'re from washing. The two-bucket method is the single biggest improvement most enthusiasts can make to their wash routine.',
    content: `
Here's the uncomfortable truth: most paint swirling happens during the wash process. Not from rock chips, not from harsh chemicals — from dragging contaminated wash mitts across your paint.

The two-bucket method is the automotive detail world's most important best practice, and it's beautifully simple.

## The Problem with One Bucket

When you dip your wash mitt into a single bucket of soapy water, you're reintroducing the dirt you just removed back onto your mitt — and then dragging it across your paint. Multiply this by 100+ washes over a vehicle's life, and you've created the micro-scratch pattern known as swirling.

## The Solution: Separate Your Wash from Your Rinse

Bucket 1 is your wash bucket — filled with water and 1–2 oz of Foam Wash Shampoo. Bucket 2 is your rinse bucket — filled with clean water and a grit guard at the bottom.

After each panel, dunk your mitt into the rinse bucket and scrub it against the grit guard. The grit guard physically separates the contamination to the bottom of the bucket. Your mitt comes out clean, ready to go back into the wash bucket.

## Add a Grit Guard to Each Bucket

Grit guards are inexpensive and make the system dramatically more effective. The rinse bucket grit guard catches the dirt you agitate off your mitt. An optional grit guard in the wash bucket keeps your clean soapy water from being stirred up from the bottom.

## The Right Order Matters Too

Always wash from the top of the vehicle down. Your roof is typically the cleanest surface; your lower panels and sills carry the most road grime. Work roof → hood/trunk → doors → lower panels → wheels.

Keep a dedicated set of mitts and towels for your wheels — brake dust is abrasive and should never touch your paint.

## The Takeaway

The two-bucket method costs nothing extra if you already have two buckets. The difference in paint clarity after a year of proper washing versus single-bucket washing is genuinely visible. Your clear coat will thank you.
    `,
    category: 'Auto Care',
    author: 'Jordan Calloway',
    authorTitle: 'Detail Educator, Reclaimed Auto Care',
    date: '2025-04-28',
    readTime: 5,
    featured: false,
  },
  {
    id: 'blog-003',
    slug: 'aioneo-founding-story',
    title: 'Why We Started Aioneo: Restoring What Matters',
    excerpt:
      'Aioneo didn\'t start with a business plan. It started with a 1987 Mercedes-Benz, a garage full of disappointing products, and a conviction that premium should mean something.',
    content: `
It started in a two-car garage in Asheville, North Carolina.

Our founder, David Kessler, spent fifteen years in product formulation before his obsession with automotive care became something more. The turning point was a 1987 Mercedes-Benz 300E he'd inherited from his grandfather — a car with 211,000 miles and original paint that was begging for attention.

"I went through dozens of products over two years trying to restore that car," David recalls. "Some were just repackaged generics. Others made bold claims they couldn't back up. A few actually damaged the paint. I realized nobody was making products with the same rigor I applied to my professional work."

## The Gap We Set Out to Fill

The premium segment of the auto care market had a credibility problem. Beautiful packaging, aspirational branding — and formulas that didn't perform. Meanwhile, professional detailers relied on industrial products that came in plain white jugs, not designed for the enthusiast consumer.

We wanted to occupy the middle ground: professional-grade chemistry in a product line that respected the intelligence of its customer. No inflated claims. No vague "nano" buzzwords. Actual ingredient transparency and real-world testing.

## Reclaimed Auto Care as Our First Chapter

Reclaimed Auto Care launched in 2023 as Aioneo's debut product line. Every formula was developed over 18 months, tested by working detailers, and refined through customer feedback before going to market.

The name Reclaimed is intentional. We believe in restoring what's already valuable — not replacing it. The car you have deserves care and protection, whether it's a weekend classic or a daily driver.

## Where We're Headed

Aioneo was always meant to be more than auto care. The philosophy of restoring what matters extends to your home, your lifestyle, your wellbeing. Future divisions under the Aioneo umbrella — Aioneo Collection and Aioneo Living — are in development, each holding to the same standard that defines Reclaimed Auto Care.

We're building a brand for people who care about how things are made, what goes into them, and whether they do what they claim. We hope you'll be part of it.
    `,
    category: 'Behind the Brand',
    author: 'David Kessler',
    authorTitle: 'Founder, Aioneo',
    date: '2025-03-10',
    readTime: 6,
    featured: true,
  },
  {
    id: 'blog-004',
    slug: 'seasonal-spring-detail-guide',
    title: 'Your Complete Spring Detail Guide: Reversing Winter\'s Damage',
    excerpt:
      'Road salt, sand, and months of accumulated grime have taken their toll. Spring is the perfect time for a full vehicle restoration — here\'s exactly how to approach it.',
    content: `
Winter is hard on vehicles. Road salt accelerates oxidation. Sand and grit cause micro-scratching. Cold temperatures make plastics brittle and leather crack. By March, most vehicles are carrying months of embedded contamination that a regular wash won't touch.

Spring detail season is our favorite time of year at Reclaimed Auto Care, because the transformation is so dramatic. Here's how we approach a thorough post-winter restoration.

## Phase 1: Exterior Decontamination

Start with a thorough iron decontamination spray. You'll be surprised how much your paint changes color as the iron particles dissolve and rinse away — especially on lighter-colored vehicles. Follow with a clay bar treatment to strip any remaining bonded contamination.

## Phase 2: Paint Assessment and Correction

Under good lighting (natural overcast is ideal), inspect your paint for swirl marks, water spots, and light scratches. Winter road debris is a common culprit. If you find swirling, our Paint Correction Polish will address it before you apply any protection.

## Phase 3: Protection

After correction, your paint is at its most vulnerable — and most receptive. This is the ideal time to apply a ceramic coating or sealant. Our Ceramic Shield Coating will protect your correction work for the season ahead.

## Phase 4: Interior Refresh

Salt can migrate inside the vehicle via floor mats and shoes. Steam clean or thoroughly shampoo floor mats separately. Treat leather surfaces with conditioner — cold, dry winters are particularly tough on leather.

## Phase 5: Protect Before Summer

UV damage is the next threat after winter contamination. Make sure your trim and interior plastics have UV protection applied. The Interior Revival Kit covers every surface comprehensively.

A proper spring detail done right takes four to six hours — but the results last all season.
    `,
    category: 'Seasonal Guides',
    author: 'Marcus Reid',
    authorTitle: 'Lead Formulation Chemist, Reclaimed Auto Care',
    date: '2025-03-01',
    readTime: 8,
    featured: false,
  },
  {
    id: 'blog-005',
    slug: 'best-car-care-gifts',
    title: 'The Enthusiast\'s Gift Guide: Car Care Gifts They\'ll Actually Use',
    excerpt:
      'Shopping for the car person in your life? We cut through the noise with our curated gift guide — from stocking stuffers to comprehensive care bundles.',
    content: `
Finding a gift for a car enthusiast sounds easy until you're standing in the automotive aisle surrounded by generic products in garish packaging. The problem isn't selection — it's quality. Car people know the difference, and they'd rather have fewer things that are exceptional.

Here's our guide to gifts that will earn a genuine reaction.

## Under $30: Foam Wash Shampoo

It might seem like an understated gift, but the car enthusiast who hasn't tried a premium wash shampoo will be genuinely impressed. Our Foam Wash produces a level of suds and lubrication they didn't know they were missing. Pair it with a quality microfiber mitt for a well-received bundle under $50.

## Under $50: Glass Clarity Kit

Nobody talks about glass care, which means most people's windshields are covered in an invisible film of road grime and silicone deposits. The Glass Clarity Kit delivers an immediately visible result — crystal-clear visibility, water beading off at highway speeds. It's practical, they'll use it immediately, and they'll notice the difference.

## Under $100: Interior Revival Kit

For the person who takes pride in their interior, this kit is transformative. Leather conditioning alone makes a remarkable difference on most aging interiors. The complete kit gives them everything to restore every surface — leather, plastic, vinyl, and fabric.

## The Statement Gift: New Car Starter Bundle

If you want to give something genuinely special to someone who's just bought a new vehicle, our New Car Starter Bundle is it. Ceramic coating, wash products, glass treatment, and accessories — everything to establish proper protection from day one. It's the gift that protects their investment.

## Wrapping Tip

All our products ship in clean, minimal packaging that presents beautifully. No need to re-gift-wrap unless you want to — our unboxing experience is designed to feel premium from the first impression.
    `,
    category: 'Gift Ideas',
    author: 'Jordan Calloway',
    authorTitle: 'Detail Educator, Reclaimed Auto Care',
    date: '2025-11-20',
    readTime: 4,
    featured: false,
  },
  {
    id: 'blog-006',
    slug: 'understanding-ph-balance-in-car-care',
    title: 'Why pH Balance Is the Most Important Number in Car Care',
    excerpt:
      'Alkaline degreasers, acidic wheel cleaners, pH-neutral shampoos — what does it all mean, and why does it matter to your paint and coatings?',
    content: `
The pH scale runs from 0 to 14. Pure water sits at 7 — neutral. Anything below 7 is acidic; above 7 is alkaline (basic). Understanding where your car care products fall on this scale isn't just chemistry trivia — it directly affects how they interact with your paint, coatings, and trim.

## Why Neutral pH Matters for Wash Products

Paint clear coats are delicate. Highly alkaline products — think dish soap or some industrial degreasers — strip waxes, sealants, and ceramic coatings just as effectively as they strip grease. This is why dish soap became the warning example in every detailing guide: it's far too alkaline for regular use on painted surfaces.

Our Foam Wash Shampoo is formulated to a pH of 7 ± 0.5 — genuinely neutral. This means it cleans without stripping any protective layer you've applied.

## When You Want Alkaline Products

Alkaline chemistry is actually your friend in specific contexts. Interior degreasers and all-purpose cleaners use mild alkalinity to cut through built-up grime, skin oils, and food residue on interior surfaces where there's no protective coating at risk. Our Interior Cleaner is mildly alkaline — effective on grime, safe on treated surfaces.

## When You Want Acidic Products

Acid-based cleaners are excellent for mineral deposits, water spots on glass, and wheel surfaces. Our Iron Remover uses a controlled acidic formula to dissolve ferrous contamination from wheel surfaces. On glass, a mildly acidic cleaner cuts through silicone deposits and hard water spots that neutral products struggle with.

## The Danger Zones

Never use highly alkaline or highly acidic products on bare polished metal, aluminum trim, or anodized surfaces without testing first. Extreme pH on either end causes irreversible etching and oxidation.

Always check a product's stated pH before using it somewhere new. When in doubt, go neutral — it's the safest default.
    `,
    category: 'Product Education',
    author: 'Marcus Reid',
    authorTitle: 'Lead Formulation Chemist, Reclaimed Auto Care',
    date: '2025-02-14',
    readTime: 6,
    featured: false,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export const BLOG_CATEGORIES = [
  'All',
  'Auto Care',
  'Home Living',
  'Gift Ideas',
  'Behind the Brand',
  'Product Education',
  'Seasonal Guides',
  'Company News',
]
