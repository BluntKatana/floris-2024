"use client";

import { generateRandomCoordinates } from "@/app/utils/points";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { BentoBox } from "./about-floris-grid";
import { Coordinates, MY_COORDINATES } from "./about-floris.constants";

type DistanceBoxProps = {
  theirCoordinates: Coordinates | null;
  distanceBetweenPoints: number;
};

const DEFAULT_DISTANCE = 1000;

export function DistanceBox({
  theirCoordinates,
  distanceBetweenPoints,
}: DistanceBoxProps) {
  const [otherCoordinates, setOtherCoordinates] = useState<Coordinates | null>(
    null
  );

  const fromCoordinates = theirCoordinates ?? MY_COORDINATES;

  if (otherCoordinates === null) {
    setOtherCoordinates(
      generateRandomCoordinates(fromCoordinates, distanceBetweenPoints)
    );
  }

  const Map = useMemo(
    () =>
      dynamic(() => import("./map"), {
        loading: () => (
          <div className="size-full bg-distancemap flex items-center justify-center text-black">
            Measuring distance...
          </div>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <BentoBox gridArea="map">
      <div className="text-center flex flex-col items-center size-full dark:leaflet-dark-mode">
        <div className="size-full rounded-md overflow-hidden min-h-[250px]">
          {otherCoordinates !== null && (
            <Map
              fromCoordinates={fromCoordinates}
              toCoordinates={otherCoordinates}
            />
          )}
        </div>
        <div className="text-center pt-4 pb-2 max-w-lg">
          I&apos;ve been on the move! Covered a total of{" "}
          <em>
            <strong className="underline">
              {(distanceBetweenPoints ?? DEFAULT_DISTANCE).toFixed(2)} km
            </strong>
          </em>{" "}
          while 🏊🏼, 🚴🏼‍♂️, and 🏃🏼‍♂️ in 2025 so far &mdash; and there&apos;s more to
          come!
        </div>
      </div>
    </BentoBox>
  );
}
