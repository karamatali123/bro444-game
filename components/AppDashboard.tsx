import Image from "next/image";

const DASHBOARD = {
  src: "/images/bro444-dashboard-screen.webp",
  w: 506,
  h: 1024,
  alt:
    "BRO444 Game App mobile lobby dashboard on a dark teal canvas: top strip with BRO444 branding, PKR promo stars, yellow Download closeable banner; header with BRO444 title, balance Rs 0.00 with refresh and avatar; carousel promo banner with pagination; orange Deposit and Withdraw shortcuts; HOT GAMES horizontal categories; grid of casino titles including Aviator, Money Coming, FlyX and more with vendor labels; floating Facebook, Telegram, WhatsApp and support shortcuts; fixed bottom navigation for Home, Promotion, Invite (center highlighted), Reward with notification dot, and Member.",
};

export default function AppDashboard() {
  return (
    <section
      id="app-dashboard"
      aria-labelledby="app-dashboard-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/15"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            After you sign in
          </p>
          <h2
            id="app-dashboard-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl"
          >
            Game Dashboard &amp; Lobby on <span className="text-primary">BRO444 Game App</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Deposit, withdraw, and browse hundreds of games without switching between multiple apps. The bottom
            navigation lets you jump between Home, Promotion, Invite, Reward, and Member sections in a single
            tap — the exact flow you see in BRO444 Game App promotional content. Carousel banners refresh with
            new bonus drops; always double-check your balance before sizing up stakes.
          </p>
        </div>

        <figure className="mt-12 mx-auto max-w-lg rounded-2xl border border-border/80 bg-muted/25 p-4 shadow-sm md:max-w-xl">
          <figcaption className="mb-4 text-center font-heading font-semibold text-foreground">
            BRO444 Game App — Home Lobby (Mobile)
          </figcaption>
          <div className="flex w-full justify-center rounded-xl border border-border/60 bg-black/40 p-2 shadow-lg">
            <Image
              src={DASHBOARD.src}
              alt={DASHBOARD.alt}
              width={DASHBOARD.w}
              height={DASHBOARD.h}
              sizes="(min-width: 768px) 400px, 90vw"
              className="h-auto max-h-[min(920px,80vh)] w-auto max-w-full rounded-lg object-contain"
              decoding="async"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
