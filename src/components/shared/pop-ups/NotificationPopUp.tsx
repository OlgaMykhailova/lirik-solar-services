import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction } from "react";

import PhoneItem from "@/components/home/contacts/contactsList/phones/phonesList/PhoneItem";
import { PHONE_THIRD } from "@/constants/constants";

import IconButton from "../buttons/IconButton";
import IconClose from "../icons/IconClose";

interface NotificationPopUpProps {
  isNotificationShown: boolean;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

export default function NotificationPopUp({
  isNotificationShown,
  setIsNotificationShown,
  isError,
  setIsError,
}: NotificationPopUpProps) {
  const t = useTranslations("notifications");

  return (
    <div
      className={`${
        isNotificationShown ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed top-0 left-0 z-50 flex flex-col gap-4 w-[312px] tab:w-[496px] px-6 py-[30px] bg-white rounded-[16px]`}
    >
      <div className="absolute top-2 right-2 size-6">
        <IconButton handleClick={() => setIsNotificationShown(false)}>
          {<IconClose className="size-6 text-black" />}
        </IconButton>
      </div>
      <h2
        data-label={t(`${isError ? "unsuccessful" : "successful"}.title`)}
        className={`relative laptop:mb-12 text-xmdb tab:text-lgb ${
          isError ? "text-inputError" : "text-blue"
        } font-gogh before:content-[attr(data-label)] before:absolute 
       before:-left-6 laptop:before:-left-7 before:top-4 laptop:before:top-5 before:w-full before:text-grey before:text-xmdb tab:before:text-lgb before:blur-[1px]
       `}
      >
        {t(`${isError ? "unsuccessful" : "successful"}.title`)}
      </h2>
      <p>
        {t(`${isError ? "unsuccessful" : "successful"}.description`)}
        <a
          href={`tel:+38${PHONE_THIRD.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`${
            isError ? "inline" : "hidden"
          } outline-none text-blue border-b border-blue laptop:hover:text-blueLight focus-visible:text-blueLight 
          active:text-blueLight laptop:hover:border-blueLight focus-visible:border-blueLight active:border-blueLight transition 
          duration-300 ease-out`}
        >
          {PHONE_THIRD}.
        </a>
      </p>
      <Image
        src={`/images/icons/${isError ? "logoGhost" : "logo"}.svg`}
        alt="logo"
        width={168}
        height={168}
        className="mx-auto"
      />
    </div>
  );
}
