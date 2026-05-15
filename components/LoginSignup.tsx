import Image from "next/image";
import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const REGISTER_STEPS = [
  { n: "01", text: "Open BRO444 Game and tap the Register button." },
  { n: "02", text: "Enter your Pakistani mobile number or choose a username." },
  { n: "03", text: "Set a strong password — 6 to 12 characters, no special characters." },
  { n: "04", text: "Confirm your details and tap Register." },
  { n: "05", text: "Your account is ready. Start playing straight away." },
];

const LOGIN_STEPS = [
  { n: "01", text: "Open the BRO444 App and tap Login." },
  { n: "02", text: "Enter your registered phone number or username." },
  { n: "03", text: "Type your password and tap Sign In." },
];

export default function LoginSignup() {
  return (
    <section
      id="login"
      aria-labelledby="login-title"
      className="scroll-mt-28 border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: steps */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Login &amp; sign up
            </p>
            <h2
              id="login-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
            >
              How to Register &amp; Log In to <span className="text-primary">BRO444 Game</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Creating a BRO444 account is fast and easy. You only need a valid Pakistani phone number and a
              password. No unnecessary personal information is asked up front.
            </p>

            {/* Registration */}
            <div className="mt-8">
              <h3 className="font-heading text-lg font-bold text-foreground">How to Register</h3>
              <ol className="mt-4 space-y-3">
                {REGISTER_STEPS.map((s) => (
                  <li key={s.n} className="flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {s.n}
                    </span>
                    <p className="pt-0.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Login */}
            <div className="mt-8">
              <h3 className="font-heading text-lg font-bold text-foreground">How to Log In</h3>
              <ol className="mt-4 space-y-3">
                {LOGIN_STEPS.map((s) => (
                  <li key={s.n} className="flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                      {s.n}
                    </span>
                    <p className="pt-0.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-muted-foreground">
                If you forget your password, tap <strong className="text-foreground">Forgot Password</strong> on the
                login screen. You can reset your password in under one minute using your registered phone number.
              </p>
            </div>

            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex")}
            >
              Register Now — Free
            </a>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-56 sm:w-64">
              <div aria-hidden className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-border/60 shadow-2xl">
                <Image
                  src="/images/login-register.webp"
                  alt="BRO444 Game login and registration screen"
                  width={480}
                  height={1024}
                  className="h-auto w-full"
                  sizes="256px"
                />
              </div>
              <div className="mt-4 rounded-xl border border-border/60 bg-card/80 px-4 py-3 text-center text-sm text-muted-foreground shadow">
                Registration takes under <strong className="text-foreground">2 minutes</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
