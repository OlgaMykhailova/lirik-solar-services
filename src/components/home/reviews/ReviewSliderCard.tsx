import Image from "next/image";
import React from "react";

interface ReviewSliderCardProps {
  review: {
    photo: string;
    name: string;
    role: string;
    reviewText: string;
  };
}

export default function ReviewSliderCard({ review }: ReviewSliderCardProps) {
  const { photo, name, role, reviewText } = review;

  return (
    <div
      className={`flex flex-col items-center w-full h-full p-4 tab:p-6 rounded-[18px] tab:rounded-[24px] bg-cover `}
    >
      <Image
        src={`/images/reviews/${photo}.webp`}
        alt={name}
        width="400"
        height="400"
        className="size-[72px] laptop:size-[88px]"
      />
      <p className="mt-3 mb-1 font-gogh text-smb laptop:text-baseb">{name}</p>
      <p className="text-xs laptop:text-sm text-inputText">{role}</p>
      <div className="mt-auto">
        <Image
          src={`/images/icons/quote.svg`}
          alt="quote"
          width="32"
          height="32"
          className="laptop:size-[46px]"
        />
        <p className="text-xs laptop:text-base mt-auto">{reviewText}</p>
      </div>
      <Image
        src={`/images/icons/quote.svg`}
        alt="quote"
        width="32"
        height="32"
        className="laptop:size-[46px] ml-auto rotate-180"
      />
    </div>
  );
}
