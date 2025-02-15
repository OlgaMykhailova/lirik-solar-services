import { useTranslations } from "next-intl";
import React from "react";

import Section1 from "@/components/policy/Section1";
import Section2 from "@/components/policy/Section2";
import Section3 from "@/components/policy/Section3";
import Section4 from "@/components/policy/Section4";
import Section5 from "@/components/policy/Section5";
import Section6 from "@/components/policy/Section6";
import Section7 from "@/components/policy/Section7";
import Container from "@/components/shared/container/Container";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import ScrollIndicator from "@/components/shared/pageScrollIndicator/ScrollIndicator";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Locale } from "@/types/locale";
import { generatePageMetaData } from "@/utils/generatePageMetaData";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return generatePageMetaData({
    locale,
    namespace: "metadata",
    canonical: "/policy",
  });
}

export default function Policy() {
  const t = useTranslations("policyPage");

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="relative h-full pt-[112px] tab:pt-[120px] laptop:pt-[136px] pl-4 tab:pl-6 laptop:pl-0 pb-[146px] tab:pb-[219px] laptop:pb-[305px]">
          <ScrollIndicator className="top-[118px] tab:top-[130px] laptop:top-[154px] h-[calc(100%-112px)] tab:h-[calc(100%-122px)] laptop:h-[calc(100%-148px)]" />
          <Container>
            <SectionTitle className="after:top-[6px] text-xxmdb tab:text-lgb">
              {t("title")}
            </SectionTitle>
            <p className="laptop:w-[57.4%] mb-8 laptop:mb-12">
              {t("description")}
            </p>
            <ul className="flex flex-col gap-y-8 tab:gap-y-10">
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Section7 />
            </ul>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
