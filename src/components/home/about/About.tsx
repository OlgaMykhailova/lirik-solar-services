import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import AnimatedSun from "../../shared/animatedSun/AnimatedSun";

export default function About() {
  const t = useTranslations("about");

  return (
    <Section
      id="about"
      className="relative pt-[162px] tab:pt-[64px] laptop:pt-[80px] overflow-x-clip"
    >
      <AnimatedSun
        id="about"
        className={`absolute z-20 right-4 tab:right-[31px] top-[-64px] laptop:top-[-106px] size-[228px] 
            tab:size-[291px] laptop:size-[578px] before:content-[''] before:absolute before:top-[46px] laptop:before:top-[96px] before:left-[-4px] tab:before:left-6 before:z-[-10] 
            before:size-[85%] before:rounded-full before:bg-yellow before:bg-opacity-15 before:blur-[40px] laptop:before:blur-[100px]
            `}
      />
      <SectionTitle className="after:top-[10px]">{t("title")}</SectionTitle>
      <div className="tab:w-[55%] laptop:w-[49%] laptop:text-base">
        <p className="mb-2">{t("description.partOne")}</p>
        <p>{t("description.partTwo")}</p>
      </div>
    </Section>
  );
}
