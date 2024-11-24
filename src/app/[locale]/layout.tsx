import "./globals.css";

import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";

import { ScrollToTopButton } from "@/components/shared/buttons/ScrollToTopButton";
import CookiesComponent from "@/components/shared/cookies/CookiesComponent";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import DelayedPromotionPopUp from "@/components/shared/pop-ups/DelayedPromotionPopUp";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/locale";
import { GoogleTagManager } from "@next/third-parties/google";

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
          gtmScriptUrl={process.env.NEXT_PUBLIC_GTM_SCRIPT_URL}
        />
      </head>
      <body
        className={`${gogh.variable} ${manrope.className} flex min-h-screen flex-col antialiased text-sm laptop:text-base`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTopButton />
          <CookiesComponent />
          <DelayedPromotionPopUp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
