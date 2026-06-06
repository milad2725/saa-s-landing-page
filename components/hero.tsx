import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 text-center md:pb-28 md:pt-28">
        <a
          href="#"
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="flex size-1.5 rounded-full bg-primary" />
          Now in public beta — join 12,000+ teams
          <ArrowRight className="size-3.5" />
        </a>

        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Ship faster. Scale smarter. Build without limits.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Northwind is the modern platform that helps high-performance teams
          design, deploy, and scale their products — all from one beautifully
          simple workspace.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="w-full rounded-full px-7 sm:w-auto">
            Start for free
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full rounded-full px-7 sm:w-auto"
          >
            <Play className="size-4" />
            Watch demo
          </Button>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          No credit card required · Free 14-day trial
        </p>
      </div>
    </section>
  )
}
