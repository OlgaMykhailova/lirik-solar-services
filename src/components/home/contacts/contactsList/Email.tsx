import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import SubTitle from "@/components/shared/titles/SubTitle";
import { EMAIL } from "@/constants/constants";

export default function Email() {
  const t = useTranslations("contacts");
  return (
    <li className="flex items-start gap-3">
      <Image
        src="/images/icons/email.svg"
        alt="email icon"
        width="74"
        height="74"
      />
      <div className="flex flex-col gap-4">
        <SubTitle>{t("email.title")}</SubTitle>
        <a
          href={`mailto:${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="outline-none laptop:hover:text-blue focus-visible:text-blue active:text-blue transition duration-300 ease-out"
        >
          {EMAIL}
        </a>
      </div>
    </li>
  );
}
