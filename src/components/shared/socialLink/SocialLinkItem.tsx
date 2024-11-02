import React from "react";

interface SocialLinkItemProps {
  social: { name: string; icon: React.JSX.Element; url: string };
}

export default function SocialLinkItem({ social }: SocialLinkItemProps) {
  const { name, icon, url } = social;
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label={name}
        className="group outline-none"
      >
        {icon}
      </a>
    </li>
  );
}
