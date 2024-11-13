import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import WriteUsApplication from "./WriteUsApplication";
import WriteUsInfo from "./WriteUsInfo";

export default function WriteUs() {
  const t = useTranslations("writeUs");

  return (
    <Section id="order">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="flex flex-col gap-y-8 tabxl:flex-row justify-between">
        <WriteUsInfo />
        <WriteUsApplication />
      </div>
    </Section>
  );
}
