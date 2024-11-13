import { useTranslations } from "next-intl";
import React from "react";

import MainButton from "@/components/shared/buttons/MainButton";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { PRODUCTS_LINK } from "@/constants/constants";

import ManufacturesInfo from "./ManufacturesInfo";

export default function Manufactures() {
  const t = useTranslations("");

  return (
    <Section id="products">
      <SectionTitle>{t("manufactures.title")}</SectionTitle>
      <ManufacturesInfo />
      <a
        href={PRODUCTS_LINK}
        target="_blank"
        rel="noopener"
        className="inline-block mt-8 tab:mt-6 outline-none"
      >
        <MainButton>{t("buttons.goToProducts")}</MainButton>
      </a>
    </Section>
  );
}
