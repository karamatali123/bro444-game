import { StarIcon, UserCircle2Icon } from "lucide-react";

const USER_REVIEWS = [
  {
    name: "Fahad Malik",
    city: "Lahore",
    text: "BRO444 Game App pe mujhe pehle hafte mein hi kaafi achha return mila. JazzCash se withdrawal sirf 3 minute mein aaya!",
    rating: 5,
  },
  {
    name: "Hassan Raza",
    city: "Karachi",
    text: "The fishing section on BRO444 Game App is genuinely addictive. I play every evening and the rewards are consistent!",
    rating: 5,
  },
  {
    name: "Amna Tariq",
    city: "Islamabad",
    text: "Support team ne meri problem Urdu mein 10 minute ke andar solve kar di. Very impressed with this app!",
    rating: 5,
  },
  {
    name: "Waqas Ahmed",
    city: "Rawalpindi",
    text: "Withdrawal speed is genuinely fast. My Easypaisa wallet gets credited within 4 minutes every single time.",
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">First-hand experience</p>
            <h2
              id="review-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl"
            >
              My Journey with <span className="text-primary">BRO444 Game App</span>
            </h2>

            <div className="mt-6 rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <UserCircle2Icon className="size-7" aria-hidden />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">BRO444 App Editorial Team</p>
                  <p className="text-xs text-muted-foreground">Verified User · Pakistan</p>
                  <div className="mt-1 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="size-3 fill-yellow-400 text-yellow-400" aria-hidden />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  I installed BRO444 Game App and completed the registration in under two minutes. The
                  interface defaulted to Urdu — I toggled it to English since that's my preference. The moment
                  my first deposit landed, a PKR 250 welcome bonus appeared in my wallet.
                </p>
                <p>
                  I shared my referral code with my cousin and two colleagues. Within 24 hours, a PKR 500
                  referral commission was credited to my account automatically. I tried Fortune Gems and
                  walked away with PKR 4,770 in a single session.
                </p>
                <p>
                  My first cashout was PKR 6,000 — it arrived in my EasyPaisa wallet in just 6 minutes. Since
                  then, the daily referral bonuses have been so steady that I rarely need to deposit from my
                  own pocket anymore. Every game category has something exciting to offer.
                </p>
                <p className="font-medium text-foreground">
                  I'd recommend BRO444 Game App to anyone looking for a dependable side-earning channel on
                  their phone. Just remember to play within your limits.
                </p>
              </div>

              {/* Quick stats */}
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border/60 pt-5">
                {[
                  { v: "6 min", label: "First cashout time" },
                  { v: "PKR 4,770", label: "Fortune Gems session" },
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Community feedback</p>
            <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight md:text-3xl">
              What Players Across Pakistan Are Saying
            </h3>
            <p className="mt-3 text-muted-foreground">
              Genuine feedback from BRO444 Game App users in Lahore, Karachi, Islamabad, and Rawalpindi.
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
                <div className="font-heading text-4xl font-bold text-primary">4.9</div>
                <div className="flex gap-0.5 justify-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-3 fill-yellow-400 text-yellow-400" aria-hidden />
                  ))}
                </div>
                <div className="mt-1 text-[0.65rem] text-muted-foreground">Overall Rating</div>
              </div>
              <div className="flex-1 text-sm text-muted-foreground">
                Based on player feedback from across Pakistan. BRO444 Game App is consistently praised as
                one of the fastest-paying and most dependable earning platforms available.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
