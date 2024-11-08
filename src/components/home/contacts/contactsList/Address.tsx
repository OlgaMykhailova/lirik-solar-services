import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import SubTitle from "@/components/shared/titles/SubTitle";
import { ADDRESS_LINK } from "@/constants/constants";

export default function Address() {
  const t = useTranslations("contacts");
  return (
    <li className="flex items-start gap-3">
      <Image
        src="/images/icons/map.svg"
        alt="map icon"
        width="74"
        height="74"
      />
      <div className="flex flex-col gap-4">
        <SubTitle>{t("address.title")}</SubTitle>
        <a
          href={ADDRESS_LINK}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="outline-none laptop:hover:text-blue focus-visible:text-blue active:text-blue transition duration-300 ease-out"
        >
          {t("address.description")}
        </a>
        <a
          href={ADDRESS_LINK}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="self-start border-b-[1px] border-blue outline-none text-blue laptop:hover:border-b-blueLight 
          focus-visible:border-b-blueLight active:border-b-blueLight laptop:hover:text-blueLight focus-visible:text-blueLight 
          active:text-blueLight transition duration-300 ease-out"
        >
          {t("address.route")}
        </a>
      </div>
    </li>
  );
}
