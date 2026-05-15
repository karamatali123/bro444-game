import Image from "next/image";
import Link from "next/link";
import { CheckCircle2Icon } from "lucide-react";

import { APK_URL } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
  "Free to download on Android and iOS",
  "JazzCash and Easypaisa payments — no bank needed",
  "50% bonus on your first deposit",
  "24/7 Urdu customer support",
  "One of the highest winning rates in Pakistan",
  "500+ games in one app",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-28 border-b border-border/60 bg-muted/10"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        {/* Overview */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Overview of BRO444</p>
            <h2
              id="about-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.65rem]"
            >
              What is <span className="text-primary">BRO444 Game</span>?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              The BRO444 Game integrates local payment methods for seamless transactions. You can deposit and withdraw
              using EasyPaisa and JazzCash with ease. Pakistani users never face barriers when accessing their funds.
              The platform also uses advanced encryption to keep your data safe.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              BRO444 is completely free to download on Android and iOS. You do not need to pay any fee to start
              playing. It carries one of the highest winning rates in Pakistan's mobile gaming market. Begin your
              journey toward exciting daily rewards today.
            </p>
            <ul className="mt-6 space-y-2.5">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-green-500" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex")}
            >
              Download BRO444 — Free
            </a>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/70 shadow-xl">
              <Image
                src="/images/overview.webp"
                alt="BRO444 Game overview — Pakistan earning app"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* What is the BRO444 APK */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-border/70 shadow-xl">
              <Image
                src="/images/what-is-bro444.webp"
                alt="BRO444 Game APK — online earning game Pakistan"
                width={800}
                height={430}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">What is it?</p>
            <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight md:text-3xl">
              What is the <span className="text-primary">BRO444 Game APK</span>?
            </h3>
            <div className="mt-4 space-y-4 text-muted-foreground md:text-lg">
              <p>
                The BRO444 APK is a dedicated mobile application built for online gaming. It gives users access to
                hundreds of game categories in one place. Its lightweight design ensures smooth performance on most
                Android and iOS devices without consuming too much storage space.
              </p>
              <p>
                The app provides fair, fun, and real cash-rewarding gameplay made for Pakistan's mobile-savvy
                audience. The interface uses simple Urdu and English prompts so even first-time players can navigate
                without any confusion.
              </p>
              <p>
                BRO444 Game is gaining massive traction because of its transparent reward system. Players earn
                bonuses from their very first login. The app updates regularly to add new games and exciting
                promotional offers — so there is always something new waiting for you.
              </p>
            </div>
            <Link
              href="/#download"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6 inline-flex border-primary/40")}
            >
              How to Download →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
