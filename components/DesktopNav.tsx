"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const PRIMARY: { href: string; label: string }[] = [
  { href: "/#about", label: "About" },
  { href: "/#games", label: "Games" },
  { href: "/#promotions", label: "Bonuses" },
  { href: "/#download", label: "Download" },
  { href: "/#payments", label: "Payments" },
  { href: "/#faq", label: "FAQ" },
];

const MORE: { href: string; label: string }[] = [
  { href: "/#features", label: "20 Reasons to Play" },
  { href: "/#screenshots", label: "App Screenshots" },
  { href: "/#login", label: "Register & Login" },
  { href: "/#referral", label: "Referral & VIP" },
  { href: "/#compare", label: "Pros & Cons" },
  { href: "/#review", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const linkClass =
  "inline-flex shrink-0 items-center whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium text-muted-foreground outline-none hover:bg-accent hover:text-accent-foreground motion-safe:transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:rounded-lg lg:px-2.5 lg:text-sm xl:px-3";

export default function DesktopNav() {
  const [moreOpen, setMoreOpen] = React.useState(false);
  const wrapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!moreOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  return (
    <nav
      aria-label="Primary"
      className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-0.5 md:flex lg:gap-1"
    >
      {PRIMARY.map((item) => (
        <a key={item.href} href={item.href} className={linkClass}>
          {item.label}
        </a>
      ))}

      <div ref={wrapRef} className="relative shrink-0">
        <button
          type="button"
          aria-expanded={moreOpen}
          aria-haspopup="menu"
          aria-controls="desktop-nav-more"
          id="desktop-nav-more-trigger"
          onClick={() => setMoreOpen((o) => !o)}
          className={cn(
            linkClass,
            "gap-0.5 pr-1.5 text-muted-foreground lg:pr-2",
            moreOpen && "bg-accent text-accent-foreground"
          )}
        >
          More
          <ChevronDownIcon
            className={cn("size-3.5 opacity-80 motion-safe:transition-transform", moreOpen && "rotate-180")}
            aria-hidden
          />
        </button>
        {moreOpen ? (
          <div
            id="desktop-nav-more"
            role="menu"
            aria-labelledby="desktop-nav-more-trigger"
            className="absolute right-0 top-[calc(100%+6px)] z-50 flex min-w-[11rem] flex-col rounded-lg border border-border/80 bg-popover p-1 shadow-md ring-1 ring-foreground/5"
          >
            {MORE.map((item) => (
              <a
                key={item.href}
                role="menuitem"
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-popover-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setMoreOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
