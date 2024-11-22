"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SunspotBgImages() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 1000);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("about");

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      id="sunspot"
      className={`absolute top-0 left-0 z-[-10] w-full h-full ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition duration-1000 ease-out`}
    >
      <Image
        src="/images/bgImages/sunspotPC.svg"
        alt="sunspot"
        width="0"
        height="0"
        className="hidden laptop:block sticky ml-auto laptop:right-0 laptop:top-3 laptop:w-[867px] laptop:h-[1009px]"
      />
      <Image
        src="/images/bgImages/sunspotTab.svg"
        alt="sunspot"
        width="0"
        height="0"
        className="hidden tab:block laptop:hidden sticky z-[-10] mt-[-42px] ml-auto top-0 tab:top-0 w-full tab:w-[675px] h-[773px]"
      />
      <Image
        src="/images/bgImages/sunspotMob.svg"
        alt="sunspot"
        width="0"
        height="0"
        className="tab:hidden sticky z-[-10] top-[29px] w-[370px] h-[471px] ml-auto"
      />
    </div>
  );
}
