import { BRO44_LOGO } from "@/lib/brand";
import { CONTACT_EMAIL, SITE_URL, absoluteUrl } from "@/lib/site";

const origin = SITE_URL.replace(/\/$/, "");

/**
 * Site-wide Organization + WebSite so every route exposes stable @ids
 * (`#organization`, `#website`) for `isPartOf` / `publisher` cross-references.
 */
export default function GlobalJsonLd() {
  const org: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${origin}/#organization`,
    name: "BRO444 Game App",
    alternateName: ["bro444 game app", "BRO444 App", "bro444 game app pakistan", "BRO444 Game App Pakistan"],
    url: origin,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(BRO44_LOGO.src),
      width: BRO44_LOGO.width,
      height: BRO44_LOGO.height,
    },
    image: absoluteUrl(BRO44_LOGO.src),
    knowsAbout: [
      "bro444 game app pakistan",
      "bro444 game app bonuses",
      "BRO444 Game App APK",
      "BRO444 app onboarding",
      "JazzCash gaming deposits",
      "Easypaisa withdrawals",
      "colour prediction Pakistan",
      "PKR wallet gaming apps",
      "mirror APK risks",
    ],
    areaServed: { "@type": "Country", name: "Pakistan" },
  };

  if (CONTACT_EMAIL.length > 0) {
    org.contactPoint = {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT_EMAIL,
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    };
  }

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      org,
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: "BRO444 Game App — Download & Earn in Pakistan 2026",
        description:
          "Official BRO444 Game App guide for Pakistan. Download the free APK, claim your welcome bonus, and cash out earnings via JazzCash or Easypaisa in minutes. 500+ games including colour prediction, crash, lottery, and slots.",
        publisher: { "@id": `${origin}/#organization` },
        inLanguage: "en-PK",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
