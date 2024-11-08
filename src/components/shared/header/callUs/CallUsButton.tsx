import React from "react";

import { phoneThird } from "@/constants/constants";

import SecondaryButton from "../../buttons/SecondaryButton";
import IconPhone from "../../icons/IconPhone";

interface CallUsButtonProps {
  className?: string;
}

export default function CallUsButton({ className = "" }: CallUsButtonProps) {
  return (
    <a
      href={`tel:+38${phoneThird.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
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
