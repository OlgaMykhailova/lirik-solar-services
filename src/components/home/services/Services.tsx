import { useTranslations } from "next-intl";
import React from "react";

import MainButton from "@/components/shared/buttons/MainButton";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import ServicesDescription from "./ServicesDescription";
import ServicesList from "./ServicesList";

export default function Services() {
  const t = useTranslations();

  return (
    <Section>
      <SectionTitle>{t("services.title")}</SectionTitle>
      <div className="laptop:hidden">
        <ServicesDescription />
      </div>
      <ServicesList />
      <MainButton className="mt-8 laptop:mt-12">
        {t("buttons.startPath")}
      </MainButton>
    </Section>
  );
}
