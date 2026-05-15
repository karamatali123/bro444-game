import Image from "next/image";
import { GiftIcon, CalendarCheckIcon, FlagIcon, PercentIcon, CrownIcon, TargetIcon } from "lucide-react";

import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BONUSES = [
  {
    icon: GiftIcon,
    title: "Welcome Reward — Up to 50%",
    body: "Your very first deposit unlocks a generous welcome reward — up to 50% extra balance plus a complimentary PKR 38 starter credit. Jump straight into gameplay with a boosted wallet.",
    highlight: "First deposit match",
    color: "border-primary/40 bg-primary/8",
    iconColor: "text-primary bg-primary/15 border-primary/30",
  },
  {
    icon: CalendarCheckIcon,
    title: "Consecutive Login Bonuses",
    body: "Show up every day and get rewarded for it. BRO444 Game App tracks your login streak and progressively increases your daily bonus — the longer the streak, the bigger the payout.",
    highlight: "Streak multiplier",
    color: "border-green-500/40 bg-green-500/8",
    iconColor: "text-green-500 bg-green-500/15 border-green-500/30",
  },
  {
    icon: TargetIcon,
    title: "Weekly Challenge Rewards",
    body: "Complete in-app challenges each week to unlock milestone rewards. Tasks range from trying new games to reaching play targets — every completed mission adds PKR to your wallet.",
    highlight: "Milestone PKR",
    color: "border-cyan-500/40 bg-cyan-500/8",
    iconColor: "text-cyan-500 bg-cyan-500/15 border-cyan-500/30",
  },
  {
    icon: FlagIcon,
    title: "Pakistani Festival Specials",
    body: "Eid-ul-Fitr, Eid-ul-Adha, 14th August, and PSL finals trigger exclusive limited-time bonus rounds. These seasonal events offer reward tiers you won't find on regular days.",
    highlight: "Seasonal exclusives",
    color: "border-orange-500/40 bg-orange-500/8",
    iconColor: "text-orange-500 bg-orange-500/15 border-orange-500/30",
  },
  {
    icon: PercentIcon,
    title: "Automatic Cashback Days",
    body: "Selected days of the week automatically return a percentage of net losses back into your account. BRO444 Game App applies the rebate without requiring you to opt in.",
    highlight: "Auto-applied rebate",
    color: "border-purple-500/40 bg-purple-500/8",
    iconColor: "text-purple-500 bg-purple-500/15 border-purple-500/30",
  },
  {
    icon: CrownIcon,
    title: "VIP Tier Exclusives",
    body: "Reaching Silver, Gold, or Diamond VIP unlocks tier-specific rewards: priority withdrawals, elevated cashback percentages, and invitation-only tournament access.",
    highlight: "5 tiers available",
    color: "border-yellow-500/40 bg-yellow-500/8",
    iconColor: "text-yellow-500 bg-yellow-500/15 border-yellow-500/30",
  },
];

export default function Promotions() {
  return (
    <section
      id="promotions"
      aria-labelledby="promotions-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Rewards &amp; promotions</p>
            <h2
              id="promotions-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
            >
              Bonuses &amp; Rewards on <span className="text-primary">BRO444 Game App</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              BRO444 Game App rewards you from the very first deposit and keeps rewarding daily. Welcome credits,
              login streaks, cashback rebates, and Pakistani festival specials — every bonus rule is displayed
              transparently before you commit any funds.
            </p>
          </div>
          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "shrink-0 self-start md:self-auto")}
          >
            Claim Your Bonus
          </a>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map(({ icon: Icon, title, body, highlight, color, iconColor }) => (
            <li
              key={title}
              className={`group rounded-2xl border p-5 transition-all hover:-translate-y-1 hover:shadow-md ${color}`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl border ${iconColor}`}>
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-[0.65rem] font-semibold text-muted-foreground">
                  {highlight}
                </span>
              </div>
              <h3 className="mt-3 font-heading text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg">
            <Image
              src="/images/bonuses.webp"
              alt="BRO444 Game App bonuses and reward tiers"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              Every bonus on BRO444 Game App comes with clearly stated play-through requirements and expiry
              windows — visible before you tap &quot;Confirm Deposit.&quot; No surprise wagering rules, no buried
              fine print. What you see is what you get.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Open the Promotions tab inside BRO444 Game App every morning — fresh offers rotate regularly.
              Pakistani festival bonuses during Eid, PSL season, and national holidays tend to carry the
              highest reward multipliers of the year.
            </p>
            <div className="rounded-xl border border-primary/30 bg-primary/8 p-4 text-sm text-foreground/85">
              <strong>Midnight Rebate:</strong> Your automatic daily rebate bonus lands in your wallet at
              exactly 12:00 AM every night — a guaranteed balance boost for the next day&apos;s sessions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
