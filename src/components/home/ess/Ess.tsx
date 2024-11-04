import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Ess() {
  const t = useTranslations("ess");
  return (
    <Section id="ess">
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
