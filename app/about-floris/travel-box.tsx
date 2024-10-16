import { ReactNode } from "react";
import { BentoBox } from "./about-floris-grid";
import { getCountryCount, HELLOS } from "./travel-box.constants";

/**
 * Show 'hello' in all the country languages I've been to
 */
export function TravelBox() {
  return (
    <BentoBox gridArea="travel">
      <div className="text-center flex flex-col items-center size-full p-2">
        <div className="size-full flex justify-center justify gap-2 flex-wrap h-fit">
          {HELLOS.map((hello) => (
            <TravelLabel hello={hello} key={hello.label}>
              {hello.label}
            </TravelLabel>
          ))}
        </div>
        <div className="text-center pt-4 max-w-sm text-balance">
          I love travelling. I&apos;ve been to a total of{" "}
          <strong>{getCountryCount()} countries</strong>, but there are still so
          many more to explore!
        </div>
      </div>
    </BentoBox>
  );
}

function TravelLabel({
  children,
  hello,
}: {
  children: ReactNode;
  hello: (typeof HELLOS)[number];
}) {
  const flags = hello.countries.map(([, , emoji]) => emoji).join("");

  return (
    <span className="text-center text-lg font-bold bg-accent rounded-md px-2 flex">
      {children} {flags}
    </span>
  );
}
