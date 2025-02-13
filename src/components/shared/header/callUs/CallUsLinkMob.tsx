import { PHONE_FIRST } from "@/constants/constants";

import IconPhone from "../../icons/IconPhone";

export default function CallUsLinkMob() {
  return (
    <a
      href={`tel:+38${PHONE_FIRST.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group tab:hidden flex items-center gap-x-1 text-white outline-none laptop:hover:text-blue focus-visible:text-blue active:text-blue transition duration-300 ease-out"
    >
      <IconPhone className="text-blue transition duration-300 ease-out group:active:text-white" />
      {PHONE_FIRST}
    </a>
  );
}
