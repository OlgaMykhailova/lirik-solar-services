"use client";

import Image from "next/image";
import React from "react";

import { useOnScreen } from "@/hooks/useOnScreen";

interface AnimatedSunProps {
  id: string;
  className: string;
}

export default function AnimatedSun({ id, className }: AnimatedSunProps) {
  const { isVisible } = useOnScreen(id);

  return (
    <div
      className={`transition-[translate, rotate] duration-1000 ease-out ${
        isVisible
          ? "translate-x-0 rotate-0"
          : "translate-x-[120%] rotate-[62deg]"
      } ${className}`}
    >
      <Image
        src="/images/icons/logo.svg"
        alt="logo"
        width="753"
        height="753"
        className="w-full h-auto"
      />
    </div>
  );
}
