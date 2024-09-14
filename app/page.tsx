import { Rss } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./components/theme-toggle";
import Image from "next/image";

type EventType = "career" | "project" | "education" | "thought" | "random";

type Event = {
  type: EventType;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

const EVENT = [{}];

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-[200vh]">
      <Header />
      <div className="absolute top-0 h-[calc(80px+3rem)] bg-background-svg-top w-full"></div>
      <div className="relative h-[400px] w-full z-0 overflow-hidden bg-background-svg-top">
        <div className="absolute bottom-[150px] left-0 z-0 w-[calc(100vw+4rem)] h-[100px] -m-12">
          <div className="relative bg-background-svg-middle bottom-0 z-20 w-full h-[300px] -m-px pointer-events-none rotate-[3deg] origin-bottom-right"></div>
          {/* IMAGES ALL THE WAY IN THE BACK */}
          <div className="absolute bottom-0 left-1/3 group/image z-10 select-none">
            <div className="relative w-[200px] h-[200px] bg-accent -rotate-1 group-hover/image:-translate-y-4 group-hover/image:scale-110 group-hover/image:rotate-3  transition-transform in-out rounded-md duration-200 overflow-hidden origin-bottom">
              <Image
                src="/assets/images/homepage_1.jpg"
                alt="Picture of the author"
                fill
                className="object-cover object-left-center"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-[2rem] group/image z-10 select-none">
            <div className="relative w-[200px] h-[200px] bg-accent -rotate-1 group-hover/image:-translate-y-4 group-hover/image:scale-110 group-hover/image:rotate-3  transition-transform in-out rounded-md duration-200 overflow-hidden origin-bottom">
              <Image
                src="/assets/images/homepage_1.jpg"
                alt="Picture of the author"
                fill
                className="object-cover object-left-center"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-0 w-[calc(100vw+4rem)] h-[100px] -m-12">
          <div className="relative bg-background-svg-bottom bottom-0 z-20 w-full h-[300px] -m-px pointer-events-none rotate-[6deg] origin-bottom-right"></div>
          {/* IMAGES IN THE MIDDLE */}
          <div className="absolute bottom-8 left-8 group/image z-10 select-none">
            <div className="relative w-[250px] h-[250px] bg-accent -rotate-1 group-hover/image:-translate-y-4 group-hover/image:scale-110 group-hover/image:rotate-3  transition-transform in-out rounded-md duration-200 overflow-hidden origin-bottom">
              <Image
                src="/assets/images/homepage_1.jpg"
                alt="Picture of the author"
                fill
                className="object-cover object-left-center"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-1/4 group/image z-10 select-none">
            <div className="relative w-[300px] h-[300px] bg-accent -rotate-1 group-hover/image:-translate-y-4 group-hover/image:scale-110 group-hover/image:rotate-3  transition-transform in-out rounded-md duration-200 overflow-hidden origin-bottom">
              <Image
                src="/assets/images/homepage_1.jpg"
                alt="Picture of the author"
                fill
                className="object-cover object-left-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-16">
        <div className="max-w-5xl mx-auto px-8 w-full">
          <h2 className="text-xl font-bold">My life</h2>
          <div className="d">dit werkt</div>
          <div className="rounded-sm">
            <h3>Ai</h3>
            <p>Welcome</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="mt-12 sticky top-0 left-0 right-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-5xl px-8 mx-auto w-full">
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
