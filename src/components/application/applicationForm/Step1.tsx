import { useTranslations } from "next-intl";
import React from "react";

import FormSubtitle from "@/components/shared/titles/FormSubtitle";
import PopUpTitle from "@/components/shared/titles/PopUpTitle";

export default function Step1() {
  const t = useTranslations();

  return (
    <>
      <FormSubtitle className="tab:mb-2">
        {t("applicationPage.question1.subtitle")}
      </FormSubtitle>
      <PopUpTitle>{t("applicationPage.question1.title")}</PopUpTitle>
      <div className="flex flex-col tab:flex-row tab:flex-wrap justify-between gap-y-4"></div>
    </>
  );
}
