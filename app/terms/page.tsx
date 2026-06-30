import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata: Metadata = genMeta({
  title: 'Terms & Conditions',
  description: 'Aioneo Terms and Conditions — your agreement with Aioneo for use of our website and services.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl text-white">Terms & Conditions</h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: January 1, 2025</p>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0]">
        <div className="max-w-3xl mx-auto space-y-8 text-[#2C2C2C]/70 text-sm leading-relaxed">
          <p className="text-base">
            By accessing or using aioneo.com, you agree to be bound by these Terms and Conditions. Please read them carefully. If you do not agree, do not use our website.
          </p>

          {[
            { title: '1. Use of Our Website', body: 'You may use our website for lawful purposes only. You agree not to use it in any way that violates applicable laws, infringes intellectual property rights, transmits harmful or malicious content, or interferes with the operation of our site. We reserve the right to terminate access to any user who violates these terms.' },
            { title: '2. Account Registration', body: 'If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use. You must provide accurate and current information during registration.' },
            { title: '3. Products and Pricing', body: 'We make every effort to display accurate product information and pricing on our website. We reserve the right to correct errors or update information at any time. In the event of a pricing error, we will contact you before processing your order. We reserve the right to refuse or cancel orders at our discretion.' },
            { title: '4. Purchases and Payment', body: 'By placing an order, you represent that you are authorized to use the payment method provided. All purchases are subject to our availability and acceptance. We may decline or cancel orders for any reason, including suspected fraud. Payment is processed at the time of purchase.' },
            { title: '5. Shipping and Delivery', body: 'Shipping times are estimates and not guaranteed. We are not responsible for delays caused by carriers, weather, customs, or other factors outside our control. Risk of loss passes to you upon delivery to the carrier. See our Shipping Policy for full details.' },
            { title: '6. Returns and Refunds', body: 'Our return policy is described in our Returns Policy. We reserve the right to deny returns that do not meet policy requirements or that appear to be abused.' },
            { title: '7. Intellectual Property', body: 'All content on this website — including text, images, logos, product names, and designs — is the property of Aioneo or its licensors and is protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without our express written permission.' },
            { title: '8. Disclaimer of Warranties', body: 'Our website and products are provided "as is." We disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.' },
            { title: '9. Limitation of Liability', body: 'To the fullest extent permitted by law, Aioneo and its officers, directors, employees, and agents shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products, even if we have been advised of the possibility of such damages. Our total liability for any claim shall not exceed the amount you paid for the product giving rise to the claim.' },
            { title: '10. Governing Law', body: 'These Terms shall be governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflict of law provisions. Any disputes shall be resolved in the state or federal courts located in Buncombe County, North Carolina.' },
            { title: '11. Changes to These Terms', body: 'We may update these Terms at any time. We will post the updated Terms on our website with a new effective date. Your continued use of our website after the effective date constitutes your acceptance of the updated Terms.' },
            { title: '12. Contact', body: 'Questions about these Terms? Contact us at legal@aioneo.com.' },
          ].map((s) => (
            <section key={s.title} aria-labelledby={s.title}>
              <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
