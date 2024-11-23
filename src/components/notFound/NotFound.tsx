import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

import SecondaryButton from "../shared/buttons/SecondaryButton";
import Container from "../shared/container/Container";

export default function NotFoundPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="flex flex-col items-center pt-[112px] pb-[183px] tab:pb-[215px] laptop:pb-[329px]">
      <Container className="flex flex-col items-center">
        <div className="relative flex mb-6 py-6">
          <Image
            src="/images/icons/lightning.svg"
            alt="4"
            width={52}
            height={41}
            className="absolute top-0 left-[60px]"
          />
          <Image
            src="/images/icons/lightning.svg"
            alt="4"
            width={52}
            height={41}
            className="absolute bottom-0 right-[64px] rotate-180 "
          />
          <Image src="/images/icons/4.svg" alt="4" width={90} height={112} />
          <Image
            src="/images/icons/socket.svg"
            alt="socket"
            width={112}
            height={112}
          />
          <Image src="/images/icons/4.svg" alt="4" width={90} height={112} />
        </div>
      </Container>
      <div className="flex justify-between w-full mb-8">
        <Image
          src="/images/icons/connector.svg"
          alt="4"
          width={150}
          height={34}
        />
        <Image src="/images/icons/plug.svg" alt="4" width={150} height={34} />
      </div>
      <Container className="flex flex-col items-center">
        <p className="mb-2 font-gogh text-mdb tab:text-largeb laptop:text-xlb">
          {t("notFoundPage.oops")}
        </p>
        <h1 className="mb-4 font-gogh text-lgbb tab:text-xlbb laptop:text-xxlbb">
          {t("notFoundPage.title").toUpperCase()}
        </h1>
        <p className="mb-8 text-center">{t("notFoundPage.description")}</p>
        <Link href="/" locale={locale} className="outline-none">
          <SecondaryButton>{t("buttons.goToHome")}</SecondaryButton>
        </Link>
      </Container>
    </section>
  );
}
