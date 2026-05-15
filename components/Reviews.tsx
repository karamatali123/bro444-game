import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const STORIES = [
  {
    name: "Tariq M.",
    location: "Lahore",
    role: "Colour prediction enthusiast",
    rating: 5,
    quote:
      "JazzCash payout hit my wallet in under four minutes — I compared the in-app transaction log with my wallet notification and every figure matched. First earning app where I haven't needed to follow up with support about a withdrawal.",
  },
  {
    name: "Nadia F.",
    location: "Karachi",
    role: "Active referral programme member",
    rating: 5,
    quote:
      "Commission rates are displayed right on the invite screen before you share anything. I could see exactly what each referral would earn me, which made pitching it to friends straightforward. The Urdu support agent resolved my wallet mismatch in a single conversation.",
  },
  {
    name: "Imran S.",
    location: "Islamabad",
    role: "Crash & colour player",
    rating: 4,
    quote:
      "Having crash and colour prediction under one roof with a shared PKR balance eliminates the hassle of managing multiple apps. The APK install was clean — one verified link, zero suspicious redirects.",
  },
  {
    name: "Fatima H.",
    location: "Rawalpindi",
    role: "K3 lottery regular",
    rating: 5,
    quote:
      "K3 lottery fits perfectly into my lunch break — rounds close in three minutes and you can start from PKR 10. The bonus conditions were listed upfront; there were no hidden wagering surprises later on.",
  },
  {
    name: "Ali R.",
    location: "Faisalabad",
    role: "Silver VIP member",
    rating: 5,
    quote:
      "Hit Silver VIP within ten days. The higher withdrawal limit kicked in automatically — didn't need to file a support request. Daily cashback lands before noon and I can use it immediately.",
  },
  {
    name: "Hira K.",
    location: "Multan",
    role: "Teen Patti player",
    rating: 4,
    quote:
      "Teen Patti tables with Urdu chat feel like playing with neighbours. Easypaisa top-ups reflect in seconds. My Tecno Spark handles the live dealer stream without any frame drops.",
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
            Player experiences
          </p>
          <h2
            id="reviews-title"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Why players across Pakistan trust <span className="text-primary">BRO444 Game App</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground md:text-lg">
            Promotional highlights — not independent audits. These snapshots reflect what BRO444 Game App
            users report: fast JazzCash payouts, transparent referral earnings, native Urdu support, and
            a compact APK that actually works on budget phones. Individual results depend on verification
            tier and current promotions — always check the cashier before funding.
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
          Reviews reflect individual player experiences. Withdrawal timelines,
          bonus eligibility, and VIP progression depend on account verification
          status and current promotional conditions.
        </p>
      </div>
    </section>
  );
}