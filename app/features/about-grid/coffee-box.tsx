import { BentoBox } from "./about-floris-grid";
import { COFFEES } from "./coffee-box.constants";

export function CoffeeBox() {
  // create a frequemcy graph per coffee type
  const coffeeFrequency = COFFEES.reduce((acc, coffee) => {
    acc[coffee.coffee] = acc[coffee.coffee] ? acc[coffee.coffee] + 1 : 1;
    return acc;
  }, {} as Record<string, number>);

  const maxFrequency = Math.max(...Object.values(coffeeFrequency));

  return (
    <BentoBox gridArea="coffee">
      <div className="text-center flex items-center size-full p-2 flex-col">
        <div className="size-full flex justify-center justify gap-2 flex-wrap">
          {/* create a bar graph kinda thing */}
          {Object.entries(coffeeFrequency).map(([coffee, count]) => (
            <div
              className="flex flex-col h-full items-center justify-end gap-2"
              key={coffee}
            >
              <div
                key={coffee}
                className="bg-accent rounded-md h-0 w-16"
                style={{
                  height: `${(count / maxFrequency) * 100}%`,
                }}
              >
                <span className="text-xs p-1">{count}</span>
              </div>
              <span className="text-center text-lg font-bold rounded-md px-2 flex">
                {coffee}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center pt-4 max-w-sm text-balance">
          You can often find me working in coffee shops.
        </div>
      </div>
    </BentoBox>
  );
}
