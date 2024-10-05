import { PropsWithChildren } from "react";
import { DistanceBox } from "./distance-box";
import { CoffeeBox } from "./coffee-box";
import { Coordinates } from "./about-floris.constants";

type GridName = "map" | "coffee" | "travel";

type AboutFlorisGrid = {
  userCoordinates?: Coordinates;
};

export function AboutFlorisGrid({ userCoordinates }: AboutFlorisGrid) {
  return (
    <div
      className="grid w-full grid-cols-[repeat(6,1fr)] gap-4"
      style={{
        gridTemplateAreas: `
              "map  map  map  map  coffee coffee"
              "map  map  map  map  coffee coffee"
              "map  map  map  map  coffee coffee"
              "travel travel travel travel travel travel"
              "travel travel travel travel travel travel"
          `,
      }}
    >
      <DistanceBox theirCoordinates={userCoordinates} />
      <BentoBox gridArea="travel">TRAVEL</BentoBox>
      <CoffeeBox />
    </div>
  );
}

export function BentoBox({
  children,
  gridArea,
}: PropsWithChildren<{ gridArea: GridName }>) {
  return (
    <div
      className="flex border border-solid size-full rounded-md  p-2 border-border min-h-[200px]"
      style={{ gridArea: gridArea }}
    >
      {children}
    </div>
  );
}
