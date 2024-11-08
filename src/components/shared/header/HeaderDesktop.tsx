import { useLocale } from "next-intl";
import React from "react";

import { Locale } from "@/types/locale";

import Container from "../container/Container";
import CallUsButton from "./callUs/CallUsButton";
import LocaleSwitcher from "./LocaleSwitcher";
import LogoLink from "./LogoLink";
import MenuList from "./menuList/MenuList";

export default function HeaderDesktop() {
  const locale = useLocale();

  return (
    <header className="hidden laptop:block fixed z-30 w-full bg-headerGradient">
      <Container className="flex justify-between items-center h-[72px]">
        <div className="flex justify-between items-center w-[13%]">
          <LogoLink />
          <LocaleSwitcher locale={locale as Locale} />
        </div>
        <MenuList />
        <CallUsButton />
      </Container>
    </header>
  );
}
