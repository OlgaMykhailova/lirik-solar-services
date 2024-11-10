import React from "react";

import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconTiktok from "../icons/IconTiktok";
import IconYoutube from "../icons/IconYoutube";
import SocialLinkItem from "./SocialLinkItem";

interface SocialLinksListProps {
  className?: string;
}

export default function SocialLinksList({
  className = "",
}: SocialLinksListProps) {
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
    <ul
      className={`flex justify-center tab:justify-between laptop:justify-end gap-4 text-blue ${className}`}
    >
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
