import React from "react";

interface PhoneItemProps {
    phone: string
}

export default function PhoneItem({phone}: PhoneItemProps) {
  return (
    <li>
      <a
        href={`tel:+38${phone.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="outline-none laptop:hover:text-blue focus-visible:text-blue active:text-blue transition duration-300 ease-out"
      >
        {phone}
      </a>
    </li>
  );
}
