import { Coordinates } from "@/components/about-grid/about-floris.constants";

/**
 * Generate a random latitude and longitude within a
 * certain distance from a given point.
 *
 * @param startlat The latitude of the starting point.
 * @param startlong The longitude of the starting point.
 * @param maxdist The maximum distance from the starting point in kilometers.
 *
 * @source http://www.geomidpoint.com/random/calculation.html
 */
export function generateRandomCoordinates(
  startCoordinates: Coordinates,
  maxdist: number
): Coordinates {
  const [startlat, startlong] = startCoordinates;
  console.log(startlat, startlong);

  const startLatRad = (startlat * Math.PI) / 180;
  const startLongRad = (startlong * Math.PI) / 180;

  const rand1 = Math.random();
  const rand2 = Math.random();

  // Convert all latitudes and longitudes to radians.
  const radiusEarth = 6372.796924; // km

  // Convert maximum distance to radians.
  const maxdistRad = maxdist / radiusEarth;

  const dist = Math.acos(rand1 * (Math.cos(maxdistRad) - 1) + 1);

  const brg = 2 * Math.PI * rand2;

  const lat = Math.asin(
    Math.sin(startLatRad) * Math.cos(dist) +
      Math.cos(startLatRad) * Math.sin(dist) * Math.cos(brg)
  );
  let lon =
    startLongRad +
    Math.atan2(
      Math.sin(brg) * Math.sin(dist) * Math.cos(startLatRad),
      Math.cos(dist) - Math.sin(startLatRad) * Math.sin(lat)
    );

  if (lon < -Math.PI) {
    lon = lon + 2 * Math.PI;
  }

  if (lon > Math.PI) {
    lon = lon - 2 * Math.PI;
  }

  const latDeg = (lat * 180) / Math.PI;
  const lonDeg = (lon * 180) / Math.PI;

  return [latDeg, lonDeg];
}
