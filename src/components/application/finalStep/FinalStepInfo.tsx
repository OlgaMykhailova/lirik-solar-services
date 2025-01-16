import { useTranslations } from "next-intl";
import React from "react";

interface FinalStepInfo {
  isVisible: boolean;
}

export default function FinalStepInfo({ isVisible }: FinalStepInfo) {
  const t = useTranslations("applicationPage.finalStep");

  return (
    <div
      className={`mb-6 tab:mb-8 text-white transition duration-[1100ms] ease-slow ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[309px] tab:translate-y-[364px]"
      }`}
    >
      <p className="py-1 mb-0.5 font-gogh text-xlbb tab:text-xxxxlb">
        {t("title.partOne")}
      </p>
      <p className="py-0.5 ml-[121px] tab:ml-[218px] font-gogh text-xxmdb tab:text-xxxmdb">
        {t("title.partTwo")}
      </p>
      <p className="w-[328px] tab:w-[417px] mt-4 tab:mt-10 laptop:mt-[54px]">
        {t("description")}
      </p>
    </div>
  );
}
