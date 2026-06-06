import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Ready to build something great?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Join thousands of teams shipping faster with Northwind. Start your
              free trial today — no credit card required.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="w-full rounded-full px-7 sm:w-auto">
                Start for free
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="w-full rounded-full px-7 sm:w-auto"
              >
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
