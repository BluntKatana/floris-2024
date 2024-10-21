"use client";

import { Icon } from "leaflet";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Coordinates } from "./about-floris.constants";
import { useTheme } from "next-themes";
import { cn } from "@/utils/style";

interface MapProps {
  fromCoordinates: Coordinates;
  toCoordinates: Coordinates;
}

const ICON_SIZE = 36;

const Map = ({ fromCoordinates, toCoordinates }: MapProps) => {
  const { theme } = useTheme();
  return (
    <div className={cn("size-full", theme === "dark" && "leaflet-dark-mode")}>
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
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={fromCoordinates} icon={houseIcon} />
        <Marker position={toCoordinates} icon={goalIcon} />
        <Polyline positions={[fromCoordinates, toCoordinates]} color="black" />
      </MapContainer>
    </div>
  );
};

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

export default Map;
