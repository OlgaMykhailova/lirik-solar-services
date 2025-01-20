import React from "react";

interface ProgressbarProps {
  currentStep: number;
}

export default function Progressbar({ currentStep }: ProgressbarProps) {
  return (
    <div
      className="relative flex items-center justify-center w-full xs:w-[448px] tab:w-[3px] h-[3px] tab:h-[328px] mx-auto mb-6 tab:mx-0 
    tab:my-auto bg-inputStroke"
    >
      <span
        className={`absolute z-10 left-0 tab:left-auto tab:top-0 inline-block size-4 rounded-full transition duration-1000 ease-out ${
          currentStep === 2
            ? "size-6 shadow-progressBar border-[5px] border-white "
            : ""
        } ${currentStep >= 2 ? "bg-blueLight" : "bg-inputStroke"}`}
      ></span>
      <span
        className={`absolute left-0 tab:left-auto tab:top-0 tab:w-[3px] h-[3px] tab:h-1/4 bg-blueLight delay-1000 transition-[width] duration-1000 ease-out ${
          currentStep >= 3 ? "w-1/4 tab:h-1/4" : "w-0 tab:h-0"
        }`}
      ></span>
      <span
        className={`absolute z-10 left-[calc(25%-8px)] tab:left-auto tab:top-[calc(25%-8px)] inline-block size-4 rounded-full transition duration-1000 ease-out ${
          currentStep === 3
            ? "size-6 shadow-progressBar border-[5px] border-white "
            : ""
        } ${currentStep >= 3 ? "bg-blueLight" : "bg-inputStroke"}`}
      ></span>
      <span
        className={`absolute left-1/4 tab:left-auto tab:top-1/4 tab:w-[3px] h-[3px] tab:h-1/4 bg-blueLight delay-1000 transition-[width] duration-1000 ease-out ${
          currentStep >= 4 ? "w-1/4 tab:h-1/4" : "w-0 tab:h-0"
        }`}
      ></span>
      <span
        className={`absolute z-10 left-[calc(50%-8px)] tab:left-auto tab:top-[calc(50%-8px)] inline-block size-4 rounded-full transition duration-1000 ease-out ${
          currentStep === 4
            ? "size-6 shadow-progressBar border-[5px] border-white "
            : ""
        } ${currentStep >= 4 ? "bg-blueLight" : "bg-inputStroke"}`}
      ></span>
      <span
        className={`absolute left-1/2 tab:left-auto tab:top-1/2 tab:w-[3px] h-[3px] tab:h-1/4 bg-blueLight delay-1000 transition-[width] duration-1000 ease-out ${
          currentStep >= 5 ? "w-1/4 tab:h-1/4" : "w-0 tab:h-0"
        }`}
      ></span>
      <span
        className={`absolute z-10 right-[calc(25%-8px)] tab:right-auto tab:bottom-[calc(25%-8px)] inline-block size-4 rounded-full transition duration-1000 ease-out ${
          currentStep === 5
            ? "size-6 shadow-progressBar border-[5px] border-white "
            : ""
        } ${currentStep >= 5 ? "bg-blueLight" : "bg-inputStroke"}`}
      ></span>
      <span
        className={`absolute left-3/4 tab:left-auto tab:top-3/4 tab:w-[3px] h-[3px] tab:h-1/4 bg-blueLight delay-1000 transition-[width] duration-1000 ease-out ${
          currentStep >= 6 ? "w-1/4 tab:h-1/4" : "w-0 tab:h-0"
        }`}
      ></span>
      <span
        className={`absolute z-10 right-0 tab:right-auto tab:bottom-0 inline-block size-4 rounded-full transition duration-1000 ease-out ${
          currentStep === 6
            ? "size-6 shadow-progressBar border-[5px] border-white "
            : ""
        } ${currentStep >= 6 ? "bg-blueLight" : "bg-inputStroke"}`}
      ></span>
    </div>
  );
}
