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
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import { AboutFlorisGrid } from "../features/about-grid/about-floris-grid";
import { cn } from "../utils/style";
import { Locale } from "@/constants/i18n";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: Readonly<{ params: Promise<{ lang: Locale }> }>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="section mt-8 mb-8">
      <section className="flex flex-col-reverse md:grid md:grid-cols-[1fr_300px] md:gap-6 w-full">
        <div>
          <h1 className="mt-8 mb-10.5">{dictionary.home.title}</h1>
          <p className="my-5">{dictionary.home.description["1"]}</p>
          <p className="mt-5">
            {dictionary.home.description["2"]}{" "}
            <MDXLink href="https://www.vu.nl" icon={<VuSocialAvatarBlauw />}>
              VU
            </MDXLink>{" "}
            {dictionary.home.description["3"]}{" "}
            <MDXLink href="https://www.uva.nl" icon={<UvaLogo />}>
              UVA
            </MDXLink>
            {dictionary.home.description["4"]}{" "}
            <MDXLink
              href="https://www.jojoschool.nl"
              icon={<JojoschoolFavicon />}
            >
              JoJoschool
            </MDXLink>
            {dictionary.home.description["5"]}{" "}
            <MDXLink href="https://www.rotterdamrave.com" icon={<RrAvatar />}>
              Rotterdam Rave
            </MDXLink>
            ,{" "}
            <MDXLink href="https://www.givesoul.com" icon={<GsAvatar />}>
              Give Soul
            </MDXLink>{" "}
            {dictionary.home.description["6"]} <MDXLink href="/">Penny</MDXLink>
            . {dictionary.home.description["7"]}{" "}
            <MDXLink href="/" icon={<OpenStateIcon />}>
              OpenState
            </MDXLink>{" "}
            {dictionary.home.description["8"]}{" "}
            <MDXLink href="/" icon={<RijksoverheidLogo />}>
              KOOP
            </MDXLink>
            .
          </p>
        </div>
        <div className="card relative size-full overflow-hidden min-h-[200px]">
          <Image
            src="/assets/images/homepage_1.jpg"
            alt="Floris Bos"
            fill
            className="object-cover object-center md:object-bottom"
            priority
          />
        </div>
      </section>
      <section className="mt-6">
        <AboutFlorisGrid
          userCoordinates={null}
          distanceBetweenPoints={4531} // stravaStats ? stravaStats.ytd_run_totals.distance / 1000 : undefined
        />
      </section>
      <section className="mt-12">
        <h2 className="mt-5 mb-6">{dictionary.home.projects.title}</h2>
        <p className="my-5">{dictionary.home.projects.description["1"]}</p>
        <p className="my-5">{dictionary.home.projects.description["2"]}</p>
        <p className="my-5">
          {dictionary.home.projects.contact["1"]}{" "}
          <a href="mailto:florisbos1204@gmail.com">
            {dictionary.home.projects.contact["2"]}
          </a>
          .
        </p>
        <div className="flex flex-col gap-4">
          {PROJECTS.map((project) => (
            <a href={project.href} target={project.target} key={project.title}>
              <ProjectCard {...project} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  href: string;
  target: string;
  className?: string;
};

function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  className,
}: ProjectCardProps) {
  return (
    <div className="card overflow-hidden relative min-h-[150px] group/project-card">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        loading="lazy"
        className={cn(
          "group-hover/project-card:scale-100 opacity-90 group-hover/project-card:opacity-100 scale-101 object-cover object-center z-0 transition-all duraton-200 ease-in-out",
          className
        )}
      />
      <div className="size-full absolute z-10" />
      <div className="absolute top-0 left-0 z-20 border-solid border-0 border-card-border border-r border-b rounded-br-md bg-card px-3 py-1">
        <h4 className="flex gap-2 items-center">
          <span className="font-semibold">{title}</span>
          <span className="text-foreground/50 font-normal">[{subtitle}]</span>
        </h4>
      </div>
    </div>
  );
}
