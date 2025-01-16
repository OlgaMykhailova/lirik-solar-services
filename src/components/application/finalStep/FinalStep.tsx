"use client";
import Image from "next/image";
import React from "react";
import MainButton from "@/components/shared/buttons/MainButton";
import { useOnScreen } from "@/hooks/useOnScreen";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

const SECTION_ID = "application-page-final-step";

export default function FinalStep() {
  const t = useTranslations();
  const locale = useLocale();
  const { isVisible } = useOnScreen(SECTION_ID);

  return (
    <div
      id={SECTION_ID}
      className="relative flex-1 flex flex-col justify-end pt-[177px] tab:pt-[205px] laptop:pt-[78px] pb-8 tab:pb-20 laptop:pb-[50px] bg-heroGradient overflow-clip"
    >
      <div className="container max-w-[1920px]">
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
        <Image
          src="/images/bgImages/panelInstallation.svg"
          alt="panelInstallation"
          width="792"
          height="494"
          className="w-[81%] tab:w-[77.9%] laptop:w-[61.7%] h-auto mx-auto laptop:mx-0 laptop:ml-auto"
        />
      </div>
    </div>
  );
}
