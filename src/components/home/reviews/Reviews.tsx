import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import ReviewsSlider from "./ReviewsSlider";

export default function Reviews() {
  const t = useTranslations("reviews");
  return (
    <Section>
      <SectionTitle>{t("title")}</SectionTitle>
      <ReviewsSlider />
    </Section>
  );
}
