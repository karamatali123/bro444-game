import Image from "next/image";
import {
  ShieldCheckIcon, WalletIcon, GiftIcon, TrendingDownIcon,
  LayersIcon, BadgeCheckIcon, ArrowUpFromLineIcon, HeadphonesIcon,
} from "lucide-react";

const TIPS = [
  {
    icon: TrendingDownIcon,
    title: "Begin With Low Stakes",
    body: "Use minimum bets to understand each game's mechanics before committing larger amounts. Familiarity reduces risk.",
  },
  {
    icon: GiftIcon,
    title: "Never Miss a Bonus",
    body: "Unclaimed bonuses expire silently. Open the BRO444 Game App promotions tab first thing every morning to capture every reward.",
  },
  {
    icon: LayersIcon,
    title: "Leverage the Referral System",
    body: "Every friend you invite generates commission income that flows directly into your wallet — no play-through needed to withdraw it.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Pre-Set Daily Limits",
    body: "Before your first game of the day, decide your maximum deposit and loss ceiling. Stop immediately once either limit is reached.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Explore Every Category",
    body: "BRO444 Game App offers 8 categories and 500+ titles. Diversifying your gameplay helps you discover where your best returns lie.",
  },
  {
    icon: GiftIcon,
    title: "Stack Promotions Strategically",
    body: "Time your deposits to coincide with active promotions. Festival bonuses and weekly missions can multiply your effective balance significantly.",
  },
  {
    icon: ArrowUpFromLineIcon,
    title: "Cash Out Frequently",
    body: "Set a profit target and withdraw the moment you reach it. Frequent small withdrawals protect your earnings better than letting a balance accumulate.",
  },
  {
    icon: HeadphonesIcon,
    title: "Report Issues Immediately",
    body: "If a transaction stalls or your balance looks incorrect, contact BRO444's Urdu live support without delay. Early reports resolve faster.",
  },
];

export default function SafetyTips() {
  return (
    <section
      id="safety"
      aria-labelledby="safety-title"
      className="scroll-mt-28 border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: tips */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Play smart</p>
            <h2
              id="safety-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
            >
              Smart Tips for Playing <span className="text-primary">BRO444 Game App</span> Safely
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              The most successful players on BRO444 Game App share one habit — they set boundaries before they
              play. Combine daily bonuses, referral income, and disciplined bankroll management to earn
              consistently without unnecessary risk.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TIPS.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="group flex gap-3 rounded-xl border border-border/60 bg-card/60 p-4 transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-foreground">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image + responsible gaming note */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-xl">
              <Image
                src="/images/safety-tips.webp"
                alt="BRO444 Game App safety and responsible play tips for Pakistani players"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl border border-destructive/30 bg-destructive/8 p-5">
              <p className="text-sm font-bold text-foreground">Play Responsibly</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                BRO444 Game App is a real-money platform — earning potential is genuine, but so is the risk
                of loss. Only fund your account with money you can afford to lose entirely. Avoid chasing
                losses by increasing bet sizes. Never share your OTP, withdrawal PIN, or login credentials
                with anyone — including individuals claiming to represent BRO444 support.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4 text-xs text-muted-foreground">
              BRO444 Game App strongly recommends activating the daily deposit and loss limit features in your
              app settings. These controls help you manage play responsibly. Remember — this is not a
              guaranteed income source.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
