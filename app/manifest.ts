import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BRO444 Game — Pakistan Earning App",
    short_name: "BRO444 Game",
    description:
      "BRO444 Game APK for Android in Pakistan. Colour prediction, crash, K3 lottery, Teen Patti & slots. JazzCash & Easypaisa withdrawals in 5–30 minutes. 50% first deposit bonus. Min deposit PKR 100. 14.89 MB.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f2529",
    theme_color: "#d4a20c",
    orientation: "portrait",
    categories: ["games", "entertainment"],
    lang: "en-PK",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logo.png",
        sizes: "225x225",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
