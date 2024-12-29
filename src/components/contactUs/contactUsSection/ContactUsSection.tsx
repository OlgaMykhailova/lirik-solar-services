import { useTranslations } from "next-intl";
import React from "react";

import ContactUsApplication from "@/components/contactUs/contactUsSection/ContactUsApplication";
import WriteUsInfo from "@/components/home/writeUs/WriteUsInfo";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function ContactUsSection() {
  const t = useTranslations("contactUsPage");

  return (
    <Container>
      <section className="px-2 tab:px-0 pb-20 tab:pb-[100px] laptop:pb-[150px]">
        <SectionTitle className="after:top-[10px]">
          {t("leaveRequest")}
        </SectionTitle>
        <div className="flex flex-col gap-y-8 tabxl:flex-row justify-between">
          <WriteUsInfo />
          <ContactUsApplication />
        </div>
      </section>
    </Container>
  );
}
