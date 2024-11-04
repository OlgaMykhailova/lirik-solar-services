import Image from "next/image";
import React from "react";

import Container from "../container/Container";
import FooterInfo from "./FooterInfo";
import SocialLinksList from "./SocialLinksList";

export default function Footer() {
  return (
    <footer className="relative w-full py-4 bg-backgroundLight">
      <Image
        src="/images/icons/logo.svg"
        alt="logo"
        width="473"
        height="473"
        className="absolute left-[calc((100%-243px)/2)] tab:left-[calc((100%-300px)/2)] laptop:left-[calc((100%-473px)/2)] top-[calc(-243px/2)] 
        tab:top-[calc(-300px/2)] laptop:top-[calc(-473px/2)] size-[243px] tab:size-[300px] laptop:size-[473px]"
      />
      <Container>
        <SocialLinksList />
        <FooterInfo />
      </Container>
    </footer>
  );
}
