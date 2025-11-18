"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, Locale } from "@/constants/i18n";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  if (!currentLocale) return null;

  return (
    <div className="size-10 grid place-items-center">
      {i18n.locales
        .filter((locale) => locale !== currentLocale)
        .map((locale) => (
          <Link
            className="no-underline"
            key={locale}
            href={redirectedPathname(locale)}
          >
            {locale}
          </Link>
        ))}
    </div>
  );
}
