import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

interface FormDescriptionProps {
  title: string;
  className?: string;
}

export default function FormDescription({
  title,
  className = "",
}: FormDescriptionProps) {
  const locale = useLocale();
  const t = useTranslations("");

  return (
    <div className={`text-sm ${className}`}>
      <div className="flex gap-x-2 w-full mb-1.5 text-xs">
        <span className="text-inputError">*</span>
        <p>{t("forms.requiredFields")}</p>
      </div>
      <p className="text-xs tab:text-sm">
        {t("forms.agreement", { title })}
        <Link
          href={`policy`}
          target="_blank"
          locale={locale}
          className="outline-none border-b text-blue border-blue active:text-blueLight active:border-blueLight 
      laptop:hover:text-blueLight laptop:focus-visible:text-blueLight laptop:hover:border-blueLight 
      laptop:focus-visible:border-blueLight transition duration-300 ease-out"
        >
          {t("forms.policy")}
        </Link>
        .
      </p>
    </div>
  );
}
