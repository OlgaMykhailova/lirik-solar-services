"use client";
import { Dispatch, SetStateAction, useState } from "react";

import NotificationPopUp from "@/components/shared/pop-ups/NotificationPopUp";

import ApplicationForm from "./ApplicationForm";

interface ApplicationFormWithNotificationsProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export default function ApplicationFormWithNotifications({
  currentStep,
  setCurrentStep,
}: ApplicationFormWithNotificationsProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <ApplicationForm
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
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
