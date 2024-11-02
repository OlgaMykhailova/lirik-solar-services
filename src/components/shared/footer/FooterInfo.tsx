import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

export default function FooterInfo() {
  const t = useTranslations("footer");
  const locale = useLocale();
  return (
    <div className="flex justify-between py-6 border-t-[1px] border-white">
      <p>{t("rights")}</p>
      <Link
        href="/policy"
        locale={locale}
        className="outline-none laptop:hover:text-blue focus-visible:text-blue active:text-blue transition duration-300 ease-out"
      >
        {t("policy")}
      </Link>
    </div>
  );
}
