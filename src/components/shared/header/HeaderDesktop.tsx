import Image from "next/image";
import { useLocale } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";
import { Locale } from "@/types/locale";

import Container from "../container/Container";
import CallUsButton from "./CallUsButton";
import LocaleSwitcher from "./LocaleSwitcher";
import MenuList from "./MenuList";

export default function HeaderDesktop() {
  const locale = useLocale();

  return (
    <header className="fixed z-30 w-full bg-headerGradient">
      <Container className="flex justify-between items-center h-[72px]">
        <div className="flex justify-between items-center w-[13%]">
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
        </div>
        <MenuList />
        <CallUsButton />
      </Container>
    </header>
  );
}
