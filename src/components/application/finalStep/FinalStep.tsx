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
      className="relative flex-1 flex flex-col justify-between pt-[177px] tab:pt-[205px] 
      laptop:pt-[78px] pb-20 laptop:pb-[50px] bg-heroGradient"
    >
      <div className="container flex-1 flex flex-col justify-around max-w-[1920px]">
        <div className="mb-8 tab:mb-6 laptop:mb-0">
          <FinalStepInfo isVisible={isVisible} />
          <Link href="/" locale={locale} className="outline-none">
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
        </div>
        <Image
          src="/images/bgImages/panelInstallation.svg"
          alt="panelInstallation"
          width="792"
          height="494"
          priority
          className={`laptop:absolute laptop:bottom-[50px] laptop:right-[3.9%] w-[76%] tab:w-[74.3%] laptop:w-auto laptop:h-[61.6%] h-auto mx-auto 
            laptop:mx-0 laptop:ml-auto transition delay-[600ms] duration-[1100ms] ease-slow ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>
    </div>
  );
}
