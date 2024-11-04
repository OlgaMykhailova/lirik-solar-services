import { useTranslations } from "next-intl";
import React from "react";

import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function About() {
  const t = useTranslations("about");
  return (
    <section>
      <SectionTitle>{t("title")}</SectionTitle>
    </section>
  );
}
