import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Benefits() {
  const t = useTranslations("benefits");
  return (
    <section>
      <SectionTitle>{t("title")}</SectionTitle>
    </section>
  );
}
