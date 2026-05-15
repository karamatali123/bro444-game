import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GAMES = [
  "Aviator", "Andar Bahar", "Fortune Coins", "Fortune Gems 3",
  "Fly X", "Blackjack", "Roulette", "Ice Fishing",
  "Dragon Gems Wheel", "Super Rion", "Fishing Game", "Lucky Spin",
  "Slot Games", "Piggy Bank", "Ludo", "Crash",
  "K3 Lottery", "5D Lottery", "Teen Patti Live", "Dragon Tiger",
];

const COLORS = [
  "border-orange-500/40 bg-orange-500/8 text-orange-600 dark:text-orange-400",
  "border-purple-500/40 bg-purple-500/8 text-purple-600 dark:text-purple-400",
  "border-primary/40 bg-primary/8 text-primary",
  "border-green-500/40 bg-green-500/8 text-green-600 dark:text-green-400",
  "border-pink-500/40 bg-pink-500/8 text-pink-600 dark:text-pink-400",
  "border-cyan-500/40 bg-cyan-500/8 text-cyan-600 dark:text-cyan-400",
  "border-yellow-500/40 bg-yellow-500/8 text-yellow-600 dark:text-yellow-400",
  "border-red-500/40 bg-red-500/8 text-red-600 dark:text-red-400",
];

export default function PopularGames() {
  return (
    <section
      id="popular-games"
      aria-labelledby="popular-games-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/15"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Popular games</p>
            <h2
              id="popular-games-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl"
            >
              Most Played Games on <span className="text-primary">BRO444 Game App</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Colour prediction, crash rounds, live dealer tables, fishing challenges, and classic slots — these
              are the titles BRO444 Game App players in Pakistan keep coming back to. All games share a unified
              PKR balance with bets starting from just PKR 10.
            </p>
          </div>
          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "shrink-0 self-start md:self-auto")}
          >
            Play Now
          </a>
        </div>

        <ul
          className="mt-10 flex flex-wrap gap-3"
          aria-label="Popular games on BRO444 Game App"
        >
          {GAMES.map((game, i) => (
            <li key={game}>
              <span
                className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-transform hover:scale-105 ${COLORS[i % COLORS.length]}`}
              >
                {game}
              </span>
            </li>
          ))}
        </ul>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { v: "500+", label: "Games Available" },
            { v: "8", label: "Game Categories" },
            { v: "PKR 10", label: "Minimum Bet" },
            { v: "24/7", label: "Always Running" },
          ].map((x) => (
            <div
              key={x.label}
              className="rounded-2xl border border-border/70 bg-card/80 p-5 text-center"
            >
              <div className="font-heading text-2xl font-bold text-primary">{x.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{x.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
