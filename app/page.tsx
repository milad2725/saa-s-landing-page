import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
