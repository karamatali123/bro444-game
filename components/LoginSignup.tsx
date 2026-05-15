import Image from "next/image";
import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const REGISTER_STEPS = [
  { n: "01", text: "Launch BRO444 Game App and tap the Register button on the splash screen." },
  { n: "02", text: "Type your Pakistani mobile number — this becomes your login ID." },
  { n: "03", text: "Create a password between 6 and 12 characters. Avoid special symbols." },
  { n: "04", text: "Review your details, then tap Create Account to finalise." },
  { n: "05", text: "Registration is complete. You can begin playing within seconds." },
];

const LOGIN_STEPS = [
  { n: "01", text: "Open BRO444 Game App and tap the Login button." },
  { n: "02", text: "Enter your registered mobile number or username." },
  { n: "03", text: "Type your password and hit Sign In. You're back in." },
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
              How to Register &amp; Log In to <span className="text-primary">BRO444 Game App</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Setting up a BRO444 Game App account takes under two minutes. All you need is a valid Pakistani
              phone number and a password — the app never asks for unnecessary personal data during signup.
            </p>

            {/* Registration */}
            <div className="mt-8">
              <h3 className="font-heading text-lg font-bold text-foreground">Create Your Account</h3>
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
              <h3 className="font-heading text-lg font-bold text-foreground">Sign Back In</h3>
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
                Forgot your password? Tap <strong className="text-foreground">Forgot Password</strong> on the
                login screen to reset it via SMS in under a minute using your registered number.
              </p>
            </div>

            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex")}
            >
              Create Account — Free
            </a>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-56 sm:w-64">
              <div aria-hidden className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-border/60 shadow-2xl">
                <Image
                  src="/images/login-register.webp"
                  alt="BRO444 Game App login and registration screen"
                  width={480}
                  height={1024}
                  className="h-auto w-full"
                  sizes="256px"
                />
              </div>
              <div className="mt-4 rounded-xl border border-border/60 bg-card/80 px-4 py-3 text-center text-sm text-muted-foreground shadow">
                Account setup completes in under <strong className="text-foreground">2 minutes</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
