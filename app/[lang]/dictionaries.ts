import "server-only";

const dictionaries = {
  en: () =>
    import("@/constants/dictionaries/en.json").then((module) => module.default),
  nl: () =>
    import("@/constants/dictionaries/nl.json").then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const getDictionary = async (locale: "en" | "nl") =>
  dictionaries[locale]();
