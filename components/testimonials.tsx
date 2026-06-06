const testimonials = [
  {
    quote:
      "Northwind cut our deployment time by 80%. Our engineers finally spend their days building instead of fighting infrastructure.",
    name: "Sarah Chen",
    role: "VP Engineering, Lumen",
    initials: "SC",
  },
  {
    quote:
      "The analytics alone paid for itself in the first month. We make faster, smarter decisions across the entire org now.",
    name: "Marcus Rivera",
    role: "Head of Product, Drift",
    initials: "MR",
  },
  {
    quote:
      "Onboarding was effortless and the support team is genuinely exceptional. It feels like an extension of our own team.",
    name: "Aisha Patel",
    role: "CTO, Northstar",
    initials: "AP",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Loved by teams everywhere
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <blockquote className="flex-1 text-pretty leading-relaxed text-foreground/90">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
