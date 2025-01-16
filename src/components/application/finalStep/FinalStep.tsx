import Image from "next/image";
import React from "react";

export default function FinalStep() {
  return (
    <div className="relative flex-1 flex flex-col justify-end pt-[177px] tab:pt-[205px] laptop:pt-[78px] pb-8 tab:pb-20 laptop:pb-[50px] bg-heroGradient overflow-clip">
      <div className="container max-w-[1920px]">
        <Image
          src="/images/bgImages/panelInstallation.svg"
          alt="panelInstallation"
          width="792"
          height="494"
          className="w-[81%] tab:w-[77.9%] laptop:w-[61.7%] h-auto mx-auto laptop:mx-0 laptop:ml-auto"
        />
      </div>
    </div>
  );
}
