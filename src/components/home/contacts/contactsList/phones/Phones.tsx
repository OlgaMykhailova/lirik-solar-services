import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import SubTitle from "@/components/shared/titles/SubTitle";

import PhonesList from "./phonesList/PhonesList";
import Shedule from "./Shedule";

export default function Phones() {
  const t = useTranslations("contacts");

  return (
    <li className="flex items-start gap-3">
      <Image
        src="/images/icons/phone.svg"
        alt="phone icon"
        width="74"
        height="74"
      />
      <div className="flex flex-col gap-4">
        <SubTitle>{t("phones.title")}</SubTitle>
        <Shedule />
        <PhonesList />
      </div>
    </li>
  );
}
