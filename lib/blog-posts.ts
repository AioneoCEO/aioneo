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
  // ─── AUTO CARE ───────────────────────────────────────────────────────────────

  {
    id: 'blog-001',
    slug: 'how-to-apply-ceramic-coating-at-home',
    title: 'How to Apply Ceramic Coating at Home: A Step-by-Step Guide',
    excerpt:
      'Professional ceramic coating is no longer reserved for the shop. With the right preparation and our Ceramic Shield formula, you can achieve lasting protection in your own garage.',
    content: `
Ceramic coating has become one of the most sought-after forms of paint protection in the automotive world — and for good reason. A properly applied ceramic coat can repel water, resist UV damage, and protect your clear coat for up to two years. The catch has always been the application process.

We engineered our Ceramic Shield Coating to bridge the gap between professional results and DIY accessibility. Here is how to get it right.

## What You Will Need

Before you begin, gather: Ceramic Shield Coating, IPA (isopropyl alcohol) solution at 70%, lint-free surface wipes, suede applicator cloth, clean microfiber buffing towels, and access to a shaded workspace.

## Step 1: Preparation Is Everything

Start with a thorough wash using our Foam Wash Shampoo. Clay bar the entire vehicle to remove embedded contaminants. Your hand should glide across the paint without resistance. If you have swirl marks or light scratches, now is the time to polish them out. Ceramic coating is a protectant, not a corrective product.

## Step 2: Decontaminate with IPA

Wipe every painted surface with your IPA solution using a lint-free wipe. This removes any remaining polish oils or wax residue that would prevent the coating from bonding. Work panel by panel and allow each section to fully evaporate before moving on.

## Step 3: Apply the Coating

Apply 4 to 6 drops of Ceramic Shield to your suede applicator. Begin with a single horizontal pass across the panel, then follow with a vertical pass in a crosshatch pattern. Work in 18 x 24 inch sections to maintain control.

## Step 4: Flash and Remove

After 30 to 60 seconds, you will notice the coating begin to "flash" -- it will appear hazy or rainbow-like. This is your cue to buff it off with a clean microfiber. Use light pressure in straight passes.

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
      'Most swirl marks are not from polishing mistakes -- they are from washing. The two-bucket method is the single biggest improvement most enthusiasts can make to their wash routine.',
    content: `
Here is the uncomfortable truth: most paint swirling happens during the wash process. Not from rock chips, not from harsh chemicals -- from dragging contaminated wash mitts across your paint.

The two-bucket method is the automotive detail world's most important best practice, and it is beautifully simple.

## The Problem with One Bucket

When you dip your wash mitt into a single bucket of soapy water, you are reintroducing the dirt you just removed back onto your mitt -- and then dragging it across your paint. Multiply this by 100 or more washes over a vehicle's life, and you have created the micro-scratch pattern known as swirling.

## The Solution: Separate Your Wash from Your Rinse

Bucket 1 is your wash bucket -- filled with water and 1 to 2 oz of Foam Wash Shampoo. Bucket 2 is your rinse bucket -- filled with clean water and a grit guard at the bottom.

After each panel, dunk your mitt into the rinse bucket and scrub it against the grit guard. The grit guard physically separates the contamination to the bottom of the bucket. Your mitt comes out clean, ready to go back into the wash bucket.

## Add a Grit Guard to Each Bucket

Grit guards are inexpensive and make the system dramatically more effective. The rinse bucket grit guard catches the dirt you agitate off your mitt. An optional grit guard in the wash bucket keeps your clean soapy water from being stirred up from the bottom.

## The Right Order Matters Too

Always wash from the top of the vehicle down. Your roof is typically the cleanest surface; your lower panels and sills carry the most road grime. Work roof, then hood and trunk, then doors, then lower panels, then wheels.

Keep a dedicated set of mitts and towels for your wheels -- brake dust is abrasive and should never touch your paint.

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
    id: 'blog-007',
    slug: 'iron-decontamination-why-your-paint-needs-it',
    title: 'Iron Decontamination: The Step Most Detailers Skip',
    excerpt:
      'Your paint feels smooth after a wash -- but invisible iron particles from brake dust and rail dust are embedded in the clear coat right now. Here is why removing them matters.',
    content: `
If you have ever done a clay bar treatment and been shocked by how rough the paint felt beforehand, you have experienced bonded surface contamination firsthand. But not all contamination is removed by clay alone.

Iron particles -- shed from brake rotors, wheel dust, and railway environments -- embed themselves in the clear coat and begin to oxidize. Left in place, they cause micro-corrosion, dull the finish, and eventually work through the clear coat. The problem is invisible to the naked eye until the damage is done.

## What Iron Decontamination Does

Iron remover is a pH-adjusted chemical that reacts with ferrous particles on contact and converts them to a water-soluble compound that rinses away clean. The telltale sign it is working: the product turns purple or deep red as it reacts. The more color change you see, the more contamination was present.

## When to Use It

Iron decontamination should be performed before any clay bar treatment, polish, or coating application. It is also a useful annual maintenance step even on coated vehicles -- iron particles can accumulate on top of coatings and cause surface-level staining.

Vehicles driven in urban environments, near rail lines, or on highways with heavy truck traffic accumulate iron contamination faster. If you park outdoors regularly, plan for decontamination at least twice per year.

## How to Apply

Rinse the vehicle and apply Iron Remover to one panel at a time. Allow 3 to 5 minutes of dwell time -- do not let it dry. Agitate lightly with a soft brush on heavily contaminated areas. Rinse thoroughly. The paint should feel noticeably smoother afterward.

Follow with a clay bar treatment to catch any remaining bonded contamination that the chemical decon did not address.

## The Result

Clean paint holds wax, sealants, and ceramic coatings significantly better than contaminated paint. Every product you apply on top performs better and lasts longer when the surface is genuinely clean. Iron decontamination is one of the highest-leverage steps in any proper detail.
    `,
    category: 'Auto Care',
    author: 'Marcus Reid',
    authorTitle: 'Lead Formulation Chemist, Reclaimed Auto Care',
    date: '2025-06-03',
    readTime: 6,
    featured: false,
  },
  {
    id: 'blog-008',
    slug: 'how-to-remove-water-spots-from-paint-and-glass',
    title: 'How to Remove Water Spots from Paint and Glass',
    excerpt:
      'Hard water spots are one of the most common and frustrating paint defects. They range from easy to fix to potentially permanent -- and knowing which type you have changes everything.',
    content: `
Water spots form when water evaporates and leaves behind dissolved minerals -- primarily calcium and magnesium carbonates. What looks like a simple smudge is actually a mineral deposit that has physically bonded to your clear coat or glass surface.

The challenge is that water spots exist on a spectrum of severity. Catching them early makes removal straightforward. Ignoring them long enough turns a cleaning task into a paint correction job.

## Type 1: Surface Deposits (Easy)

Fresh water spots that have not had time to bond can often be removed with a dedicated water spot remover or a mild acidic cleaner. Apply to a damp surface, allow 2 to 3 minutes of dwell, and wipe clean. This handles the majority of spots if you catch them within a few days.

## Type 2: Bonded Deposits (Moderate)

Spots that have been baked on by sunlight or allowed to sit for weeks have etched into the surface layer. A paint-safe acidic cleaner will help, but you may need to follow with light machine polishing to fully remove the etch.

## Type 3: Etched Clear Coat (Requires Correction)

In severe cases, mineral deposits have etched through the clear coat itself. No amount of cleaning removes physical damage -- this requires machine polishing and potentially a professional paint correction. Prevention is far easier than the cure.

## Prevention Strategy

The best approach is simply not allowing water to dry on your paint. After washing, dry immediately with a clean microfiber or use a final rinse spray that promotes sheeting. If you park outside and morning dew is common in your area, applying a ceramic coating dramatically reduces the ability of minerals to bond.

For glass, our Glass Clarity Hydrophobic Spray causes water to bead and roll off at speed, minimizing deposit formation on windshields and windows.
    `,
    category: 'Auto Care',
    author: 'Jordan Calloway',
    authorTitle: 'Detail Educator, Reclaimed Auto Care',
    date: '2025-05-30',
    readTime: 5,
    featured: false,
  },
  {
    id: 'blog-009',
    slug: 'leather-care-complete-guide',
    title: 'A Complete Guide to Leather Seat Care',
    excerpt:
      'Leather is durable, but it is not indestructible. The right cleaning and conditioning routine keeps it supple, prevents cracking, and extends the life of your interior for years.',
    content: `
Factory leather is treated leather -- it has a topcoat applied during manufacturing that protects the surface. Over time, body oils, UV exposure, and cleaning products with the wrong chemistry break down that topcoat and dry out the underlying hide. The result is fading, cracking, and a worn appearance that makes an otherwise well-maintained vehicle look aged.

The solution is a consistent two-step leather care routine: clean, then condition.

## Cleaning Leather Properly

Most leather cleaning mistakes come from using the wrong product. All-purpose cleaners that are too alkaline will dry out the leather over time. Baby wipes and household cleaning sprays leave residues that accelerate topcoat degradation.

Use a dedicated leather cleaner applied with a soft-bristled brush or microfiber. Work the product in small circular motions to lift dirt from the grain. Wipe clean with a damp microfiber. On heavily soiled areas, a second application may be needed. Never saturate leather with water.

## Conditioning Is Not Optional

Conditioning replenishes the oils that keep leather supple and resistant to cracking. Think of it like moisturizer for the material. Apply a pea-sized amount of Leather Conditioner to an applicator pad and work it into the leather in circular motions. Buff off any excess. For sun-exposed areas like the driver's headrest and armrests, condition more frequently.

Condition your leather a minimum of four times per year -- more if your climate has extreme temperature swings or high UV exposure.

## Frequency

Light cleaning: monthly, or after any visible soiling.
Deep clean plus condition: every three months.
UV protectant spray: every four to six weeks on exposed surfaces.

## Signs Your Leather Needs Attention Now

Cracking along stitch lines, a dry or powdery texture, fading of color on high-contact areas, or a sticky feel after cleaning with a new product are all signs that your leather needs immediate attention. Catching deterioration early is always better than trying to reverse it.
    `,
    category: 'Auto Care',
    author: 'Jordan Calloway',
    authorTitle: 'Detail Educator, Reclaimed Auto Care',
    date: '2025-04-10',
    readTime: 7,
    featured: false,
  },
  {
    id: 'blog-010',
    slug: 'choosing-the-right-microfiber-towel',
    title: 'Not All Microfiber Is Equal: How to Choose the Right Towel for Every Job',
    excerpt:
      'GSM rating, pile height, weave type -- microfiber towels are deceptively technical. Using the wrong towel for the wrong job is a fast path to scratches and frustration.',
    content: `
Microfiber is the backbone of any detailing kit. It is also one of the most misunderstood categories in auto care. Not all microfiber is created equal, and using the wrong towel in the wrong application causes more damage than it prevents.

Here is what you actually need to know.

## Understanding GSM

GSM stands for grams per square meter -- a measure of towel density. Higher GSM means a plusher, softer towel with more fiber. Lower GSM means a thinner, tighter weave.

The right GSM depends on the job:

200 to 300 GSM: Thin, tight weave. Ideal for window cleaning, applying products, and wiping down hard interior surfaces.

400 to 500 GSM: All-purpose range. Good for drying, panel wiping, and wax removal.

600 to 800 GSM: Plush and soft. Best for final buffing, wax and polish removal on painted surfaces, and any application where scratch risk is highest.

## Pile Height and Weave

Long-pile towels are softer and trap more debris in the fibers rather than dragging it across the surface. Use them for any final paint work. Short-pile waffle weave towels are excellent for glass -- they cut through film without streaking.

## The Washing Rule

Always wash new microfiber before first use to remove any loose fibers. Wash microfiber separately from other laundry, in cold water, with no fabric softener. Fabric softener coats the fibers and eliminates their electrostatic dirt-trapping ability. Air dry or tumble dry low -- high heat damages the polyester fibers.

## Dedicated Towel Sets

The most important organizational habit in detailing is dedicated towels per task. Paint towels never touch wheels. Glass towels stay separate. Interior towels do not go near exterior surfaces. Color coding your towels by task is the simplest system and it works.
    `,
    category: 'Product Education',
    author: 'Marcus Reid',
    authorTitle: 'Lead Formulation Chemist, Reclaimed Auto Care',
    date: '2025-03-22',
    readTime: 6,
    featured: false,
  },
  {
    id: 'blog-011',
    slug: 'how-to-clean-car-wheels-properly',
    title: 'How to Properly Clean Your Wheels Without Damaging Them',
    excerpt:
      'Wheels take more abuse than any other surface on a vehicle. The right products and technique protect your finish while removing the brake dust and road grime that builds up every week.',
    content: `
Wheels are exposed to brake dust, road salt, heat cycling, and curb impacts -- more abuse than any other exterior surface. Despite this, wheel cleaning often gets the least attention in a detail routine, and the products chosen are often the most damaging.

## Understanding Wheel Finishes

Not all wheels are the same, and this matters for product selection.

Clear-coated wheels have a protective coating similar to paint. Treat them like painted surfaces -- use pH-neutral or mildly acidic cleaners.

Polished or bare metal wheels are uncoated and reactive. Highly acidic or highly alkaline products can etch or oxidize them. Stick to neutral or mildly acidic formulas.

Powder-coated wheels are the most resilient. Most wheel cleaners are safe, but avoid prolonged contact with aggressive acid-based products.

Anodized wheels require the gentlest care. Use a dedicated neutral cleaner only.

## The Right Process

Start with wheels cold. Cleaning hot wheels causes products to evaporate before they work and can cause thermal shock on some finishes. Rinse each wheel first to loosen loose debris.

Apply our Iron and Brake Dust Remover and allow 3 to 5 minutes of dwell. The product will react with ferrous brake dust, turning the surface dark as it loosens contamination. Agitate with a soft wheel brush, paying attention to the barrel and lug nut recesses.

Rinse thoroughly from top to bottom. Follow with a wheel sealant to make future cleaning easier -- brake dust releases from a sealed surface far more readily.

## Brush Selection

Use a dedicated wheel brush with flagged-tip bristles for the outer face. A long-handle barrel brush reaches into the wheel well and barrel. A small lug nut brush handles recessed hardware. Never use these brushes on painted body panels.

## Final Step: Tire Dressing

Apply a water-based tire dressing to clean, dry tires. Solvent-based dressings produce an unnatural shine and can sling onto wheel faces and paint as the tire rotates. A water-based formula gives a natural satin finish that stays put.
    `,
    category: 'Auto Care',
    author: 'Jordan Calloway',
    authorTitle: 'Detail Educator, Reclaimed Auto Care',
    date: '2025-05-05',
    readTime: 7,
    featured: false,
  },

  // ─── PRODUCT EDUCATION ───────────────────────────────────────────────────────

  {
    id: 'blog-006',
    slug: 'understanding-ph-balance-in-car-care',
    title: 'Why pH Balance Is the Most Important Number in Car Care',
    excerpt:
      'Alkaline degreasers, acidic wheel cleaners, pH-neutral shampoos -- what does it all mean, and why does it matter to your paint and coatings?',
    content: `
The pH scale runs from 0 to 14. Pure water sits at 7 -- neutral. Anything below 7 is acidic; above 7 is alkaline. Understanding where your car care products fall on this scale is not just chemistry trivia -- it directly affects how they interact with your paint, coatings, and trim.

## Why Neutral pH Matters for Wash Products

Paint clear coats are delicate. Highly alkaline products -- dish soap or some industrial degreasers -- strip waxes, sealants, and ceramic coatings just as effectively as they strip grease. This is why dish soap became the cautionary example in every detailing guide: it is far too alkaline for regular use on painted surfaces.

Our Foam Wash Shampoo is formulated to a pH of 7 plus or minus 0.5 -- genuinely neutral. This means it cleans without stripping any protective layer you have applied.

## When You Want Alkaline Products

Alkaline chemistry is your friend in specific contexts. Interior degreasers and all-purpose cleaners use mild alkalinity to cut through built-up grime, skin oils, and food residue on interior surfaces where there is no protective coating at risk. Our Interior Cleaner is mildly alkaline -- effective on grime, safe on treated surfaces.

## When You Want Acidic Products

Acid-based cleaners are excellent for mineral deposits, water spots on glass, and wheel surfaces. Our Iron Remover uses a controlled acidic formula to dissolve ferrous contamination from wheel surfaces. On glass, a mildly acidic cleaner cuts through silicone deposits and hard water spots that neutral products struggle with.

## The Danger Zones

Never use highly alkaline or highly acidic products on bare polished metal, aluminum trim, or anodized surfaces without testing first. Extreme pH on either end causes irreversible etching and oxidation.

Always check a product's stated pH before using it somewhere new. When in doubt, go neutral -- it is the safest default.
    `,
    category: 'Product Education',
    author: 'Marcus Reid',
    authorTitle: 'Lead Formulation Chemist, Reclaimed Auto Care',
    date: '2025-02-14',
    readTime: 6,
    featured: false,
  },
  {
    id: 'blog-012',
    slug: 'wax-vs-sealant-vs-ceramic-coating',
    title: 'Wax, Sealant, or Ceramic Coating: Which Protection Is Right for You?',
    excerpt:
      'Three categories, very different performance levels and price points. Understanding what each one actually does -- and what it does not -- makes the choice straightforward.',
    content: `
The paint protection market can feel overwhelming. Carnauba wax, synthetic polymer sealants, graphene coatings, ceramic coatings -- every product claims to be the best. Here is an honest breakdown of each category.

## Carnauba Wax

Carnauba wax is derived from a Brazilian palm tree and has been used in automotive care for over a century. It provides a warm, organic-looking gloss that many enthusiasts consider the gold standard in finish depth.

The limitation: durability. Carnauba wax typically lasts 4 to 8 weeks under normal conditions. UV exposure, washing, and rain erode it steadily. For vehicles that are driven and washed regularly, wax requires frequent reapplication.

Best for: show cars, weekend classics, or owners who enjoy the ritual of regular waxing and want maximum gloss depth.

## Synthetic Polymer Sealants

Sealants are petroleum-derived synthetic polymers engineered for durability. They typically last 4 to 6 months and offer excellent UV protection and water-beading performance. The gloss is slightly different from wax -- crisper and less warm, but very effective.

Sealants are the practical middle ground: meaningfully more durable than wax, significantly less expensive than ceramic coatings, and applied in the same straightforward way.

Best for: daily drivers, owners who want 4 to 6 month protection without the upfront cost of ceramic.

## Ceramic Coatings

Ceramic coatings are liquid polymer formulas that chemically bond to the clear coat and cure into a hard, glass-like shell. Properly applied, they last 1 to 3 years depending on maintenance. They provide exceptional hydrophobic performance, UV resistance, and scratch resistance.

The tradeoff: they require careful surface preparation, precise application, and cannot easily be removed once cured. They are also more expensive upfront.

Best for: new vehicles, vehicles after paint correction, or owners who want maximum long-term protection with minimal ongoing maintenance.

## The Honest Answer

For most daily drivers: a quality sealant applied twice per year delivers excellent protection at a reasonable cost. For owners who want to set-and-forget their paint protection for a season or longer, ceramic is worth the investment. Wax is for people who love the process as much as the result.

None of these replace proper washing technique -- contaminated paint undermines any protective layer.
    `,
    category: 'Product Education',
    author: 'Marcus Reid',
    authorTitle: 'Lead Formulation Chemist, Reclaimed Auto Care',
    date: '2025-04-18',
    readTime: 8,
    featured: false,
  },
  {
    id: 'blog-013',
    slug: 'reading-product-labels-ingredients',
    title: 'How to Actually Read an Auto Care Product Label',
    excerpt:
      'Most product labels are designed to impress, not inform. Here is what the ingredient list actually tells you -- and the marketing terms that mean very little.',
    content: `
At Reclaimed Auto Care, we believe you should understand what is in the products you are using on your vehicle. This is a guide to cutting through marketing language and reading a product label with confidence.

## The Ingredient List

By convention, cosmetic and specialty chemical products list ingredients by concentration -- highest to lowest. If water is listed first, the product is primarily water-based. This is not inherently a negative: water is a carrier that delivers active ingredients efficiently.

The active ingredients are what matter. Look for specific named compounds rather than vague terms. "Carnauba wax" is informative. "Polymer blend" tells you almost nothing.

## Terms That Actually Mean Something

pH-neutral: The product falls between 6 and 8 on the pH scale. Genuinely meaningful for wash products used on coated or waxed paint.

VOC-free or low-VOC: The product contains little to no volatile organic compounds. Relevant for enclosed-space use like interior detailing.

SiO2 content (percentage): For ceramic and spray sealant products, silicon dioxide concentration is a rough indicator of coating hardness and durability. Higher percentages generally mean harder, more durable protection.

## Terms That Are Often Misleading

Nano technology: This has become so broadly applied as to be meaningless. Nearly all modern liquid coatings operate at the nanoscale by nature.

Professional grade: Has no standardized definition. Often applied to any product with a higher price point.

Long-lasting: Without a specific duration claim backed by test data, this is marketing language.

## What to Actually Look For

Choose products from brands that publish their pH, share their key active ingredients, and are transparent about expected performance timelines. If a product page cannot tell you what is in the bottle or how long it lasts, that is information worth having before you make a decision.
    `,
    category: 'Product Education',
    author: 'Marcus Reid',
    authorTitle: 'Lead Formulation Chemist, Reclaimed Auto Care',
    date: '2025-01-28',
    readTime: 6,
    featured: false,
  },

  // ─── SEASONAL GUIDES ─────────────────────────────────────────────────────────

  {
    id: 'blog-004',
    slug: 'seasonal-spring-detail-guide',
    title: 'Your Complete Spring Detail Guide: Reversing Winter\'s Damage',
    excerpt:
      'Road salt, sand, and months of accumulated grime have taken their toll. Spring is the perfect time for a full vehicle restoration -- here is exactly how to approach it.',
    content: `
Winter is hard on vehicles. Road salt accelerates oxidation. Sand and grit cause micro-scratching. Cold temperatures make plastics brittle and leather crack. By March, most vehicles are carrying months of embedded contamination that a regular wash will not touch.

Spring detail season is our favorite time of year at Reclaimed Auto Care, because the transformation is so dramatic. Here is how we approach a thorough post-winter restoration.

## Phase 1: Exterior Decontamination

Start with a thorough iron decontamination spray. You will be surprised how much your paint changes color as the iron particles dissolve and rinse away -- especially on lighter-colored vehicles. Follow with a clay bar treatment to strip any remaining bonded contamination.

## Phase 2: Paint Assessment and Correction

Under good lighting -- natural overcast is ideal -- inspect your paint for swirl marks, water spots, and light scratches. Winter road debris is a common culprit. If you find swirling, our Paint Correction Polish will address it before you apply any protection.

## Phase 3: Protection

After correction, your paint is at its most vulnerable and most receptive. This is the ideal time to apply a ceramic coating or sealant. Our Ceramic Shield Coating will protect your correction work for the season ahead.

## Phase 4: Interior Refresh

Salt can migrate inside the vehicle via floor mats and shoes. Steam clean or thoroughly shampoo floor mats separately. Treat leather surfaces with conditioner -- cold, dry winters are particularly tough on leather.

## Phase 5: Protect Before Summer

UV damage is the next threat after winter contamination. Make sure your trim and interior plastics have UV protection applied. The Interior Revival Kit covers every surface comprehensively.

A proper spring detail done right takes four to six hours -- but the results last all season.
    `,
    category: 'Seasonal Guides',
    author: 'Marcus Reid',
    authorTitle: 'Lead Formulation Chemist, Reclaimed Auto Care',
    date: '2025-03-01',
    readTime: 8,
    featured: false,
  },
  {
    id: 'blog-014',
    slug: 'fall-vehicle-prep-guide',
    title: 'Fall Vehicle Prep: How to Protect Your Car Before Winter',
    excerpt:
      'The few hours you invest in fall preparation will determine how your paint, interior, and undercarriage emerge from winter. Here is the complete seasonal prep routine.',
    content: `
Fall is one of the most important seasons in a vehicle maintenance calendar. The protective layers you apply before the first frost -- and the contaminants you remove before winter -- determine how much restoration work you face in spring.

## Timing: Before the First Frost

Ceramic coatings and sealants must be applied in temperatures above 50 degrees Fahrenheit for proper bonding and cure. Once freezing temperatures arrive consistently, your window for applying protection closes until spring. Target your fall detail for September or October.

## Exterior: Apply Your Winter Armor

Fall is coating season. If your current wax or sealant is past its protection window, now is the time to reapply. Better still, upgrade to a ceramic sealant spray or a full ceramic coating before winter arrives.

Pay particular attention to the lower panels, rocker panels, and wheel arches -- these areas take the most salt and road grime impact. A fresh application here pays significant dividends.

## Wheel Care Before Salt Season

Salt accumulation around wheels and brake components is a primary driver of corrosion on older vehicles. Apply wheel sealant after cleaning to give brake dust and salt a surface it releases from more easily. Clean more frequently during winter months -- every week if you drive in heavily salted areas.

## Interior Prep

Condition all leather surfaces before temperatures drop. Dry heat from the cabin heater combined with cold air outside is particularly drying for leather and plastics. Apply a protectant to all plastic trim to prevent brittleness and cracking.

Install proper all-weather floor liners if you do not already have them. Protecting the carpet from salt water infiltration during winter is far easier than cleaning it afterward.

## Glass Treatment

Apply hydrophobic glass treatment to all windows. In winter driving conditions -- rain, snow, sleet -- having water bead and clear from your windshield at speed is a genuine safety benefit, not just aesthetics.

Treat wiper blades as a consumable and replace them before winter. Degraded wiper blades on treated glass underperform significantly compared to fresh blades.
    `,
    category: 'Seasonal Guides',
    author: 'Jordan Calloway',
    authorTitle: 'Detail Educator, Reclaimed Auto Care',
    date: '2025-09-15',
    readTime: 7,
    featured: false,
  },
  {
    id: 'blog-015',
    slug: 'summer-heat-paint-protection',
    title: 'Summer Heat and Your Paint: What UV Actually Does and How to Stop It',
    excerpt:
      'UV radiation is the leading cause of paint oxidation and clearcoat failure. Understanding the mechanism makes it clear why protection matters -- and what actually works.',
    content: `
A vehicle parked outside in a sunny climate accumulates roughly 600 to 1000 hours of direct sun exposure per year. Without adequate protection, this is a significant amount of UV radiation working on your clear coat continuously.

## What UV Damage Looks Like

In early stages, UV damage appears as a dull, chalky finish -- the clear coat is breaking down and losing its ability to reflect light evenly. In later stages, the clear coat begins to peel and separate from the base coat, a condition called delamination. At that point, respraying the affected panels is the only remedy.

White, silver, and lighter colors show oxidation more slowly; darker colors tend to show it earlier because the contrast between healthy and degraded paint is more obvious.

## How Protection Works

Waxes, sealants, and ceramic coatings all provide a barrier layer between UV radiation and your clear coat. Ceramic coatings also contain UV-inhibiting compounds that actively absorb UV energy rather than simply reflecting it.

The practical difference: a vehicle with a quality ceramic coating applied in spring will emerge from summer in significantly better condition than the same vehicle with no protection -- same sun, same parking situation, different outcomes.

## The Interior UV Problem

UV does not stop at the window glass. Standard automotive glass blocks UVB but transmits a significant portion of UVA. This is the radiation responsible for dashboard cracking, leather fading, and plastic brittleness.

Apply a UV protectant to all interior plastic, vinyl, and leather surfaces in spring and reapply quarterly. Ceramic window tinting is the most effective long-term interior UV protection available.

## Practical Summer Advice

Park in shade wherever available. Even a car cover makes a measurable difference on days when shade is not an option. If you park outdoors consistently, plan for an annual reapplication of your chosen protection product.
    `,
    category: 'Seasonal Guides',
    author: 'Marcus Reid',
    authorTitle: 'Lead Formulation Chemist, Reclaimed Auto Care',
    date: '2025-06-20',
    readTime: 6,
    featured: false,
  },

  // ─── BEHIND THE BRAND ────────────────────────────────────────────────────────

  {
    id: 'blog-003',
    slug: 'aioneo-founding-story',
    title: 'Why We Started Aioneo: Restoring What Matters',
    excerpt:
      'Aioneo did not start with a business plan. It started with a 1987 Mercedes-Benz, a garage full of disappointing products, and a conviction that premium should mean something.',
    content: `
It started in a two-car garage in Asheville, North Carolina.

Our founder, David Kessler, spent fifteen years in product formulation before his obsession with automotive care became something more. The turning point was a 1987 Mercedes-Benz 300E he had inherited from his grandfather -- a car with 211,000 miles and original paint that was begging for attention.

"I went through dozens of products over two years trying to restore that car," David recalls. "Some were just repackaged generics. Others made bold claims they could not back up. A few actually damaged the paint. I realized nobody was making products with the same rigor I applied to my professional work."

## The Gap We Set Out to Fill

The premium segment of the auto care market had a credibility problem. Beautiful packaging, aspirational branding -- and formulas that did not perform. Meanwhile, professional detailers relied on industrial products that came in plain white jugs, not designed for the enthusiast consumer.

We wanted to occupy the middle ground: professional-grade chemistry in a product line that respected the intelligence of its customer. No inflated claims. No vague marketing buzzwords. Actual ingredient transparency and real-world testing.

## Reclaimed Auto Care as Our First Chapter

Reclaimed Auto Care launched in 2023 as Aioneo's debut product line. Every formula was developed over 18 months, tested by working detailers, and refined through customer feedback before going to market.

The name Reclaimed is intentional. We believe in restoring what is already valuable -- not replacing it. The car you have deserves care and protection, whether it is a weekend classic or a daily driver.

## Where We Are Headed

Aioneo was always meant to be more than auto care. The philosophy of restoring what matters extends to your home, your lifestyle, your wellbeing. Future divisions under the Aioneo umbrella -- Aioneo Collection and Aioneo Living -- are in development, each holding to the same standard that defines Reclaimed Auto Care.

We are building a brand for people who care about how things are made, what goes into them, and whether they do what they claim. We hope you will be part of it.
    `,
    category: 'Behind the Brand',
    author: 'David Kessler',
    authorTitle: 'Founder, Aioneo',
    date: '2025-03-10',
    readTime: 6,
    featured: true,
  },
  {
    id: 'blog-016',
    slug: 'how-we-develop-a-formula',
    title: 'Inside the Lab: How a Reclaimed Auto Care Formula Gets Made',
    excerpt:
      'From concept to shelf takes 12 to 18 months at Reclaimed Auto Care. Here is what that process actually looks like -- and why we will not release a product until it is genuinely the best we can make.',
    content: `
Every product on our shelf went through a development process that most customers never see. We think that is worth changing. Transparency about how we make things is part of what makes Aioneo different.

## It Starts with a Problem, Not a Product

We do not develop products because we need to fill a category. Every Reclaimed Auto Care formula exists because we identified a genuine gap -- a job that needed doing better than the existing market was doing it.

Our Ceramic Shield Coating came from a specific frustration: DIY ceramic coatings that either required professional preparation to work or degraded to a mediocre performance level quickly. The brief for our chemist was blunt: create a formula that a careful home detailer can apply and that performs comparably to professional shop applications.

## The Formulation Phase

Our lead formulation chemist begins with a target specification -- pH range, active ingredient category, performance benchmarks, and safety requirements. Early batches are evaluated in-house against the spec and against competitive products.

We typically iterate through 8 to 15 formulations before landing on a candidate worth external testing. Most development time is spent here.

## Real-World Testing

Lab testing tells us what a formula can do under controlled conditions. Real-world testing tells us how it performs in garages, driveways, and varying climates. We work with a panel of independent detailers -- professionals and enthusiasts -- who test formulations on their own vehicles over 60 to 90 day periods.

Feedback from this phase often prompts further refinement. Our current Foam Wash Shampoo went through two reformulations based on tester feedback about rinse behavior in hard-water areas before we were satisfied.

## What Never Makes the Cut

We have discontinued development on products that performed acceptably but not exceptionally. If a formula is not better than what is already available to our customers, it does not ship. This has meant longer development timelines and products we invested in but chose not to release.

We think that is the right call.
    `,
    category: 'Behind the Brand',
    author: 'David Kessler',
    authorTitle: 'Founder, Aioneo',
    date: '2025-04-02',
    readTime: 7,
    featured: true,
  },

  // ─── GIFT IDEAS ──────────────────────────────────────────────────────────────

  {
    id: 'blog-005',
    slug: 'best-car-care-gifts',
    title: 'The Enthusiast\'s Gift Guide: Car Care Gifts They Will Actually Use',
    excerpt:
      'Shopping for the car person in your life? We cut through the noise with our curated gift guide -- from stocking stuffers to comprehensive care bundles.',
    content: `
Finding a gift for a car enthusiast sounds easy until you are standing in the automotive aisle surrounded by generic products in garish packaging. The problem is not selection -- it is quality. Car people know the difference, and they would rather have fewer things that are exceptional.

Here is our guide to gifts that will earn a genuine reaction.

## Under $30: Foam Wash Shampoo

It might seem understated, but the car enthusiast who has not tried a premium wash shampoo will be genuinely impressed. Our Foam Wash produces a level of suds and lubrication they did not know they were missing. Pair it with a quality microfiber mitt for a well-received bundle under $50.

## Under $50: Glass Clarity Kit

Nobody talks about glass care, which means most vehicles are carrying an invisible film of road grime and silicone deposits on the glass. The Glass Clarity Kit delivers an immediately visible result -- crystal-clear visibility, water beading off at highway speeds. It is practical, they will use it immediately, and they will notice the difference.

## Under $100: Interior Revival Kit

For the person who takes pride in their interior, this kit is transformative. Leather conditioning alone makes a remarkable difference on most aging interiors. The complete kit gives them everything to restore every surface -- leather, plastic, vinyl, and fabric.

## The Statement Gift: New Car Starter Bundle

If you want to give something genuinely special to someone who has just bought a new vehicle, our New Car Starter Bundle is it. Ceramic coating, wash products, glass treatment, and accessories -- everything to establish proper protection from day one. It is the gift that protects their investment.

## A Note on Presentation

All our products ship in clean, minimal packaging that presents beautifully. The unboxing experience is designed to feel premium from the first impression, so no additional gift wrapping is necessary unless you prefer it.
    `,
    category: 'Gift Ideas',
    author: 'Jordan Calloway',
    authorTitle: 'Detail Educator, Reclaimed Auto Care',
    date: '2025-11-20',
    readTime: 4,
    featured: false,
  },
  {
    id: 'blog-017',
    slug: 'gift-ideas-father-day-car-enthusiast',
    title: 'Father\'s Day Gift Ideas for the Car Enthusiast Dad',
    excerpt:
      'The dad who washes his car on a Sunday morning before anyone else is up deserves better than a gift card. Here are the Reclaimed Auto Care products he will actually open and use.',
    content: `
Car-enthusiast dads are simultaneously easy to shop for and impossible to shop for. They know exactly what they want and they have strong opinions about quality. Generic automotive products from a gas station endcap are not going to land the way you want.

Here is a gift guide built for people who care about getting it right.

## For the Weekly Washer: The Wash Day Kit

If your dad washes his own car -- and does it properly -- upgrading his wash kit is the gift that pays dividends every single weekend. The Wash Day Kit includes our Foam Wash Shampoo, a premium microfiber wash mitt, two grit guards, and a set of drying towels. Everything to do the job right, packaged together.

## For the Perfectionist: Paint Correction Polish

Some dads have cars they genuinely love and cannot stand seeing swirl marks on. Our Paint Correction Polish is a one-step machine or hand application that addresses light to moderate paint defects. If he does not already have this in his kit, it will become one of his most-used products.

## For the New Vehicle Owner: Ceramic Shield Starter Set

If he recently bought a new or pre-owned vehicle, there is no better time to apply ceramic protection than in the first few months of ownership. This set includes Ceramic Shield Coating, applicator cloths, and IPA surface wipes -- everything needed for a full first application.

## For the Interior-Focused Dad: Leather and Interior Kit

The dad with a well-maintained interior who notices every fingerprint on the trim will appreciate a complete interior kit. Leather cleaner, leather conditioner, interior detailer, and a set of dedicated interior microfiber towels. The kit that keeps the inside of the car as clean as the outside.

## If You Are Not Sure: A Gift Card

We offer Reclaimed Auto Care gift cards in any amount. Car people know what they need better than anyone -- a gift card is genuinely the right call when you are uncertain.
    `,
    category: 'Gift Ideas',
    author: 'Jordan Calloway',
    authorTitle: 'Detail Educator, Reclaimed Auto Care',
    date: '2025-05-25',
    readTime: 4,
    featured: false,
  },

  // ─── COMPANY NEWS ────────────────────────────────────────────────────────────

  {
    id: 'blog-018',
    slug: 'aioneo-one-year-in',
    title: 'One Year In: What We Have Learned Building Reclaimed Auto Care',
    excerpt:
      'A year after our first product shipped, we are sharing an honest look at what went right, what did not, and what we are changing based on what our customers have taught us.',
    content: `
One year ago this month, the first Reclaimed Auto Care orders shipped from our fulfillment center. We had spent 18 months developing the formulas, obsessing over the packaging, and building the systems to support a real product business. The moment the first box went out the door was both exciting and terrifying.

Here is what the past year has actually looked like.

## What Went Well

Our Foam Wash Shampoo became our best-selling product within three months of launch and has maintained that position. Customer feedback has been consistently strong on suds production, lubrication, and rinse performance -- exactly what we optimized for. It is one of those rare cases where the product performed in real customer hands the same way it performed in testing.

Our Ceramic Shield Coating generated the most detailed customer responses of any product we launched. Professional detailers and serious enthusiasts -- our most demanding audience -- gave it the feedback we were hoping for. Several sent us side-by-side comparisons against products they had previously used. That validation mattered to us.

## What We Are Changing

Our Interior Cleaner formula has been updated twice since launch based on customer feedback. The original formulation was slightly too aggressive on certain vinyl coatings. We reformulated, retested, and relaunched the updated version in Q2. Customers who experienced any issue with the original formula received a complimentary replacement.

Our packaging line is being updated. The current bottles are functional but not at the aesthetic level we want for a premium product. New packaging begins shipping with Fall 2025 production runs.

## What Is Next

The Reclaimed Auto Care line is expanding by four products in Q3 and Q4 of this year. We are also in active development on the next Aioneo division -- we will have more to say about that before the year ends.

Thank you to everyone who bought from us, reviewed our products, and sent feedback that made them better. This first year has given us enormous confidence in what we are building.
    `,
    category: 'Company News',
    author: 'David Kessler',
    authorTitle: 'Founder, Aioneo',
    date: '2025-06-15',
    readTime: 5,
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
