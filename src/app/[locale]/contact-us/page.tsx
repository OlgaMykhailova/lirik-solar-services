import React from "react";

import ContactUsSection from "@/components/contactUs/contactUsSection/ContactUsSection";
import Hero from "@/components/contactUs/hero/Hero";
import SunspotBgImages from "@/components/shared/backgrounds/SunspotBgImages";

export default function ContactUs() {
  return (
    <main className="relative flex-1">
      <SunspotBgImages id="hero-contact-us" />
      <Hero />
      <ContactUsSection />
    </main>
  );
}
