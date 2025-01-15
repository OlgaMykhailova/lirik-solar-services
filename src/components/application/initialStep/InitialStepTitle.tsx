import React from "react";
import { useTranslations } from "next-intl";

interface InitialStepTitleProps {
  isVisible: boolean;
}

export default function InitialStepTitle({ isVisible }: InitialStepTitleProps) {
  const t = useTranslations("applicationPage.initialStep");

  return (
    <h1
      className={`w-[291px] mt-[84px] mb-6 tab:mb-10 tab:text-base text-white transition-all duration-[1100ms] ease-slow ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[309px] tab:translate-y-[364px]"
      }`}
    >
      {t("title")}
    </h1>
  );
}
