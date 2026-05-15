import type { MetadataRoute } from "next";
import { BRO44_LOGO } from "@/lib/brand";
import { SITE_URL, absoluteUrl } from "@/lib/site";

const defaultLocale = "en-PK" as const;

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/** Indexable HTML routes — keep in sync with `app/(site)` pages. */
const ROUTES: StaticRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.65 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.65 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.35 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = SITE_URL.replace(/\/$/, "");
  const lastModified = new Date();

  return ROUTES.map((r) => {
    const url = r.path === "/" ? `${origin}/` : `${origin}${r.path}`;
    const entry: MetadataRoute.Sitemap[number] = {
      url,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    };

    return entry;
  });
}