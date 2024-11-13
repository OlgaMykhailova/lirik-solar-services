import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <Section>
      <SectionTitle>{t("title")}</SectionTitle>
      <p className="tab:w-[64.3%] laptop:w-[48.9%]">{t("description")}</p>
    </Section>
  );
}
