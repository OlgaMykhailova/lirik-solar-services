import React from "react";

import ContactUsSection from "@/components/contactUs/contactUsSection/ContactUsSection";
import Hero from "@/components/contactUs/hero/Hero";
import SunspotBgImages from "@/components/shared/backgrounds/SunspotBgImages";
import { Locale } from "@/types/locale";
import { generatePageMetaData } from "@/utils/generatePageMetaData";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return generatePageMetaData({
    locale,
    namespace: "metadata",
    canonical: "/contact-us",
  });
}

export default function ContactUs() {
  return (
    <main className="relative flex-1 w-dvw overflow-x-hidden">
      <ContactUsSection />
      <SunspotBgImages id="hero-contact-us" />
      <Hero />
    </main>
  );
}
