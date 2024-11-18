import { useTranslations } from "next-intl";
import React from "react";

export default function SaleElectricity() {
  const t = useTranslations("stations");

  return (
    <p className="flex items-center">
      <span className="inline-block size-3 mr-2 bg-inputText rounded-full"></span>
      <span className="text-xxs tab:text-sm">{t("saleElectricity")}</span>
    </p>
  );
}
