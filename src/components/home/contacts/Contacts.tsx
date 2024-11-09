import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import ContactsList from "./contactsList/ContactsList";
import Map from "./Map";

export default function Contacts() {
  const t = useTranslations("contacts");
  return (
    <Section id="contacts">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="flex flex-col gap-y-8 tab:flex-row justify-between">
        <ContactsList />
        <Map />
      </div>
    </Section>
  );
}
