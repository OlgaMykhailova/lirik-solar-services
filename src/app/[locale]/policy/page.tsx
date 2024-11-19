import { useTranslations } from "next-intl";
import React from "react";

import ScrollIndicator from "@/components/policy/ScrollIndicator";
import Section1 from "@/components/policy/Section1";
import Section2 from "@/components/policy/Section2";
import Section3 from "@/components/policy/Section3";
import Section4 from "@/components/policy/Section4";
import Section5 from "@/components/policy/Section5";
import Section6 from "@/components/policy/Section6";
import Section7 from "@/components/policy/Section7";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Policy() {
  const t = useTranslations("policyPage");
  return (
    <div
      data-container="policy"
      className="relative h-full pt-[112px] tab:pt-[120px] laptop:pt-[136px] pl-4 tab:pl-6 laptop:pl-0 pb-[146px] tab:pb-[219px] laptop:pb-[305px]"
    >
      <ScrollIndicator />
      <Container>
        <SectionTitle className="text-xxmdb tab:text-lgb">
          {t("title")}
        </SectionTitle>
        <p className="laptop:w-[57.4%] mb-8 laptop:mb-12">{t("description")}</p>
        <ul className="flex flex-col gap-y-8 tab:gap-y-10">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </ul>
      </Container>
    </div>
  );
}
