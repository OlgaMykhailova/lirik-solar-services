import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <section>
      <SectionTitle>{t("title")}</SectionTitle>
    </section>
  );
}
