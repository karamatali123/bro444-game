import Image from "next/image";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";
import { BRO44_LOGO } from "@/lib/brand";
import { APK_URL, getPublicSiteHostname } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const host = getPublicSiteHostname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 shadow-[0_1px_0_0_color-mix(in_oklch,var(--border)_60%,transparent)] backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-xl text-foreground outline-none motion-safe:transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <Image
              src={BRO44_LOGO.src}
              alt="BRO444 Game App"
              width={BRO44_LOGO.width}
              height={BRO44_LOGO.height}
              className="max-h-8 w-auto object-contain"
              sizes="40px"
              priority
            />
          </span>
          <span className="font-heading text-base font-semibold tracking-tight sm:text-lg">
            BRO444 Game App
          </span>
        </Link>

        {/* Desktop nav — centred between logo and actions */}
        <DesktopNav />

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-2">
          <Badge
            variant="secondary"
            className="hidden shrink-0 uppercase tracking-widest text-[0.65rem] xl:inline-flex"
          >
            PK · official
          </Badge>

          {/* Download button — icon-only on mobile, full label on lg+ */}
          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "sm" }),
              "shrink-0 gap-1.5 whitespace-nowrap"
            )}
          >
            <DownloadIcon className="size-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Download</span>
            <span className="hidden lg:inline"> / Play</span>
          </a>

          {/* Hamburger — mobile only */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
