import { Coordinates } from "../features/about-grid/about-floris.constants";

export function generateRandomCoordinate(
  lat: number,
  lon: number,
  distanceInKm: number
) {
  const earthRadius = 6371; // Earth radius in kilometers

  // Convert latitude and longitude from degrees to radians
  const latInRad = (lat * Math.PI) / 180;
  const lonInRad = (lon * Math.PI) / 180;

  // Generate a random bearing (direction in radians)
  const bearing = Math.random() * 2 * Math.PI;

  // Convert distance to angular distance in radians
  const angularDistance = distanceInKm / earthRadius;

  // Calculate new latitude in radians
  const newLatInRad = Math.asin(
    Math.sin(latInRad) * Math.cos(angularDistance) +
      Math.cos(latInRad) * Math.sin(angularDistance) * Math.cos(bearing)
  );

  // Calculate new longitude in radians
  const newLonInRad =
    lonInRad +
    Math.atan2(
      Math.sin(bearing) * Math.sin(angularDistance) * Math.cos(latInRad),
      Math.cos(angularDistance) - Math.sin(latInRad) * Math.sin(newLatInRad)
    );

  // Convert new latitude and longitude back to degrees
  const newLat = (newLatInRad * 180) / Math.PI;
  const newLon = (newLonInRad * 180) / Math.PI;

  return { latitude: newLat, longitude: newLon };
}

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

  const startLatRad = (startlat * Math.PI) / 180;
  const startLongRad = (startlong * Math.PI) / 180;

  // Convert all latitudes and longitudes to radians.
  const radiusEarth = 6378.796924; // km

  // Convert maximum distance to radians.
  const maxdistRad = maxdist / radiusEarth;

  // Calculates the distance to the new point.
  const dist = Math.acos(1 * (Math.cos(maxdistRad) - 1) + 1);

  // Choose a random rotation around the starting point.
  const rotationRand = Math.random();
  const brg = 2 * Math.PI * rotationRand;

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
