import { ReactNode } from "react";
import { BentoBox } from "./about-floris-grid";
import { HELLOS } from "./travel-box.constants";

/**
 * Show 'hello' in all the country languages I've been to
 */
export function TravelBox() {
  return (
    <BentoBox gridArea="travel">
      <div className="text-center flex flex-col items-center size-full">
        <div className="size-full flex justify-center justify gap-2 flex-wrap h-fit">
          {HELLOS.map((hello) => (
            <TravelLabel hello={hello} key={hello.label}>
              {hello.label}
            </TravelLabel>
          ))}
        </div>
        <div className="text-center pt-4 pb-2 max-w-sm p-2 text-balance">
          In my travels, I&apos;ve met people from all over the world. It&apos;s
          been a great experience to learn about different cultures and
          languages!
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
