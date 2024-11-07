"use client";

import { useState } from "react";

import Container from "../container/Container";
import BurgerMenuButtonOpen from "./BurgerMenuButtonOpen";
import CallUsButton from "./callUs/CallUsButton";
import CallUsLinkMob from "./callUs/CallUsLinkMob";
import LogoLink from "./LogoLink";
import MenuMobTab from "./MenuMobTab";

export default function HeaderMobTab() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);

  return (
    <header className="laptop:hidden fixed z-30 w-full bg-headerGradient">
      <Container className="flex justify-between items-center h-[72px]">
        <LogoLink />
        <div className="flex items-center justify-between min-w-[208px] w-[39%]">
          <CallUsButton className="hidden tab:block" />
          <CallUsLinkMob />
          <BurgerMenuButtonOpen
            isHeaderMenuOpened={isHeaderMenuOpened}
            openMenu={() => setIsHeaderMenuOpened(true)}
          />
          <MenuMobTab
            isHeaderMenuOpened={isHeaderMenuOpened}
            closeMenu={() => setIsHeaderMenuOpened(false)}
          />
        </div>
      </Container>
    </header>
  );
}
