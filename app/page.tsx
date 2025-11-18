import MdxLayout from "@/app/components/mdx";
import { MDXLink } from "@/app/components/mdx/mdx-link";
import {
  GsAvatar,
  JojoschoolFavicon,
  RrAvatar,
  UvaLogo,
  VuSocialAvatarBlauw,
} from "@/assets/svg";
// import { getPublicPosts } from "./post/parse-posts";
import OpenStateIcon from "@/assets/svg/OpenStateIcon";
import RijksoverheidLogo from "@/assets/svg/RijksoverheidLogo";
import Image from "next/image";
import { Card } from "./components/card";
import { AboutFlorisGrid } from "./features/about-grid/about-floris-grid";

export default async function Home() {
  return (
    <main className="pb-16">
      <section className="section">
        <div className="mt-9 flex flex-col-reverse md:grid md:grid-cols-[1fr_300px] md:gap-6">
          <div>
            <MdxLayout>
              <h1>Hi, I am Floris Bos</h1>
              <p>
                I like building cool things with code, do sports, go on travels,
                and sit in cafes staring at my laptop for hours.{" "}
              </p>
              <p>
                I am a master student Computer Science at the{" "}
                <MDXLink
                  href="https://www.vu.nl"
                  icon={<VuSocialAvatarBlauw />}
                >
                  VU
                </MDXLink>{" "}
                and{" "}
                <MDXLink href="https://www.uva.nl" icon={<UvaLogo />}>
                  UVA
                </MDXLink>
                , and I work on the side as a full-stack developer at{" "}
                <MDXLink
                  href="https://www.jojoschool.nl"
                  icon={<JojoschoolFavicon />}
                >
                  JoJoschool
                </MDXLink>
                . I also do freelance work for{" "}
                <MDXLink
                  href="https://www.rotterdamrave.com"
                  icon={<RrAvatar />}
                >
                  Rotterdam Rave
                </MDXLink>
                ,
                <MDXLink href="https://www.givesoul.com" icon={<GsAvatar />}>
                  Give Soul
                </MDXLink>
                , and <MDXLink href="/">Penny</MDXLink>. During my studies, I
                completed internships at and completed internships at{" "}
                <MDXLink href="/" icon={<OpenStateIcon />}>
                  OpenState
                </MDXLink>{" "}
                and{" "}
                <MDXLink href="/" icon={<RijksoverheidLogo />}>
                  KOOP
                </MDXLink>
                .
              </p>
            </MdxLayout>
          </div>
          <Card className="relative size-full overflow-hidden min-h-[200px]">
            <Image
              src="/assets/images/homepage_1.jpg"
              alt="Floris Bos"
              fill
              className="object-cover object-center md:object-bottom"
              priority
            />
          </Card>
        </div>
      </section>
      <section className="section mt-6">
        <AboutFlorisGrid
          userCoordinates={null}
          distanceBetweenPoints={10_000} // stravaStats ? stravaStats.ytd_run_totals.distance / 1000 : undefined
        />
      </section>
      <section className="section mt-12">
        <MdxLayout className="max-w-full">
          <h2>Projects & Other Work</h2>
          <p>
            I offer freelance work for startups and small businesses. I can help
            you with all aspects of your project. Ranging from database
            architecture to backend development to frontend-focussed tasks and
            design.
          </p>
          <p>
            Working with me meaning working with someone who is passionate about
            what they do. I cannot yet give you years of experience, but I can
            give you a lot of energy and passion to get your project off the
            ground.
          </p>
          <p className="mb-7">
            See my work below. Would you like to have a chat?{" "}
            <a href="mailto:florisbos1204@gmail.com">Contact me</a>
          </p>
          <div className="flex flex-col gap-4">
            <a
              className="group/rr"
              href="https://www.rotterdamrave.com/"
              target="__blank"
            >
              <Card className="overflow-hidden relative min-h-[150px]">
                <Image
                  src="/assets/images/rotterdam-rave.avif"
                  alt="Floris Bos"
                  fill
                  className="group-hover/rr:scale-100 dark:opacity-80 opacity-90  group-hover/rr:opacity-100 scale-105 object-cover object-center !m-0 !p-0 z-0 transition-all duraton-200 ease-in-out"
                />
                <div className="size-full absolute z-10" />
                <div className="absolute top-0 left-0 z-20 border-solid border-0 border-card-border border-r border-b rounded-br-md bg-card px-4 py-1">
                  <h4 className="!m-0 p-0 !text-base flex gap-2 items-center">
                    <span>Rotterdam Rave</span>
                    <span className="text-card-foreground/50 font-normal">
                      [Freelance]
                    </span>
                  </h4>
                </div>
              </Card>
            </a>
            <a
              className="group/gs"
              href="https://www.givesoul.com/"
              target="__blank"
            >
              <Card className="overflow-hidden relative min-h-[150px]">
                <Image
                  src="/assets/images/givesoul.webp"
                  alt="Floris Bos"
                  fill
                  className="group-hover/gs:scale-100 dark:opacity-80 opacity-90  group-hover/gs:opacity-100 scale-105 object-cover object-center !m-0 !p-0 z-0 transition-all duraton-200 ease-in-out"
                />
                <div className="size-full absolute z-10" />
                <div className="absolute top-0 left-0 z-20 border-solid border-0 border-card-border border-r border-b rounded-br-md bg-card px-4 py-1">
                  <h4 className="!m-0 p-0 !text-base flex gap-2 items-center">
                    <span>Give Soul</span>
                    <span className="text-card-foreground/50 font-normal">
                      [Freelance]
                    </span>
                  </h4>
                </div>
              </Card>
            </a>
            <a
              className="group/openlobby"
              href="https://www.openlobby.nl/"
              target="__blank"
            >
              <Card className="overflow-hidden relative min-h-[150px]">
                <Image
                  src="/assets/images/openstate.png"
                  alt="Floris Bos"
                  fill
                  className="group-hover/openlobby:scale-100 dark:opacity-80 opacity-90  group-hover/openlobby:opacity-100 scale-105 object-cover object-top !m-0 !p-0 z-0 transition-all duraton-200 ease-in-out"
                />
                <div className="size-full absolute z-10" />
                <div className="absolute top-0 left-0 z-20 border-solid border-0 border-card-border border-r border-b rounded-br-md bg-card px-4 py-1">
                  <h4 className="!m-0 p-0 !text-base flex gap-2 items-center">
                    <span>Open Lobby</span>
                    <span className="text-card-foreground/50 font-normal">
                      [Internship]
                    </span>
                  </h4>
                </div>
              </Card>
            </a>
            <a
              className="group/jojoschool"
              href="https://www.jojoschool.nl/"
              target="__blank"
            >
              <Card className="overflow-hidden relative min-h-[150px]">
                <Image
                  src="/assets/images/jojoschool.png"
                  alt="Floris Bos"
                  fill
                  className="group-hover/jojoschool:scale-100 dark:opacity-80 opacity-90  group-hover/jojoschool:opacity-100 scale-105 object-cover object-top !m-0 !p-0 z-0 transition-all duraton-200 ease-in-out"
                />
                <div className="size-full absolute z-10" />
                <div className="absolute top-0 left-0 z-20 border-solid border-0 border-card-border border-r border-b rounded-br-md bg-card px-4 py-1">
                  <h4 className="!m-0 p-0 !text-base flex gap-2 items-center">
                    <span>JoJoschool</span>
                    <span className="text-card-foreground/50 font-normal">
                      [Part-time]
                    </span>
                  </h4>
                </div>
              </Card>
            </a>
          </div>
        </MdxLayout>
      </section>
    </main>
  );
}
