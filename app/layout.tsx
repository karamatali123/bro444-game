import type { Metadata, Viewport } from "next";
import { Geist_Mono, Lexend, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import GlobalJsonLd from "@/components/GlobalJsonLd";
import { SITE_URL } from "@/lib/site";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const canonicalOrigin = SITE_URL.replace(/\/$/, "");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f2529" },
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`${canonicalOrigin}/`),
  title: {
    default: "BRO444 Game Official Earning APK for Android & iOS in Pakistan 2026",
    template: "%s | BRO444 Game Pakistan",
  },
  description:
    "Download BRO444 Game APK free for Android & iOS in Pakistan. Get 50% first deposit bonus. Colour prediction, crash, K3 lottery, Teen Patti & slots. JazzCash & Easypaisa withdrawals in minutes. Min deposit PKR 100.",
  keywords: [
    "bro444 game",
    "bro444 game apk download",
    "bro444 game pakistan",
    "bro444 apk",
    "bro444 login",
    "bro444 earning game",
    "bro444 game download 2026",
    "bro444 game android download",
    "bro444 game ios download",
    "bro444 referral program",
    "bro444 withdrawal jazzcash",
    "bro444 first deposit bonus",
    "bro444 game registration",
    "bro444 game version v2.4.85",
    "colour prediction game pakistan",
    "earning app pakistan 2026",
    "jazzcash earning app",
    "online earning game pakistan",
    "real money game pakistan",
    "colour prediction apk android",
    "earning game jazzcash easypaisa",
  ],
  authors: [{ name: "BRO444 Game Editorial" }],
  creator: "BRO444 Game",
  publisher: "BRO444 Game",
  category: "Games",
  applicationName: "BRO444 Game",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-PK": "/",
      "x-default": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: canonicalOrigin,
    siteName: "BRO444 Game Pakistan — Official APK & Earning Guide",
    title: "BRO444 Game — Official Earning APK for Android & iOS in Pakistan 2026",
    description:
      "Download BRO444 Game APK free in Pakistan. 50% first deposit bonus. 500+ games — colour prediction, crash, lottery & Teen Patti. JazzCash & Easypaisa withdrawals in minutes. Min deposit PKR 100.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BRO444 Game — Pakistan Earning App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRO444 Game APK Download Pakistan 2026 — 50% Bonus, JazzCash Earning App",
    description:
      "Download BRO444 Game APK free for Android & iOS in Pakistan. 50% first deposit bonus. 500+ games. JazzCash & Easypaisa withdrawals. 14.89 MB APK. Min deposit PKR 100.",
    images: [{ url: "/opengraph-image", alt: "BRO444 Game Pakistan" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PK"
      className={`dark ${lexend.variable} ${plusJakarta.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/35 selection:text-primary-foreground">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-[calc(100%+24px)] rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-md outline-none motion-safe:transition-transform focus-visible:translate-y-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Skip to main content
        </a>
        <GlobalJsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
