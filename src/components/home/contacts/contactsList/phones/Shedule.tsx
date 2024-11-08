import { useTranslations } from "next-intl";
import React from "react";

export default function Shedule() {
  const t = useTranslations("contacts");

  return (
    <div className="font-gogh text-smb laptop:text-baseb">
      <p>{t("phones.shedule.working")}</p>
      <p>{t("phones.shedule.weekends")}</p>
    </div>
  );
}
