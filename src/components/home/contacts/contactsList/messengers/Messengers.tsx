import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import SubTitle from "@/components/shared/titles/SubTitle";

import MessengersList from "./MessengersList";

export default function Messengers() {
  const t = useTranslations("contacts");

  return (
    <li className="flex items-start gap-3 pc:w-[48%]">
      <Image
        src="/images/icons/messenger.svg"
        alt="messenger icon"
        width="74"
        height="74"
      />
      <div className="flex flex-col gap-4">
        <SubTitle>{t("messengers.title")}</SubTitle>
        <MessengersList />
      </div>
    </li>
  );
}
