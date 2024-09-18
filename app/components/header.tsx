import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Rss } from "lucide-react";

export function Header() {
  return (
    <div className="mt-12 sticky top-0 left-0 right-0 w-full z-50 backdrop-blur-sm">
      <div className="section">
        <div className="h-[80px] w-full flex items-end">
          <header className="w-full flex h-[48px] items-center justify-between gap-1">
            <div className="gap-12 flex items-center">
              <Link href="/" className="h-12 flex flex-col justify-center">
                <h1 className="text-2xl font-bold">Floris Bos</h1>
              </Link>
              <div className="items-center gap-4 hidden lg:flex">
                <Link
                  href="/about-me"
                  className="px-4 h-12 flex flex-col justify-center"
                >
                  <span>About</span>
                </Link>
                <Link
                  href="/resume"
                  className="px-4 h-12 flex flex-col justify-center"
                >
                  <span>Resume</span>
                </Link>
                <Link
                  href="/thoughts"
                  className="px-4 h-12 flex flex-col justify-center"
                >
                  <span>Thoughts</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/rss.xml" className="size-10 grid place-items-center">
                <Rss className="size-5" />
              </Link>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
