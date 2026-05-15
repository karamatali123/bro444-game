import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const STORIES = [
  {
    name: "Bilal A.",
    location: "Lahore",
    role: "Colour prediction player",
    rating: 5,
    quote:
      "The JazzCash payout came through in under five minutes — I screenshot the in-app ledger and it matched the wallet message exactly. First time I haven't had to chase a support agent after a withdrawal.",
  },
  {
    name: "Sana R.",
    location: "Karachi",
    role: "Referral programme member",
    rating: 5,
    quote:
      "The commission rate is shown on the invite page before you share anything. I knew exactly what I'd earn per referral, which made it easy to explain to friends. The Urdu support agent sorted my CNIC mismatch in one chat session.",
  },
  {
    name: "Hamza T.",
    location: "Islamabad",
    role: "Crash & colour player",
    rating: 4,
    quote:
      "Having crash and colour prediction in the same app with one PKR balance means I'm not jumping between different installs. The APK download was straightforward — one official link, no redirects to unfamiliar sites.",
  },
  {
    name: "Ayesha M.",
    location: "Rawalpindi",
    role: "K3 lottery player",
    rating: 5,
    quote:
      "I play K3 lottery during lunch breaks — rounds finish in three minutes and the minimum bet is PKR 10, so it fits a small daily budget. The bonus terms were clearly listed; no hidden wagering conditions I found out about later.",
  },
  {
    name: "Usman K.",
    location: "Faisalabad",
    role: "VIP tier member",
    rating: 5,
    quote:
      "Reached Silver VIP in the second week. The withdrawal limit increase was applied automatically — no support ticket needed. Daily cashback posts to the wallet before noon which I can use on the same day.",
  },
  {
    name: "Zara N.",
    location: "Multan",
    role: "Teen Patti player",
    rating: 4,
    quote:
      "Teen Patti tables have Urdu chat, which makes a difference when you're playing with people from the same city. Easypaisa top-ups reflect instantly. The app runs fine on my Tecno Spark — no lag on the live dealer stream.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/15"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Player stories
          </p>
          <h2
            id="reviews-title"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Why guilds hype <span className="text-primary">BRO444 Game</span> in Lahore, Karachi &amp; beyond
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground md:text-lg">
            Marketing-friendly snapshots — not independent audits. They highlight what BRO444 players say they love:
            JazzCash speed, referral transparency, Urdu support, and one APK that actually fits budget phones. Your
            mileage varies with verification tier and current promos — always read the cashier before funding.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s) => (
            <Card key={s.name} className="border-border/80 bg-card/70">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-sm font-semibold text-foreground">
                      {s.name}
                    </CardTitle>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {s.location} · {s.role}
                    </p>
                  </div>
                  <StarRating rating={s.rating} />
                </div>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-foreground/90">
                &ldquo;{s.quote}&rdquo;
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Reviews represent individual player experiences. Withdrawal times,
          bonus eligibility, and VIP progression depend on account verification
          status and current promotional terms.
        </p>
      </div>
    </section>
  );
}