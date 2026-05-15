import { CheckCircle2Icon, DownloadIcon } from "lucide-react";

import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const VERDICT_POINTS = [
  "Completely free download — zero subscription or hidden charges",
  "JazzCash and Easypaisa payouts processed in 1 to 5 minutes",
  "500+ games spanning 8 categories in one compact APK",
  "Welcome deposit reward up to 50% for every new player",
  "Bilingual Urdu and English interface with round-the-clock live support",
  "Referral earnings withdrawable instantly — no wagering requirement",
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
          Is <span className="text-primary">BRO444 Game App</span> Worth Downloading?
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            BRO444 Game App has earned its reputation as one of the most well-rounded mobile earning platforms
            accessible to Pakistani players in 2026. It bundles entertainment, reliable payment processing, local
            wallet integration, and generous incentive programmes into a single lightweight installation. Because
            the download is free, there is genuinely zero barrier to trying it out.
          </p>
          <p>
            The platform&apos;s entire reward calendar is built around Pakistani culture — from Eid bonus rounds and
            PSL cricket specials to Independence Day flash events. Withdrawal processing consistently outperforms
            competing apps, with most JazzCash and Easypaisa cashouts completing in under five minutes. For
            Pakistani players seeking a trustworthy and rewarding mobile platform, BRO444 Game App delivers.
          </p>
        </div>

        {/* Verdict checklist */}
        <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/8 p-6">
          <p className="font-heading text-base font-bold text-foreground">Why BRO444 Game App is Worth Your Time</p>
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
            BRO444 Game App involves real money — wins generate PKR income, but losses are equally real. This
            platform should never be treated as a primary income source. Deposit only what you can comfortably
            afford to lose, set daily spending limits, and take breaks regularly. Played responsibly, BRO444
            Game App can serve as an enjoyable side-earning channel. We wish you the best of luck.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="font-heading text-xl font-bold text-foreground">
            Ready to start earning? Get BRO444 Game App today — it&apos;s completely free.
          </p>
          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2 px-8 shadow-lg shadow-primary/20")}
          >
            <DownloadIcon className="size-5" aria-hidden />
            Download BRO444 Game App — Free
          </a>
          <p className="text-xs text-muted-foreground">
            Android 6.0+ · 14.89 MB · JazzCash &amp; Easypaisa · Welcome deposit bonus
          </p>
        </div>
      </div>
    </section>
  );
}
