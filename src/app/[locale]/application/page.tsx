import React from "react";

import ApplicationForm from "@/components/application/applicationForm/ApplicationForm";
import FinalStep from "@/components/application/finalStep/FinalStep";
import InitialStep from "@/components/application/initialStep/InitialStep";

export default function page() {
  return (
    <main className="relative flex-1">
      <InitialStep />
      <ApplicationForm />
      <FinalStep />
    </main>
  );
}
