"use client";

import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction, useState } from "react";

import CallBackForm from "../forms/CallbackForm";
import Modal from "../modals/Modal";
import PopUpTitle from "../titles/PopUpTitle";
import NotificationPopUp from "./NotificationPopUp";

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
      <Modal isPopUpShown={isPopUpShown} setIsPopUpShown={setIsPopUpShown}>
        <div className="flex flex-col gap-4">
          <PopUpTitle>{t("orderPopUp.title")}</PopUpTitle>
          <p className="mb-2">{t("writeUs.description.partTwo")}</p>
          <CallBackForm
            setIsError={setIsError}
            setIsNotificationShown={setIsNotificationShown}
            setIsPopUpShown={setIsPopUpShown}
          />
        </div>
      </Modal>
      <NotificationPopUp
        isNotificationShown={isNotificationShown}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
    </>
  );
}
