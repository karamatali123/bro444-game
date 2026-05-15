import { BRO44_LOGO } from "@/lib/brand";
import { SITE_URL, absoluteUrl } from "@/lib/site";

type Props = {
  path: `/${string}`;
  name: string;
  description: string;
};

/**
 * WebPage + BreadcrumbList for inner routes — references global `#organization` / `#website`.
 */
export default function InnerPageJsonLd({ path, name, description }: Props) {
  const origin = SITE_URL.replace(/\/$/, "");
  const pageUrl = absoluteUrl(path);
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name,
        description,
        isPartOf: { "@id": `${origin}/#website` },
        publisher: { "@id": `${origin}/#organization` },
        inLanguage: "en-PK",
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(BRO44_LOGO.src),
          width: BRO44_LOGO.width,
          height: BRO44_LOGO.height,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${origin}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
