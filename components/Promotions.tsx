import Image from "next/image";
import { GiftIcon, CalendarCheckIcon, FlagIcon, PercentIcon, CrownIcon, TargetIcon } from "lucide-react";

import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BONUSES = [
  {
    icon: GiftIcon,
    title: "Welcome Bonus — 50%",
    body: "Get a 50% bonus on your first deposit plus a free welcome bonus of PKR 38. This gives you extra balance to start playing right away.",
    highlight: "Up to 50% match",
    color: "border-primary/40 bg-primary/8",
    iconColor: "text-primary bg-primary/15 border-primary/30",
  },
  {
    icon: CalendarCheckIcon,
    title: "Daily Check-In Rewards",
    body: "Log in every day to collect free bonus credits. Consecutive login streaks unlock premium reward tiers automatically.",
    highlight: "Free daily bonus",
    color: "border-green-500/40 bg-green-500/8",
    iconColor: "text-green-500 bg-green-500/15 border-green-500/30",
  },
  {
    icon: TargetIcon,
    title: "Weekly Missions",
    body: "Complete platform tasks each week to earn milestone-based reward packages and extra PKR credits.",
    highlight: "Weekly rewards",
    color: "border-cyan-500/40 bg-cyan-500/8",
    iconColor: "text-cyan-500 bg-cyan-500/15 border-cyan-500/30",
  },
  {
    icon: FlagIcon,
    title: "Festival Promotions",
    body: "Eid, Independence Day, and PSL cricket events trigger exclusive bonus rounds and special reward packages.",
    highlight: "Event specials",
    color: "border-orange-500/40 bg-orange-500/8",
    iconColor: "text-orange-500 bg-orange-500/15 border-orange-500/30",
  },
  {
    icon: PercentIcon,
    title: "Cashback Offers",
    body: "Receive a percentage of your losses back on select game days. The more you play, the more cashback you can earn.",
    highlight: "Loss protection",
    color: "border-purple-500/40 bg-purple-500/8",
    iconColor: "text-purple-500 bg-purple-500/15 border-purple-500/30",
  },
  {
    icon: CrownIcon,
    title: "VIP Level Rewards",
    body: "Higher VIP tiers unlock premium bonuses, faster withdrawals, and better cashback rates as your verified play stacks up.",
    highlight: "5 VIP levels",
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
              Bonuses &amp; Rewards on <span className="text-primary">BRO444 Game</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              BRO444 gives new players a big welcome bonus, daily login rewards, cashback, and festival promotions.
              All bonus rules are shown clearly before you confirm any deposit — no hidden conditions.
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
              alt="BRO444 Game bonuses and rewards"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              All bonus rules — including play-through requirements and expiry dates — are shown to you before you
              confirm any deposit. BRO444 believes in full transparency with no hidden conditions.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Check the Promotions page inside the app daily — new bonus offers appear regularly. Festival bonuses
              during Eid, PSL season, and Independence Day are especially generous.
            </p>
            <div className="rounded-xl border border-primary/30 bg-primary/8 p-4 text-sm text-foreground/85">
              <strong>Daily Rebate Bonus:</strong> Your rebate is added to your account every day at 12 AM
              automatically — an easy guaranteed daily boost to your balance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
