"use client";

import useBoundingBox from "@/app/hooks/use-bounding-box";
import { cn } from "@/app/utils/style";
import {
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  MenuIcon,
  Workflow,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "../theme/theme-toggle";

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
                  className="size-full absolute top-full w-full left-0 bg-background backdrop-blur-md"
                  style={{ height: `calc(100dvh - ${headerHeight ?? 0}px)` }}
                >
                  <div className="section size-full flex justify-between flex-col pt-12 pb-16 rounded-md">
                    <div className="flex flex-col gap-4">
                      <Link
                        href="/projects"
                        className="h-12 text-xl flex items-center w-full gap-4"
                      >
                        <span>
                          <Workflow className="size-5" />
                        </span>
                        <span>Projects</span>
                      </Link>
                      <Link
                        href="/thoughts"
                        className="h-12 text-xl flex items-center w-full gap-4"
                      >
                        <span>
                          <Lightbulb className="size-5" />
                        </span>
                        <span>Thoughts</span>
                      </Link>
                    </div>
                    <div className="flex gap-4 rounded-md bg-card p-2">
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
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
