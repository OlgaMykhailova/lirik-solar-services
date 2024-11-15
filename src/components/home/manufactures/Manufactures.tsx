import { useTranslations } from "next-intl";
import React from "react";

import MainButton from "@/components/shared/buttons/MainButton";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { PRODUCTS_LINK } from "@/constants/constants";

import ManufacturesInfo from "./ManufacturesInfo";
import Container from "@/components/shared/container/Container";
import ManufacturesSlider from "./ManufacturesSlider";

export default function Manufactures() {
  const t = useTranslations("");

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-backgroundLight">
      <Container>
        <section
          id="products"
          className="pl-4 tab:pl-8 laptop:pl-0 py-8 tab:py-16 scroll-mt-[72px]"
        >
          <SectionTitle>{t("manufactures.title")}</SectionTitle>
          <div className="flex flex-col laptop:flex-row gap-y-6">
            <ManufacturesInfo />
            <ManufacturesSlider />
            <a
              href={PRODUCTS_LINK}
              target="_blank"
              rel="noopener"
              className="inline-block mt-2 tab:mt-0 outline-none"
            >
              <MainButton>{t("buttons.goToProducts")}</MainButton>
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
}
