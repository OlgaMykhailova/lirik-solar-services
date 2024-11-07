import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function WriteUs() {
  const t = useTranslations("writeUs");
  return (
    <Section id="order">
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
