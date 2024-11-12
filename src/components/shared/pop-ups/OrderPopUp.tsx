"use client";

import React, { Dispatch, SetStateAction } from "react";
import IconButton from "../buttons/IconButton";
import IconClose from "../icons/IconClose";
import CallBackApplication from "../forms/formsWithNotifications/CallBackApplication";
import NotificationBgImages from "../backgrounds/NotificationBgImages";

interface OrderPopUpProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function OrderPopUp({
  isPopUpShown,
  setIsPopUpShown,
}: OrderPopUpProps) {
  return (
    <>
      <div
        className={`${
          isPopUpShown
            ? "-translate-y-4 opacity-100"
            : "translate-y-full opacity-100"
        } fixed right-2 laptop:right-3 bottom-0 transform -translate-x-2 laptop:-translate-x-3 transition duration-[1000ms] ease-out z-50 overflow-hidden flex flex-col gap-4 
         w-[312px] tab:w-[496px] px-6 py-[30px] tab:p-12 bg-white rounded-[16px] tab:rounded-[24px] shadow-base`}
      >
        <NotificationBgImages />
        <div className="absolute top-2 right-2 tab:top-6 tab:right-6">
          <IconButton handleClick={() => setIsPopUpShown(false)}>
            {<IconClose className="size-6 tab:size-10 text-black" />}
          </IconButton>
        </div>
        <CallBackApplication setIsPopUpShown={setIsPopUpShown} />
      </div>
    </>
  );
}
