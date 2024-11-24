import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import EssInfo from "./EssInfo";

export default function Ess() {
  const t = useTranslations("ess");

  return (
    <Section className="mb-5 tab:mb-0">
      <SectionTitle className="after:top-[10px]">{t("title")}</SectionTitle>
      <EssInfo />
    </Section>
  );
}
