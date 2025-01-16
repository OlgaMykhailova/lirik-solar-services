import Image from "next/image";
import React from "react";

export default function FinalStep() {
  return (
    <div className="relative flex-1 flex flex-col justify-end pt-[177px] pb-8 bg-heroGradient overflow-clip">
      <Image
        src="/images/bgImages/panelInstallation.svg"
        alt="panelInstallation"
        width="792"
        height="494"
        className="w-[81%] tab:w-[77.9%] laptop:w-[61.7%] h-auto mx-auto"
      />
    </div>
  );
}
