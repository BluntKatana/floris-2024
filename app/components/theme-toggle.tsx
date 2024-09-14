"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="flex items-center justify-center size-10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <Moon className="size-5" />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <Sun className="size-5" />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </button>
  );
}
