"use client";

import Script from "next/script";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";
import { generateRandomCoordinates } from "../utils/points";
import { BentoBox } from "./about-floris-grid";
import { Coordinates, MY_COORDINATES } from "./about-floris.constants";
import { House } from "lucide-react";

type DistanceBoxProps = {
  userCoordinates?: Coordinates;
};

export function DistanceBox({ userCoordinates }: DistanceBoxProps) {
  const fromCoordinates = userCoordinates ?? MY_COORDINATES;
  const toCoordinates = generateRandomCoordinates(fromCoordinates, 1000);

  return (
    <BentoBox gridArea="map">
      <div className="size-full min-h-[300px]">
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
          async
        />
        <MapContainer
          center={getCenter(fromCoordinates, toCoordinates)}
          zoom={5}
          dragging={false}
          touchZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
          boxZoom={false}
          keyboard={false}
          doubleClickZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={fromCoordinates} />
          <Marker position={toCoordinates} />
          <Polyline
            pathOptions={{ color: "red" }}
            positions={[fromCoordinates, toCoordinates]}
          />
        </MapContainer>
      </div>
    </BentoBox>
  );
}

function getCenter(mine: Coordinates, theirs: Coordinates): Coordinates {
  return [(mine[0] + theirs[0]) / 2, (mine[1] + theirs[1]) / 2];
}
