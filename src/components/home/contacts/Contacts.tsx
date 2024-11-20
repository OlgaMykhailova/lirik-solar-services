import { useTranslations } from "next-intl";
import React from "react";

import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import ContactsList from "./contactsList/ContactsList";
import Map from "./Map";

export default function Contacts() {
  const t = useTranslations("contacts");
  return (
    <section
      id="contacts"
      className="pl-4 tab:pl-8 laptop:pl-0 pb-[146px] tab:pb-[219px] laptop:pb-[305px] scroll-mt-[72px]"
    >
      <Container>
        <SectionTitle className="after:top-[10px]">{t("title")}</SectionTitle>
        <div className="flex flex-col gap-y-8 tab:flex-row justify-between">
          <ContactsList />
          <Map />
        </div>
      </Container>
    </section>
  );
}
