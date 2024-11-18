"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../manufactures/styles.css";

import { useTranslations } from "next-intl";
import React from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSliderCard from "./ReviewSliderCard";

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
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2.15,
          spaceBetween: 16,
          coverflowEffect: { scale: 0.6, stretch: 48 },
        },
        1280: {
          slidesPerView: 2.71,
          spaceBetween: 24,
          coverflowEffect: { scale: 0.7, stretch: 0 },
        },
        1640: {
          slidesPerView: 4,
          spaceBetween: 24,
          coverflowEffect: { scale: 0.8, stretch: 0 },
        },
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation={true}
      loop={true}
      speed={1000}
      modules={[EffectCoverflow, Pagination, Navigation]}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      className="reviewsSlider"
    >
      {reviewsList.map((review, idx) => (
        <SwiperSlide key={idx} className="reviewsSlider">
          <ReviewSliderCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
