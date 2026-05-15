import { DownloadIcon, LogInIcon, WalletIcon, ZapIcon } from "lucide-react";

const STEPS = [
  {
    n: "1",
    icon: DownloadIcon,
    title: "Get the BRO444 Game App APK (14.89 MB)",
    body: "Tap the Download button on this page to grab the official BRO444 Game App installer. At just 14.89 MB, it downloads in well under a minute — even on a basic 3G connection. Compatible with Android 6.0+ devices including Tecno Spark, Infinix Hot, and Redmi A-series.",
  },
  {
    n: "2",
    icon: LogInIcon,
    title: "Sign up with your PK mobile number",
    body: "Open BRO444 Game App and tap Register. Enter your Jazz, Telenor, Zong, or Ufone number, verify via SMS OTP, create a password, and optionally enter a referral code. The entire process takes under two minutes.",
  },
  {
    n: "3",
    icon: WalletIcon,
    title: "Fund your wallet via JazzCash or Easypaisa",
    body: "Head to the wallet section and deposit starting from PKR 100 using JazzCash or Easypaisa. Your balance updates instantly. Set your personal 6-digit withdrawal PIN right away — it secures your wallet independently from your login password.",
  },
  {
    n: "4",
    icon: ZapIcon,
    title: "Play games & cash out in minutes",
    body: "Choose from 8 game categories — colour prediction, crash rounds, lottery draws, or live card tables. When you're ready, withdraw from PKR 500 minimum to JazzCash or Easypaisa. Payouts typically arrive in 1 to 5 minutes.",
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
            How to Download &amp; Play <span className="text-primary">BRO444 Game App</span> in Pakistan
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Four simple steps from download to your first cashout — no Telegram links, no suspicious mirrors.
            BRO444 Game App installs in under 60 seconds on any Android 6.0+ phone with at least 1 GB RAM
            and 50 MB of free storage.
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
