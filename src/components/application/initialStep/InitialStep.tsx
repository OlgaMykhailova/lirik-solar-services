"use client";
import AnimatedSun from "@/components/shared/animatedSun/AnimatedSun";
import MainButton from "@/components/shared/buttons/MainButton";
import CompanyName from "@/components/shared/companyName/CompanyName";
import Section from "@/components/shared/section/Section";
import React from "react";
import { useTranslations } from "next-intl";
import { useOnScreen } from "@/hooks/useOnScreen";

const SECTION_ID = "application-page-initial-step";

export default function InitialStep() {
  const t = useTranslations();
  const { isVisible } = useOnScreen(SECTION_ID);

  return (
    <Section
      id={SECTION_ID}
      className="relative h-[100dvh] pt-[200px] laptop:pt-[103px] bg-heroGradient overflow-x-hidden"
    >
      <AnimatedSun
        id={SECTION_ID}
        className={`absolute z-20 right-1 tab:right-4 top-1 tab:top-4 size-[191px] tab:size-[278px] laptop:size-[304px] 
          before:content-[''] before:absolute before:top-[46px] laptop:before:top-[66px] before:left-[-4px] tab:before:left-2 before:z-[-10] 
            before:size-[85%] before:rounded-full before:bg-yellow before:bg-opacity-15 before:blur-[30px] laptop:before:blur-[50px]
            `}
      />
      <CompanyName id={SECTION_ID} />
      <MainButton
        className={`transition duration-[1100ms] ease-slow ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[309px] tab:translate-y-[364px]"
        }`}
      >
        {t("buttons.getOffer")}
      </MainButton>
    </Section>
  );
}
