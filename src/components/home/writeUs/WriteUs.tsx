import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import ClientApplication from "./ClientApplication";
import WriteUsInfo from "./WriteUsInfo";

export default function WriteUs() {
  const t = useTranslations("writeUs");

  return (
    <Section id="order">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="laptop:flex flex-row justify-between">
        <WriteUsInfo />
        <ClientApplication />
      </div>
    </Section>
  );
}
