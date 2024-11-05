import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function About() {
  const t = useTranslations("about");
  return (
    <Section className="relative pt-[162px] tab:pt-[64px] laptop:pt-[80px]">
      <Image
        src="/images/icons/logo.svg"
        alt="logo"
        width="0"
        height="0"
        className="absolute right-[2px] tab:right-[-14px] laptop:right-[-69px] top-[-64px] 
        laptop:top-[-106px] size-[228px] tab:size-[291px] laptop:size-[578px]"
      />
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="laptop:text-base">
        <p className="mb-2">{t("description.partOne")}</p>
        <p>{t("description.partTwo")}</p>
      </div>
    </Section>
  );
}
