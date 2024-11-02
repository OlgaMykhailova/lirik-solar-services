import Image from "next/image";
import React from "react";

import Container from "../container/Container";
import FooterInfo from "./FooterInfo";
import SocialLinksList from "./SocialLinksList";

export default function Footer() {
  return (
    <footer className="relative w-full h-[248px] py-4 bg-backgroundLight">
      <Image
        src="/images/icons/logo.svg"
        alt="logo"
        width="473"
        height="473"
        className="absolute left-[calc((100%-473px)/2)] bottom-3"
      />
      <Container>
        <SocialLinksList />
        <FooterInfo />
      </Container>
    </footer>
  );
}
