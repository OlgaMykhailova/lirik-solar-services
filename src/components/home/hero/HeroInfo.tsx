"use client";
import { useTranslations } from "next-intl";
import React from "react";

import OpenPopupButton from "@/components/shared/buttons/OpenPopupButton";
import Container from "@/components/shared/container/Container";
import { useOnScreen } from "@/hooks/useOnScreen";

import CompanyName from "../../shared/companyName/CompanyName";

interface HeroInfoProps {
  sectionId: string;
}

const APPLICATION_NAME = "Почати свій шлях";

export default function HeroInfo({ sectionId }: HeroInfoProps) {
  const t = useTranslations();

  const { isVisible } = useOnScreen(sectionId);

  return (
    <div>
      <Container className="relative">
        <CompanyName id={sectionId} className="mb-4 laptop:mb-6" />
        <span
          className={`relative z-10 inline-block px-4 tab:px-[38px] laptop:px-[50px] font-gogh text-lg tab:text-xxl laptop:text-xxxl text-blue before:content-[''] before:absolute before:-z-10 before:top-[-2px] laptop:before:top-1
         before:left-0 before:rounded-full before:w-full before:h-14 tab:before:h-[88px] laptop:before:h-[98px] before:bg-white before:opacity-30
         transition delay-700 duration-[1000ms] ease-gentle ${
           isVisible
             ? "opacity-100 translate-x-0"
             : "opacity-0 translate-x-[-45px] tab:translate-x-[-95px]"
         }`}
        >
          {t("hero.sunny")}
        </span>
        <span
          className={`absolute z-10 left-[172px] tab:left-[356px] laptop:left-[456px] top-[160px] tab:top-[259px] laptop:top-[300px] inline-block px-4 tab:px-[38px] laptop:px-[50px] align-text-top font-gogh text-lg tab:text-xxl laptop:text-xxxl text-blue 
      before:content-[''] before:absolute before:-z-10 before:top-[-2px] laptop:before:top-1 before:left-0 before:rounded-full before:w-full before:h-14 tab:before:h-[88px] laptop:before:h-[98px]
        before:bg-white before:opacity-30 transition delay-700 duration-[1000ms] ease-gentle ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-45px] tab:translate-x-[-95px]"
        }}`}
        >
          {t("hero.energy")}
        </span>
        <h1
          className={`w-[291px] mt-[84px] mb-6 tab:mb-10 tab:text-base text-white transition-all duration-[1100ms] ease-slow ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[309px] tab:translate-y-[364px]"
          }`}
        >
          {t("hero.title")}
        </h1>
        <div>
          <OpenPopupButton
            className={`transition duration-[1100ms] ease-slow ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[309px] tab:translate-y-[364px]"
            }`}
            buttonName={t("buttons.startPath")}
            applicationName={APPLICATION_NAME}
          />
        </div>
      </Container>
    </div>
  );
}
