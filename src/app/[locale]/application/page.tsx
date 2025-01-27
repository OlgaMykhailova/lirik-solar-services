import React from "react";

import Application from "@/components/application/Application";
import { Locale } from "@/types/locale";
import { generatePageMetaData } from "@/utils/generatePageMetaData";

const SECTION_ID = "application-page";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return generatePageMetaData({
    locale,
    namespace: "metadata",
    canonical: "/application",
  });
}

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
