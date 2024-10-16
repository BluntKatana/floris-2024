import { getUserInformation } from "@/app/server-utils/user.server";
import MdxLayout from "@/components/mdx";
import { MDXLink } from "@/components/mdx/mdx-link";
import { getStravaStats } from "@/utils/strava.server";
import Image from "next/image";
import {
  GsAvatar,
  JojoschoolFavicon,
  RrAvatar,
  UvaLogo,
  VuSocialAvatarBlauw,
} from "../../assets/svg";
import { AboutFlorisGrid } from "./about-floris-grid";

export const revalidate = 60 * 60 * 24 * 7; // revalidate every week

export default async function AboutFloris() {
  const userinfo = await getUserInformation();
  // const stravaStats = await getStravaStats();

  return (
    <section className="section">
      <div className="mt-9 grid-cols-1 grid md:grid-cols-[1fr_400px] md:gap-6">
        <div>
          <MdxLayout>
            <h1>Hi, I am Floris Bos</h1>
            <p>
              I have a passion for technology, sports, traveling, and sitting in
              cafes staring at my laptop for hours.
            </p>
            <p>
              I work as a full-stack developer at{" "}
              <MDXLink
                href="https://www.jojoschool.nl"
                icon={<JojoschoolFavicon />}
              >
                JoJoschool
              </MDXLink>{" "}
              and I am a master student Computer Science at the{" "}
              <MDXLink href="https://www.vu.nl" icon={<VuSocialAvatarBlauw />}>
                VU
              </MDXLink>{" "}
              and{" "}
              <MDXLink href="https://www.uva.nl" icon={<UvaLogo />}>
                UVA
              </MDXLink>
              . I&apos;ve also done some freelance work for{" "}
              <MDXLink href="https://www.rotterdamrave.com" icon={<RrAvatar />}>
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
      <div className="mt-6">
        <AboutFlorisGrid
          userCoordinates={userinfo?.coords}
          distanceBetweenPoints={
            1000
            // stravaStats ? stravaStats.ytd_run_totals.distance / 1000 : undefined
          }
        />
      </div>
    </section>
  );
}
