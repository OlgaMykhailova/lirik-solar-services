"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../manufactures/styles.css";
import Image from "next/image";

import React from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectsSlider() {
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
      className="projectsSlider"
    >
      {Array.from({ length: 18 }, (_, i) => (
        <SwiperSlide key={i}>
          <Image
            src={`/images/projects/project${i + 1}.webp`}
            alt={`Project ${i + 1}`}
            width={600}
            height={600}
            className="aspect-[1/1] rounded-[18px] tab:rounded-[24px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
