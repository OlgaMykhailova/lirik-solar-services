import React from "react";
import { useTranslations } from "next-intl";

import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Services() {
  const t = useTranslations("services");
  return (
    <section>
      <SectionTitle>{t("title")}</SectionTitle>
    </section>
  );
}
