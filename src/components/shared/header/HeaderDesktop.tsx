import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";
import { Locale } from "@/types/locale";

import SecondaryButton from "../buttons/SecondaryButton";
import Container from "../container/Container";
import LocaleSwitcher from "./LocaleSwitcher";
import MenuList from "./MenuList";

export default function HeaderDesktop() {
  const t = useTranslations("buttons");
  const locale = useLocale();

  return (
    <header className="fixed z-10 w-full bg-backgroundLight bg-opacity-40">
      <Container className="flex justify-between items-center h-[72px]">
        <Link href="/" locale={locale} className="outline-none">
          <Image
            src="/images/icons/logo.svg"
            alt="logo"
            width="0"
            height="0"
            className="size-[57px]"
          />
        </Link>
        <LocaleSwitcher locale={locale as Locale} />
        <MenuList />
        <SecondaryButton>{t("contacts")}</SecondaryButton>
      </Container>
    </header>
  );
}
