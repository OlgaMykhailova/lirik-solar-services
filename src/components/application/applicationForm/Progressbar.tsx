import React from "react";

interface ProgressbarProps {
  currentStep: number;
}

export default function Progressbar({ currentStep }: ProgressbarProps) {
  return (
    <div className="relative flex items-center justify-center w-full xs:w-[448px] tab:w-[3px] h-[3px] tab:h-[328px] mx-auto mb-6 tab:mx-0 tab:my-auto bg-inputStroke">
      <span
        className={`absolute left-0 tab:left-auto tab:top-0 inline-block size-4 rounded-full ${
          currentStep === 2 ? "bg-blueLight" : "bg-inputStroke"
        }`}
      ></span>
      <span
        className={`absolute left-[calc(25%-8px)] tab:left-auto tab:top-[calc(25%-8px)] inline-block size-4 rounded-full ${
          currentStep === 3 ? "bg-blueLight" : "bg-inputStroke"
        }`}
      ></span>
      <span
        className={`absolute left-[calc(50%-8px)] tab:left-auto tab:top-[calc(50%-8px)] inline-block size-4 rounded-full ${
          currentStep === 4 ? "bg-blueLight" : "bg-inputStroke"
        }`}
      ></span>
      <span
        className={`absolute right-[calc(25%-8px)] tab:right-auto tab:bottom-[calc(25%-8px)] inline-block size-4 rounded-full ${
          currentStep === 5 ? "bg-blueLight" : "bg-inputStroke"
        }`}
      ></span>
      <span
        className={`absolute right-0 tab:right-auto tab:bottom-0 inline-block size-4 rounded-full ${
          currentStep === 6 ? "bg-blueLight" : "bg-inputStroke"
        }`}
      ></span>
    </div>
  );
}
