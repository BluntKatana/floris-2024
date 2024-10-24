import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/app/features/header/header";
import { ThemeProvider } from "@/app/features/theme/theme-provider";
import "./globals.css";
import "./reset.css";

const inter = localFont({
  src: [
    {
      path: "../fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Inter_24pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--inter",
});

const wotfard = localFont({
  src: [
    {
      path: "../fonts/wotfard-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--flow-wotfard",
});

export const metadata: Metadata = {
  title: "Floris Bos",
  description:
    "Floris Bos is a full-stack developer and master student Computer Science at the VU and UVA. He likes building cool things with code, do sports, go on travels, and sit in cafes staring at his laptop for hours.",
  openGraph: {
    images: {
      url: "https://florisbos.com/assets/images/homepage_1.jpg",
      alt: "Floris Bos",
    },
  },
  authors: [{ name: "Floris Bos", url: "https://florisbos.com" }],
  creator: "Floris Bos",
  keywords: [
    "Floris Bos",
    "full-stack developer",
    "master student Computer Science",
    "Netherlands",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${wotfard.variable} font-mono antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col w-full">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
