import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

export default function WriteUsInfo() {
  const t = useTranslations("writeUs");

  return (
    <div className="flex flex-col justify-between tab:w-[64%] laptop:w-[49%]">
      <div>
        <p>{t("description.partOne")}</p>
        <p>{t("description.partTwo")}</p>
      </div>
      <Image
        src="/images/solarPanelExample.webp"
        alt="solar panel example"
        width="528"
        height="501"
        className="hidden laptop:block object-cover object-center aspect-[528/501] w-full h-[501px]"
      />
    </div>
  );
}
