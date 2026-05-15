import { BRO44_LOGO } from "@/lib/brand";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { APK_URL, SITE_URL, absoluteUrl } from "@/lib/site";

const apkFull = absoluteUrl(APK_URL);
const origin = SITE_URL.replace(/\/$/, "");
const homeUrl = `${origin}/`;

const DATE_PUBLISHED = "2026-01-01T00:00:00+05:00";
const DATE_MODIFIED = "2026-05-14T00:00:00+05:00";

/**
 * Homepage-only @graph — pairs with `GlobalJsonLd` (Organization + WebSite on every layout).
 * Organization and WebSite are NOT repeated here — they live in GlobalJsonLd.tsx only.
 */
export default function JsonLd() {
  const faqMainEntity = FAQ_ITEMS.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: item.answer,
    },
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${origin}/#webpage`,
        url: homeUrl,
        name: "BRO444 Game Official Earning APK for Android & iOS in Pakistan 2026",
        description:
          "Download BRO444 Game APK free for Android in Pakistan. Colour prediction, crash, K3 lottery, Teen Patti & slots. JazzCash & Easypaisa withdrawals in 5–30 minutes. Min deposit PKR 100. 14.89 MB APK, Android 6.0+.",
        isPartOf: { "@id": `${origin}/#website` },
        publisher: { "@id": `${origin}/#organization` },
        inLanguage: "en-PK",
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        about: { "@id": `${origin}/#mobile-app` },
        breadcrumb: { "@id": `${origin}/#breadcrumb` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(BRO44_LOGO.src),
          width: BRO44_LOGO.width,
          height: BRO44_LOGO.height,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${origin}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About BRO444 Game",
            item: `${homeUrl}#about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Download BRO444 APK",
            item: `${homeUrl}#download`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Games — Colour Prediction, Crash, Lottery & More",
            item: `${homeUrl}#games`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "JazzCash & Easypaisa Payments",
            item: `${homeUrl}#payments`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "FAQ — BRO444 Game Pakistan",
            item: `${homeUrl}#faq`,
          },
        ],
      },
      {
        "@type": "MobileApplication",
        "@id": `${origin}/#mobile-app`,
        name: "BRO444 Game",
        alternateName: [
          "bro444 game",
          "BRO444 Game Pakistan",
          "bro444 apk",
          "BRO444 APK",
        ],
        description:
          "BRO444 Game earning app for Pakistan — colour prediction, K3 & 5D lottery, crash, Teen Patti, Dragon Tiger, Andar Bahar, slots and more. JazzCash & Easypaisa withdrawals in 5–30 minutes. Min deposit PKR 100. 14.89 MB APK. Install from the official site only.",
        operatingSystem: "Android 6.0+",
        softwareRequirements: "Android 6.0 (Marshmallow) or higher; 1 GB RAM minimum; 50 MB free storage; 3G, 4G, or Wi-Fi internet connection",
        fileSize: "14.89 MB",
        applicationCategory: "GameApplication",
        applicationSubCategory: "ArcadeGame",
        downloadUrl: apkFull,
        installUrl: apkFull,
        inLanguage: ["en-PK"],
        countriesSupported: "PK",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "PKR",
          availability: "https://schema.org/InStock",
        },
        author: { "@id": `${origin}/#organization` },
        publisher: { "@id": `${origin}/#organization` },
      },
      {
        "@type": "ItemList",
        "@id": `${origin}/#game-categories`,
        name: "BRO444 Game Categories",
        description: "500+ games across 8 categories available on BRO444 Game in Pakistan",
        numberOfItems: 8,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hot Games" },
          { "@type": "ListItem", position: 2, name: "Slots" },
          { "@type": "ListItem", position: 3, name: "Poker" },
          { "@type": "ListItem", position: 4, name: "Sports" },
          { "@type": "ListItem", position: 5, name: "Live Casino" },
          { "@type": "ListItem", position: 6, name: "E-Sports" },
          { "@type": "ListItem", position: 7, name: "Fishing" },
          { "@type": "ListItem", position: 8, name: "Lottery" },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${origin}/#howto-install`,
        url: `${homeUrl}#download`,
        name: "How to Download and Install BRO444 Game APK on Android",
        description:
          "Step-by-step guide to download and install BRO444 Game APK on any Android phone in Pakistan.",
        totalTime: "PT5M",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "PKR",
          value: "0",
        },
        supply: [
          {
            "@type": "HowToSupply",
            name: "Android phone (Android 6.0 or higher)",
          },
          {
            "@type": "HowToSupply",
            name: "JazzCash or Easypaisa account (optional, for deposits)",
          },
        ],
        tool: [
          { "@type": "HowToTool", name: "Chrome or any Android browser" },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Tap the Download button",
            text: `Visit this page and tap the Download BRO444 button. It will take you to the official APK download at ${apkFull}.`,
            url: apkFull,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Allow install from unknown sources",
            text: "Go to your phone Settings → Security → enable 'Install from Unknown Sources' for your browser. This is needed because the APK is not on Google Play.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Open the downloaded APK file",
            text: "Open your Downloads folder or the notification bar and tap the BRO444 APK file to begin installation.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Install the app",
            text: "Tap Install and wait a few seconds for the installation to complete.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Register your account",
            text: "Open BRO444 Game, tap Register, enter your mobile number, verify with OTP, and set a strong password. Your account is ready.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${origin}/#faq`,
        url: homeUrl,
        isPartOf: { "@id": `${origin}/#website` },
        mainEntity: faqMainEntity,
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
