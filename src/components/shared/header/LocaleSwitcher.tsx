"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";
import { Locale } from "@/types/locale";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const locales = routing.locales;
  const pathName = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: Locale) => {
    const hash = window.location.hash;
    const newPath = `${pathName}${hash}`;

    router.replace(newPath, { locale: newLocale });
  };

  return (
    <ul className="flex gap-3">
      {locales.map((curLocale) => (
        <li key={curLocale}>
          <button
            onClick={() => handleLocaleChange(curLocale)}
            className={`font-gogh text-baseb outline-none laptop:hover:text-blue focus-visible:text-blue active:text-blue transition duration-300 ease-out ${
              curLocale === locale ? "text-blue" : "text-white"
            }`}
          >
            {curLocale === "uk" ? "ua" : curLocale}
          </button>
        </li>
      ))}
    </ul>
  );
}
