import { Rss } from "lucide-react";
import Link from "next/link";
import { MarqueeImage } from "./components/marquee-image";
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-[200vh]">
      <Header />
      <div className="absolute top-0 h-[calc(80px+3rem)] bg-background-svg-top w-full"></div>
      <div className="relative min-h-[350px] sm:min-h-[400px] 2xl:min-h-[450px] w-full z-0 bg-background-svg-top overflow-hidden">
        <div className="absolute bottom-[125px] left-0 z-0 w-[calc(100vw+4rem)] h-[100px] -m-12">
          <div className="relative z-20 w-full h-[300px] -m-px rotate-[4deg] origin-bottom-right">
            {/* BACKGROUND */}
            <div className="absolute w-full h-full z-20 bg-background-svg-middle"></div>
            {/* IMAGES ALL THE WAY IN THE BACK */}
            <div className="absolute bottom-[100px] z-10 select-none left-0 h-full">
              <div className="relative w-full flex mr-16">
                {/* 1 marquee */}
                <div className="flex motion-safe:animate-marquee-slow w-full gap-16 items-end">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <MarqueeImage
                      key={index}
                      src="/assets/images/homepage_1.jpg"
                      alt="Picture of the author"
                      size="md"
                      priority
                    />
                  ))}
                </div>
                <div className="absolute top-0 flex motion-safe:animate-marquee-slow w-full left-full gap-16 items-end">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <MarqueeImage
                      key={index}
                      src="/assets/images/homepage_1.jpg"
                      alt="Picture of the author"
                      size="md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-0 w-[calc(100vw+4rem)] h-[100px] -m-12">
          <div className="relative z-20 w-full h-[300px] -m-px rotate-3 origin-bottom-right">
            {/* BACKGROUND */}
            <div className="absolute w-full h-full z-20 bg-background-svg-bottom"></div>
            {/* IMAGES ALL THE WAY IN THE BACK */}
            <div className="absolute bottom-[150px] z-10 select-none left-0 h-full">
              <div className="relative w-full flex mr-16">
                {/* 1 marquee */}
                <div className="flex motion-safe:animate-marquee w-full gap-16 items-end">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <MarqueeImage
                      key={index}
                      src="/assets/images/homepage_1.jpg"
                      alt="Picture of the author"
                      size="lg"
                      priority
                    />
                  ))}
                </div>
                <div className="absolute top-0 flex motion-safe:animate-marquee w-full left-full gap-16 items-end">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <MarqueeImage
                      key={index}
                      src="/assets/images/homepage_1.jpg"
                      alt="Picture of the author"
                      size="lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <div className="max-w-5xl mx-auto px-8 w-full">
          <h2 className="text-xl font-bold">Hi</h2>
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
