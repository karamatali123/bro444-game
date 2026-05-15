import Image from "next/image";
import Link from "next/link";
import { CheckCircle2Icon } from "lucide-react";

import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
  "Completely free — zero cost to download or install",
  "JazzCash & Easypaisa integration — no bank required",
  "Welcome bonus waiting on your first deposit",
  "Round-the-clock Urdu-speaking support team",
  "Among the best payout rates in Pakistan's mobile gaming space",
  "500+ titles across 8 game categories",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/10"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        {/* Overview */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Platform overview</p>
            <h2
              id="about-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
            >
              What is <span className="text-primary">BRO444 Game App</span>?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              BRO444 Game App connects you to Pakistan's favourite earning games through a single lightweight
              application. Every transaction — from adding funds to cashing out winnings — flows through
              EasyPaisa or JazzCash without requiring a bank account. The platform employs modern encryption
              protocols to safeguard your personal and financial data at every step.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Installing BRO444 Game App costs nothing on both Android and iOS devices. There are no hidden
              fees, no subscriptions, and no premium tiers to unlock the full experience. The platform
              consistently delivers some of the best payout rates available in Pakistan's mobile gaming
              market. Start playing today and see why thousands of players trust this app.
            </p>
            <ul className="mt-6 space-y-2.5">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-green-500" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex")}
            >
              Get BRO444 App — Free
            </a>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/70 shadow-xl">
              <Image
                src="/images/overview.webp"
                alt="BRO444 Game App overview — earning platform Pakistan"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* What is the BRO444 APK */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-border/70 shadow-xl">
              <Image
                src="/images/what-is-bro444.webp"
                alt="BRO444 Game App APK — mobile earning platform Pakistan"
                width={800}
                height={430}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">About the APK</p>
            <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight md:text-3xl">
              Why Choose the <span className="text-primary">BRO444 Game App APK</span>?
            </h3>
            <div className="mt-4 space-y-4 text-muted-foreground md:text-lg">
              <p>
                The BRO444 Game App APK is a purpose-built mobile application designed to deliver a seamless
                earning experience. It packages hundreds of game categories into a compact file that runs
                efficiently on virtually any Android or iOS device — even those with limited storage.
              </p>
              <p>
                What sets this app apart is its commitment to fairness and accessibility. The interface blends
                simple Urdu and English prompts so that first-time users can navigate every feature without
                confusion. Cash rewards are genuine, transparent, and processed quickly through local wallets.
              </p>
              <p>
                BRO444 Game App is rapidly gaining popularity thanks to its generous reward structure. New
                players receive bonuses from their very first session. Frequent updates bring fresh games and
                seasonal promotions — ensuring the experience never goes stale.
              </p>
            </div>
            <Link
              href="/#download"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6 inline-flex border-primary/40")}
            >
              Installation Guide →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
