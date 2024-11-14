import { useTranslations } from "next-intl";
import React from "react";

export default function ElectricityGrid() {
  const t = useTranslations("stations");

  return (
    <p className="flex items-center">
      <span className="inline-block size-4 mr-2 bg-blue rounded-full text-sm"></span>
      <span>{t("electricityGrid")}</span>
    </p>
  );
}
