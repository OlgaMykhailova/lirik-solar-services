import { useTranslations } from "next-intl";
import React from "react";

import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Stations() {
  const t = useTranslations("stations");
  return (
    <section>
      <SectionTitle>{t("title")}</SectionTitle>
    </section>
  );
}
