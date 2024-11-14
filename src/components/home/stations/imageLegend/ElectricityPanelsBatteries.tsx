import React from "react";
import { useTranslations } from "next-intl";

export default function ElectricityPanelsBatteries() {
  const t = useTranslations("stations");

  return (
    <p className="flex items-center">
      <span className="inline-block size-4 mr-2 bg-yellowDark rounded-full text-sm"></span>
      <span>{t("electricityPanelsBatteries")}</span>
    </p>
  );
}
