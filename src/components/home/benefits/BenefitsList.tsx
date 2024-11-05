import { useTranslations } from "next-intl";
import React from "react";

import BenefitItem from "./BenefitItem";

export default function BenefitsList() {
  const t = useTranslations("benefits");

  const benefitsList = [
    {
      title: t("individual.title"),
      description: t("individual.description"),
      icon: "thumbsUp",
    },
    {
      title: t("economy.title"),
      description: t("economy.description"),
      icon: "lamp",
    },
    {
      title: t("garanty.title"),
      description: t("garanty.description"),
      icon: "notes",
    },
    {
      title: t("eco.title"),
      description: t("eco.description"),
      icon: "leaf",
    },
  ];
  return (
    <ul className="flex flex-col gap-8 tab:gap-6 laptop:gap-10">
      {benefitsList.map((benefit, idx) => (
        <BenefitItem key={idx} benefit={benefit} />
      ))}
    </ul>
  );
}
