"use client";

import { useState } from "react";

import Backdrop from "../backdrop/Backdrop";
import BurgerMenuButton from "../buttons/BurgerMenuButton";
import Container from "../container/Container";
import BurgerMenuMobTab from "./BurgerMenuMobTab";
import CallUsButton from "./callUs/CallUsButton";
import CallUsLinkMob from "./callUs/CallUsLinkMob";
import LogoLink from "./LogoLink";

export default function HeaderMobTab() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <header className="laptop:hidden fixed z-30 w-full bg-headerGradient">
      <Container className="flex justify-between items-center h-[72px]">
        <LogoLink />
        <div className="flex items-center justify-between min-w-[208px] w-[39%]">
          <CallUsButton className="hidden tab:block" />
          <CallUsLinkMob />
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />
          <BurgerMenuMobTab
            isHeaderMenuOpened={isHeaderMenuOpened}
            closeMenu={() => setIsHeaderMenuOpened(false)}
          />
        </div>
      </Container>
      <Backdrop
        isVisible={isHeaderMenuOpened}
        onClick={() => setIsHeaderMenuOpened(false)}
      />
    </header>
  );
}
