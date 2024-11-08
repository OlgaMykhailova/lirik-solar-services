import { PHONE_THIRD } from "@/constants/constants";

import IconPhone from "../../icons/IconPhone";

export default function CallUsLinkMob() {
  return (
    <a
      href={`tel:+38${PHONE_THIRD.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group tab:hidden flex items-center gap-x-1 text-white outline-none"
    >
      <IconPhone className="text-blue transition duration-300 ease-out group:active:text-white" />
      {PHONE_THIRD}
    </a>
  );
}
