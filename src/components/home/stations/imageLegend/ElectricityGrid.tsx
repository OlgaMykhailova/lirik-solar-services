import React from "react";
import { useTranslations } from "next-intl";

export default function ElectricityGrid() {
  const t = useTranslations("stations");

  return (
    <p className="flex items-center">
      <span className="inline-block size-4 mr-2 bg-blue rounded-full text-sm"></span>
      <span>{t("electricityGrid")}</span>
    </p>
  );
}
