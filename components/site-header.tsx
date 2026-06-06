"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
              <path d="M12 2 22 8v8l-10 6L2 16V8l10-6Z" fill="currentColor" opacity="0.9" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight">Northwind</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </a>
          <Button size="sm" className="rounded-full">
            Get started
          </Button>
        </div>

        <button
          className="flex size-9 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="ghost" size="sm" className="justify-start">
                Sign in
              </Button>
              <Button size="sm" className="rounded-full">
                Get started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
