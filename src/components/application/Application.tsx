"use client";
import React, { useState } from "react";
import InitialStep from "@/components/application/initialStep/InitialStep";
import FinalStep from "@/components/application/finalStep/FinalStep";

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
