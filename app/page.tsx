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
import { AboutFlorisGrid } from "@/app/features/about-grid/about-floris-grid";
import Image from "next/image";
import { Card } from "./components/card";
import { getUserInformation } from "./server-utils/user.server";

export default async function Home() {
  const userinfo = await getUserInformation();

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
                I work as a full-stack developer at{" "}
                <MDXLink
                  href="https://www.jojoschool.nl"
                  icon={<JojoschoolFavicon />}
                >
                  JoJoschool
                </MDXLink>{" "}
                and I&apos;m a master student Computer Science at the{" "}
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
                . I&apos;ve also done some freelance work for{" "}
                <MDXLink
                  href="https://www.rotterdamrave.com"
                  icon={<RrAvatar />}
                >
                  Rotterdam Rave
                </MDXLink>{" "}
                and{" "}
                <MDXLink href="https://www.givesoul.com" icon={<GsAvatar />}>
                  Give Soul
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
      <section className="section">
        <div className="mt-6">
          <AboutFlorisGrid
            userCoordinates={userinfo?.coords ?? null}
            distanceBetweenPoints={1134.1} // stravaStats ? stravaStats.ytd_run_totals.distance / 1000 : undefined
          />
        </div>
      </section>
      <section className="section mt-12">
        <MdxLayout className="max-w-full">
          <h2>Projects</h2>
          <div className="flex flex-col gap-8">
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
                  className="group-hover/rr:scale-105 object-cover object-center !m-0 !p-0 z-0 transition-transform duraton-200 ease-in-out"
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
                  className="group-hover/gs:scale-105 object-cover object-center !m-0 !p-0 z-0 transition-transform duraton-200 ease-in-out"
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
          </div>
        </MdxLayout>
      </section>
      <section className="section mt-12">
        <MdxLayout>
          <h2>Thoughts</h2>
          <p>nothing yet</p>
        </MdxLayout>
      </section>
    </main>
  );
}
