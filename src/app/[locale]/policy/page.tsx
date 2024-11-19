import SectionTitle from "@/components/shared/titles/SectionTitle";
import React from "react";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/container/Container";
import Section1 from "@/components/policy/Section1";
import Section2 from "@/components/policy/Section2";

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
        </ul>
      </Container>
    </div>
  );
}
