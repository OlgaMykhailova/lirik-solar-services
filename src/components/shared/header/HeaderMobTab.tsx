"use client";

import { useState } from "react";

import Container from "../container/Container";
import BurgerMenuButton from "./BurgerMenuButton";
import CallUsButton from "./CallUsButton";
import LogoLink from "./LogoLink";

export default function HeaderMobTab() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);

  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <header className="laptop:hidden fixed z-30 w-full bg-headerGradient">
      <Container className="flex justify-between items-center h-[72px]">
        <LogoLink />
        <CallUsButton />
        <BurgerMenuButton
          isHeaderMenuOpened={isHeaderMenuOpened}
          toggleHeaderMenuOpen={toggleHeaderMenuOpen}
        />
      </Container>
    </header>
  );
}
