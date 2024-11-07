import { useTranslations } from "next-intl";
import React from "react";

import MainButton from "@/components/shared/buttons/MainButton";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import StagesList from "./StagesList";

export default function Stages() {
  const t = useTranslations();
  return (
    <Section>
      <SectionTitle>{t("stages.title")}</SectionTitle>
      <StagesList />
      <MainButton className="mt-10 laptop:mt-16">
        {t("buttons.startProject")}
      </MainButton>
    </Section>
  );
}
