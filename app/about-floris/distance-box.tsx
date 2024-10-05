"use client";

import { Icon } from "leaflet";
import Script from "next/script";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";
import { generateRandomCoordinates } from "../utils/points";
import { BentoBox } from "./about-floris-grid";
import { Coordinates, MY_COORDINATES } from "./about-floris.constants";

type DistanceBoxProps = {
  theirCoordinates?: Coordinates;
};

const ICON_SIZE = 36;

export function DistanceBox({ theirCoordinates }: DistanceBoxProps) {
  const fromCoordinates = theirCoordinates ?? MY_COORDINATES;
  const toCoordinates = generateRandomCoordinates(fromCoordinates, 2000);

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
          zoom={4}
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
          <Marker icon={houseIcon} position={fromCoordinates} />
          <Marker icon={goalIcon} position={toCoordinates} />
          <Polyline
            pathOptions={{ color: "black" }}
            positions={[fromCoordinates, toCoordinates]}
          />
        </MapContainer>
      </div>
    </BentoBox>
  );
}

const houseIcon = new Icon({
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTUuOTk5YTIgMiAwIDAgMSAyLjU4MiAwbDcgNS45OTlBMiAyIDAgMCAxIDIxIDEwdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PC9zdmc+",
  iconSize: [ICON_SIZE, ICON_SIZE],
});

const goalIcon = new Icon({
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdvYWwiPjxwYXRoIGQ9Ik0xMiAxM1YybDggNC04IDQiLz48cGF0aCBkPSJNMjAuNTYxIDEwLjIyMmE5IDkgMCAxIDEtMTIuNTUtNS4yOSIvPjxwYXRoIGQ9Ik04LjAwMiA5Ljk5N2E1IDUgMCAxIDAgOC45IDIuMDIiLz48L3N2Zz4=",
  iconSize: [ICON_SIZE, ICON_SIZE],
});

function getCenter(mine: Coordinates, theirs: Coordinates): Coordinates {
  return [(mine[0] + theirs[0]) / 2, (mine[1] + theirs[1]) / 2];
}
