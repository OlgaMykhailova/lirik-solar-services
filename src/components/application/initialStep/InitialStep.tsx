"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import AnimatedSun from "@/components/shared/animatedSun/AnimatedSun";
import MainButton from "@/components/shared/buttons/MainButton";
import CompanyName from "@/components/shared/companyName/CompanyName";
import { useOnScreen } from "@/hooks/useOnScreen";

import InitialStepEnergy from "./InitialStepEnergy";
import InitialStepTitle from "./InitialStepTitle";

const SECTION_ID = "application-page-initial-step";

export default function InitialStep() {
  const t = useTranslations();
  const { isVisible } = useOnScreen(SECTION_ID);

  return (
    <section
      id={SECTION_ID}
      className="relative flex-1 flex flex-col justify-between w-full h-full min-h-[690px] tab:min-h-[1100px] laptop:min-h-[800px] pt-[190px] 
      laptop:pt-[38px] pb-[60px] laptop:pb-[88px] bg-heroGradient overflow-x-clip"
    >
      <AnimatedSun
        id={SECTION_ID}
        className={`absolute z-20 right-1 tab:right-4 top-1 tab:top-4 size-[191px] tab:size-[278px] laptop:size-[304px] 
          before:content-[''] before:absolute before:top-[46px] laptop:before:top-[66px] before:left-[-4px] tab:before:left-2 before:z-[-10] 
            before:size-[85%] before:rounded-full before:bg-yellow before:bg-opacity-15 before:blur-[30px] laptop:before:blur-[50px]
            `}
      />
      <div className="container flex flex-col justify-between max-w-[1920px] h-full">
        <CompanyName id={SECTION_ID} className="mb-4" />
        <InitialStepEnergy isVisible={isVisible} />
        <InitialStepTitle isVisible={isVisible} />

        <MainButton
          className={`w-fit transition duration-[1100ms] ease-slow ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[309px] tab:translate-y-[364px]"
          }`}
        >
          {t("buttons.getOffer")}
        </MainButton>
      </div>

      <Image
        src="/images/solarPanels.webp"
        alt="solar panels"
        width="1478"
        height="951"
        priority
        className={`hidden tab:block absolute z-0 right-4 tab:-bottom-6 object-cover object-left tab:min-w-[615px] tab:w-[67%] laptop:w-[53%] 
              laptop:max-w-[1030px] h-auto -rotate-[5deg] scale-x-[-1] transition delay-700 duration-[1000ms] ease-gentle ${
                isVisible
                  ? "opacity-100  translate-y-0"
                  : "opacity-0 translate-y-[75px] tab:translate-y-[95px]"
              }`}
      />
    </section>
  );
}
