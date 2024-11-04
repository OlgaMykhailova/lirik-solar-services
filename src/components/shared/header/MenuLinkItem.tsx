import Link from "next/link";
import { useLocale } from "next-intl";
import React from "react";

interface MenuLinkItemProps {
  menuItem: {
    title: string;
    id: string;
  };
}

export default function MenuLinkItem({ menuItem }: MenuLinkItemProps) {
  const locale = useLocale();
  const { title, id } = menuItem;
  console.log(Link);
  return (
    <li className="">
      <Link
        href={locale === "uk" ? `/${id}` : `/${locale}${id}`}
        locale={locale}
        className="font-gogh text-baseb text-blue transition duration-300 ease-out active:text-blueLight focus-visible:text-blueLight
         laptop:hover:text-blueLight outline-none"
      >
        {title}
      </Link>
    </li>
  );
}
