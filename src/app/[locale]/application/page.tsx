import React from "react";

import Application from "@/components/application/Application";

const SECTION_ID = "application-page";

export default function page() {
  return (
    <main
      id={SECTION_ID}
      className="relative flex-1 flex flex-col overflow-clip"
    >
      <Application sectionId={SECTION_ID} />
    </main>
  );
}
