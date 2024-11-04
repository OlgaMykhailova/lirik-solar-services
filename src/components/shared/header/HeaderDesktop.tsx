import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

import SecondaryButton from "../buttons/SecondaryButton";
import Container from "../container/Container";
import MenuList from "./MenuList";

export default function HeaderDesktop() {
  const t = useTranslations("buttons");
  const locale = useLocale();

  return (
    <header>
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
        <MenuList />
        <SecondaryButton>{t("contacts")}</SecondaryButton>
      </Container>
    </header>
  );
}
