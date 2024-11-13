"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import IconButton from "../buttons/IconButton";
import IconClose from "../icons/IconClose";
import NotificationBgImages from "../backgrounds/NotificationBgImages";
import CallBackForm from "../forms/CallbackForm";
import NotificationPopUp from "./NotificationPopUp";
import { useTranslations } from "next-intl";
import PopUpTitle from "../titles/PopUpTitle";

interface OrderPopUpProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function OrderPopUp({
  isPopUpShown,
  setIsPopUpShown,
}: OrderPopUpProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const t = useTranslations();

  return (
    <>
      <div
        className={`${
          isPopUpShown
            ? "-translate-y-[calc(50vh-50%)] opacity-100"
            : "translate-y-full opacity-100"
        } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[1000ms] ease-out z-50 overflow-hidden flex flex-col gap-4 
         min-w-[312px] max-w-[496px] w-[86.6%] tab:w-[496px] px-6 py-[30px] tab:p-12 bg-white rounded-[16px] tab:rounded-[24px] shadow-base`}
      >
        <NotificationBgImages />
        <div className="absolute top-2 right-2 tab:top-6 tab:right-6">
          <IconButton handleClick={() => setIsPopUpShown(false)}>
            {<IconClose className="size-6 tab:size-10 text-black" />}
          </IconButton>
        </div>
        <div className="flex flex-col gap-4">
          <PopUpTitle>{t("orderPopUp.title")}</PopUpTitle>
          <p className=" mb-2">{t("writeUs.description.partTwo")}</p>
          <CallBackForm
            setIsError={setIsError}
            setIsNotificationShown={setIsNotificationShown}
            setIsPopUpShown={setIsPopUpShown}
          />
        </div>
      </div>
      <NotificationPopUp
        isNotificationShown={isNotificationShown}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
    </>
  );
}
