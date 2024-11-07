import { useTranslations } from "next-intl";
import React from "react";

import StageItem from "./StageItem";

export default function StagesList() {
  const t = useTranslations("stages");

  const stagesList = [
    {
      title: t("01.title"),
      description: t("01.description"),
      icon: "01",
    },
    {
      title: t("02.title"),
      description: t("02.description"),
      icon: "02",
    },
    {
      title: t("03.title"),
      description: t("03.description"),
      icon: "03",
    },
    {
      title: t("04.title"),
      description: t("04.description"),
      icon: "04",
    },
  ];

  return (
    <ul
      className="flex flex-col items-center gap-14 tab:flex-row tab:items-stretch tab:flex-wrap tab:gap-x-0 tab:gap-y-18 tab:justify-around
    laptop:flex-nowrap"
    >
      {stagesList.map((stage, idx) => (
        <StageItem key={idx} stage={stage} />
      ))}
    </ul>
  );
}
