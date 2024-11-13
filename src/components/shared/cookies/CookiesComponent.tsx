"use client";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Link } from "@/i18n/routing";

import MainButton from "../buttons/MainButton";

export default function CookiesComponent() {
  const [isAccepted, setIsAccepted] = useState(true);
  const cookiesValue = Cookies.get("isAcceptedCookies");

  const t = useTranslations("");
  const locale = useLocale();

  useEffect(() => {
    if (cookiesValue) {
      setIsAccepted(true);
    } else {
      setIsAccepted(false);
    }
  }, [isAccepted, cookiesValue]);

  const handleClick = () => {
    setIsAccepted(true);
    Cookies.set("isAcceptedCookies", "true", { expires: 365 });
  };

  return (
    <div
      className={`fixed z-[60] left-0 bottom-0 flex items-center justify-center w-full max-h-[300px] tablet:max-h-[168px] laptop:max-h-[155px]
       py-10 px-4 tab:px-9 laptop:px-[100px] bg-skyLight bg-cover ${
         isAccepted ? "translate-y-[101%]" : "translate-y-0"
       } 
       transition-[transform] duration-[1000ms] ease-out`}
    >
      <div className="flex flex-col gap-y-8 tab:gap-y-0 items-start tab:flex-row tab:items-center tab:justify-between max-w-[1720px]">
        <p className="tab:w-[65.2%] laptop:w-[74.6%]">
          {t("cookies.description")}
          <Link
            href="/policy"
            target="_blank"
            locale={locale}
            className="outline-none border-b text-blue border-blue active:text-inputText active:border-inputText laptop:hover:text-inputText
             laptop:hover:border-inputText laptop:focus-visible:text-inputText laptop:focus-visible:border-inputText transition duration-300 ease-out"
          >
            {t("cookies.policy")}
          </Link>
          .
        </p>

        <MainButton onClick={handleClick}>
          {t("buttons.acceptCookies")}
        </MainButton>
      </div>
    </div>
  );
}
