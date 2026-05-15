import {
  ZapIcon,
  WalletIcon,
  HeadphonesIcon,
  GiftIcon,
  ServerIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  SparklesIcon,
  CalendarCheckIcon,
  UsersIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  GlobeIcon,
  VideoIcon,
  UserPlusIcon,
  TrophyIcon,
  CheckCircle2Icon,
  PartyPopperIcon,
  ArrowUpDownIcon,
  PercentIcon,
} from "lucide-react";

const FEATURES = [
  {
    icon: ZapIcon,
    title: "Lightning-Fast Interface",
    body: "BRO444 loads in under two seconds on most smartphones. Smooth animations make every game transition feel premium — you never wait for pages to load.",
  },
  {
    icon: WalletIcon,
    title: "Real Money App",
    body: "Players earn real PKR rewards by winning games, completing missions, and referring friends. This is not just entertainment — it is a genuine side income.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Support",
    body: "Support is available all day and night via live chat, WhatsApp, or email. Agents speak both Urdu and English so there is no language barrier.",
  },
  {
    icon: GiftIcon,
    title: "First Deposit Bonus 50%",
    body: "New users get a 50% bonus on their first deposit. This gives you extra balance to start playing with more confidence from day one.",
  },
  {
    icon: ServerIcon,
    title: "Low Latency Gameplay",
    body: "Optimized servers ensure ultra-low latency. Game commands execute instantly without delays — even during peak hours.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure Encrypted Servers",
    body: "Your personal and financial information stays fully private. Regular third-party security audits and two-factor authentication keep your account safe.",
  },
  {
    icon: CreditCardIcon,
    title: "Local Payment Integration",
    body: "EasyPaisa and JazzCash are built directly into the app. Deposit and withdraw in Pakistani Rupees without any hassle — no bank account needed.",
  },
  {
    icon: SparklesIcon,
    title: "Generous Welcome Bonus",
    body: "Every new player receives a welcome bonus package that activates automatically on your first deposit. No complex steps — just sign up and claim.",
  },
  {
    icon: CalendarCheckIcon,
    title: "Daily Check-In Rewards",
    body: "Log in every day to collect free bonus credits. Consecutive login streaks unlock premium reward tiers — loyal players earn much more over time.",
  },
  {
    icon: UsersIcon,
    title: "Referral Earning Program",
    body: "Invite friends and earn commission every time they play. No cap on how many friends you can invite. Referral commissions can be withdrawn directly.",
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile-First Design",
    body: "Built specifically for smartphone screens. Every button and menu fits perfectly on mobile — and the layout adjusts automatically for all screen sizes.",
  },
  {
    icon: TrendingUpIcon,
    title: "Level Up Bonus",
    body: "Reach higher levels and unlock extra benefits and better rewards. This progress system keeps players motivated and engaged for the long term.",
  },
  {
    icon: GlobeIcon,
    title: "Urdu Language Support",
    body: "BRO444 fully supports Urdu throughout its interface. Game instructions appear in simple, easy-to-understand Urdu — no language barrier for anyone.",
  },
  {
    icon: VideoIcon,
    title: "Live Game Experience",
    body: "Play with real live dealers streamed in HD. Multiple camera angles give you the authentic feel of a real table — proving the game is 100% fair.",
  },
  {
    icon: UserPlusIcon,
    title: "Instant Account Registration",
    body: "Registration completes in under two minutes. You only need a phone number and a password of 6–12 characters. Start playing within minutes of signing up.",
  },
  {
    icon: TrophyIcon,
    title: "Wide Sports Coverage",
    body: "Cricket, football, basketball and more. Pakistani fans love the cricket section for PSL and international matches with live in-play options.",
  },
  {
    icon: CheckCircle2Icon,
    title: "Fair and Transparent RNG System",
    body: "BRO444 uses a certified Random Number Generator for all game outcomes. Independent auditors verify accuracy regularly — every result is fair and unbiased.",
  },
  {
    icon: PartyPopperIcon,
    title: "Regular Promotions and Events",
    body: "Eid, New Year, and cricket season bring special reward packages. Weekly missions and surprise flash promotions give you extra ways to earn.",
  },
  {
    icon: ArrowUpDownIcon,
    title: "Flexible Deposit and Withdrawal Limits",
    body: "Minimum deposit starts from just PKR 100. Withdrawal limits go up as your account level increases — suitable for both casual and serious players.",
  },
  {
    icon: PercentIcon,
    title: "Daily Rebate Bonus",
    body: "Claim a daily rebate bonus the next day. The rebate amount is added to your account every day at 12 AM — a guaranteed boost to your daily income.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Top key features</p>
          <h2
            id="features-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
          >
            20 Reasons to Play <span className="text-primary">BRO444 Game</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            BRO444 is built specifically for Pakistani players — fast JazzCash withdrawals, Urdu support, real bonuses,
            and 500+ games. Here is everything that makes BRO444 the best earning app in Pakistan.
          </p>
        </div>

        <ul
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="BRO444 Game features"
        >
          {FEATURES.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className="group relative rounded-2xl border border-border/70 bg-card/80 p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-primary/60">
                  #{i + 1}
                </span>
              </div>
              <h3 className="mt-3 font-heading text-sm font-bold leading-snug text-foreground">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
