"use client";
import Image from "next/image";
import React, { useState } from "react";

import FinalStep from "@/components/application/finalStep/FinalStep";
import InitialStep from "@/components/application/initialStep/InitialStep";
import AnimatedSun from "@/components/shared/animatedSun/AnimatedSun";

import SunspotBgImages from "../shared/backgrounds/SunspotBgImages";
import ApplicationFormWithNotifications from "./applicationForm/ApplicationFormWithNotifications";

interface ApplicationProps {
  sectionId: string;
}

export default function Application({ sectionId }: ApplicationProps) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section className="relative flex-1 flex flex-col">
      <AnimatedSun
        id={sectionId}
        className={`${
          currentStep !== 1 && currentStep !== 7 ? "hidden tab:block" : "block"
        } absolute z-20 right-1 tab:right-4 top-1 tab:top-4 size-[191px] tab:size-[278px] laptop:size-[304px] 
                before:content-[''] before:absolute before:top-[46px] laptop:before:top-[66px] before:left-[-4px] tab:before:left-2 before:z-[-10] 
                  before:size-[85%] before:rounded-full before:bg-yellow before:bg-opacity-15 before:blur-[30px] laptop:before:blur-[50px]
                  `}
      />
      <SunspotBgImages
        id={sectionId}
        className={`${
          currentStep !== 1 && currentStep !== 7 ? "block" : "hidden"
        }`}
      />
      <Image
        src="/images/bgImages/powerLinesRight.svg"
        alt="power lines right side"
        width="345"
        height="720"
        className={`${
          currentStep !== 1 && currentStep !== 7
            ? "hidden laptop:block"
            : "hidden"
        } absolute bottom-[66px] right-[90px]`}
      />
      {currentStep === 1 ? (
        <InitialStep onClick={() => setCurrentStep(2)} />
      ) : currentStep === 7 ? (
        <FinalStep />
      ) : (
        <ApplicationFormWithNotifications setCurrentStep={setCurrentStep} />
      )}
    </section>
  );
}
