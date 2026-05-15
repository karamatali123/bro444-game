"use client";

import { useState } from "react";
import { DownloadIcon, AppleIcon, SmartphoneIcon } from "lucide-react";

import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ANDROID_STEPS = [
  { n: "01", title: "Hit the Download button above", body: "Click the Download button on this page. You will see options for Android and iOS. Pick Download for Android." },
  { n: "02", title: "Let the APK file finish downloading", body: "BRO444 Game App weighs just 14.89 MB — that's smaller than a single photo. Even on 3G, it downloads in well under a minute." },
  { n: "03", title: "Grant install permission — just once", body: "Open your phone Settings and allow 'Install Unknown Sources' for your browser when prompted. This is a one-time toggle — disable it again once the install completes." },
  { n: "04", title: "Tap Install and wait a few seconds", body: "Locate the downloaded APK in your notification bar or Downloads folder. Tap Install and the process finishes in roughly 30 seconds." },
  { n: "05", title: "Create your account and play", body: "Launch BRO444 Game App, tap Register, enter your Pakistani mobile number, set a secure password, and verify with your SMS code. You are ready in minutes." },
];

const IOS_STEPS = [
  { n: "01", title: "Tap Download and select iOS", body: "Click the Download button on this page and pick the iOS option. The file will begin downloading automatically." },
  { n: "02", title: "Wait for the file to complete", body: "The iOS version of BRO444 Game App will download to your device. Keep the screen active while it downloads." },
  { n: "03", title: "Trust the certificate in Settings", body: "Navigate to Settings → General → VPN & Device Management. Find BRO444 Game App and tap 'Trust'. This step is required for apps installed outside the App Store." },
  { n: "04", title: "Open the app and register", body: "Return to BRO444 Game App. Tap Register, enter your phone number and password, and begin playing. iPhone users can also play via the mobile web version in Safari." },
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Installation guide 2026</p>
            <h2
              id="download-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
            >
              How to Install <span className="text-primary">BRO444 Game App</span> on Android &amp; iOS
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Installing BRO444 Game App is quick and completely free. Follow the straightforward steps below
              to get the app on your device today. Always install from this official page only — never from
              Telegram or WhatsApp links.
            </p>
          </div>
          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "shrink-0 gap-2 self-start md:self-auto")}
          >
            <DownloadIcon className="size-4" aria-hidden />
            Get BRO444 App — Free
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
            Android Guide
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
            iOS Guide
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
            <strong>iPhone tip:</strong> BRO444 Game App is not listed on the App Store. Open the{" "}
            <strong>official site</strong> in Safari or Chrome on your iPhone for the mobile web version — no download needed.
          </div>
        )}

        {/* Safety note */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/8 p-4 text-sm">
          <span className="mt-0.5 text-destructive" aria-hidden>⚠</span>
          <p className="text-foreground/85">
            <strong>Stay safe:</strong> Only install BRO444 Game App from this official page. Avoid APK files circulated
            through Telegram, WhatsApp groups, or unknown websites — they are frequently tampered with and can compromise your account.
          </p>
        </div>
      </div>
    </section>
  );
}
