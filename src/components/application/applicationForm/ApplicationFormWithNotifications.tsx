"use client";
import { Dispatch, SetStateAction, useState } from "react";

import NotificationPopUp from "@/components/shared/pop-ups/NotificationPopUp";

import ApplicationForm from "./ApplicationForm";

interface ApplicationFormWithNotificationsProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const SECTION_ID = "application-page-form";

export default function ApplicationFormWithNotifications({
  setCurrentStep,
}: ApplicationFormWithNotificationsProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <div
      id={SECTION_ID}
      className="relative tab:w-[74%] tabxl:w-[47%] laptop:w-[42%] mx-auto tabxl:mx-0"
    >
      <ApplicationForm
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
        setCurrentStep={setCurrentStep}
      />
      <NotificationPopUp
        isNotificationShown={isNotificationShown}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
    </div>
  );
}
