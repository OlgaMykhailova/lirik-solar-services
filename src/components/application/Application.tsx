"use client";
import React, { useState } from "react";

import FinalStep from "@/components/application/finalStep/FinalStep";
import InitialStep from "@/components/application/initialStep/InitialStep";

export default function Application() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <section className="flex-1 flex flex-col">
      {currentTab === 1 ? (
        <InitialStep onClick={() => setCurrentTab(2)} />
      ) : (
        <FinalStep />
      )}
    </section>
  );
}
