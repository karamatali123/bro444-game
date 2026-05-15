"use client";

import * as React from "react";
import { MenuIcon, DownloadIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { APK_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "About BRO444 App", href: "/#about" },
  { label: "20 Reasons to Play", href: "/#features" },
  { label: "App Screenshots", href: "/#screenshots" },
  { label: "Download", href: "/#download" },
  { label: "Register & Login", href: "/#login" },
  { label: "Why Trending", href: "/#why-trending" },
  { label: "Payments", href: "/#payments" },
  { label: "Games", href: "/#games" },
  { label: "Popular Games", href: "/#popular-games" },
  { label: "Bonuses & Rewards", href: "/#promotions" },
  { label: "Referral & VIP", href: "/#referral" },
  { label: "Safety Tips", href: "/#safety" },
  { label: "Pros & Cons", href: "/#compare" },
  { label: "Reviews", href: "/#review" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Disclaimer", href: "/disclaimer" },
] as const;

export default function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="outline" size="icon" />}
        aria-label="Open navigation menu"
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading text-left text-xl tracking-tight">
            BRO444 App Menu
          </SheetTitle>
        </SheetHeader>

        {/* Top download CTA */}
        <a
          href={APK_URL}
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => setOpen(false)}
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-2 w-full gap-2 text-center"
          )}
        >
          <DownloadIcon className="size-4" aria-hidden />
          Get BRO444 App — Free
        </a>

        <Separator className="my-3" />
        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1">
          {LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "justify-start px-4 text-base font-medium"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <SheetFooter className="flex-col gap-2 sm:flex-col">
          <a
            href={APK_URL}
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full text-center"
            )}
          >
            Download / Play
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
