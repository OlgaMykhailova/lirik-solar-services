import { useLocale, useTranslations } from "next-intl";
import React from "react";

import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Link } from "@/i18n/routing";

import ManufacturesInfo from "./ManufacturesInfo";
import ManufacturesSlider from "./ManufacturesSlider";

export default function Manufactures() {
  const t = useTranslations("");
  const locale = useLocale();

  return (
    <div className="w-full relative bg-backgroundLight">
      <section
        id="products"
        className="pl-4 tab:pl-8 laptop:pl-0 py-8 tab:py-16 scroll-mt-[72px]"
      >
        <Container>
          <SectionTitle className="after:top-[10px]">
            {t("manufactures.title")}
          </SectionTitle>
          <div className="flex flex-col laptop:flex-row gap-y-6">
            <div className="flex flex-col justify-between laptop:w-[48.9%]">
              <ManufacturesInfo />
              <Link
                href="/contact-us"
                locale={locale}
                className="hidden laptop:inline-block mt-2 tab:mt-0 outline-none"
              >
                <MainButton className="laptop:flex mb-[45px] mr-auto">
                  {t("buttons.order")}
                </MainButton>
              </Link>
            </div>
            <ManufacturesSlider />
            <Link
              href="/contact-us"
              locale={locale}
              className="inline-block mt-2 tab:mt-0 outline-none"
            >
              <MainButton className="laptop:hidden">
                {t("buttons.order")}
              </MainButton>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
