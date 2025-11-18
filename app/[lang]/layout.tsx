import { Header } from "@/app/features/header/header";
import { ThemeProvider } from "@/app/features/theme/theme-provider";
import { i18n, Locale } from "@/constants/i18n";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { getDictionary } from "./dictionaries";

const inter = localFont({
  src: [
    {
      path: "../../fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Inter_24pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--inter",
});

const wotfard = localFont({
  src: [
    {
      path: "../../fonts/wotfard-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-wotfard",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return {
    title: "Floris Bos",
    description: dictionary.meta.description,
    keywords: dictionary.meta.keywords,

    openGraph: {
      images: {
        url: "https://florisbos.com/assets/images/homepage_1.jpg",
        alt: "Floris Bos",
      },
    },
    authors: [{ name: "Floris Bos", url: "https://florisbos.com" }],
    creator: "Floris Bos",
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  return (
    <html lang={(await params).lang} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${wotfard.variable} font-mono antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col items-center">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
