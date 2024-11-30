import { useTranslations } from "next-intl";
import React from "react";

import ContactUsApplication from "@/components/contactUs/ContactUsApplication";

export default function ContactUs() {
  const t = useTranslations();

  return (
    <section>
      <h1>{t("writeUs.title")}</h1>
      <ContactUsApplication />
    </section>
  );
}
