"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import GridButtons from "@/components/shared/buttons/gridButtons/GridButtons";

import EssStation from "./EssStation";

export default function EssInfo() {
  const t = useTranslations("ess");
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="laptop:flex">
      <div className="flex flex-col tab:gap-y-8 laptop:gap-y-[15.5%] laptop:w-[528px]">
        <p className="tab:w-[64.1%] laptop:w-[448px]">{t("description")}</p>
        <GridButtons
          isGrid={isGrid}
          setIsGrid={setIsGrid}
          className="hidden tab:flex"
        />
      </div>
      <EssStation isGrid={isGrid} setIsGrid={setIsGrid} />
    </div>
  );
}
