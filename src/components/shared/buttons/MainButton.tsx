import React from "react";

import IconArrow from "../icons/IconArrow";

export default function MainButton() {
  return (
    <button
      className="group relative flex items-center gap-3 h-12 px-4 text-[#1B1C1E] before:content-[''] before:absolute before:top-0 before:left-0 
      before:rounded-full before:size-12 before:bg-[#FDBD00] transition before:duration-300 before:ease-out-quart before:will-change-transform 
      hover:before:w-full focus-visible:before:w-full active:scale-95 outline-none"
    >
      <span className="relative">Розпочати проєкт</span>
      <IconArrow className="relative transition duration-300 ease-out-quart will-change-transform -translate-x-1 group-hover:translate-x-0" />
    </button>
  );
}
