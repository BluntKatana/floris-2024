import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <div className="mt-12 sticky top-0 left-0 right-0 w-full z-[1000] backdrop-blur-sm">
      <div className="section">
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
                {/* <Link
                  href="/resume"
                  className="px-4 h-12 flex flex-col justify-center"
                >
                  <span>Resume</span>
                </Link> */}
                {/* <Link
                  href="/thoughts"
                  className="px-4 h-12 flex flex-col justify-center"
                >
                  <span>Thoughts</span>
                </Link> */}
              </div>
            </div>
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
