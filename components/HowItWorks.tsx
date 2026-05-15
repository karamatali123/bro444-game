import { DownloadIcon, LogInIcon, WalletIcon, ZapIcon } from "lucide-react";

const STEPS = [
  {
    n: "1",
    icon: DownloadIcon,
    title: "Download BRO444 APK (under 12 MB)",
    body: "Tap the Download button on this page to get the official BRO444 APK. The file is under 12 MB — it downloads in under 30 seconds on 3G. Works on Android 6.0+ phones including Tecno Spark, Infinix Hot, and Redmi A-series.",
  },
  {
    n: "2",
    icon: LogInIcon,
    title: "Register with your Pakistani number",
    body: "Open the app and tap Register. Enter your Jazz, Telenor, Zong, or Ufone number, enter the SMS OTP, set a password, and optionally add a referral code. Full signup takes under 2 minutes.",
  },
  {
    n: "3",
    icon: WalletIcon,
    title: "Deposit via JazzCash or Easypaisa",
    body: "Open the cashier and deposit from PKR 200 using JazzCash or Easypaisa. Your balance reflects instantly. Set your 6-digit withdrawal PIN before playing — it protects your wallet separately from your login.",
  },
  {
    n: "4",
    icon: ZapIcon,
    title: "Play & withdraw to your wallet",
    body: "Pick any of the 8 game modes — colour prediction, crash, lottery, or live cards. When you win, withdraw to JazzCash or Easypaisa from PKR 500 minimum. Most payouts arrive in under 5 minutes.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="how-earn"
      aria-labelledby="how-earn-title"
      className="scroll-mt-28 border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">How it works</p>
          <h2
            id="how-earn-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
          >
            How to Download &amp; Play <span className="text-primary">BRO444 Game</span> in Pakistan
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Four steps from download to your first withdrawal — no Telegram links, no fake mirrors. BRO444 Game installs in under 60 seconds on any Android 6.0+ phone with at least 1 GB RAM and 50 MB free storage.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ n, icon: Icon, title, body }) => (
            <li key={n} className="relative rounded-2xl border border-border/80 bg-muted/25 p-6 pt-10">
              <span className="absolute left-5 top-4 font-mono text-xs font-bold text-primary">{n}</span>
              <Icon className="size-7 text-primary" aria-hidden />
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
