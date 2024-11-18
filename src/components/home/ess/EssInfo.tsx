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
      <div className="flex flex-col justify-between laptop:w-[528px]">
        <p className="tab:w-[64.1%] laptop:w-[448px]">{t("description")}</p>
        <GridButtons
          isGrid={isGrid}
          setIsGrid={setIsGrid}
          className="hidden laptop:flex mt-auto"
        />
      </div>
      <EssStation isGrid={isGrid} setIsGrid={setIsGrid} />
    </div>
  );
}
