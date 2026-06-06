const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help center", "Community", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                  <path d="M12 2 22 8v8l-10 6L2 16V8l10-6Z" fill="currentColor" opacity="0.9" />
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Northwind
              </span>
            </a>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              The modern platform for high-performance teams to build, deploy,
              and scale.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Northwind, Inc. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for teams that ship.
          </p>
        </div>
      </div>
    </footer>
  )
}
