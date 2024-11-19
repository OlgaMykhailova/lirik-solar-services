import SectionTitle from "@/components/shared/titles/SectionTitle";
import React from "react";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/container/Container";
import Section1 from "@/components/policy/Section1";
import Section2 from "@/components/policy/Section2";
import Section3 from "@/components/policy/Section3";
import Section4 from "@/components/policy/Section4";
import Section5 from "@/components/policy/Section5";
import Section6 from "@/components/policy/Section6";
import Section7 from "@/components/policy/Section7";

export default function Policy() {
  const t = useTranslations("policyPage");
  return (
    <div className="pt-[112px] tab:pt-[120px] laptop:pt-[136px] pb-[81px] tab:pb-[94px] laptop:pb-[103px]">
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
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
