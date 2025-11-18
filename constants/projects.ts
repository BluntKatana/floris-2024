import { Dictionary } from "@/app/[lang]/dictionaries";

export const PROJECTS = (dictionary: Dictionary) => [
  {
    title: "JoJoschool",
    subtitle: dictionary.tags["part-time"],
    href: "https://www.jojoschool.nl/",
    target: "__blank",
    imageSrc: "/assets/images/jojoschool_cover.jpeg",
    imageAlt: "JoJoschool",
  },
  {
    title: "Rotterdam Rave",
    subtitle: dictionary.tags.freelance,
    href: "https://www.rotterdamrave.com/",
    target: "__blank",
    imageSrc: "/assets/images/rotterdam-rave.avif",
    imageAlt: "Rotterdam Rave",
  },
  {
    title: "Give Soul",
    subtitle: dictionary.tags.freelance,
    href: "https://www.givesoul.com/",
    target: "__blank",
    imageSrc: "/assets/images/givesoul.webp",
    imageAlt: "Give Soul",
  },
  {
    title: "Open Lobby",
    subtitle: dictionary.tags.internship,
    href: "https://www.openlobby.nl/",
    target: "__blank",
    imageSrc: "/assets/images/openstate.png",
    imageAlt: "Open Lobby",
  },
  {
    title: "KOOP",
    subtitle: dictionary.tags.internship,
    href: "https://www.uvastartupfund.nl/",
    target: "__blank",
    imageSrc: "/assets/images/koop.png",
    imageAlt: "KOOP",
  },
];
