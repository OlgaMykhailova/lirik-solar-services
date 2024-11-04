import React from "react";

import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconTiktok from "../icons/IconTiktok";
import IconYoutube from "../icons/IconYoutube";
import SocialLinkItem from "../socialLink/SocialLinkItem";

export default function SocialLinksList() {
  const socialLinksList = [
    {
      name: "facebook",
      icon: <IconFacebook />,
      url: "https://www.facebook.com/liriksolarcom",
    },

    {
      name: "youtube",
      icon: <IconYoutube />,
      url: "https://www.youtube.com/@LirikSolar",
    },
    {
      name: "instagram",
      icon: <IconInstagram />,
      url: "https://www.instagram.com/liriksolar",
    },
    {
      name: "tiktok",
      icon: <IconTiktok />,
      url: "https://www.tiktok.com/@liriksolar",
    },
  ];

  return (
    <ul className="flex justify-center tab:justify-between laptop:justify-end gap-4 pt-[127px] pb-6 tab:py-8 tab:mb-9 text-blue">
      {socialLinksList.map((social, idx) => (
        <SocialLinkItem
          key={idx}
          social={social}
          className={idx === 2 ? "tab:ml-auto laptop:ml-0" : ""}
        />
      ))}
    </ul>
  );
}
