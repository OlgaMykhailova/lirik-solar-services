import { useTranslations } from "next-intl";
import React from "react";

import MainButton from "@/components/shared/buttons/MainButton";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { PRODUCTS_LINK } from "@/constants/constants";

import ManufacturesInfo from "./ManufacturesInfo";
import Container from "@/components/shared/container/Container";

export default function Manufactures() {
  const t = useTranslations("");

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-backgroundLight">
      <Container>
        <Section id="products" className="py-8 tab:py-16">
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
      </Container>
    </div>
  );
}
