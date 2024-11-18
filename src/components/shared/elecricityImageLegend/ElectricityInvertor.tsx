import { useTranslations } from "next-intl";
import React from "react";

export default function ElectricityInvertor() {
  const t = useTranslations("stations");

  return (
    <p className="flex items-center gap-2">
      <span className="inline-block size-3 bg-yellowDark rounded-full"></span>
      <span className="text-xxs tab:text-sm">{t("electricityInvertor")}</span>
    </p>
  );
}
