import Image from "next/image";
import {
  ShieldCheckIcon, WalletIcon, GiftIcon, TrendingDownIcon,
  LayersIcon, BadgeCheckIcon, ArrowUpFromLineIcon, HeadphonesIcon,
} from "lucide-react";

const TIPS = [
  {
    icon: TrendingDownIcon,
    title: "Start Small",
    body: "Begin with low-stakes games to learn how each game works before increasing your bets.",
  },
  {
    icon: GiftIcon,
    title: "Claim All Bonuses",
    body: "Never let unclaimed bonuses expire. Check the promotions page inside the app every day.",
  },
  {
    icon: LayersIcon,
    title: "Use the Referral Program",
    body: "Share your link actively to build a reliable passive income. Referral earnings can be withdrawn directly.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Set Winning and Loss Limits",
    body: "Decide your daily limit before you start. Stop playing once you hit your preset winning or loss amount.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Try All Game Categories",
    body: "Explore different games to find which ones suit your style. BRO444 has 8 categories and 500+ games.",
  },
  {
    icon: GiftIcon,
    title: "Check Promotions First",
    body: "Always review active promotions before depositing so you can maximize your bonus credits.",
  },
  {
    icon: ArrowUpFromLineIcon,
    title: "Withdraw Regularly",
    body: "Set a target balance and withdraw as soon as you reach it. Don't let winnings sit — cash out often.",
  },
  {
    icon: HeadphonesIcon,
    title: "Contact Support Early",
    body: "If you notice any issue with your account or wallet, contact Urdu live support immediately. Don't wait.",
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
              Tips to Play <span className="text-primary">BRO444 Game</span> Safely
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Smart players always set a daily budget before they start. Claiming daily bonuses and using the
              referral program are the best ways to earn without taking unnecessary risks.
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
                alt="BRO444 Game safety tips for Pakistani players"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl border border-destructive/30 bg-destructive/8 p-5">
              <p className="text-sm font-bold text-foreground">Play Responsibly</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                BRO444 is a real-money earning game — you can win, but you can also lose. Only play with money
                you can afford to lose. Never chase losses by increasing your bets. Do not share your OTP or
                withdrawal PIN with anyone, including people claiming to be BRO444 support.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4 text-xs text-muted-foreground">
              BRO444 recommends setting daily deposit and withdrawal limits inside the app settings to help you
              manage your play responsibly. This is not a permanent source of income.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
