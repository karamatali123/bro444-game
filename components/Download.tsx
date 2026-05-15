"use client";

import { useState } from "react";
import { DownloadIcon, AppleIcon, SmartphoneIcon } from "lucide-react";

import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ANDROID_STEPS = [
  { n: "01", title: "Tap the Download button on this page", body: "Click the Download button on this page. You will see two options — 'Download for Android' and 'Download for iOS'. Select Download for Android." },
  { n: "02", title: "Wait for the APK file to download", body: "The BRO444 APK file is only 14.89 MB. It downloads fast — even on a 3G connection it takes under 60 seconds." },
  { n: "03", title: "Allow install from your browser — one time only", body: "Go to your phone Settings and enable 'Install Unknown Sources' if prompted. This is a one-time step. You can turn it off again after the install is done." },
  { n: "04", title: "Open the file and install the app", body: "Open the downloaded APK from your notification bar or Downloads folder. Tap Install and wait for it to finish. The whole process takes about 30 seconds." },
  { n: "05", title: "Sign up and start playing", body: "Open BRO444 Game, tap Register, enter your Pakistani mobile number, set a password, and confirm with your SMS code. Start playing within minutes." },
];

const IOS_STEPS = [
  { n: "01", title: "Tap the Download button and choose iOS", body: "Click the Download button on this page and select 'Download for iOS'. The download will start automatically." },
  { n: "02", title: "Wait for the download to finish", body: "The iOS version of BRO444 will download to your device. Keep the app open while it downloads." },
  { n: "03", title: "Trust the app in your iPhone settings", body: "Go to Settings → General → VPN & Device Management. Find BRO444 and tap 'Trust'. This is required for apps installed outside the App Store." },
  { n: "04", title: "Open BRO444 and create your account", body: "Return to the BRO444 app. Tap Register, enter your number and password, and start playing. iPhone users can also play via BRO444.com in Safari without downloading." },
];

export default function Download() {
  const [tab, setTab] = useState<"android" | "ios">("android");
  const steps = tab === "android" ? ANDROID_STEPS : IOS_STEPS;

  return (
    <section
      id="download"
      aria-labelledby="download-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/10"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Download guide 2026</p>
            <h2
              id="download-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
            >
              How to Download <span className="text-primary">BRO444 Game</span> on Android &amp; iOS
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Downloading BRO444 is quick and completely free. Follow the simple steps below to install the app on
              your phone today. Always download only from this official page — not from Telegram or WhatsApp links.
            </p>
          </div>
          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "shrink-0 gap-2 self-start md:self-auto")}
          >
            <DownloadIcon className="size-4" aria-hidden />
            Download BRO444 — Free
          </a>
        </div>

        {/* OS tabs */}
        <div className="mt-10 flex gap-2">
          <button
            onClick={() => setTab("android")}
            className={cn(
              "flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all",
              tab === "android"
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "border-border/60 bg-card/60 text-muted-foreground hover:border-primary/40"
            )}
          >
            <SmartphoneIcon className="size-4" aria-hidden />
            Android Download
          </button>
          <button
            onClick={() => setTab("ios")}
            className={cn(
              "flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all",
              tab === "ios"
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "border-border/60 bg-card/60 text-muted-foreground hover:border-primary/40"
            )}
          >
            <AppleIcon className="size-4" aria-hidden />
            iOS Download
          </button>
        </div>

        {/* Steps */}
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border/70 bg-card/80 p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-3 font-heading text-sm font-bold leading-snug text-foreground">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        {tab === "ios" && (
          <div className="mt-6 rounded-xl border border-primary/30 bg-primary/8 p-4 text-sm text-foreground/90">
            <strong>iPhone tip:</strong> BRO444 does not have an official App Store listing. Open{" "}
            <strong>BRO444.com</strong> in Safari or Chrome on your iPhone to use the mobile web version — no download required.
          </div>
        )}

        {/* Safety note */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/8 p-4 text-sm">
          <span className="mt-0.5 text-destructive" aria-hidden>⚠</span>
          <p className="text-foreground/85">
            <strong>Stay safe:</strong> Only download BRO444 from this official page. Do not install APK files shared
            on Telegram, WhatsApp groups, or random websites — these are often fake and can steal your money or data.
          </p>
        </div>
      </div>
    </section>
  );
}
