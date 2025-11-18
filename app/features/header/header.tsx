"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme/theme-toggle";

export function Header() {
  return (
    <div className="mt-12 sticky top-0 left-0 right-0 w-full z-1000 bg-background/80 backdrop-blur-sm">
      <div className="section z-1001 relative flex items-center mx-auto">
        <div className="h-[80px] w-full flex items-end">
          <header className="w-full flex h-[48px] items-center justify-between gap-1">
            <div className="gap-12 flex items-center">
              <Link
                href="/"
                className="h-12 flex flex-col justify-center no-underline"
              >
                <h1 className="text-2xl font-bold">Floris Bos</h1>
              </Link>
            </div>

            {/* Right side */}
            <div className="items-center [&>a]:px-2 flex">
              {/* <LocaleSwitcher /> */}

              <ThemeToggle />
              <Link href="emailto:florisbos1204@gmail.com">
                <div className="size-10 grid place-items-center">
                  <Mail className="size-5" />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/floris-bos/"
                target="_blank"
              >
                <div className="size-10 grid place-items-center">
                  <Linkedin className="size-5" />
                </div>
              </Link>
              <Link href="https://github.com/BluntKatana" target="_blank">
                <div className="size-10 grid place-items-center">
                  <Github className="size-5" />
                </div>
              </Link>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
