import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Services() {
  const t = useTranslations("services");
  return (
    <Section id="services">
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
