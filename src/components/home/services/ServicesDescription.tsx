import { useTranslations } from "next-intl";
import React from "react";

export default function ServicesDescription() {
  const t = useTranslations("services.description");

  return (
    // TODO: change description text to the actual version
    <div className="mb-8 laptop:mb-0">
      <p className="mb-2">{t("partOne")}</p>
      <p className="mb-2">{t("partTwo")}</p>
      <p>{t("partThree")}</p>
    </div>
  );
}
