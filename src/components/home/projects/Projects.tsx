import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import ProjectsSlider from "./ProjectsSlider";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <Section className="pt-[72px] tab:pt-[100px] laptop:pt-[166px]">
      <SectionTitle className="after:top-[10px]">{t("title")}</SectionTitle>
      <p className="mb-8 laptop:mb-12 tab:w-[64.3%] laptop:w-[48.9%]">
        {t("description")}
      </p>
      <ProjectsSlider />
    </Section>
  );
}
