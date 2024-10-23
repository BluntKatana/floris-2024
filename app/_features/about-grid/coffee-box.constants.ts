type CoffeeVisit = {
  coffee: "Cappuccino" | "Latte" | "Espresso" | "Americano" | "Flat White";
  place: string;
  date: string;
};

export const COFFEES: CoffeeVisit[] = [
  {
    place: "Boekenbar",
    coffee: "Cappuccino",
    date: "2024-10-02",
  },
  {
    place: "Boekenbar",
    coffee: "Cappuccino",
    date: "2024-10-02",
  },
  {
    place: "Lebkov",
    coffee: "Flat White",
    date: "2024-10-08",
  },
  {
    place: "Boekenbar",
    coffee: "Cappuccino",
    date: "2024-10-20",
  },
  {
    place: "Lebkov",
    coffee: "Flat White",
    date: "2024-10-21",
  },
  {
    place: "Koffie Leute",
    coffee: "Flat White",
    date: "2024-10-22",
  },
  {
    place: "Koffie Leute",
    coffee: "Cappuccino",
    date: "2024-10-22",
  },
];
