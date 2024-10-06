type Country = [name: string, code: string, emoji?: string];

// 1 hello can have multiple countries
type Hello = {
  countries: Country[];
  label: string;
};

export const HELLOS: Hello[] = [
  {
    label: "Hallo",
    countries: [
      ["Netherlands", "NL", "🇳🇱"],
      ["Germany", "DE", "🇩🇪"],
      ["Austria", "AT", "🇦🇹"],
      ["Switzerland", "CH", "🇨🇭"],
      ["Belgium", "BE", "🇧🇪"],
    ],
  },
  {
    label: "Bonjour",
    countries: [
      ["France", "FR", "🇫🇷"],
      ["Belgium", "BE", "🇧🇪"],
    ],
  },
  {
    label: "Hello",
    countries: [
      ["United Kingdom", "GB", "🇬🇧"],
      ["Australia", "AU", "🇦🇺"],
      ["Singapore", "SG", "🇸🇬"], // Singapore speaks English
    ],
  },
  {
    label: "Hola",
    countries: [["Spain", "ES", "🇪🇸"]],
  },
  {
    label: "Ciao",
    countries: [["Italy", "IT", "🇮🇹"]],
  },
  {
    label: "Olá",
    countries: [["Portugal", "PT", "🇵🇹"]],
  },
  {
    label: "Γειά σου", // Greek
    countries: [["Greece", "GR", "🇬🇷"]],
  },
  {
    label: "Helló",
    countries: [["Hungary", "HU", "🇭🇺"]],
  },
  {
    label: "Ahoj",
    countries: [["Czech Republic", "CZ", "🇨🇿"]],
  },
  {
    label: "Hållö", // Swedish
    countries: [["Sweden", "SE", "🇸🇪"]],
  },
];
