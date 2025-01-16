"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import MainButton from "@/components/shared/buttons/MainButton";
import { useOnScreen } from "@/hooks/useOnScreen";
import { Link } from "@/i18n/routing";

import FinalStepInfo from "./FinalStepInfo";

const SECTION_ID = "application-page-final-step";

export default function FinalStep() {
  const t = useTranslations();
  const locale = useLocale();
  const { isVisible } = useOnScreen(SECTION_ID);

  return (
    <div
      id={SECTION_ID}
      className="relative flex-1 flex flex-col justify-between min-h-[700px] tab:min-h-[1100px] laptop:min-h-[800px] pt-[177px] tab:pt-[205px] laptop:pt-[78px] pb-8 tab:pb-20 laptop:pb-[50px] bg-heroGradient"
    >
      <div className="container flex-1 flex flex-col justify-between max-w-[1920px]">
        <FinalStepInfo isVisible={isVisible} />
        <Link href="/" locale={locale} className="laptop:mb-auto outline-none">
          <MainButton
            className={`w-fit transition duration-[1100ms] ease-slow ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[309px] tab:translate-y-[364px]"
            }`}
          >
            {t("buttons.goToWebsite")}
          </MainButton>
        </Link>
        <Image
          src="/images/bgImages/panelInstallation.svg"
          alt="panelInstallation"
          width="792"
          height="494"
          priority
          className={`laptop:absolute laptop:bottom-[50px] laptop:right-[3.9%] w-[81%] tab:w-[77.9%] laptop:w-auto laptop:h-[61.6%] h-auto mx-auto laptop:mx-0 laptop:ml-auto mt-auto transition duration-[1100ms] ease-slow ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
