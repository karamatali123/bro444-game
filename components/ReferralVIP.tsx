import { UsersIcon, CrownIcon, ShareIcon, WalletIcon } from "lucide-react";

import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const REFERRAL_STEPS = [
  { n: "01", text: "Log in to your BRO444 account and go to the Referral section." },
  { n: "02", text: "Copy your unique referral link from the app." },
  { n: "03", text: "Share the link on WhatsApp, Facebook, or any other platform." },
  { n: "04", text: "You earn a commission when someone joins using your link and makes a deposit." },
  { n: "05", text: "The referral bonus grows with the number of valid players you invite." },
  { n: "06", text: "A valid player needs to deposit PKR 500 and play games worth PKR 5,000." },
];

const TIERS = [
  { name: "Bronze", perk: "Start withdrawing money and earn basic cashback on every game" },
  { name: "Silver", perk: "Withdraw more money at once — your requests are reviewed faster" },
  { name: "Gold", perk: "Get paid out sooner — better cashback and bonus offers" },
  { name: "Platinum", perk: "Jump the support queue — earn more from every friend you invite" },
  { name: "Diamond", perk: "Highest withdrawal limits — up to PKR 500,000 per transaction" },
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
              Earn Money by Inviting Friends to <span className="text-primary">BRO444</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              The BRO444 referral program turns your social network into a source of passive income. You earn a
              commission every time a referred friend plays. There is no cap on how many friends you can invite.
              Referral commissions can be withdrawn directly — no play-through required.
            </p>

            {/* Key benefits */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: UsersIcon, label: "No cap on invites", sub: "Invite as many friends as you want" },
                { icon: WalletIcon, label: "Direct withdrawal", sub: "Referral income goes straight to your wallet" },
                { icon: ShareIcon, label: "Share anywhere", sub: "WhatsApp, Facebook, Instagram" },
                { icon: CrownIcon, label: "Grows with VIP", sub: "Higher VIP = bigger referral commission" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="rounded-xl border border-border/60 bg-card/60 p-3">
                  <Icon className="size-4 text-primary" aria-hidden />
                  <p className="mt-1.5 text-xs font-semibold text-foreground">{label}</p>
                  <p className="mt-0.5 text-[0.65rem] text-muted-foreground">{sub}</p>
                </div>
              ))}
            </div>

            {/* Steps */}
            <h3 className="mt-8 font-heading text-lg font-bold text-foreground">How to Invite Friends</h3>
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
              Start Inviting — Earn Now
            </a>
          </div>

          {/* VIP Levels */}
          <div className="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CrownIcon className="size-5 text-primary" aria-hidden />
              <h3 className="font-heading text-lg font-semibold text-foreground">BRO444 VIP Levels — Bronze to Diamond</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              The more you play, the higher your VIP level. Higher levels mean bigger withdrawals, faster payouts,
              and better cashback. Your level goes up automatically based on your play history.
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
              VIP levels are calculated automatically inside the app. Check your current tier in the Member section.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
