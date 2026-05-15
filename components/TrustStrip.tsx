import { BadgeCheckIcon, GlobeIcon, ShieldIcon, SmartphoneIcon } from "lucide-react";

const BADGES = [
  { icon: SmartphoneIcon, label: "Only 12 MB", sub: "Fast to download, even on 3G" },
  { icon: BadgeCheckIcon, label: "Cash out in minutes", sub: "JazzCash and Easypaisa" },
  { icon: GlobeIcon, label: "Urdu support 24/7", sub: "Help in your language, any time" },
  { icon: ShieldIcon, label: "One safe download link", sub: "No fake APKs or Telegram traps" },
] as const;

export default function TrustStrip() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-title"
      className="scroll-mt-28 border-b border-border/60 bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why players choose BRO444</p>
            <h2 id="trust-title" className="mt-2 font-heading text-xl font-bold tracking-tight md:text-2xl">
              <span className="text-primary">BRO444 Game</span> — small download, fast cash out, real Urdu support
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              The app is only <strong className="text-foreground">12 MB</strong> so it downloads quickly even on 3G. You can cash out to JazzCash or Easypaisa in{" "}
              <strong className="text-foreground">1 to 5 minutes</strong>. Support speaks Urdu and is available
              all day and night. Download only from this page — not from Telegram or WhatsApp links.
            </p>
          </div>
          <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4 md:max-w-2xl">
            {BADGES.map(({ icon: Icon, label, sub }) => (
              <li
                key={label}
                className="flex flex-col gap-2 rounded-xl border border-border/70 bg-background/80 px-3 py-3 text-left shadow-sm"
              >
                <Icon className="size-5 shrink-0 text-primary" aria-hidden />
                <span className="font-heading text-sm font-semibold text-foreground">{label}</span>
                <span className="text-[0.7rem] leading-snug text-muted-foreground">{sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
