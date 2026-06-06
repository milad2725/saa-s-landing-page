const companies = ["Acme", "Globex", "Initech", "Umbrella", "Hooli", "Vehement"]

export function TrustedBy() {
  return (
    <section className="border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by fast-growing teams worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
          {companies.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              <span className="flex size-6 items-center justify-center rounded-md border border-border">
                <span className="size-2.5 rounded-sm bg-current" />
              </span>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
