import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction } from "react";

import { PHONE_THIRD } from "@/constants/constants";

import Backdrop from "../backdrop/Backdrop";
import Modal from "../modals/Modal";
import PopUpTitle from "../titles/PopUpTitle";

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
      <Modal
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
        isError={isError}
      >
        <PopUpTitle className={`${isError ? "text-inputError" : "text-blue"}`}>
          {t(`${isError ? "unsuccessful" : "successful"}.title`)}
        </PopUpTitle>
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
      </Modal>
      <Backdrop isVisible={isNotificationShown} onClick={closeNotification} />
    </>
  );
}
