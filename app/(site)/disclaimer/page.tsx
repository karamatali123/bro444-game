import type { Metadata } from "next";

import InnerPageShell from "@/components/InnerPageShell";

export const metadata: Metadata = {
  title: "Disclaimer — BRO444 Game App (Pakistan Promotions & Editorial)",
  description:
    "BRO444 Game App disclaimer: marketing copy here is context only — live bonuses, turnover, and payout rules live in the cashier. Real-money loss possible; rogue APK mirrors disclaimed.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer — BRO444 Game App",
    description:
      "Promotional summaries on this site are not binding — verify wagering, bonus eligibility, and withdrawals in-app. Age limits, unofficial domains, liability caps apply.",
    url: "/disclaimer",
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <InnerPageShell
      path="/disclaimer"
      metaName="BRO444 Game App Disclaimer"
      metaDescription="BRO444 Game App site disclaimer — wagering risk, eligibility, rogue APK mirrors, liability limits."
      breadcrumbLabel="Disclaimer"
      h1="Disclaimer"
      intro="Read this before relying on anything published here or moving funds through linked products or payment services."
    >
      <div className="space-y-6">
        <section aria-labelledby="d1">
          <h2 id="d1" className="font-heading text-lg font-semibold text-foreground">
            Informational Use Only
          </h2>
          <p className="mt-2">
            Pages on this site summarise install steps, wallet notes, FAQs, promotions, and comparisons for readers in
            Pakistan. Content may be incomplete, outdated, or simplified.{" "}
            <strong className="text-foreground">In-app terms, cashier messages, and official notices in the BRO444
            Game App product override anything that conflicts here.</strong>
          </p>
        </section>

        <section aria-labelledby="d2">
          <h2 id="d2" className="font-heading text-lg font-semibold text-foreground">
            Financial Risk
          </h2>
          <p className="mt-2">
            Games that involve stakes can result in loss of money. Nothing on this site promises winnings, bonus
            eligibility, withdrawal timing, or account status. Fees, limits, holds, and reversals are determined by the
            operator and payment providers (JazzCash, Easypaisa, bank partners).
          </p>
        </section>

        <section aria-labelledby="d3">
          <h2 id="d3" className="font-heading text-lg font-semibold text-foreground">
            Eligibility and Law
          </h2>
          <p className="mt-2">
            You are responsible for complying with laws and rules that apply to you, including age requirements (often 18+
            where relevant), telecom and banking terms, and any restrictions on real-money play. This site does not provide
            legal advice.
          </p>
        </section>

        <section aria-labelledby="d4">
          <h2 id="d4" className="font-heading text-lg font-semibold text-foreground">
            Unofficial Links and Copies
          </h2>
          <p className="mt-2">
            Third parties may host lookalike pages, APK files, or chat invites. Use only the official download and lobby
            link shown on this authorised BRO444 Game App informational site. We are not responsible for funds or data lost
            through unofficial packages or social channels that pretend to represent the brand.
          </p>
        </section>

        <section aria-labelledby="d5">
          <h2 id="d5" className="font-heading text-lg font-semibold text-foreground">
            Responsible Play
          </h2>
          <p className="mt-2">
            Set limits you can afford, take breaks, and seek professional help if play stops feeling voluntary. Links on this
            site are not counselling or crisis services.
          </p>
        </section>

        <section aria-labelledby="d6">
          <h2 id="d6" className="font-heading text-lg font-semibold text-foreground">
            Limitation of Liability
          </h2>
          <p className="mt-2">
            To the maximum extent allowed by applicable law, the operators of this official BRO444 Game App website disclaim
            liability for loss or damage arising from reliance on site content — including outages, delays, mistaken copy,
            phishing by unrelated parties, or PSP or device issues — except where liability cannot legally be excluded.
          </p>
        </section>

        <section aria-labelledby="d7">
          <h2 id="d7" className="font-heading text-lg font-semibold text-foreground">
            Changes
          </h2>
          <p className="mt-2">
            This disclaimer may be updated without a separate banner. Continuing to use the site after changes constitutes
            acceptance. For factual corrections see{" "}
            <a className="text-primary underline-offset-4 hover:underline" href="/contact">
              Contact
            </a>
            .
          </p>
        </section>
      </div>
    </InnerPageShell>
  );
}
