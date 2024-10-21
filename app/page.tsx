import {
  GsAvatar,
  JojoschoolFavicon,
  RrAvatar,
  UvaLogo,
  VuSocialAvatarBlauw,
} from "@/assets/svg";
import MdxLayout from "@/components/mdx";
import { MDXLink } from "@/components/mdx/mdx-link";
// import { getPublicPosts } from "./post/parse-posts";
import Image from "next/image";
import { getUserInformation } from "./server-utils/user.server";
import { AboutFlorisGrid } from "@/components/about-grid/about-floris-grid";

export default async function Home() {
  const userinfo = await getUserInformation();

  return (
    <main className="pb-16">
      <section className="section">
        <div className="mt-9 grid-cols-1 grid md:grid-cols-[1fr_300px] md:gap-6">
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
          <div className="relative size-full rounded-md overflow-hidden">
            <Image
              src="/assets/images/homepage_1.jpg"
              alt="Floris Bos"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="mt-6">
          <AboutFlorisGrid
            userCoordinates={userinfo?.coords ?? null}
            distanceBetweenPoints={1041.1} // stravaStats ? stravaStats.ytd_run_totals.distance / 1000 : undefined
          />
        </div>
      </section>
      <section className="section mt-12">
        <MdxLayout>
          <h2>Projects</h2>
          <p>nothing yet</p>
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
