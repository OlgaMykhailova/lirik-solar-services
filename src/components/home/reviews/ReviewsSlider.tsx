"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../manufactures/styles.css";

import Image from "next/image";
import React from "react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

export default function ReviewsSlider() {
  const t = useTranslations("reviews.reviews");

  const reviewsList = [
    {
      name: t("first.name"),
      role: t("first.role"),
      reviewText: t("first.reviewText"),
      photo: "Oleksandr",
    },
    {
      name: t("second.name"),
      role: t("second.role"),
      reviewText: t("second.reviewText"),
      photo: "Tetiana",
    },
    {
      name: t("third.name"),
      role: t("third.role"),
      reviewText: t("third.reviewText"),
      photo: "Andriy",
    },
    {
      name: t("fourth.name"),
      role: t("fourth.role"),
      reviewText: t("fourth.reviewText"),
      photo: "Iryna",
    },
    {
      name: t("fifth.name"),
      role: t("fifth.role"),
      reviewText: t("fifth.reviewText"),
      photo: "Vasyl",
    },
    {
      name: t("sixth.name"),
      role: t("sixth.role"),
      reviewText: t("sixth.reviewText"),
      photo: "Sergiy",
    },
    {
      name: t("seventh.name"),
      role: t("seventh.role"),
      reviewText: t("seventh.reviewText"),
      photo: "Maria",
    },
  ];

  return (
    <Swiper
      centeredSlides={true}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2.15,
          spaceBetween: 16,
        },
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation={false}
      loop={true}
      speed={1000}
      modules={[EffectCoverflow, Pagination, Navigation]}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 0,
        scale: 0.6,
        stretch: 48,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      className="reviewsSlider"
    >
      {reviewsList.map(({ name, role, reviewText, photo }, idx) => (
        <SwiperSlide key={idx} className="reviewsSlider">
          <div
            className={`flex flex-col items-center w-full h-full p-4 tab:p-6 rounded-[18px] tab:rounded-[24px] bg-cover ${
              idx % 2 === 0 ? "bg-whiteDark" : "bg-sky"
            }`}
          >
            <Image
              src={`/images/reviews/${photo}.webp`}
              alt={name}
              width="400"
              height="400"
              className="size-[72px] rounded-[16px]"
            />
            <p className="mt-3 mb-1 font-gogh text-smb">{name}</p>
            <p className="text-xs text-inputText">{role}</p>
            <div className="mt-auto">
              <Image
                src={`/images/icons/quote.svg`}
                alt="quote"
                width="32"
                height="32"
              />
              <p className="text-xs mt-auto">{reviewText}</p>
            </div>
            <Image
              src={`/images/icons/quote.svg`}
              alt="quote"
              width="32"
              height="32"
              className="ml-auto rotate-180"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
