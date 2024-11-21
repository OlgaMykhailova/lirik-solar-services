"use client";
import { throttle } from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface ScrollIndicatorProps {
  className?: string;
}

export default function ScrollIndicator({
  className = "",
}: ScrollIndicatorProps) {
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [isReachedEnd, setIsReachedEnd] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const yellowRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  const updateSectionAfterStyles = useCallback(() => {
    const titles = document.querySelectorAll<HTMLElement>("[data-label]");
    const buttons = document.querySelectorAll<HTMLElement>("[data-button]");
    const yellowElement = yellowRef.current;

    if (!yellowElement) {
      return;
    }

    const yellowRect = yellowElement.getBoundingClientRect();
    const yellowMiddle = yellowRect.top + yellowRect.height / 2;

    buttons.forEach((button) => {
      const rect = button.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2;

      const isAligned = Math.abs(sectionMiddle - yellowMiddle) < 400;

      if (isAligned) {
        button.style.setProperty("--div-opacity", "100");
      } else {
        button.style.setProperty("--div-opacity", "0");
      }
    });

    titles.forEach((title) => {
      const rect = title.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2;

      const isAligned = Math.abs(sectionMiddle - yellowMiddle) < 400;

      if (isAligned || indicatorTop < 0.05) {
        title.style.setProperty("--after-color", "var(--yellow)");
      } else {
        title.style.setProperty("--after-color", "var(--blue)");
      }
    });
  }, [indicatorTop]);

  const updatePosition = useCallback(() => {
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

      if (newTop !== indicatorTop) {
        setIndicatorTop(newTop);
      }

      if (maxTop - newTop <= 15 !== isReachedEnd) {
        setIsReachedEnd(maxTop - newTop <= 15);
      }

      if (scrollPosition !== lastScrollY.current) {
        setIsScrollingDown(scrollPosition > lastScrollY.current);
        lastScrollY.current = scrollPosition;
      }
    }
  }, [indicatorTop, isReachedEnd]);

  useEffect(() => {
    const throttledHandleScroll = throttle(() => {
      updatePosition();
      updateSectionAfterStyles();
    }, 100);

    window.addEventListener("scroll", throttledHandleScroll);
    throttledHandleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [updatePosition, updateSectionAfterStyles]);

  return (
    <div
      ref={parentRef}
      className={`${className} absolute z-10 left-4 tab:left-9 laptop:left-[74px] w-[3px] bg-blue after:content-[''] after:absolute after:bottom-[-5px] after:left-[-8px]
      tab:after:left-[-10px] after:size-[19px] tab:after:size-[23px] after:rounded-full after:transition after:delay-[920ms] after:duration-300 after:ease-out ${
        isReachedEnd ? "after:bg-yellow" : "after:bg-blue"
      }`}
    >
      <div
        ref={yellowRef}
        className={`absolute left-0 w-[3px] h-[470px] transition duration-[1200ms] ease-out ${
          isScrollingDown ? "bg-yellowGradientDown" : "bg-yellowGradientUp"
        }`}
        style={{ transform: `translateY(${indicatorTop}px)` }}
      ></div>
    </div>
  );
}
