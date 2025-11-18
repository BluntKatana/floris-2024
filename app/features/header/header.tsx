"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { ThemeToggle } from "../theme/theme-toggle";

export function Header() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="mt-12 sticky top-0 left-0 right-0 w-full z-[1000] overflow-hidden"
    >
      <div className="absolute  inset-0 size-full h-[calc(100%+100px)] backdrop-blur-sm z-[999]"></div>
      <div className="section z-[1001] relative">
        <div className="h-[80px] w-full flex items-end">
          <header className="w-full flex h-[48px] items-center justify-between gap-1">
            <div className="gap-12 flex items-center">
              <Link href="/" className="h-12 flex flex-col justify-center">
                <h1 className="text-2xl font-bold">Floris Bos</h1>
              </Link>
            </div>

            <div className="items-center flex">
              <ThemeToggle />
              <Link
                href="emailto:florisbos1204@gmail.com"
                className="size-10 grid place-items-center md:w-14"
              >
                <Mail className="size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/floris-bos/"
                target="_blank"
                className="size-10 grid place-items-center md:w-14"
              >
                <Linkedin className="size-5" />
              </Link>
              <Link
                href="https://github.com/BluntKatana"
                target="_blank"
                className="size-10 grid place-items-center md:w-14"
              >
                <Github className="size-5" />
              </Link>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
