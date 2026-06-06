import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "For individuals getting started.",
    features: [
      "Up to 3 projects",
      "Community support",
      "1 GB storage",
      "Basic analytics",
    ],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing teams that need more.",
    features: [
      "Unlimited projects",
      "Priority support",
      "50 GB storage",
      "Advanced analytics",
      "Custom integrations",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations at scale.",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Unlimited storage",
      "SSO & SAML",
      "Custom SLAs",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-8",
                tier.highlighted
                  ? "border-primary/60 shadow-[0_0_0_1px] shadow-primary/20"
                  : "border-border",
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold tracking-tight">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tier.description}
              </p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {tier.price}
                </span>
                <span className="mb-1 text-muted-foreground">
                  {tier.period}
                </span>
              </div>

              <Button
                className="mt-6 w-full rounded-full"
                variant={tier.highlighted ? "default" : "secondary"}
              >
                {tier.cta}
              </Button>

              <ul className="mt-8 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
