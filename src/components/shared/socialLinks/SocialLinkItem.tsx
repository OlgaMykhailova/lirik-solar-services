import React from "react";

interface SocialLinkItemProps {
  social: { name: string; icon: React.JSX.Element; url: string };
  className?: string;
}

export default function SocialLinkItem({
  social,
  className = "",
}: SocialLinkItemProps) {
  const { name, icon, url } = social;
  return (
    <li className={className}>
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
