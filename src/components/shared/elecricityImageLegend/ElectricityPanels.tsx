import { useTranslations } from "next-intl";
import React from "react";

export default function ElectricityPanels() {
  const t = useTranslations("stations");

  return (
    <p className="flex items-center">
      <span className="inline-block size-3 mr-2 bg-yellowDark rounded-full"></span>
      <span className="text-xxs tab:text-sm">{t("electricityPanels")}</span>
    </p>
  );
}
