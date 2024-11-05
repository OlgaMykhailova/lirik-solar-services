import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function About() {
  const t = useTranslations("about");
  return (
    <Section className="relative pt-[162px] tab:pt-[64px] laptop:pt-[80px]">
      <div
        className="absolute z-20 right-[2px] tab:right-[4%] laptop:right-[-69px] top-[-64px] laptop:top-[-106px] size-[228px] 
        tab:size-[291px] laptop:size-[578px] before:content-[''] before:absolute before:top-[46px] laptop:before:top-[96px] before:left-[-4px] before:z-[-10] 
        before:size-[85%] before:rounded-full before:bg-yellow before:bg-opacity-15 laptop:before:bg-opacity-15 before:blur-[40px] laptop:before:blur-[100px]"
      >
        <Image
          src="/images/icons/logo.svg"
          alt="logo"
          width="0"
          height="0"
          className="w-full h-auto"
        />
      </div>
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="laptop:w-[49%] laptop:text-base">
        <p className="mb-2">{t("description.partOne")}</p>
        <p>{t("description.partTwo")}</p>
      </div>
    </Section>
  );
}
