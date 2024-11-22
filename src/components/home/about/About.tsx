import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import AnimatedSun from "./AnimatedSun"; // Імпорт клієнтського компонента

export default function About() {
  const t = useTranslations("about");

  return (
    <div>
      <AnimatedSun />
      <Section
        id="about"
        className="relative pt-[162px] tab:pt-[64px] laptop:pt-[80px]"
      >
        <SectionTitle className="after:top-[10px]">{t("title")}</SectionTitle>
        <div className="tab:w-[55%] laptop:w-[49%] laptop:text-base">
          <p className="mb-2">{t("description.partOne")}</p>
          <p>{t("description.partTwo")}</p>
        </div>
      </Section>
    </div>
  );
}
