import { Zap, ShieldCheck, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning fast",
    description:
      "Deploy in seconds with an edge-first architecture built for speed. Your team stays in flow, your users never wait.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description:
      "Enterprise-grade security with SOC 2 compliance, SSO, and granular access controls baked into every plan.",
  },
  {
    icon: BarChart3,
    title: "Insightful analytics",
    description:
      "Understand what matters with real-time dashboards and reports that turn raw data into clear decisions.",
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to move fast
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A complete toolkit designed to remove friction so your team can
            focus on building great products.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
