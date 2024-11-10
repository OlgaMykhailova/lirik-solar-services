import React from "react";

import IconTelegram from "@/components/shared/icons/IconTelegram";
import IconViber from "@/components/shared/icons/IconViber";
import IconWhatsApp from "@/components/shared/icons/IconWhatsApp";
import SocialLinkItem from "@/components/shared/socialLinks/SocialLinkItem";
import {
  TELEGRAM_LINK,
  VIBER_LINK_DESKTOP,
  VIBER_LINK_MOBILE,
  WHATSAPP_LINK,
} from "@/constants/constants";

export default function MessengersList() {
  const messengersList = [
    { name: "telegram", icon: <IconTelegram />, url: TELEGRAM_LINK },
    { name: "viber", icon: <IconViber />, url: VIBER_LINK_MOBILE },
    { name: "viber", icon: <IconViber />, url: VIBER_LINK_DESKTOP },
    { name: "whatsapp", icon: <IconWhatsApp />, url: WHATSAPP_LINK },
  ];

  return (
    <ul className="flex gap-4 text-blue">
      {messengersList.map((messenger, idx) => (
        <SocialLinkItem
          key={idx}
          social={messenger}
          className={`${idx === 1 && "laptop:hidden"} ${
            idx === 2 && "hidden laptop:block"
          }`}
        />
      ))}
    </ul>
  );
}
