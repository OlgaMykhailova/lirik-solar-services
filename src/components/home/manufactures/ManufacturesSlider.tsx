"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.css";

import { Grid, Pagination, Autoplay } from "swiper/modules";

const manufacturesList = [
  "ABB",
  "BYD",
  "Canadian-Solar",
  "Chisage-ESS",
  "DEYE",
  "Dyness",
  "Felicity-ESS",
  "FOX ESS",
  "Fronius",
  "GOODWE",
  "Growatt",
  "GSL-ENERGY",
  "Huawei",
  "JA Solar",
  "Jinko Solar",
  "KBE",
  "Longi-solar",
  "Pylontech",
  "Risen",
  "SMA",
  "SOFAR",
  "Solaredge",
  "SOLAX-Prosolax",
  "Solis",
];

export default function ManufacturesSlider() {
  return (
    <>
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
          clickable: true,
        }}
        autoplay
        loop
        modules={[Grid, Pagination, Autoplay]}
        className="mySwiper"
      >
        {manufacturesList.map((image, idx) => (
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
    </>
  );
}
