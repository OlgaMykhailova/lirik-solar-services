import React from "react";

import { PHONE_FIRST } from "@/constants/constants";

import SecondaryButton from "../../buttons/SecondaryButton";
import IconPhone from "../../icons/IconPhone";

interface CallUsButtonProps {
  className?: string;
  closeMenu?: (() => void) | undefined;
}

export default function CallUsButton({
  className = "",
  closeMenu,
}: CallUsButtonProps) {
  return (
    <a
      href={`tel:+38${PHONE_FIRST.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
    >
      <SecondaryButton className="gap-3" onClick={closeMenu}>
        <>
          <IconPhone className="text-yellow" />
          {PHONE_FIRST}
        </>
      </SecondaryButton>
    </a>
  );
}
