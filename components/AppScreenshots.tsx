"use client";

import Image from "next/image";
import { useState } from "react";

const SCREENSHOTS = [
  { src: "/images/screenshots/screen-1.webp", alt: "BRO444 Game home screen", label: "Home" },
  { src: "/images/screenshots/screen-2.webp", alt: "BRO444 Game interface", label: "Game Lobby" },
  { src: "/images/screenshots/screen-3.webp", alt: "BRO444 bonus box screen", label: "Bonuses" },
  { src: "/images/screenshots/screen-4.webp", alt: "BRO444 rewards screen", label: "Rewards" },
  { src: "/images/screenshots/screen-5.webp", alt: "BRO444 registration screen", label: "Register" },
  { src: "/images/screenshots/screen-6.webp", alt: "BRO444 referral interface", label: "Referral" },
  { src: "/images/screenshots/screen-7.webp", alt: "BRO444 referral program", label: "Invite Friends" },
  { src: "/images/screenshots/screen-8.webp", alt: "BRO444 withdrawal dashboard", label: "Withdraw" },
];

export default function AppScreenshots() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="screenshots"
      aria-labelledby="screenshots-title"
      className="scroll-mt-28 border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">App screenshots</p>
          <h2
            id="screenshots-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
          >
            See <span className="text-primary">BRO444 Game</span> Inside the App
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Here is what BRO444 looks like on your phone — from the game lobby to bonuses, referrals, and withdrawals.
          </p>
        </div>

        {/* Main preview */}
        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Big preview */}
          <div className="relative flex-shrink-0">
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-primary/15 blur-2xl" />
            <div className="relative w-56 overflow-hidden rounded-[2.5rem] border-4 border-border/60 bg-card shadow-2xl sm:w-64">
              <Image
                src={SCREENSHOTS[active].src}
                alt={SCREENSHOTS[active].alt}
                width={480}
                height={1024}
                className="h-auto w-full"
                sizes="256px"
                priority
              />
            </div>
          </div>

          {/* Thumb grid */}
          <div className="flex-1">
            <p className="mb-4 text-sm font-medium text-muted-foreground">Tap any screenshot to preview it</p>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-4 lg:grid-cols-4">
              {SCREENSHOTS.map((s, i) => (
                <button
                  key={s.src}
                  onClick={() => setActive(i)}
                  aria-label={`Preview: ${s.label}`}
                  className={`group relative overflow-hidden rounded-xl border-2 transition-all ${
                    active === i
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-border/60 hover:border-primary/50"
                  }`}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={240}
                    height={512}
                    className="h-24 w-full object-cover object-top"
                    sizes="120px"
                  />
                  <div className={`absolute inset-x-0 bottom-0 py-1 text-center text-[0.6rem] font-semibold uppercase tracking-wide ${active === i ? "bg-primary text-primary-foreground" : "bg-background/80 text-muted-foreground"}`}>
                    {s.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Feature callouts */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {[
                { v: "500+", label: "Games available" },
                { v: "25K+", label: "Downloads" },
                { v: "PKR 100", label: "Min deposit" },
                { v: "1–5 min", label: "Withdrawal speed" },
              ].map((x) => (
                <div key={x.label} className="rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-center">
                  <div className="font-heading text-xl font-bold text-primary">{x.v}</div>
                  <div className="text-xs text-muted-foreground">{x.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
