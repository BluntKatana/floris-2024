import { NextResponse, NextRequest } from "next/server";
import { i18n } from "@/constants/i18n";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const headers = {
    "accept-language":
      request.headers.get("accept-language") || i18n.defaultLocale,
  };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, i18n.locales, i18n.defaultLocale);
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Only run on root (/) URL
  matcher: ["/"],
};
