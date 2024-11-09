"use client";

import { useState } from "react";

import Backdrop from "../backdrop.tsx/Backdrop";
import IconButton from "../buttons/IconButton";
import Container from "../container/Container";
import IconBurgerMenu from "../icons/IconBurger";
import BurgerMenuMobTab from "./BurgerMenuMobTab";
import CallUsButton from "./callUs/CallUsButton";
import CallUsLinkMob from "./callUs/CallUsLinkMob";
import LogoLink from "./LogoLink";

export default function HeaderMobTab() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);

  return (
    <header className="laptop:hidden fixed z-30 w-full bg-headerGradient">
      <Container className="flex justify-between items-center h-[72px]">
        <LogoLink />
        <div className="flex items-center justify-between min-w-[208px] w-[39%]">
          <CallUsButton className="hidden tab:block" />
          <CallUsLinkMob />
          <IconButton handleClick={() => setIsHeaderMenuOpened(true)}>
            {<IconBurgerMenu />}
          </IconButton>
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
