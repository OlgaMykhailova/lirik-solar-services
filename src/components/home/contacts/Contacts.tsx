import Image from "next/image";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import ContactsList from "./contactsList/ContactsList";

import ContactsList from "./contactsList/ContactsList";

export default function Contacts() {
  const t = useTranslations("contacts");
  return (
    <Section id="contacts">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="flex flex-col gap-y-8 tab:flex-row justify-between">
        <ContactsList />
        <Image
          src="/images/map.webp"
          alt="map"
          width="528"
          height="501"
          className="w-full h-auto aspect-[528/501] max-w-[630px] tab:w-[46%] tab:h-[501px] laptop:min-w-[528px] pc:min-w-[490px] object-cover object-center"
        />
      </div>
    </Section>
  );
}
