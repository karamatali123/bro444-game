import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import AppScreenshots from "@/components/AppScreenshots";
import Download from "@/components/Download";
import LoginSignup from "@/components/LoginSignup";
import WhyTrending from "@/components/WhyTrending";
import Payments from "@/components/Payments";
import Games from "@/components/Games";
import PopularGames from "@/components/PopularGames";
import Promotions from "@/components/Promotions";
import ReferralVIP from "@/components/ReferralVIP";
import SafetyTips from "@/components/SafetyTips";
import Compare from "@/components/Compare";
import PersonalReview from "@/components/PersonalReview";
import FinalRemarks from "@/components/FinalRemarks";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "BRO444 Game App — Official Free Earning APK for Android & iOS Pakistan 2026",
  description:
    "Download BRO444 Game App APK free for Android and iOS in Pakistan. Get a welcome deposit bonus up to 50%. Play colour prediction, crash, K3 lottery, Teen Patti & slots. JazzCash & Easypaisa withdrawals in 1–5 minutes. Min deposit PKR 100.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BRO444 Game App — Official Free Earning APK for Android & iOS Pakistan 2026",
    description:
      "BRO444 Game App — Pakistan's trusted earning platform. 500+ games, welcome deposit bonus, JazzCash & Easypaisa withdrawals in minutes. Free download. Min deposit PKR 100.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Features />
      <AppScreenshots />
      <Download />
      <LoginSignup />
      <WhyTrending />
      <Payments />
      <Games />
      <PopularGames />
      <Promotions />
      <ReferralVIP />
      <SafetyTips />
      <Compare />
      <PersonalReview />
      <FinalRemarks />
      <FAQ />
    </>
  );
}
