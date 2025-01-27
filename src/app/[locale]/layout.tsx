import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { useMessages } from "next-intl";

import { ScrollToTopButton } from "@/components/shared/buttons/ScrollToTopButton";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/locale";
import { generatePageMetaData } from "@/utils/generatePageMetaData";

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
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  return generatePageMetaData({
    locale,
    namespace: "metadata",
    canonical: "/",
  });
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
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      </head>
      <body
        className={`${gogh.variable} ${manrope.className} flex min-h-screen flex-col antialiased text-sm laptop:text-base`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <ScrollToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
