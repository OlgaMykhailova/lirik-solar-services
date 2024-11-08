import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import ContactsList from "./ContactsList/ContactsList";

export default function Contacts() {
  const t = useTranslations("contacts");
  return (
    <Section id="contacts">
      <SectionTitle>{t("title")}</SectionTitle>
      <ContactsList />
    </Section>
  );
}
