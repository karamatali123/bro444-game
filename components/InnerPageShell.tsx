import Link from "next/link";

import InnerPageJsonLd from "@/components/InnerPageJsonLd";

type Props = {
  path: `/${string}`;
  metaName: string;
  metaDescription: string;
  breadcrumbLabel: string;
  h1: string;
  intro?: string;
  children: React.ReactNode;
};

export default function InnerPageShell({
  path,
  metaName,
  metaDescription,
  breadcrumbLabel,
  h1,
  intro,
  children,
}: Props) {
  return (
    <>
      <InnerPageJsonLd path={path} name={metaName} description={metaDescription} />
      <div className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
            <Link
              className="rounded-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href="/"
            >
              Home
            </Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-foreground">{breadcrumbLabel}</span>
          </nav>
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{h1}</h1>
          {intro ? <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p> : null}
        </div>
      </div>
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:py-12 sm:text-base">
        {children}
      </div>
    </>
  );
}
