import React from "react";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobTab from "./HeaderMobTab";

export default function Header() {
  return (
    <>
      <HeaderMobTab />
      <HeaderDesktop />
    </>
  );
}
