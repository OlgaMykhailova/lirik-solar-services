import { useTranslations } from "next-intl";
import React from "react";

export default function ElectricityInvertor() {
  const t = useTranslations("stations");

  return (
    <p className="flex items-center">
      <span className="inline-block size-3 mr-2 bg-yellowDark rounded-full"></span>
      <span className="text-xxs tab:text-sm">{t("electricityInvertor")}</span>
    </p>
  );
}
