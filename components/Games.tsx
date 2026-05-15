import { Badge } from "@/components/ui/badge";
import { FlameIcon, DicesIcon, SwordsIcon, TrophyIcon, VideoIcon, MonitorIcon, FishIcon, TicketIcon } from "lucide-react";

const CATEGORIES = [
  {
    icon: FlameIcon,
    name: "Hot Games",
    tag: "Most Popular",
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/30",
    desc: "The hottest titles on BRO444 Game App right now. These games draw the largest player base daily with special multiplier rounds and generous bonus opportunities.",
    games: ["Colour Prediction", "Crash", "Fortune Gems", "Aviator"],
  },
  {
    icon: DicesIcon,
    name: "Slots",
    tag: "Jackpots",
    color: "text-purple-500",
    bg: "bg-purple-500/10 border-purple-500/30",
    desc: "A vast library of themed slot machines, each featuring unique symbol combinations, paylines, and bonus mechanics. Progressive jackpots grow across all active players simultaneously.",
    games: ["Fortune Gems 3", "Piggy Bank", "Lucky Spin", "Slot Games"],
  },
  {
    icon: SwordsIcon,
    name: "Poker",
    tag: "Card Game",
    color: "text-red-500",
    bg: "bg-red-500/10 border-red-500/30",
    desc: "Texas Hold'em, Omaha, and other beloved poker variants. Beginner-friendly low-stakes tables let you learn without putting your budget under pressure.",
    games: ["Teen Patti", "Andar Bahar", "Dragon Tiger", "Blackjack"],
  },
  {
    icon: TrophyIcon,
    name: "Sports",
    tag: "Live Betting",
    color: "text-green-500",
    bg: "bg-green-500/10 border-green-500/30",
    desc: "Cricket, football, tennis, and basketball coverage. Pakistani fans especially love the PSL and international cricket sections with live in-play capabilities.",
    games: ["Cricket (PSL)", "Football", "Tennis", "Basketball"],
  },
  {
    icon: VideoIcon,
    name: "Live Games",
    tag: "Live Dealer",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/30",
    desc: "Professional dealers streaming from HD studios in real time. Interact with hosts live and watch multiple camera angles for a truly authentic table-game experience.",
    games: ["Teen Patti Live", "Dragon Tiger Live", "Roulette Live", "Baccarat"],
  },
  {
    icon: MonitorIcon,
    name: "E-Sports",
    tag: "Competitive",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10 border-cyan-500/30",
    desc: "Pakistan's rapidly expanding competitive gaming scene covered with global tournaments. In-depth statistics help you make well-informed choices.",
    games: ["CS:GO", "Dota 2", "League of Legends", "PUBG Mobile"],
  },
  {
    icon: FishIcon,
    name: "Fishing Games",
    tag: "Casual",
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/30",
    desc: "Aim at different fish species to collect multiplied prize values. Rare boss fish trigger massive reward multipliers — the more skilled you are, the more you earn.",
    games: ["Ice Fishing", "Fishing Game", "Ocean King", "Fish Party"],
  },
  {
    icon: TicketIcon,
    name: "Lottery",
    tag: "Quick Rounds",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10 border-yellow-500/30",
    desc: "Fair-chance draws at scheduled times throughout the day. Affordable entry prices and special jackpot lotteries during Pakistani festivals and holidays.",
    games: ["K3 Lottery", "5D Lottery", "Fortune Coins", "Lucky Number"],
  },
];

export default function Games() {
  return (
    <section
      id="games"
      aria-labelledby="games-title"
      className="scroll-mt-28 border-b border-border/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Game library</p>
          <h2
            id="games-title"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl lg:text-[2.65rem]"
          >
            500+ Games Across 8 Categories on <span className="text-primary">BRO444 Game App</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            BRO444 Game App organises its full library into eight categories so you can jump to any game
            instantly. Every game shares a single PKR wallet — no transferring funds between accounts.
          </p>
        </div>

        <ul
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="BRO444 Game App categories"
        >
          {CATEGORIES.map((c) => (
            <li
              key={c.name}
              className="group flex flex-col rounded-2xl border border-border/70 bg-card/80 p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between gap-2">
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${c.bg}`}>
                  <c.icon className={`size-5 ${c.color}`} aria-hidden />
                </span>
                <Badge variant="secondary" className="shrink-0 text-[0.6rem] uppercase tracking-wide">
                  {c.tag}
                </Badge>
              </div>

              <h3 className="mt-3 font-heading text-base font-bold text-foreground">{c.name}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>

              {/* Game chips */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.games.map((g) => (
                  <span
                    key={g}
                    className="rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 text-[0.6rem] font-medium text-muted-foreground"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
