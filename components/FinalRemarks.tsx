import { CheckCircle2Icon, DownloadIcon } from "lucide-react";

import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const VERDICT_POINTS = [
  "Free to download — no upfront cost or subscription",
  "JazzCash and Easypaisa withdrawals in 5 to 30 minutes",
  "500+ games across 8 categories all in one app",
  "50% first deposit bonus for every new player",
  "Full Urdu interface and 24/7 Urdu live support",
  "Referral commissions paid directly — no turnover needed",
];

export default function FinalRemarks() {
  return (
    <section
      id="final-remarks"
      aria-labelledby="final-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/20"
    >
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Final verdict</p>
        <h2
          id="final-title"
          className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl"
        >
          Is <span className="text-primary">BRO444 Game</span> Worth It?
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            BRO444 Game stands as one of the most complete mobile gaming platforms available in Pakistan today. It
            combines entertainment, reliability, local payment support, and attractive rewards in one place. Its
            free-to-download nature removes any financial risk for first-time users — there is no reason not to
            try it at least once.
          </p>
          <p>
            BRO444 tailors its entire experience to the Pakistani market. Promotions align with Pakistani culture,
            holidays, and major cricket events throughout the year. The withdrawal system is faster and more reliable
            than most other earning apps. BRO444 stands as Pakistan's most trusted and rewarding mobile gaming
            platform in 2026.
          </p>
        </div>

        {/* Verdict checklist */}
        <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/8 p-6">
          <p className="font-heading text-base font-bold text-foreground">Why BRO444 is Worth Downloading</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {VERDICT_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span className="text-sm text-foreground/85">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Responsible gaming notice */}
        <div className="mt-6 rounded-2xl border border-destructive/30 bg-destructive/8 p-5">
          <p className="text-sm font-bold text-foreground">Important: Play Responsibly</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            BRO444 is a real-money earning game — you can win PKR, but you can also lose it. Never consider this
            platform as a permanent source of income. Only play with money you can afford to lose. If played
            responsibly, BRO444 can generate a good daily side income. We wish you good luck.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="font-heading text-xl font-bold text-foreground">
            Ready to start earning? Download BRO444 today — it&apos;s free.
          </p>
          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2 px-8 shadow-lg shadow-primary/20")}
          >
            <DownloadIcon className="size-5" aria-hidden />
            Download BRO444 Game — Free
          </a>
          <p className="text-xs text-muted-foreground">
            Android 6.0+ · 14.89 MB · JazzCash &amp; Easypaisa · 50% first deposit bonus
          </p>
        </div>
      </div>
    </section>
  );
}
