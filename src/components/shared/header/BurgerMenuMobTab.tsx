import { useLocale } from "next-intl";
import React from "react";

import { Locale } from "@/types/locale";

import IconButton from "../buttons/IconButton";
import Container from "../container/Container";
import IconClose from "../icons/IconClose";
import CallUsButton from "./callUs/CallUsButton";
import LocaleSwitcher from "./LocaleSwitcher";
import MenuList from "./menuList/MenuList";

interface BurgerMenuMobTabProps {
  isHeaderMenuOpened: boolean;
  closeMenu: () => void;
}

export default function BurgerMenuMobTab({
  closeMenu,
  isHeaderMenuOpened,
}: BurgerMenuMobTabProps) {
  const locale = useLocale();
  return (
    <div
      className={`${
        isHeaderMenuOpened ? "translate-x-0 no-doc-scroll" : "translate-x-full"
      } absolute top-0 right-0 z-50 w-[100vw] h-[100dvh] tab:min-w-[360px] tab:h-[666px] tab:w-[40%] bg-headerGradient 
      transition-transform duration-[600ms] overflow-y-auto`}
    >
      <Container>
        <div className="flex justify-between items-center h-[72px]">
          <LocaleSwitcher locale={locale as Locale} />
          <IconButton handleClick={closeMenu}>{<IconClose />}</IconButton>
        </div>
        <div className="flex flex-col items-center gap-y-16 py-8">
          <MenuList closeMenu={closeMenu} />
          <CallUsButton closeMenu={closeMenu} />
        </div>
      </Container>
    </div>
  );
}