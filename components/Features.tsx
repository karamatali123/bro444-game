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
    title: "Blazing-Fast Performance",
    body: "BRO444 Game App launches in under two seconds on most devices. Fluid transitions between games keep the experience premium — zero lag on page loads.",
  },
  {
    icon: WalletIcon,
    title: "Earn Real PKR Rewards",
    body: "Every win converts to real Pakistani Rupees. Earn through gameplay, daily challenges, and your referral network — this is genuine earning potential, not just entertainment.",
  },
  {
    icon: HeadphonesIcon,
    title: "Always-On Support Team",
    body: "Get help any time — day or night — through live chat, WhatsApp, or email. Support agents are fluent in both Urdu and English for barrier-free communication.",
  },
  {
    icon: GiftIcon,
    title: "Welcome Deposit Reward",
    body: "First-time depositors receive a generous welcome reward that adds extra balance instantly. Start your journey with more credits and greater confidence.",
  },
  {
    icon: ServerIcon,
    title: "Optimised Server Network",
    body: "Dedicated servers deliver ultra-low ping. Every tap registers immediately without lag — even when thousands of players are online simultaneously.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Bank-Grade Encryption",
    body: "Your data and finances are guarded by industry-standard encryption. Regular security assessments and two-factor verification keep your account protected.",
  },
  {
    icon: CreditCardIcon,
    title: "Built-In Local Wallets",
    body: "EasyPaisa and JazzCash are natively integrated. Top up and withdraw in Pakistani Rupees — hassle-free and no separate bank account necessary.",
  },
  {
    icon: SparklesIcon,
    title: "Automatic Welcome Package",
    body: "The welcome bonus activates the moment your first deposit lands. There are no complex opt-in steps — just sign up, fund your account, and claim.",
  },
  {
    icon: CalendarCheckIcon,
    title: "Login Streak Rewards",
    body: "Open the app daily to collect free bonus credits. Build consecutive login streaks to unlock higher-tier rewards — loyal players earn significantly more.",
  },
  {
    icon: UsersIcon,
    title: "Unlimited Referral Income",
    body: "Invite friends and earn commission every time they play. There is no cap on referrals. All commission earnings can be withdrawn immediately.",
  },
  {
    icon: SmartphoneIcon,
    title: "Designed for Mobile First",
    body: "Every element is engineered for smartphone screens. Buttons, menus, and layouts adapt flawlessly across all display sizes — from budget phones to flagship devices.",
  },
  {
    icon: TrendingUpIcon,
    title: "Progressive Level Bonuses",
    body: "Climb through account levels to access exclusive benefits and improved reward multipliers. This progression system keeps the experience fresh and motivating.",
  },
  {
    icon: GlobeIcon,
    title: "Complete Urdu Interface",
    body: "BRO444 Game App provides full Urdu language coverage across every screen. Game instructions, menus, and support — all available in your preferred language.",
  },
  {
    icon: VideoIcon,
    title: "HD Live Dealer Games",
    body: "Join real live dealers streamed in high definition. Multiple camera angles deliver the authentic table-game atmosphere — proof that every hand is fair.",
  },
  {
    icon: UserPlusIcon,
    title: "Two-Minute Registration",
    body: "Creating an account takes under two minutes. Just enter your phone number and set a secure password. You can be playing within moments of signing up.",
  },
  {
    icon: TrophyIcon,
    title: "Sports & Cricket Coverage",
    body: "Cricket, football, basketball, and more. Pakistani fans especially love the PSL section with live in-play features and real-time match updates.",
  },
  {
    icon: CheckCircle2Icon,
    title: "Certified Fair Outcomes",
    body: "A verified Random Number Generator determines all game results. Independent testing confirms accuracy — ensuring every round is genuinely unbiased.",
  },
  {
    icon: PartyPopperIcon,
    title: "Seasonal Events & Campaigns",
    body: "Eid, New Year, and cricket season unlock special reward campaigns. Weekly missions and surprise flash events give you extra ways to boost earnings.",
  },
  {
    icon: ArrowUpDownIcon,
    title: "Scalable Deposit & Withdrawal Limits",
    body: "Start depositing from just PKR 100. As your account level grows, withdrawal limits increase automatically — perfect for casual and committed players alike.",
  },
  {
    icon: PercentIcon,
    title: "Automatic Daily Rebate",
    body: "A daily rebate bonus posts to your account every midnight automatically. It is a guaranteed balance boost that rewards consistent play.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Key advantages</p>
          <h2
            id="features-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
          >
            20 Reasons <span className="text-primary">BRO444 Game App</span> Leads the Pack
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Built from the ground up for Pakistani players — lightning-fast JazzCash payouts, native Urdu support,
            genuine bonuses, and a library of 500+ games. Discover everything that makes BRO444 Game App the
            smartest choice for mobile earnings in Pakistan.
          </p>
        </div>

        <ul
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="BRO444 Game App features"
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
