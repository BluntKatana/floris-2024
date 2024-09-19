import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter_24pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--inter",
});

const wotfard = localFont({
  src: [
    {
      path: "./fonts/wotfard-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--flow-wotfard",
});

export const metadata: Metadata = {
  title: "Floris Bos",
  description: "Personal website of Floris Bos",
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
          <div className="flex flex-col w-full min-h-[200vh]">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
