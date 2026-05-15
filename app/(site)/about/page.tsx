import type { Metadata } from "next";
import Link from "next/link";

import InnerPageShell from "@/components/InnerPageShell";

export const metadata: Metadata = {
  title: "About BRO444 Game App — Mission, Bonuses & Safe APK Download",
  description:
    "About BRO444 Game App in Pakistan — one verified APK download, JazzCash and Easypaisa withdrawals, transparent bonus rules, and Urdu support. Everything Pakistani players need to know before downloading.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About BRO444 Game App — Pakistan's Trusted Earning Platform",
    description:
      "Learn about BRO444 Game App — Pakistan's top earning platform with 500+ games, JazzCash & Easypaisa withdrawals, welcome deposit bonus, and full Urdu support. One safe APK, no fake mirrors.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <InnerPageShell
      path="/about"
      metaName="About BRO444 Game App"
      metaDescription="About BRO444 Game App in Pakistan — mission, PKR wallet flows, referrals, and safer install cues than unofficial mirrors."
      breadcrumbLabel="About"
      h1="About BRO444 Game App"
      intro="We maintain this official-facing site so Pakistani players can find the authentic APK path, understand JazzCash and Easypaisa deposit and withdrawal flows honestly, and avoid random lookalike domains."
    >
      <section aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="font-heading text-lg font-semibold text-foreground">
          What We Optimise For
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Clarity:</strong> one primary download and play route, explained
            in plain PK English — no burying withdrawal steps behind pop-ups or redirects.
          </li>
          <li>
            <strong className="text-foreground">Trust:</strong> FAQs that answer real user questions (mirrors,
            delays, wallet limits) instead of generic promotional filler.
          </li>
          <li>
            <strong className="text-foreground">Responsibility:</strong> age gates and responsible-play
            disclaimers surfaced prominently, not swept under decorative typography.
          </li>
        </ul>
      </section>

      <section aria-labelledby="audience-heading">
        <h2 id="audience-heading" className="font-heading text-lg font-semibold text-foreground">
          Who This Site Serves
        </h2>
        <p className="mt-3">
          Players in Pakistan researching colour prediction rounds, lottery-style draws, Dragon Tiger-style tables,
          lightweight crash-style modes, or slots bundles — anyone who wants a wallet-aware onboarding experience
          without clicking through ten questionable &quot;official&quot; landing pages first.
        </p>
      </section>

      <section aria-labelledby="seo-editorial-heading">
        <h2 id="seo-editorial-heading" className="font-heading text-lg font-semibold text-foreground">
          Search &amp; Editorial Intent
        </h2>
        <p className="mt-3">
          Google queries like <em>bro444 game app apk</em>, <em>bro444 app login</em>, or <em>BRO444 game app
          jazzcash payout</em> often surface expired files and aggressive affiliate pages. We publish longer,
          citeable sections — install HowTo JSON-LD, FAQ entities, comparison tables — so genuinely helpful content
          can outrank thin mirror domains. Jump back to the{" "}
          <Link className="text-primary underline-offset-4 hover:underline" href="/#faq">
            homepage FAQ
          </Link>{" "}
          or{" "}
          <Link className="text-primary underline-offset-4 hover:underline" href="/#download">
            install module
          </Link>{" "}
          anytime; those anchors are the same paths we want indexed as canonical entry points.
        </p>
      </section>

      <section aria-labelledby="not-heading">
        <h2 id="not-heading" className="font-heading text-lg font-semibold text-foreground">
          What We Are Not
        </h2>
        <p className="mt-3">
          Written content here is not financial or legal advice and does not guarantee third-party payout outcomes.
          Detailed game rules and live wallet timelines reside inside the live BRO444 product; we only summarise
          frequent JazzCash and Easypaisa behaviours on the{" "}
          <Link className="text-primary underline-offset-4 hover:underline" href="/#payments">
            wallet notes section
          </Link>{" "}
          — always verify in-app before moving money.
        </p>
      </section>

      <p>
        Questions? Reach us via the{" "}
        <Link className="text-primary underline-offset-4 hover:underline" href="/contact">
          contact page
        </Link>
        .
      </p>
    </InnerPageShell>
  );
}
