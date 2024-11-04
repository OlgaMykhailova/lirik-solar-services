import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Manufactures() {
  const t = useTranslations("manufactures");
  return (
    <section>
      <SectionTitle>{t("title")}</SectionTitle>
    </section>
  );
}
