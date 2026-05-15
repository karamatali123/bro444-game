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
  title: "BRO444 Game Official Earning APK for Android & iOS in Pakistan 2026",
  description:
    "Download BRO444 Game APK free for Android and iOS in Pakistan. Get 50% first deposit bonus. Play colour prediction, crash, K3 lottery, Teen Patti & slots. JazzCash & Easypaisa withdrawals in minutes. Min deposit PKR 100.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BRO444 Game Official Earning APK for Android & iOS in Pakistan 2026",
    description:
      "BRO444 Game — Pakistan's top earning app. 500+ games, 50% welcome bonus, JazzCash & Easypaisa withdrawals in 5–30 minutes. Free download. Min deposit PKR 100.",
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
