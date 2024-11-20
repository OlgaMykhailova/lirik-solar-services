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
        // Отримуємо top батьківського елемента залежно від розміру екрана
        const parentTopOffset =
          parseInt(window.getComputedStyle(parentElement).top, 10) || 0;

        // Отримуємо висоту батьківського елемента та жовтого елемента
        const parentHeight = parentElement.clientHeight;
        const yellowHeight = yellowElement.offsetHeight;

        // Поточна позиція прокрутки сторінки
        const scrollPosition = window.scrollY;

        // Відстань від початку сторінки до верхнього краю батьківського елемента
        const parentOffsetTop =
          parentElement.getBoundingClientRect().top + window.scrollY;

        // Мінімальна та максимальна позиція жовтого елемента
        const minTop = 0;
        const maxTop = parentHeight - yellowHeight;

        // Відносна прокрутка всередині батьківського елемента
        const relativeScroll =
          scrollPosition - (parentOffsetTop - parentTopOffset);

        // Обмеження прокрутки в межах контейнера
        const newTop = Math.min(Math.max(relativeScroll, minTop), maxTop);

        setIndicatorTop(newTop);

        setIsReachedEnd(newTop < maxTop ? false : true);

        setIsScrollingDown(scrollPosition > lastScrollY.current);
        lastScrollY.current = scrollPosition;

        console.log(newTop);
        console.log(scrollPosition);
      }
    };

    // Додаємо обробники подій
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    // Оновлюємо позицію при завантаженні компонента
    updatePosition();

    // Очищення обробників подій при розмонтаженні компонента
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className={`absolute z-10 top-[118px] tab:top-[130px] laptop:top-[154px] left-4 tab:left-9 laptop:left-[74px] w-[3px] h-[calc(100%-112px)] tab:h-[calc(100%-122px)] laptop:h-[calc(100%-148px)] bg-blue before:content-[''] before:absolute before:z-20 before:top-[-1px] before:left-[-8px]
      tab:before:left-[-10px] before:size-[19px] tab:before:size-[23px] before:bg-blue before:rounded-full before:transition before:duration-300 before:ease-out after:content-[''] after:absolute after:bottom-[-5px] after:left-[-8px]
      tab:after:left-[-10px] after:size-[19px] tab:after:size-[23px] after:bg-blue after:rounded-full after:transition after:duration-300 after:ease-out`}
    >
      <div
        ref={yellowRef}
        className={`absolute left-0 w-[3px] h-[450px] transition duration-[1500ms] ease-out ${
          isReachedEnd ? "opacity-0" : "opacity-100"
        } ${isScrollingDown ? "bg-yellowGradientDown" : "bg-yellowGradientUp"}`}
        style={{ transform: `translateY(${indicatorTop}px)` }}
      ></div>
    </div>
  );
}
