import { SmartphoneIcon, TrendingUpIcon, CreditCardIcon, GiftIcon, GlobeIcon } from "lucide-react";

const REASONS = [
  {
    icon: SmartphoneIcon,
    title: "Pakistan's Mobile Audience is Exploding",
    body: "Over 190 million mobile connections power Pakistan's digital economy. BRO444 Game App is engineered for this audience — lightweight enough for entry-level Androids and optimised for patchy 3G/4G coverage.",
  },
  {
    icon: TrendingUpIcon,
    title: "Transparent Earning Potential",
    body: "Every game displays its reward structure upfront. Players know exactly what they can earn before placing a single PKR bet — no ambiguous multipliers or concealed conditions.",
  },
  {
    icon: CreditCardIcon,
    title: "Fastest Mobile Wallet Payouts",
    body: "BRO444 Game App integrates directly with JazzCash and Easypaisa — the wallets 80% of Pakistanis already use. Withdrawals typically clear within 1 to 5 minutes, not hours.",
  },
  {
    icon: GiftIcon,
    title: "Non-Stop Reward Cycles",
    body: "Between daily login streaks, weekly missions, referral income, and seasonal promotions, there is always a fresh incentive waiting. Players rarely go a single day without claiming something.",
  },
  {
    icon: GlobeIcon,
    title: "Bilingual Urdu + English Interface",
    body: "Every screen, notification, and support chat is available in Urdu and English. Players switch freely — no translations lost, no features hidden behind a language wall.",
  },
];

export default function WhyTrending() {
  return (
    <section
      id="why-trending"
      aria-labelledby="trending-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why it is trending</p>
          <h2
            id="trending-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
          >
            Why <span className="text-primary">BRO444 Game App</span> is Pakistan&apos;s #1 Trending Earning Platform in 2026
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Pakistan&apos;s smartphone penetration crossed 50% in 2026 and mobile-first earning platforms are riding the wave.
            BRO444 Game App captures this market with local wallet support, Urdu-first design, and a reward system that
            actually pays out — fast.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className="group relative rounded-2xl border border-border/70 bg-card/80 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="font-mono text-2xl font-bold text-primary/20 group-hover:text-primary/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-base font-bold leading-snug text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
