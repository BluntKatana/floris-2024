"use client";

import { Github, Linkedin, Mail, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import { cn } from "@/utils/style";
import useBoundingBox from "@/hooks/use-bounding-box";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const containerBox = useBoundingBox(containerRef);

  const headerHeight = containerBox
    ? containerBox.height + containerBox.top
    : 0;

  useEffect(() => {
    // disable scroll if menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  console.log(containerBox);

  return (
    <div
      ref={containerRef}
      className={cn("mt-12 sticky top-0 left-0 right-0 w-full z-[1000]", {
        "overflow-hidden": !menuOpen,
        "bg-background": menuOpen,
      })}
    >
      {!menuOpen && (
        <div className="absolute  inset-0 size-full h-[calc(100%+100px)] backdrop-blur-md z-[999]"></div>
      )}
      <div className="section z-[1001] relative">
        <div className="h-[80px] w-full flex items-end">
          <header className="w-full flex h-[48px] items-center justify-between gap-1">
            <div className="gap-12 flex items-center">
              <Link href="/" className="h-12 flex flex-col justify-center">
                <h1 className="text-2xl font-bold">Floris Bos</h1>
              </Link>
              <div className="items-center gap-4 hidden lg:flex">
                {/* <Link
                  href="/about-floris"
                  className="px-4 h-12 flex flex-col justify-center"
                >
                  <span>About</span>
                </Link> */}
                <Link
                  href="/projects"
                  className="px-4 h-12 flex flex-col justify-center"
                >
                  <span>Projects</span>
                </Link>
                <Link
                  href="/thoughts"
                  className="px-4 h-12 flex flex-col justify-center"
                >
                  <span>Thoughts</span>
                </Link>
              </div>
            </div>

            {/* Show on mobile */}
            <div className="items-center gap-4 flex md:hidden">
              <ThemeToggle />
              <div
                className="size-10 grid place-items-center pointer-events-auto"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X className="size-5" />
                ) : (
                  <MenuIcon className="size-5" />
                )}
              </div>
              {menuOpen && (
                <div
                  className="size-full absolute top-full w-full left-0 bg-background backdrop-blur-md section"
                  style={{ height: `calc(100dvh - ${headerHeight ?? 0}px)` }}
                >
                  <div className="size-full flex justify-between flex-col py-12">
                    <div className="flex flex-col gap-4">
                      <Link
                        href="/projects"
                        className="h-12 text-xl flex items-center w-full"
                      >
                        <span>Projects</span>
                      </Link>
                      <Link
                        href="/thoughts"
                        className="h-12 text-xl flex items-center w-full"
                      >
                        <span>Thoughts</span>
                      </Link>
                    </div>
                    <div className="flex gap-4 rounded-md bg-card p-2 mb-12">
                      <Link
                        href="emailto:florisbos@gmail.com"
                        className="size-10 grid place-items-center"
                      >
                        <Mail className="size-5" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/floris-bos/"
                        target="_blank"
                        className="size-10 grid place-items-center"
                      >
                        <Linkedin className="size-5" />
                      </Link>
                      <Link
                        href="https://github.com/BluntKatana"
                        target="_blank"
                        className="size-10 grid place-items-center"
                      >
                        <Github className="size-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Show on desktop */}
            <div className="items-center gap-4 hidden md:flex">
              <ThemeToggle />
              <Link
                href="emailto:florisbos@gmail.com"
                className="size-10 grid place-items-center"
              >
                <Mail className="size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/floris-bos/"
                target="_blank"
                className="size-10 grid place-items-center"
              >
                <Linkedin className="size-5" />
              </Link>
              <Link
                href="https://github.com/BluntKatana"
                target="_blank"
                className="size-10 grid place-items-center"
              >
                <Github className="size-5" />
              </Link>
              {/* <Link
                href="/rss"
                target="_blank"
                className="size-10 grid place-items-center"
              >
                <Rss className="size-5" />
              </Link> */}
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
