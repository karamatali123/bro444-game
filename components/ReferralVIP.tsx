import { UsersIcon, CrownIcon, ShareIcon, WalletIcon } from "lucide-react";

import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const REFERRAL_STEPS = [
  { n: "01", text: "Sign in to BRO444 Game App and navigate to the Referral section from the menu." },
  { n: "02", text: "Copy your personal referral link — it's unique to your account." },
  { n: "03", text: "Share the link via WhatsApp, Facebook, SMS, or any social platform you use." },
  { n: "04", text: "When a friend registers through your link and funds their account, you earn commission." },
  { n: "05", text: "Commission scales upward — the more active referrals you bring, the higher your rate." },
  { n: "06", text: "A referral qualifies after depositing PKR 500 and accumulating PKR 5,000 in gameplay." },
];

const TIERS = [
  { name: "Bronze", perk: "Unlock withdrawals and earn standard cashback across all game categories" },
  { name: "Silver", perk: "Higher single-withdrawal limits with expedited review processing times" },
  { name: "Gold", perk: "Priority payout queue, improved cashback rates, and exclusive bonus drops" },
  { name: "Platinum", perk: "VIP-only support channel, elevated referral commissions, and flash event access" },
  { name: "Diamond", perk: "Maximum withdrawal ceiling — up to PKR 500,000 per transaction, plus personal account manager" },
] as const;

export default function ReferralVIP() {
  return (
    <section
      id="referral"
      aria-labelledby="referral-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/15"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Referral program */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Referral program</p>
            <h2
              id="referral-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
            >
              Earn Passive Income by Inviting Friends to <span className="text-primary">BRO444 Game App</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              BRO444 Game App&apos;s referral programme converts your social circle into a reliable income stream.
              Every qualifying referral generates commission that deposits directly into your wallet — no
              play-through requirement, no cap on invitations. The more friends who join, the more you earn.
            </p>

            {/* Key benefits */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: UsersIcon, label: "Unlimited invitations", sub: "There is no ceiling on referral count" },
                { icon: WalletIcon, label: "Instant withdrawals", sub: "Commission goes straight to your wallet" },
                { icon: ShareIcon, label: "Share on any channel", sub: "WhatsApp, Facebook, Instagram, SMS" },
                { icon: CrownIcon, label: "VIP-linked rates", sub: "Higher VIP tier = bigger commission %" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="rounded-xl border border-border/60 bg-card/60 p-3">
                  <Icon className="size-4 text-primary" aria-hidden />
                  <p className="mt-1.5 text-xs font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-[0.65rem] text-muted-foreground">{sub}</p>
                </div>
              ))}
            </div>

            {/* Steps */}
            <h3 className="mt-8 font-heading text-lg font-bold text-foreground">How the Referral Process Works</h3>
            <ol className="mt-4 space-y-3">
              {REFERRAL_STEPS.map((s) => (
                <li key={s.n} className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {s.n}
                  </span>
                  <p className="pt-0.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>

            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex gap-2")}
            >
              <ShareIcon className="size-4" aria-hidden />
              Start Referring — Earn Instantly
            </a>
          </div>

          {/* VIP Levels */}
          <div className="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CrownIcon className="size-5 text-primary" aria-hidden />
              <h3 className="font-heading text-lg font-semibold text-foreground">BRO444 Game App VIP Tiers — Bronze to Diamond</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Your VIP tier advances automatically based on cumulative play activity. Higher tiers unlock larger
              withdrawal limits, faster processing, and richer cashback — no manual application needed.
            </p>
            <ol className="mt-6 space-y-4">
              {TIERS.map((t, i) => (
                <li key={t.name} className="flex gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-foreground">{t.name}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{t.perk}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/8 p-3 text-xs text-foreground/85">
              VIP progression is calculated automatically inside BRO444 Game App. Check your current tier in the Member Centre.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
