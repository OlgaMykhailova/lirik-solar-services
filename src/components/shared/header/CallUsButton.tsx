import React from "react";

import { phoneThird } from "@/constants/constants";

import SecondaryButton from "../buttons/SecondaryButton";
import IconPhone from "../icons/IconPhone";

export default function CallUsButton() {
  return (
    <a
      href={`tel:+${phoneThird.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <SecondaryButton className="gap-3">
        <>
          <IconPhone className="text-yellow" />
          {phoneThird}
        </>
      </SecondaryButton>
    </a>
  );
}
