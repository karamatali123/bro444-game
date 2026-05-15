import Image from "next/image";
import Link from "next/link";
import { DownloadIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";

import { BRO44_LOGO } from "@/lib/brand";
import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const APP_INFO = [
  { label: "App Name", value: "BRO444 Game App" },
  { label: "Version", value: "V2.4.85" },
  { label: "Size", value: "14.89 MB" },
  { label: "Licence", value: "Free" },
  { label: "Downloads", value: "30K+" },
  { label: "Last Updated", value: "15 May, 2026" },
];

const STATS = [
  { k: "Welcome Bonus", v: "Up to 50%", sub: "First deposit reward" },
  { k: "Payout Speed", v: "1–5 Min", sub: "JazzCash · Easypaisa" },
  { k: "Lightweight APK", v: "14.89 MB", sub: "Runs even on 3G" },
  { k: "Live Help", v: "24/7 Urdu", sub: "In-app chat support" },
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border/60"
    >
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_58%_at_12%_-8%,oklch(0.52_0.12_200_/_0.42),transparent_58%),radial-gradient(ellipse_72%_48%_at_92%_18%,oklch(0.72_0.14_88_/_0.2),transparent_55%),radial-gradient(ellipse_50%_38%_at_50%_100%,oklch(0.38_0.08_220_/_0.18),transparent_62%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-12">
          {/* Left: text */}
          <div className="md:col-span-7">
            {/* Live badge */}
            <div className="mb-5 inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                <span
                  className="size-2 rounded-full bg-green-500 motion-safe:animate-pulse"
                  aria-hidden
                />
                Live · Players active now
              </span>
              <span className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                Official Platform
              </span>
            </div>

            <h1
              id="hero-title"
              className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.06]"
            >
              <span className="bg-linear-to-br from-primary via-yellow-300/95 to-[oklch(0.88_0.12_75)] bg-clip-text text-transparent dark:via-yellow-200/85">
                BRO444 Game App
              </span>
              <span className="text-foreground/90">
                {" "}
                — Download Free Earning APK in Pakistan
              </span>
            </h1>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={APK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full justify-center gap-2 shadow-lg shadow-primary/20 sm:w-auto",
                )}
              >
                <DownloadIcon className="size-4" aria-hidden />
                Get BRO444 App — Free Download
              </a>
              <Link
                href="/#games"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full justify-center border-primary/40 sm:w-auto",
                )}
              >
                Explore All Games →
              </Link>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              BRO444 Game App brings all your favourite earning games together in
              a single lightweight platform. Enjoy colour prediction, crash rounds,
              K3 lottery, Teen Patti, and hundreds more — deposit and cash out with{" "}
              <strong className="text-primary">JazzCash</strong> or{" "}
              <strong className="text-primary">Easypaisa</strong>. Claim your{" "}
              <strong className="text-foreground">
                welcome bonus on your very first deposit
              </strong>
              . Download now — just 14.89 MB.
            </p>

            {/* Stats grid */}
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((x) => (
                <li
                  key={x.k}
                  className="rounded-xl border border-border/80 bg-card/60 px-3 py-3 backdrop-blur-sm"
                >
                  <div className="text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
                    {x.k}
                  </div>
                  <div className="mt-0.5 font-heading text-lg font-bold text-primary">
                    {x.v}
                  </div>
                  <div className="text-[0.65rem] text-muted-foreground">
                    {x.sub}
                  </div>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheckIcon
                  className="size-3.5 text-green-500"
                  aria-hidden
                />{" "}
                Verified safe download
              </span>
              <span className="flex items-center gap-1.5">
                <ZapIcon className="size-3.5 text-primary" aria-hidden />{" "}
                Quick registration
              </span>
              <span className="flex items-center gap-1.5">
                <DownloadIcon className="size-3.5 text-primary" aria-hidden />{" "}
                Android &amp; iOS ready
              </span>
            </div>
          </div>

          {/* Right: App info card */}
          <div className="md:col-span-5">
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-1 rounded-3xl bg-linear-to-br from-primary/35 via-transparent to-orange-700/28 blur-2xl"
              />
              <div className="relative rounded-3xl border border-border/70 bg-card/95 p-5 shadow-xl ring-1 ring-primary/25 backdrop-blur-md">
                {/* Logo + name */}
                <div className="flex items-center gap-3">
                  <Image
                    src={BRO44_LOGO.src}
                    alt="BRO444 Game App logo"
                    width={BRO44_LOGO.width}
                    height={BRO44_LOGO.height}
                    className="h-14 w-auto max-w-[4.5rem] object-contain"
                    sizes="56px"
                    priority
                  />
                  <div>
                    <div className="font-heading font-bold text-foreground">
                      BRO444 Game App
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Trusted Earning Platform · PK
                    </div>
                    <div className="mt-1 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">
                          ★
                        </span>
                      ))}
                      <span className="text-[0.65rem] text-muted-foreground ml-1">
                        4.9/5
                      </span>
                    </div>
                  </div>
                </div>

                {/* App info table */}
                <div className="mt-4 divide-y divide-border/60 rounded-xl border border-border/60 bg-muted/20 overflow-hidden">
                  {APP_INFO.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between px-3 py-2 text-sm"
                    >
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium text-foreground">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 px-3 py-2 text-xs text-green-600 dark:text-green-400">
                  ✓ Safe to install · Zero hidden fees · JazzCash &amp;
                  Easypaisa accepted
                </div>

                <a
                  href={APK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "mt-4 w-full gap-2",
                  )}
                >
                  <DownloadIcon className="size-4" aria-hidden />
                  Get It Now — Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
