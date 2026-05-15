import { SmartphoneIcon, TrendingUpIcon, CreditCardIcon, GiftIcon, GlobeIcon } from "lucide-react";

const REASONS = [
  {
    icon: SmartphoneIcon,
    title: "Pakistan's Mobile Gaming is Growing Fast",
    body: "Millions of Pakistanis now own smartphones and look for engaging mobile entertainment every day. BRO444 is built exactly for this audience — light, fast, and easy to use on any Android phone.",
  },
  {
    icon: TrendingUpIcon,
    title: "High Winning Ratio",
    body: "All players can earn a good amount every day if they play responsibly. BRO444's transparent reward system means you always know what you can win before you start.",
  },
  {
    icon: CreditCardIcon,
    title: "Fastest Local Transactions in Pakistan",
    body: "BRO444 connects directly to JazzCash and Easypaisa — the two most-used mobile wallets in Pakistan. Withdrawals arrive in 1 to 5 minutes, not hours or days.",
  },
  {
    icon: GiftIcon,
    title: "Daily Bonuses That Keep Players Coming Back",
    body: "Daily check-in rewards, weekly missions, and special event bonuses make BRO444 more rewarding than any other earning app. There is always something new to claim.",
  },
  {
    icon: GlobeIcon,
    title: "Full Urdu Language Support",
    body: "Not everyone can read English. BRO444 offers a complete Urdu interface so every Pakistani player can use the app comfortably — no language barrier at all.",
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
            Why <span className="text-primary">BRO444 Game</span> is Trending in Pakistan in 2026
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            BRO444 taps into Pakistan's rapidly growing mobile internet user base. Rising interest in mobile earning
            platforms and local payment support makes BRO444 the go-to choice for millions of Pakistani players.
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
