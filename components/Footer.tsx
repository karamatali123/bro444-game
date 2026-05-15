import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { CONTACT_EMAIL, SITE_URL, getPublicSiteHostname } from "@/lib/site";

const year = new Date().getFullYear();

const footerLinkClass =
  "rounded-sm text-muted-foreground outline-none underline-offset-4 hover:text-foreground hover:underline motion-safe:transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Footer() {
  const origin = SITE_URL.replace(/\/$/, "");
  const host = getPublicSiteHostname();

  return (
    <footer className="border-t border-border/80 bg-card/55" aria-labelledby="footer-title">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p id="footer-title" className="font-heading text-lg font-semibold">
              BRO444 Game App
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Official website:{" "}
              <Link
                href={origin}
                className="text-primary underline-offset-4 outline-none hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {host || "Official site"}
              </Link>
            </p>
            {CONTACT_EMAIL.length > 0 ? (
              <p className="mt-2 text-sm text-muted-foreground">
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary underline-offset-4 outline-none hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            ) : null}
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground">
              Play responsibly. Gambling-style products may be restricted for minors and certain regions.
              Nothing on this marketing page constitutes financial or legal advice — consult licensed counsel
              before promoting real-money mechanics in Pakistan.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
            <Link className={footerLinkClass} href="/#trust">
              Trust &amp; PK focus
            </Link>
            <Link className={footerLinkClass} href="/#promotions">
              Bonuses
            </Link>
            <Link className={footerLinkClass} href="/#how-earn">
              How it works
            </Link>
            <Link className={footerLinkClass} href="/#referral">
              Referral &amp; VIP
            </Link>
            <Link className={footerLinkClass} href="/#download">
              Install guide
            </Link>
            <Link className={footerLinkClass} href="/#app-account">
              Registration UI
            </Link>
            <Link className={footerLinkClass} href="/#app-dashboard">
              Dashboard preview
            </Link>
            <Link className={footerLinkClass} href="/#payments">
              Wallet notes
            </Link>
            <Link className={footerLinkClass} href="/#compare">
              Compare apps
            </Link>
            <Link className={footerLinkClass} href="/#faq">
              FAQ
            </Link>
            <Link className={footerLinkClass} href="/about">
              About us
            </Link>
            <Link className={footerLinkClass} href="/contact">
              Contact
            </Link>
            <Link className={footerLinkClass} href="/disclaimer">
              Disclaimer
            </Link>
          </nav>
        </div>
        <Separator className="my-8" />
        <p className="text-xs text-muted-foreground">
          © {year} BRO444 Game App · Play responsibly · 18+ where required by law.
        </p>
      </div>
    </footer>
  );
}
