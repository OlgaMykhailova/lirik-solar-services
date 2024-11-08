import { useTranslations } from "next-intl";
import React from "react";

import MenuLinkItem from "./MenuLinkItem";

interface MenuListProps {
  closeMenu?: () => void;
}

export default function MenuList({ closeMenu }: MenuListProps) {
  const t = useTranslations("header.menu");

  const menuList = [
    { title: t("about"), id: "#about" },
    { title: t("services"), id: "#services" },
    { title: t("products"), id: "#products" },
    { title: t("order"), id: "#order" },
    { title: t("contacts"), id: "#contacts" },
  ];

  return (
    <nav>
      <ul className="flex flex-col gap-8 laptop:flex-row">
        {menuList.map((menuItem, idx) => (
          <MenuLinkItem key={idx} menuItem={menuItem} closeMenu={closeMenu} />
        ))}
      </ul>
    </nav>
  );
}
