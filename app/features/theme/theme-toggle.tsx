"use client";

import useIsMounted from "@/app/hooks/use-is-mounted";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const mounted = useIsMounted();

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
