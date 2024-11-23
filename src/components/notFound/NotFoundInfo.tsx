import React from "react";
import Container from "../shared/container/Container";
import SecondaryButton from "../shared/buttons/SecondaryButton";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export default function NotFoundInfo() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Container className="flex flex-col items-center">
      <p className="mb-2 font-gogh text-mdb tab:text-largeb laptop:text-xlb">
        {t("notFoundPage.oops")}
      </p>
      <h1 className="mb-4 laptop:mb-10 font-gogh text-lgbb tab:text-xlbb laptop:text-xxlbb">
        {t("notFoundPage.title").toUpperCase()}
      </h1>
      <p className="mb-8 text-center tab:max-w-[50%]">
        {t("notFoundPage.description")}
      </p>
      <Link href="/" locale={locale} className="outline-none">
        <SecondaryButton>{t("buttons.goToHome")}</SecondaryButton>
      </Link>
    </Container>
  );
}
