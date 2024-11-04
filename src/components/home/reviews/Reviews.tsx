import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Reviews() {
  const t = useTranslations("reviews");
  return (
    <section>
      <SectionTitle>{t("title")}</SectionTitle>
    </section>
  );
}
