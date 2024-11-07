"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 800) {
        setIsVisible(true);
      } else if (scrolled <= 800) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        aria-label="scroll to top button"
        className={`${
          isVisible ? "block" : "hidden"
        } group fixed z-20 bottom-[60px] tab:bottom-[200px] right-1 tab:right-2 laptop:right-12 flex items-center justify-center size-14
                tab:size-20 rounded-full border-[2px] tab:border-[2px] border-blue before:content-[''] before:absolute before:-z-10 
                before:top-0 before:left-0 before:rounded-full before:size-full before:bg-blueGradient before:opacity-0 before:transition 
                before:duration-300 before:ease-out active:before:opacity-100 focus-visible:before:opacity-100 laptop:hover:before:opacity-100 
                outline-none`}
        onClick={scrollToTop}
      >
        <Image
          src="/images/icons/doubleArrow.svg"
          alt="double arrow"
          width="0"
          height="0"
          className="size-7 tab:size-10 transition duration-300 ease-out-quart will-change-transform translate-y-0 laptop:group-hover:-translate-y-1
          group-focus-visible:-translate-y-1 group-active:-translate-y-1"
        />
      </button>
    </>
  );
};
