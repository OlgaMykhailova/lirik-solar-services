import { useTranslations } from "next-intl";
import React from "react";

export default function StationsDescription() {
  const t = useTranslations("stations");

  return <p className="tab:w-[64.1%] laptop:w-[48.9%]">{t("description")}</p>;
}
