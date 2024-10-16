"use client";

import { generateRandomCoordinates } from "@/utils/points";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { BentoBox } from "./about-floris-grid";
import { Coordinates, MY_COORDINATES } from "./about-floris.constants";

type DistanceBoxProps = {
  theirCoordinates?: Coordinates;
  distanceBetweenPoints?: number;
};

const DEFAULT_DISTANCE = 1000;

export function DistanceBox({
  theirCoordinates,
  distanceBetweenPoints,
}: DistanceBoxProps) {
  const fromCoordinates = theirCoordinates ?? MY_COORDINATES;
  const toCoordinates = generateRandomCoordinates(
    fromCoordinates,
    distanceBetweenPoints ?? DEFAULT_DISTANCE
  );

  const Map = useMemo(
    () =>
      dynamic(() => import("./map"), {
        loading: () => (
          <div className="size-full bg-blue-500 flex items-center justify-center">
            <p>Loading map...</p>
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
          <Map
            fromCoordinates={fromCoordinates}
            toCoordinates={toCoordinates}
          />
        </div>
        <div className="text-center pt-4 pb-2 max-w-lg">
          I&apos;ve been on the move! Covered a total of{" "}
          <em>
            <strong className="underline">
              {(distanceBetweenPoints ?? DEFAULT_DISTANCE).toFixed(2)} km
            </strong>
          </em>{" "}
          while running in 2024 so far &mdash; and there&apos;s more to come!
        </div>
      </div>
    </BentoBox>
  );
}
