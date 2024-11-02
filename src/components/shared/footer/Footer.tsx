import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full h-[248px] bg-backgroundLight">
      <Image
        src="/images/icons/logo.svg"
        alt="logo"
        width="473"
        height="473"
        className="absolute left-[calc((100%-473px)/2)] bottom-3"
      />
    </footer>
  );
}
