type Country = {
  name: string;
  code: string;
  date: string;
};

// 1 hello can have multiple countries
type Hello = {
  countries: Country[];
  label: string;
};

export const HELLOS: Hello[] = [
  {
    label: "Hallo",
    countries: [
      {
        name: "Germany",
        code: "DE",
        date: "2017-2018",
      },
      {
        name: "Netherlands",
        code: "NL",
        date: "2018-2019",
      },
      {
        name: "Belgium",
        code: "BE",
        date: "2019-2020",
      },
    ],
  },
];
