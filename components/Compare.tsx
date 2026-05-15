import { CheckCircle2Icon, XCircleIcon } from "lucide-react";

const PROS = [
  "Free to download — no charge at all",
  "Supports EasyPaisa and JazzCash for easy local transactions",
  "500+ games covering slots, live, sports, and fishing",
  "Fast withdrawals — funds arrive within 5 to 30 minutes",
  "Regular bonuses and promotions every day",
  "50% first deposit bonus for new players",
  "Full Urdu language support",
  "24/7 customer support via live chat and WhatsApp",
  "No referral commission turnover — withdraw earnings directly",
  "Works on Android and iOS (web version for iPhone)",
];

const CONS = [
  "Requires a stable internet connection for the best experience",
  "Real money risk — you can lose money if not played responsibly",
  "Not available on the Google Play Store or Apple App Store",
  "New users may need time to explore all 8 game categories",
  "Can become habit-forming if not managed responsibly",
];

export default function Compare() {
  return (
    <section
      id="compare"
      aria-labelledby="compare-title"
      className="scroll-mt-28 border-b border-border/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Pros and cons</p>
          <h2
            id="compare-title"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl lg:text-[2.65rem]"
          >
            Pros and Cons of <span className="text-primary">BRO444 Game</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Here is an honest look at what BRO444 does well and what to keep in mind before you start playing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Pros */}
          <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2Icon className="size-5 text-green-500" aria-hidden />
              <h3 className="font-heading text-lg font-bold text-foreground">Pros</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {PROS.map((pro) => (
                <li key={pro} className="flex items-start gap-2.5">
                  <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-green-500" aria-hidden />
                  <span className="text-sm leading-relaxed text-foreground/85">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <XCircleIcon className="size-5 text-destructive" aria-hidden />
              <h3 className="font-heading text-lg font-bold text-foreground">Cons</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {CONS.map((con) => (
                <li key={con} className="flex items-start gap-2.5">
                  <XCircleIcon className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden />
                  <span className="text-sm leading-relaxed text-foreground/85">{con}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-border/60 bg-card/60 p-4 text-xs text-muted-foreground">
              BRO444 is a real-money earning platform — always play responsibly and only with money you can
              afford to lose. Set daily limits and take breaks regularly.
            </div>
          </div>
        </div>

        {/* Summary table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card/60">
          <table className="w-full min-w-[480px] text-left text-sm">
            <caption className="sr-only">BRO444 Game feature comparison table</caption>
            <thead>
              <tr className="border-b border-border bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                <th scope="col" className="py-3 pl-5 pr-3 w-1/2">Feature</th>
                <th scope="col" className="py-3 px-3 w-1/4 text-primary">BRO444 Game</th>
                <th scope="col" className="py-3 pr-5 pl-3 w-1/4">Other Earning Apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/80">
              {[
                { feature: "APK size", bro: "14.89 MB", others: "34–40 MB" },
                { feature: "Minimum deposit", bro: "PKR 100", others: "PKR 300–500" },
                { feature: "Minimum withdrawal", bro: "PKR 500", others: "PKR 800–1,000" },
                { feature: "Withdrawal speed", bro: "5–30 minutes", others: "Hours to 3 days" },
                { feature: "First deposit bonus", bro: "50%", others: "Varies or hidden" },
                { feature: "Urdu language support", bro: "Yes ✓", others: "Partial" },
                { feature: "24/7 local support", bro: "Yes ✓", others: "No ✕" },
                { feature: "JazzCash + Easypaisa", bro: "Yes ✓", others: "Varies" },
              ].map((row) => (
                <tr key={row.feature} className="hover:bg-muted/30">
                  <td className="py-3 pl-5 pr-3 font-medium text-foreground/90">{row.feature}</td>
                  <td className="py-3 px-3 font-medium text-primary">{row.bro}</td>
                  <td className="py-3 pr-5 pl-3 text-muted-foreground">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
