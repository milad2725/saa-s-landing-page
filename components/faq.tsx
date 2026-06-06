"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "How does the free trial work?",
    a: "You get full access to all Pro features for 14 days, no credit card required. Cancel anytime before it ends and you won't be charged.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time directly from your account settings. Changes take effect immediately.",
  },
  {
    q: "Do you offer discounts for startups?",
    a: "Yes, we offer special pricing for early-stage startups and nonprofits. Reach out to our sales team to learn more about eligibility.",
  },
  {
    q: "Is my data secure?",
    a: "Security is core to everything we build. We're SOC 2 Type II compliant, encrypt data in transit and at rest, and support SSO on every paid plan.",
  },
  {
    q: "What kind of support do you provide?",
    a: "All plans include community and email support. Pro plans get priority response times, and Enterprise customers get a dedicated success manager.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-border bg-card"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{faq.q}</span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                    {isOpen ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-pretty leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
