import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction } from "react";

import { PHONE_THIRD } from "@/constants/constants";

import Backdrop from "../backdrop/Backdrop";
import NotificationBgImages from "../backgrounds/NotificationBgImages";
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

  const closeNotification = () => {
    setIsNotificationShown(false);
    setIsError(false);
  };

  return (
    <>
      <div
        className={`${
          isNotificationShown
            ? "-translate-y-[calc(50vh-50%)] opacity-100 no-doc-scroll"
            : "translate-y-full opacity-0"
        } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[1000ms] ease-out z-50 overflow-hidden flex flex-col gap-4 
        w-[312px] tab:w-[496px] px-6 py-[30px] tab:p-12 bg-white rounded-[16px] tab:rounded-[24px] shadow-base`}
      >
        {!isError && <NotificationBgImages />}
        <div className="absolute top-2 right-2 tab:top-6 tab:right-6">
          <IconButton handleClick={closeNotification}>
            {<IconClose className="size-6 tab:size-10 text-black" />}
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
        <p className="text-xs tab:text-baseb">
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
          className="mx-auto tab:size-[227px]"
        />
      </div>
      <Backdrop isVisible={isNotificationShown} onClick={closeNotification} />
    </>
  );
}
