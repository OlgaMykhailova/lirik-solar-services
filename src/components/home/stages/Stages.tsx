import { useTranslations } from "next-intl";
import React from "react";

import OpenPopupButton from "@/components/shared/buttons/OpenPopupButton";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import StagesList from "./StagesList";

const APPLICATION_NAME = "Розпочати проєкт";

export default function Stages() {
  const t = useTranslations();
  return (
    <Section>
      <SectionTitle className="after:top-[10px]">
        {t("stages.title")}
      </SectionTitle>
      <StagesList />
      <OpenPopupButton
        buttonName={t("buttons.startProject")}
        className="mt-10 laptop:mt-16"
        applicationName={APPLICATION_NAME}
      />
    </Section>
  );
}
