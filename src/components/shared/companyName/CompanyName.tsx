"use client";
import { useTranslations } from "next-intl";
import React from "react";

import { useOnScreen } from "@/hooks/useOnScreen";

interface CompanyNameProps {
  id: string;
  className: string;
}

export default function CompanyName({ id, className }: CompanyNameProps) {
  const t = useTranslations();
  const { isVisible } = useOnScreen(id);

  return (
    <div className={className}>
      <p
        className={`font-gogh text-white text-xlargeb tab:text-xxxlb laptop:text-xxxxlb transition duration-[1100ms] ease-slow ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[309px] tab:translate-y-[364px]"
        }`}
      >
        {t("hero.companyName")}
      </p>
      <p
        className={`font-gogh text-xxmdb tab:text-xlb laptop:text-xxlb text-white transition duration-[1100ms] ease-slow ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[309px] tab:translate-y-[364px]"
        }`}
      >
        {t("hero.path")}
      </p>
    </div>
  );
}
