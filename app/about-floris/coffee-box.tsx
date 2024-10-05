import { COFFEES } from "./about-floris.constants";
import { BentoBox } from "./about-floris-grid";

export function CoffeeBox() {
  return (
    <BentoBox gridArea="coffee">
      {COFFEES.map((coffee) => (
        <div
          className="flex items-center border border-solid size-full rounded-md px-3 py-2 border-border"
          key={coffee.place}
        >
          <div>
            <h3 className="!text-xl !m-0">{coffee.place}</h3>
            <p className="!m-0">{coffee.location}</p>
            <p className="!m-0">{coffee.coffee}</p>
          </div>
        </div>
      ))}
    </BentoBox>
  );
}
