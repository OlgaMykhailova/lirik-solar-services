import { useTranslations } from "next-intl";
import React from "react";

import MenuLinkItem from "./MenuLinkItem";

export default function MenuList() {
  const t = useTranslations("header.menu");

  const menuList = [
    { title: t("about"), id: "#about" },
    { title: t("services"), id: "#services" },
    { title: t("stations"), id: "#stations" },
    { title: t("ess"), id: "#ess" },
    { title: t("products"), id: "#products" },
  ];

  return (
    <ul className="flex gap-8">
      {menuList.map((menuItem, idx) => (
        <MenuLinkItem key={idx} menuItem={menuItem} />
      ))}
    </ul>
  );
}
