import { getTranslations } from "next-intl/server";

import { Locale } from "@/types/locale";

interface GenerateMetaDataParams {
  locale: Locale;
  namespace: string;
  canonical: string;
}
export async function generatePageMetaData({
  locale,
  namespace,
  canonical,
}: GenerateMetaDataParams) {
  const t = await getTranslations({
    locale,
    namespace,
  });
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ""),
    alternates: {
      canonical,
      languages: {
        uk: canonical,
        en: `/ru${canonical}`,
      },
    },
    title: t("title"),
    description: t("description"),
    openGraph: {
      description: t("description"),
      title: t("title"),
      type: "website",
    },
  };
}
