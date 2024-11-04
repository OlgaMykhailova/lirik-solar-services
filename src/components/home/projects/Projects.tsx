import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <Section>
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
