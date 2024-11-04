import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Stations() {
  const t = useTranslations("stations");
  return (
    <Section id="stations">
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
