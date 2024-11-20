"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ScrollIndicator() {
  const [indicatorTop, setIndicatorTop] = useState(0); // Позиція жовтого елемента в пікселях
  const [isReachedEnd, setIsReachedEnd] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const yellowRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updatePosition = () => {
      const parentElement = parentRef.current;
      const yellowElement = yellowRef.current;

      if (parentElement && yellowElement) {
        const parentTopOffset =
          parseInt(window.getComputedStyle(parentElement).top, 10) || 0;

        const parentHeight = parentElement.clientHeight;
        const yellowHeight = yellowElement.offsetHeight;

        const scrollPosition = window.scrollY;

        const parentOffsetTop =
          parentElement.getBoundingClientRect().top + window.scrollY;

        const minTop = 0;
        const maxTop = parentHeight - yellowHeight;

        const relativeScroll =
          scrollPosition - (parentOffsetTop - parentTopOffset);

        const newTop = Math.min(Math.max(relativeScroll, minTop), maxTop);

        setIndicatorTop(newTop);

        setIsReachedEnd(newTop < maxTop ? false : true);

        setIsScrollingDown(scrollPosition > lastScrollY.current);
        lastScrollY.current = scrollPosition;
      }
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className={`absolute z-10 top-[118px] tab:top-[130px] laptop:top-[154px] left-4 tab:left-9 laptop:left-[74px] w-[3px] h-[calc(100%-112px)] tab:h-[calc(100%-122px)] laptop:h-[calc(100%-148px)] bg-blue before:content-[''] before:absolute before:z-20 before:top-[-1px] before:left-[-8px]
      tab:before:left-[-10px] before:size-[19px] tab:before:size-[23px] before:rounded-full before:transition before:delay-[920ms] before:duration-300 before:ease-out after:content-[''] after:absolute after:bottom-[-5px] after:left-[-8px]
      tab:after:left-[-10px] after:size-[19px] tab:after:size-[23px] after:rounded-full after:transition after:delay-[920ms] after:duration-300 after:ease-out ${
        indicatorTop < 0.01 ? "before:bg-yellow" : "before:bg-blue"
      } ${isReachedEnd ? "after:bg-yellow" : "after:bg-blue"}`}
    >
      <div
        ref={yellowRef}
        className={`absolute left-0 w-[3px] h-[450px] transition duration-[1500ms] ease-out ${
          isScrollingDown ? "bg-yellowGradientDown" : "bg-yellowGradientUp"
        }`}
        style={{ transform: `translateY(${indicatorTop}px)` }}
      ></div>
    </div>
  );
}
