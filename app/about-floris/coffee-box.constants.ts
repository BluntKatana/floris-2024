type CoffeeVisit = {
  coffee: "Cappuccino" | "Latte" | "Espresso" | "Americano" | "Flat White";
  place: string;
  location: string;
  date: string;
};

export const COFFEES: CoffeeVisit[] = [
  {
    place: "Boekenbar",
    location: "Utrecht, Netherlands",
    coffee: "Cappuccino",
    date: "2024-10-02",
  },
  {
    place: "Boekenbar",
    location: "Utrecht, Netherlands",
    coffee: "Cappuccino",
    date: "2024-10-02",
  },
  {
    place: "Lebkov",
    location: "Utrecht, Netherlands",
    coffee: "Flat White",
    date: "2024-10-08",
  },
];
