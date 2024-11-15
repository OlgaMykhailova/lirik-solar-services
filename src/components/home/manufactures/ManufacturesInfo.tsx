import { useTranslations } from "next-intl";
import React from "react";

import SubTitle from "@/components/shared/titles/SubTitle";

export default function ManufacturesInfo() {
  const t = useTranslations("manufactures");

  return (
    <div>
      <SubTitle className="mb-2 laptop:mb-6 text-blue">
        {t("subtitle")}
      </SubTitle>
      <p>{t("description")}</p>
    </div>
  );
}
