import React from "react";

import { PHONE_FIRST, PHONE_SECOND, PHONE_THIRD } from "@/constants/constants";

import PhoneItem from "./PhoneItem";

export default function PhonesList() {
  const phonesList = [PHONE_FIRST, PHONE_SECOND, PHONE_THIRD];

  return (
    <ul className="flex flex-col gap-4">
      {phonesList.map((phone, idx) => (
        <PhoneItem key={idx} phone={phone} />
      ))}
    </ul>
  );
}
