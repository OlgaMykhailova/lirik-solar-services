import { useTranslations } from "next-intl";
import React from "react";

import SubTitle from "../shared/titles/SubTitle";

export default function Section5() {
  const t = useTranslations("policyPage.section5");
  return (
    <li className="flex flex-col gap-y-4 tab:gap-y-6 laptop:flex-row justify-between">
      <SubTitle className="laptop:w-[25.5%]">{t("title")}</SubTitle>
      <ul className="flex flex-col gap-y-4 tab:gap-y-6 laptop:w-[68.1%]">
        <li>{t("part1")}</li>
        <li>{t("part2")}</li>
      </ul>
    </li>
  );
}
