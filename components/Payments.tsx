import { WalletIcon, ArrowDownToLineIcon, ArrowUpFromLineIcon, ClockIcon } from "lucide-react";

const DEPOSIT_STEPS = [
  { n: "01", text: "Open BRO444 Game App and sign in with your phone number and password." },
  { n: "02", text: "Navigate to the Wallet tab visible at the bottom of your screen." },
  { n: "03", text: "Tap Deposit and pick either EasyPaisa or JazzCash as your funding method." },
  { n: "04", text: "Key in your desired deposit amount — minimum PKR 100 — and confirm." },
  { n: "05", text: "Authorise the payment through your mobile wallet app or USSD prompt." },
  { n: "06", text: "Your in-app balance updates instantly — you can start playing immediately." },
];

const WITHDRAW_STEPS = [
  { n: "01", text: "Open the Wallet section inside BRO444 Game App." },
  { n: "02", text: "Select Withdraw and type the amount you wish to cash out." },
  { n: "03", text: "Choose EasyPaisa, JazzCash, or bank transfer as your withdrawal channel." },
  { n: "04", text: "Enter your personal 6-digit withdrawal PIN to authorise the request." },
  { n: "05", text: "Funds land in your mobile wallet typically within 1 to 5 minutes." },
];

const PAYMENT_INFO = [
  { icon: WalletIcon, label: "Accepted Methods", value: "JazzCash · Easypaisa · Bank" },
  { icon: ArrowDownToLineIcon, label: "Min Deposit", value: "PKR 100" },
  { icon: ArrowUpFromLineIcon, label: "Min Withdrawal", value: "PKR 500" },
  { icon: ClockIcon, label: "Avg Withdrawal", value: "1–5 Minutes" },
];

export default function Payments() {
  return (
    <section
      id="payments"
      aria-labelledby="payments-title"
      className="scroll-mt-28 border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Deposit &amp; withdrawal</p>
          <h2
            id="payments-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
          >
            BRO444 Game App Deposit &amp; Withdrawal — Step-by-Step for New Players
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            BRO444 Game App connects natively to EasyPaisa and JazzCash — no traditional bank account required.
            Fund your wallet from as little as PKR 100 and cash out your earnings directly to your mobile
            wallet in minutes.
          </p>
        </div>

        {/* Info cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PAYMENT_INFO.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl border border-border/70 bg-card/80 p-4 text-center shadow-sm">
              <Icon className="mx-auto size-6 text-primary" aria-hidden />
              <div className="mt-2 text-[0.63rem] uppercase tracking-wide text-muted-foreground">{label}</div>
              <div className="mt-1 font-heading text-sm font-bold text-foreground">{value}</div>
            </div>
          ))}
        </div>

        {/* Steps grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Deposit */}
          <div className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-green-500/15 text-green-500">
                <ArrowDownToLineIcon className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground">How to Add Funds</h3>
            </div>
            <ol className="mt-5 space-y-3">
              {DEPOSIT_STEPS.map((s) => (
                <li key={s.n} className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-xs font-bold text-green-600 dark:text-green-400">
                    {s.n}
                  </span>
                  <p className="pt-0.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/8 px-4 py-3 text-xs text-green-600 dark:text-green-400">
              ✓ Deposits reflect in your game wallet immediately
            </div>
          </div>

          {/* Withdrawal */}
          <div className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <ArrowUpFromLineIcon className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground">How to Cash Out</h3>
            </div>
            <ol className="mt-5 space-y-3">
              {WITHDRAW_STEPS.map((s) => (
                <li key={s.n} className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    {s.n}
                  </span>
                  <p className="pt-0.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-5 rounded-xl border border-primary/30 bg-primary/8 px-4 py-3 text-xs text-foreground/80">
              ✓ Most cashouts arrive in 1–5 minutes. Always set a 6-digit PIN to protect your wallet.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
