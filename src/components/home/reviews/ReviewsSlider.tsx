"use client";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.css";

import Image from "next/image";
import React from "react";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviewsList = [{}];

export default function ReviewsSlider() {
  return (
    <Swiper
      grid={{
        rows: 2,
      }}
      breakpoints={{
        360: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={true}
      loop={true}
      modules={[Grid, Pagination, Autoplay]}
      className="mySwiper"
    >
      {reviewsList.map((image, idx) => (
        <SwiperSlide key={idx}>
          <Image
            src={`/images/manufactures/${image}.webp`}
            alt={image}
            width="531"
            height="531"
            className="size-full rounded-[16px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
