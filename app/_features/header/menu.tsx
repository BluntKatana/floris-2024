"use client";

import { Menu as MenuIcon, X } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [yPosition, setYPosition] = useState(0);

  //   listen to y position of id="header" element
  useEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      const handleScroll = () => {
        setYPosition(header.getBoundingClientRect().y);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  //   if menu is open, we remove the overflow hidden from the header
  useEffect(() => {
    if (menuOpen) {
      document.getElementById("header")?.classList.remove("overflow-hidden");
    } else {
      document.getElementById("header")?.classList.add("overflow-hidden");
    }
  }, [menuOpen]);

  console.log(yPosition);

  return (
    <div className="items-center gap-4 flex md:hidden">
      <ThemeToggle />
      <div
        className="size-10 grid place-items-center pointer-events-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="size-5" /> : <MenuIcon className="size-5" />}
      </div>
      {menuOpen && (
        <div
          className="size-full absolute top-full w-full left-0 bg-white"
          style={{
            height: `calc(100vh - ${yPosition}px - 80px)`,
          }}
        >
          <div className="size-full flex justify-center items-center">
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/projects"
                className="px-4 h-12 text-xl flex flex-col justify-center"
              >
                <span>Projects</span>
              </Link>
              <Link
                href="/thoughts"
                className="px-4 h-12 text-xl flex flex-col justify-center"
              >
                <span>Thoughts</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
