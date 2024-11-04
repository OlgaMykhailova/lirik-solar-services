import { useTranslations } from "next-intl";
import React from "react";

import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function WriteUs() {
  const t = useTranslations("writeUs");
  return (
    <section>
      <SectionTitle>{t("title")}</SectionTitle>
    </section>
  );
}
