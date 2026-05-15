import type { Metadata } from "next";
import Link from "next/link";

import InnerPageShell from "@/components/InnerPageShell";

export const metadata: Metadata = {
  title: "About BRO444 Game — bro444 bonuses, mission & safe APK",
  description:
    "About BRO444 Game in Pakistan — one safe APK download, JazzCash and Easypaisa withdrawals, clear bonus rules, and Urdu support. Everything Pakistani players need to know before they download.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About BRO444 Game — Pakistan's Trusted Earning App",
    description:
      "Learn about BRO444 Game — Pakistan's top earning app with 500+ games, JazzCash & Easypaisa withdrawals, 50% first deposit bonus, and full Urdu support. One safe APK, no fake mirrors.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <InnerPageShell
      path="/about"
      metaName="About BRO444 Game"
      metaDescription="About BRO444 Game in Pakistan — mission, PKR wallet posture, referrals, safer install cues than unofficial bro444 mirrors."
      breadcrumbLabel="About"
      h1="About BRO444 Game"
      intro="We run this official-facing site so Pakistani players find the real APK path, understand JazzCash/Easypaisa flows honestly, and avoid random lookalikes."
    >
      <section aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="font-heading text-lg font-semibold text-foreground">
          What we optimise for
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Clarity:</strong> one primary download/play route, explained in plain PK
            English — no burying withdrawal steps behind pop-ups.
          </li>
          <li>
            <strong className="text-foreground">Trust:</strong> FAQs that answer real switcher questions (mirrors, delays,
            wallet limits) instead of generic promo copy.
          </li>
          <li>
            <strong className="text-foreground">Responsibility:</strong> age gates and risky-play disclaimers surfaced
            here, not swept under typography.
          </li>
        </ul>
      </section>

      <section aria-labelledby="audience-heading">
        <h2 id="audience-heading" className="font-heading text-lg font-semibold text-foreground">
          Who this site is for
        </h2>
        <p className="mt-3">
          Players in Pakistan researching colour prediction rounds, lottery-style draws, Dragon Tiger-style tables,
          lightweight crash-style modes, or slots bundles — anyone who wants a wallet-aware onboarding without clicking
          through ten fake &quot;official&quot; landers first.
        </p>
      </section>

      <section aria-labelledby="seo-editorial-heading">
        <h2 id="seo-editorial-heading" className="font-heading text-lg font-semibold text-foreground">
          Search &amp; editorial intent
        </h2>
        <p className="mt-3">
          Google queries like <em>bro444 game apk</em>, <em>bro444 login</em>, or <em>BRO444 jazzcash payout</em> often surface
          expired files and aggressive affiliate pages. We publish longer, citeable sections — install HowTo JSON-LD, FAQ
          entities, comparison tables — so helpful content can outrank thin mirror domains. Jump back to the{" "}
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
          What we are not
        </h2>
        <p className="mt-3">
          Written content here is not financial or legal advice and does not guarantee third-party payout outcomes.
          Detailed game rules and live wallet timelines sit inside the live BRO444 product; we only summarise frequent JazzCash /
          Easypaisa behaviours on the{" "}
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
