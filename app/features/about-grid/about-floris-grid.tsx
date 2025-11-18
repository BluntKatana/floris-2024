import { PropsWithChildren } from "react";
import { Coordinates } from "./about-floris.constants";
import { DistanceBox } from "./distance-box";
import { TravelBox } from "./travel-box";

type GridName = "map" | "coffee" | "travel";

type AboutFlorisGrid = {
  userCoordinates: Coordinates | null;
  distanceBetweenPoints: number;
};

export function AboutFlorisGrid({
  userCoordinates,
  distanceBetweenPoints,
}: AboutFlorisGrid) {
  return (
    <div className="w-full gap-6 grid-layout-about-floris">
      <DistanceBox
        theirCoordinates={userCoordinates}
        distanceBetweenPoints={distanceBetweenPoints}
      />
      <TravelBox />
      {/* <CoffeeBox /> */}
    </div>
  );
}

export function BentoBox({
  children,
  gridArea,
}: PropsWithChildren<{ gridArea: GridName }>) {
  return (
    <div
      className="card flex size-full p-2 min-h-[200px] text-lg"
      style={{ gridArea: gridArea }}
    >
      {children}
    </div>
  );
}
