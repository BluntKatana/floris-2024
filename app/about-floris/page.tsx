import Image from "next/image";
import {
  GsAvatar,
  JojoschoolFavicon,
  RrAvatar,
  UvaLogo,
  VuSocialAvatarBlauw,
} from "../assets/svg";
import MdxLayout from "../components/mdx";
import { MDXLink } from "../components/mdx/mdx-link";
import { getUserCoords, getUserInformation } from "../utils/user.server";
import { AboutFlorisGrid } from "./about-floris-grid";

export default async function AboutFloris() {
  const userinfo = await getUserInformation();
  const userCoordinates = getUserCoords(userinfo);

  return (
    <section className="section">
      {JSON.stringify(userinfo)}
      {JSON.stringify(userCoordinates)}
      <div className="mt-9 grid grid-cols-[1fr_400px] gap-12">
        <div>
          <MdxLayout>
            <h1>Hi, I am Floris Bos</h1>
            <p>
              I have a passion for technology, sports, traveling, and sitting in
              cafes staring at my laptop for hours.
            </p>
            <p>
              I work as a full-stack developer at{" "}
              <MDXLink href="www.jojoschool.nl" icon={<JojoschoolFavicon />}>
                JoJoschool
              </MDXLink>{" "}
              and I am a master student Computer Science at the{" "}
              <MDXLink href="www.vu.nl" icon={<VuSocialAvatarBlauw />}>
                VU
              </MDXLink>{" "}
              and{" "}
              <MDXLink href="www.uva.nl" icon={<UvaLogo />}>
                UVA
              </MDXLink>
              . I&apos;ve also done some freelance work for{" "}
              <MDXLink href="www.rotterdamrave.com" icon={<RrAvatar />}>
                Rotterdam Rave
              </MDXLink>{" "}
              and{" "}
              <MDXLink href="www.givesoul.com" icon={<GsAvatar />}>
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
        <AboutFlorisGrid userCoordinates={userCoordinates} />
      </div>
    </section>
  );
}
