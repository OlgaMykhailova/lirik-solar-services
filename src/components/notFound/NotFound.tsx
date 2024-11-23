import React from "react";

import Image404 from "./Image404";
import ImagePlugConnection from "./ImagePlugConnection";
import NotFoundInfo from "./NotFoundInfo";

export default function NotFoundPage() {
  return (
    <section className="relative flex flex-col items-center pt-[112px] pb-[183px] tab:pb-[215px] laptop:pb-[329px]">
      <Image404 />
      <ImagePlugConnection />
      <NotFoundInfo />
    </section>
  );
}
