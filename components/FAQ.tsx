"use client";

import { FAQ_ITEMS } from "@/lib/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-28 border-b border-border/60 bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Questions and answers</p>
        <h2 id="faq-title" className="mt-3 font-heading text-3xl font-bold md:text-4xl">
          Frequently Asked Questions About BRO444 Game App
        </h2>
        <p className="mt-3 text-muted-foreground md:text-lg">
          Genuine questions from Pakistani players — about bonuses, withdrawals, safe download links, and referral commissions. Straightforward answers, no confusing language.
        </p>

        <Accordion multiple className="mt-10">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={item.question} value={`faq-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer.split(/\n\n+/).map((block, pi) => (
                  <p
                    key={pi}
                    className={cn("leading-relaxed text-foreground/90 first:mt-0", pi > 0 && "mt-3")}
                  >
                    {block.trim()}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
