import { useTranslations } from "next-intl";
import React from "react";

import ServiceCard from "./ServiceCard";
import ServicesDescription from "./ServicesDescription";

export default function ServicesList() {
  const t = useTranslations("services");
  const servicesList = [
    {
      title: t("projecting.title"),
      description: t("projecting.description"),
    },
    {
      title: t("installation.title"),
      description: t("installation.description"),
    },
    {
      title: t("maintenance.title"),
      description: t("maintenance.description"),
    },
    {
      title: t("integration.title"),
      description: t("integration.description"),
    },
  ];

  return (
    <ul className="flex flex-col gap-6 tab:flex-row tab:flex-wrap tab:gap-x-0 tab:justify-between">
      <li className="hidden laptop:block laptop:w-[47%] laptop:order-1">
        <ServicesDescription />
      </li>
      {servicesList.map((service, idx) => (
        <ServiceCard
          key={idx}
          service={service}
          className={`${idx === 0 && "order-2 laptop:order-3"} ${
            idx === 1 && "order-3 laptop:order-4"
          } ${idx === 2 && "order-4 tab:order-5"} ${
            idx === 3 && "order-5 tab:order-3 laptop:order-2"
          }`}
        />
      ))}
    </ul>
  );
}
