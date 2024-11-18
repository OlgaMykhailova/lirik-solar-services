import { useTranslations } from "next-intl";
import React from "react";

export default function ElectricityGrid() {
  const t = useTranslations("stations");

  return (
    <p className="flex items-center">
      <span className="inline-block size-3 mr-2 bg-blue rounded-full"></span>
      <span className="text-xxs tab:text-sm">{t("electricityGrid")}</span>
    </p>
  );
}
