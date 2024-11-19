"use client";

import React, { Dispatch, SetStateAction, useState } from "react";

import CallBackForm from "../forms/CallbackForm";
import Modal from "../modals/Modal";
import PopUpTitle from "../titles/PopUpTitle";
import NotificationPopUp from "./NotificationPopUp";

interface OrderPopUpProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
  title?: string;
  description?: string;
  applicationName: string;
}

export default function OrderPopUp({
  isPopUpShown,
  setIsPopUpShown,
  title = "",
  description = "",
  applicationName,
}: OrderPopUpProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <Modal isPopUpShown={isPopUpShown} setIsPopUpShown={setIsPopUpShown}>
        <div className="flex flex-col gap-3">
          <PopUpTitle>{title}</PopUpTitle>
          <p className="mb-2">{description}</p>
          <CallBackForm
            setIsError={setIsError}
            setIsNotificationShown={setIsNotificationShown}
            setIsPopUpShown={setIsPopUpShown}
            applicationName={applicationName}
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
