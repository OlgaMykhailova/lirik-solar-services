import { useTranslations } from "next-intl";
import React from "react";

import OpenPopupButton from "@/components/shared/buttons/OpenPopupButton";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import ServicesDescription from "./ServicesDescription";
import ServicesList from "./ServicesList";

const APPLICATION_NAME = "Замовити послугу";

export default function Services() {
  const t = useTranslations();

  return (
    <Section id="services">
      <SectionTitle className="after:top-[10px]">
        {t("services.title")}
      </SectionTitle>
      <div className="laptop:hidden">
        <ServicesDescription />
      </div>
      <ServicesList />
      <OpenPopupButton
        buttonName={t("buttons.orderService")}
        className="mt-10 laptop:mt-12"
        applicationName={APPLICATION_NAME}
      />
    </Section>
  );
}
