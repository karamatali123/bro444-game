import type { Metadata } from "next";
import Link from "next/link";

import InnerPageShell from "@/components/InnerPageShell";
import { APK_URL, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "BRO444 Game support — APK, bonuses, JazzCash & Easypaisa",
  description:
    "BRO444 / bro444 help: sanctioned APK, promo/cashier questions (in-app first), JazzCash/Easypaisa withdrawal & KYC queues, faster-reply checklist for PK players.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "BRO444 Game support — Pakistan",
    description:
      "Bonus opt-in stuck? Withdrawal pending? OTP lockout? Start in-app; use this page for lobby URL checks, site copy fixes, or partnership mail — never OTPs in email.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  const mailto =
    CONTACT_EMAIL.length > 0
      ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("BRO444 Game — question from official site")}`
      : null;

  return (
    <InnerPageShell
      path="/contact"
      metaName="Contact BRO444 Game — Pakistan support"
      metaDescription="Official BRO444 Game help: APK lobby, in-app PKR wallet support, and how to reach the team for site or partnership questions."
      breadcrumbLabel="Contact"
      h1="Contact &amp; support"
      intro="For balances, JazzCash or Easypaisa cashouts stuck on review, turnover rules, KYC, OTP fatigue, or account recovery, open the product&apos;s in-app Help / Support queue first — agents can inspect tickets tied to your profile. Use this contact page when you need the sanctioned lobby URL or clarification about wording on this site."
    >
      <section aria-labelledby="players-heading">
        <h2 id="players-heading" className="font-heading text-lg font-semibold text-foreground">
          Players: withdrawals, login, PKR wallets
        </h2>
        <p className="mt-3">
          Launch BRO444 Game from the button below, sign in, then open <strong className="text-foreground">
            Help / Support
          </strong>{" "}
          or the chat surfaced on your profile. Keep your UID, timestamps, JazzCash or Easypaisa receipt IDs, and any bank
          SMS handy. Most delayed PKR transfers trace to name or KYC drift — only back-office staff can reconcile that;
          random WhatsApp &quot;agents&quot; cannot.
        </p>
        <p className="mt-3">
          Searching{" "}
          <strong className="text-foreground/90">bro444 game customer care Pakistan</strong>,{" "}
          <strong className="text-foreground/90">bro444 JazzCash payout</strong>, or{" "}
          <strong className="text-foreground/90">BRO444 withdrawal pending</strong>? Start in-app; the FAQ on the{" "}
          <Link className="text-primary underline-offset-4 hover:underline" href="/">
            home page
          </Link>{" "}
          explains typical wagering, wallet-limit, or network causes without exposing OTP codes in public chats.
        </p>
      </section>

      <section aria-labelledby="channels-heading">
        <h2 id="channels-heading" className="font-heading text-lg font-semibold text-foreground">
          Official APK &amp; lobby
        </h2>
        <dl className="mt-4 space-y-6">
          <div>
            <dt className="font-medium text-foreground">Install &amp; play</dt>
            <dd className="mt-2">
              <a
                className="text-primary underline-offset-4 hover:underline"
                href={APK_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Open sanctioned BRO444 Game — download / register link
              </a>
              {" — "}
              compare the HTTPS hostname with what your guild lead published before sideloading anything. Typosquatted
              bro444 mirrors are routine in PK search results.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Website or partnership enquiries</dt>
            <dd className="mt-2">
              {mailto ? (
                <>
                  <a className="text-primary underline-offset-4 hover:underline" href={mailto}>
                    Email {CONTACT_EMAIL}
                  </a>
                  {" — "}site copy corrections, influencer packages, regional campaigns, or press — never passwords or OTPs.
                </>
              ) : (
                <>
                  Account-only topics stay inside the live app. For issues limited to this editorial site
                  (broken banners, misleading text), follow operator announcements or ask your account manager when a
                  mailbox is published. Until then use the{" "}
                  <Link className="text-primary underline-offset-4 hover:underline" href="/#faq">
                    FAQ
                  </Link>{" "}
                  and in-app chat for balance-related problems.
                </>
              )}
            </dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="tips-heading">
        <h2 id="tips-heading" className="font-heading text-lg font-semibold text-foreground">
          What helps us reply faster
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Android version and phone model (install or crash issues).</li>
          <li>Whether JazzCash or Easypaisa is bound to the BRO444 wallet, or bank only.</li>
          <li>Redacted screenshots: hide full CNIC except last digits if support asks.</li>
          <li>Never paste OTP codes or full card numbers into email or social DM.</li>
        </ul>
      </section>
    </InnerPageShell>
  );
}
