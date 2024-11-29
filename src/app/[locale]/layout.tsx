import "./globals.css";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";

import { ScrollToTopButton } from "@/components/shared/buttons/ScrollToTopButton";
import CookiesComponent from "@/components/shared/cookies/CookiesComponent";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/locale";

const gogh = localFont({
  src: [
    {
      weight: "400",
      path: "../../fonts/Gogh-Regular.woff2",
    },
    {
      weight: "500",
      path: "../../fonts/Gogh-Medium.woff2",
    },
    {
      weight: "800",
      path: "../../fonts/Gogh-ExtraBold.woff2",
    },
  ],
  variable: "--font-gogh",
});

const manrope = Manrope({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""}
          gtmScriptUrl={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            alt="Facebook Pixel"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body
        className={`${gogh.variable} ${manrope.className} flex min-h-screen flex-col antialiased text-sm laptop:text-base`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <ScrollToTopButton />
          <CookiesComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
