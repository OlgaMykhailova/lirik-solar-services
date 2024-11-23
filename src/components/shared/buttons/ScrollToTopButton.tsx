"use client";

import Image from "next/image";
import { useOnScreen } from "@/hooks/useOnScreen";

export const ScrollToTopButton = () => {
  const { isVisible, hasInitialized } = useOnScreen("scroll", { once: false });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div id="scroll" className="absolute h-[800px] top-0"></div>
      <button
        aria-label="scroll to top button"
        className={`${
          isVisible || !hasInitialized ? "hidden" : "block"
        } group fixed z-20 bottom-[60px] tab:bottom-[70px] right-1 tab:right-2 laptop:right-12 flex items-center justify-center size-14
                tab:size-20 rounded-full border-[2px] tab:border-[2px] border-blue transition duration-300 ease-out active:scale-95 
                before:content-[''] before:absolute before:-z-10 before:top-0 before:left-0 before:rounded-full before:size-full 
                before:bg-blueGradient before:opacity-0 before:transition before:duration-300 before:ease-out active:before:opacity-100 
                focus-visible:before:opacity-100 laptop:hover:before:opacity-100 outline-none`}
        onClick={scrollToTop}
      >
        <Image
          src="/images/icons/doubleArrowMob.svg"
          alt="double arrow"
          width="0"
          height="0"
          className="tab:hidden size-7 transition duration-300 ease-out-quart will-change-transform translate-y-0 laptop:group-hover:-translate-y-1
          group-focus-visible:-translate-y-1 group-active:-translate-y-1"
        />
        <Image
          src="/images/icons/doubleArrowTab.svg"
          alt="double arrow"
          width="0"
          height="0"
          className="hidden tab:block size-10 transition duration-300 ease-out-quart will-change-transform translate-y-0 laptop:group-hover:-translate-y-1
          group-focus-visible:-translate-y-1 group-active:-translate-y-1"
        />
      </button>
    </>
  );
};
