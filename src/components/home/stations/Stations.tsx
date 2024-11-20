import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import SolarPowerTabs from "./SolarPowerTabs";

export default function Stations() {
  const t = useTranslations("stations");
  return (
    <Section>
      <SectionTitle className="after:top-[10px]">{t("title")}</SectionTitle>
      <SolarPowerTabs />
    </Section>
  );
}
