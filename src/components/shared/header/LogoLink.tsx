import Image from "next/image";
import { useLocale } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

export default function LogoLink() {
  const locale = useLocale();

  return (
    <Link href="/" locale={locale} className="outline-none">
      <Image
        src="/images/icons/logo.svg"
        alt="logo"
        width="0"
        height="0"
        className="size-[57px]"
      />
    </Link>
  );
}
