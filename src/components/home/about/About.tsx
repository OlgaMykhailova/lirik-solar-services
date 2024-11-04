import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function About() {
  const t = useTranslations("about");
  return (
    <Section id="about">
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
