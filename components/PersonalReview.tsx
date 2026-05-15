import { StarIcon, UserCircle2Icon } from "lucide-react";

const USER_REVIEWS = [
  {
    name: "Ahmed Ali Shah",
    city: "Lahore",
    text: "Main ne BRO444 game sirf ek hafte mein kaafi rewards kamaye. JazzCash withdrawal bohot fast tha!",
    rating: 5,
  },
  {
    name: "Azlan Shah",
    city: "Karachi",
    text: "The BRO444 fishing section is amazing. I play daily and it's genuinely entertaining and rewarding!",
    rating: 5,
  },
  {
    name: "Laiba Sharaz",
    city: "Islamabad",
    text: "Customer support answered my query in Urdu within minutes. Really impressed by this platform!",
    rating: 5,
  },
  {
    name: "Jamal Khan",
    city: "Rawalpindi",
    text: "The withdrawals are so fast. My money arrives in my JazzCash account in just 5 minutes every time.",
    rating: 5,
  },
];

export default function PersonalReview() {
  return (
    <section
      id="review"
      aria-labelledby="review-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/15"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Personal experience */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Personal experience</p>
            <h2
              id="review-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl"
            >
              My Experience with <span className="text-primary">BRO444 Earning Game</span>
            </h2>

            <div className="mt-6 rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <UserCircle2Icon className="size-7" aria-hidden />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">BRO444 Editorial Team</p>
                  <p className="text-xs text-muted-foreground">Verified Player · Pakistan</p>
                  <div className="mt-1 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="size-3 fill-yellow-400 text-yellow-400" aria-hidden />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  I downloaded the BRO444 APK for free and the registration process took only two minutes. The
                  interface was in Urdu by default — I switched it to English since I understand it better. On my
                  first deposit, I received a PKR 250 free bonus straight away.
                </p>
                <p>
                  I shared my referral link with my brother and two friends. The next day I received a PKR 500
                  referral commission automatically. I played Fortune Gems and won PKR 4,770 in a single session.
                </p>
                <p>
                  My first withdrawal was PKR 6,000 and it arrived in my EasyPaisa account in just 6 minutes. Since
                  then the app gives me a daily referral bonus. I barely need to deposit my own money anymore — my
                  referral income covers my play. All games are exciting and there is always something new.
                </p>
                <p className="font-medium text-foreground">
                  I recommend BRO444 to anyone who wants a reliable side income from their phone. Just play responsibly.
                </p>
              </div>

              {/* Quick stats */}
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border/60 pt-5">
                {[
                  { v: "6 min", label: "First withdrawal" },
                  { v: "PKR 4,770", label: "Won in Fortune Gems" },
                  { v: "PKR 500", label: "Referral bonus day 2" },
                ].map((x) => (
                  <div key={x.label} className="text-center">
                    <div className="font-heading text-sm font-bold text-primary">{x.v}</div>
                    <div className="mt-0.5 text-[0.6rem] text-muted-foreground">{x.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User reviews */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Player reviews</p>
            <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight md:text-3xl">
              What Pakistani Players Are Saying
            </h3>
            <p className="mt-3 text-muted-foreground">
              Real feedback from BRO444 players across Pakistan — Lahore, Karachi, Islamabad, and Rawalpindi.
            </p>

            <ul className="mt-6 space-y-4">
              {USER_REVIEWS.map((r) => (
                <li
                  key={r.name}
                  className="rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm transition-all hover:border-primary/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-bold">
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="font-heading text-sm font-bold text-foreground">{r.name}</p>
                        <p className="text-[0.65rem] text-muted-foreground">{r.city}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <StarIcon key={i} className="size-3 fill-yellow-400 text-yellow-400" aria-hidden />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
                </li>
              ))}
            </ul>

            {/* Overall rating */}
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-primary/30 bg-primary/8 p-5">
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-primary">4.8</div>
                <div className="flex gap-0.5 justify-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-3 fill-yellow-400 text-yellow-400" aria-hidden />
                  ))}
                </div>
                <div className="mt-1 text-[0.65rem] text-muted-foreground">Overall Rating</div>
              </div>
              <div className="flex-1 text-sm text-muted-foreground">
                Based on player reviews from across Pakistan. BRO444 is consistently rated as one of the
                fastest-paying and most reliable earning apps in Pakistan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
