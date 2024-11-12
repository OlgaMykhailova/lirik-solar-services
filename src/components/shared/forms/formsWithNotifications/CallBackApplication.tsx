import React, { useState, Dispatch, SetStateAction } from "react";
import CallBackForm from "../CallbackForm";
import NotificationPopUp from "../../pop-ups/NotificationPopUp";

interface CallBackApplicationProps {
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CallBackApplication({
  setIsPopUpShown,
}: CallBackApplicationProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <CallBackForm
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
        setIsPopUpShown={setIsPopUpShown}
      />
      <NotificationPopUp
        isNotificationShown={isNotificationShown}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
    </>
  );
}
