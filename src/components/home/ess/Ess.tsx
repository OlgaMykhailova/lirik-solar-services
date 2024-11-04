import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Ess() {
  const t = useTranslations("ess");
  return (
    <section>
      <SectionTitle>{t("title")}</SectionTitle>
    </section>
  );
}
