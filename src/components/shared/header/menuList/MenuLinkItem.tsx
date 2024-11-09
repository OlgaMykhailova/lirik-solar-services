import Link from "next/link";
import { useLocale } from "next-intl";
import React from "react";

interface MenuLinkItemProps {
  menuItem: {
    title: string;
    id: string;
  };
  closeMenu: (() => void) | undefined;
}

export default function MenuLinkItem({
  menuItem,
  closeMenu,
}: MenuLinkItemProps) {
  const locale = useLocale();
  const { title, id } = menuItem;

  return (
    <li className="text-center">
      <Link
        href={locale === "uk" ? `/${id}` : `/${locale}${id}`}
        locale={locale}
        className="font-gogh text-baseb text-white transition duration-300 ease-out active:text-blue focus-visible:text-blue
         laptop:hover:text-blue outline-none"
        onClick={closeMenu}
      >
        {title}
      </Link>
    </li>
  );
}
