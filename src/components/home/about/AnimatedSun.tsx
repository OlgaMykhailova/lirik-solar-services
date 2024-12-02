"use client";

import Image from "next/image";
import React from "react";

import { useOnScreen } from "@/hooks/useOnScreen";

interface AnimatedSunProps {
  id: string;
}

export default function AnimatedSun({ id }: AnimatedSunProps) {
  const { isVisible } = useOnScreen(id);

  return (
    <div
      className={`absolute z-20 right-4 tab:right-[31px] top-[-64px] laptop:top-[-106px] size-[228px] 
      tab:size-[291px] laptop:size-[578px] before:content-[''] before:absolute before:top-[46px] laptop:before:top-[96px] before:left-[-4px] tab:before:left-6 before:z-[-10] 
      before:size-[85%] before:rounded-full before:bg-yellow before:bg-opacity-15 before:blur-[40px] laptop:before:blur-[100px]
      transition duration-1000 ease-out ${
        isVisible
          ? "translate-x-0 rotate-0"
          : "translate-x-[120%] rotate-[62deg]"
      }`}
    >
      <Image
        src="/images/icons/logo.svg"
        alt="logo"
        width="0"
        height="0"
        className="w-full h-auto"
      />
    </div>
  );
}
