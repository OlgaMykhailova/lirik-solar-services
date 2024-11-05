import React from "react";
import { useTranslations } from "next-intl";

export default function BenefitsList() {
  const t = useTranslations("benefits");

  const benefitsList = [
    {
      title: t("individual.title"),
      description: t("individual.description"),
      icon: "thumbsUp.svg",
    },
    {
      title: t("economy.title"),
      description: t("economy.description"),
      icon: "lamp.svg",
    },
    {
      title: t("garanty.title"),
      description: t("garanty.description"),
      icon: "notes.svg",
    },
    {
      title: t("eco.title"),
      description: t("eco.description"),
      icon: "leaf.svg",
    },
  ];
  return <ul>BenefitsList</ul>;
}
