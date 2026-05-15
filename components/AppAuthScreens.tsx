import Image from "next/image";

/** Full mobile register UI + top crop emphasizing the Login navigation (same BRO444 shell). */

const REGISTER = {
  src: "/images/bro444-register-screen.webp",
  w: 480,
  h: 1024,
  alt:
    "BRO444.com mobile registration screen on a dark teal cricket-themed backdrop: BRO444.com wordmark header, bold yellow Register heading, Already have an account? Login link, mobile number and password fields with show/hide icons, age and Terms & Conditions checkbox, promotions opt-in, and yellow Register button.",
};

const LOGIN_ENTRY = {
  src: "/images/bro444-login-highlight.webp",
  w: 480,
  h: 440,
  alt:
    "Top of the BRO444.com mobile register screen showing the yellow back control, BRO444.com title, bold yellow Register heading, and the Already have an account? Login link that returning players use before entering mobile number and password on the login step.",
};

export default function AppAuthScreens() {
  return (
    <section
      id="app-account"
      aria-labelledby="app-account-title"
      className="scroll-mt-28 border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            In‑app onboarding
          </p>
          <h2
            id="app-account-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl"
          >
            Register &amp; login on <span className="text-primary">BRO444.com</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Same yellow-on-teal BRO444 shell you see in ads — OTP signup, password toggles, promo opt-in, and legal
            acceptance before your first JazzCash hit. Editorial note: never screen-share OTP entry; guild “helpers” who
            ask for codes are not official support.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
          <figure className="flex flex-col items-center rounded-2xl border border-border/80 bg-muted/25 p-4 shadow-sm">
            <figcaption className="mb-4 w-full text-center font-heading font-semibold text-foreground">
              Register screen — full form
            </figcaption>
            <div className="flex w-full justify-center rounded-xl border border-border/60 bg-black/40 p-2 shadow-lg">
              <Image
                src={REGISTER.src}
                alt={REGISTER.alt}
                width={REGISTER.w}
                height={REGISTER.h}
                sizes="(min-width: 768px) 384px, 90vw"
                className="h-auto max-h-[min(920px,75vh)] w-auto max-w-full rounded-lg object-contain"
                decoding="async"
              />
            </div>
          </figure>

          <figure className="flex flex-col items-center rounded-2xl border border-border/80 bg-muted/25 p-4 shadow-sm">
            <figcaption className="mb-4 w-full text-center font-heading font-semibold text-foreground">
              Returning players — Login link &amp; same theme
            </figcaption>
            <div className="flex w-full justify-center rounded-xl border border-border/60 bg-black/40 p-2 shadow-lg">
              <Image
                src={LOGIN_ENTRY.src}
                alt={LOGIN_ENTRY.alt}
                width={LOGIN_ENTRY.w}
                height={LOGIN_ENTRY.h}
                sizes="(min-width: 768px) 384px, 90vw"
                className="h-auto max-h-[min(480px,55vh)] w-auto max-w-full rounded-lg object-contain"
                decoding="async"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
