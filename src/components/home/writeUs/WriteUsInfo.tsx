import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

export default function WriteUsInfo() {
  const t = useTranslations("writeUs");

  return (
    <div className="flex flex-col justify-between tab:w-[64%] tabxl:w-[47%] laptop:w-[49%]">
      <div className="laptop:w-[529px]">
        <p>{t("description.partOne")}</p>
        <p>{t("description.partTwo")}</p>
      </div>
      <Image
        src="/images/girlWithSolarPanel.webp"
        alt="solar panel example"
        width="1872"
        height="1082"
        className="hidden tabxl:block object-cover object-center aspect-[528/541] w-full h-[541px]"
      />
    </div>
  );
}
