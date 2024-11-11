"use client";
import { useState } from "react";

import WriteUsForm from "@/components/shared/forms/WriteUsForm";
// import { NotificationModal } from "../notifications/NotificationModal";

export default function ClientApplication() {
  const [isError, setIsError] = useState(false);
  const [isNotificationShawn, setIsNotificationShawn] = useState(false);

  return (
    <div className="laptop:w-[45.9%]">
      <WriteUsForm
        setIsError={setIsError}
        setIsNotificationShawn={setIsNotificationShawn}
      />
      {/* <NotificationModal
        isNotificationShawn={isNotificationShawn}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShawn={setIsNotificationShawn}
      /> */}
    </div>
  );
}
