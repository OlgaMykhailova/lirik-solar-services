import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Benefits() {
  const t = useTranslations("benefits");
  return (
    <Section>
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
