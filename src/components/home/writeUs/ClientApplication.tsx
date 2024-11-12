"use client";
import { useState } from "react";

import WriteUsForm from "@/components/shared/forms/WriteUsForm";
import NotificationPopUp from "@/components/shared/pop-ups/NotificationPopUp";

export default function ClientApplication() {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <div className="tab:w-[74%] tabxl:w-[47%] laptop:w-[42%] mx-auto tabxl:mx-0">
      <WriteUsForm
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
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
