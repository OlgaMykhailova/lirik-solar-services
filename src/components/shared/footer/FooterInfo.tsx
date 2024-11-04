import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

export default function FooterInfo() {
  const t = useTranslations("footer");
  const locale = useLocale();
  return (
    <div
      className="flex flex-col items-center gap-y-6 pt-6 tab:justify-between tab:flex-row-reverse tab:py-6 tab:text-base border-t-[1px]
     border-white"
    >
      <Link
        href="/policy"
        locale={locale}
        className="outline-none laptop:hover:text-blue focus-visible:text-blue active:text-blue transition duration-300 ease-out"
      >
        {t("policy")}
      </Link>
      <p>{t("rights")}</p>
    </div>
  );
}
