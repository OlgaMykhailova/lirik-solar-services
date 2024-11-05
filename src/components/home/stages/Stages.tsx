import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import StagesList from "./StagesList";

export default function Stages() {
  const t = useTranslations("stages");
  return (
    <Section>
      <SectionTitle>{t("title")}</SectionTitle>
      <StagesList />
    </Section>
  );
}
