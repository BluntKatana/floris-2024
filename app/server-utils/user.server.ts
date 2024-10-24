import { headers } from "next/headers";
import { Coordinates } from "../features/about-grid/about-floris.constants";

export type UserInfo = {
  status?: "success" | "fail";
  lat?: number;
  lon?: number;
  country?: string;
  countryCode?: string;
  region?: string;
  regionName?: string;
  city?: string;
  query?: string;
};

async function retrieveUserIp() {
  let ip = headers().get("x-real-ip");

  const forwardedFor = headers().get("x-forwarded-for");
  if (!ip && forwardedFor) {
    ip = forwardedFor?.split(",").at(0) ?? null;
  }

  return ip;
}

async function retrieveUserInformation(
  ip: string | null
): Promise<UserInfo | "unknown"> {
  const ipUserInfoUrl =
    process.env.NODE_ENV === "development" || !ip
      ? "http://ip-api.com/json/"
      : `http://ip-api.com/json/${ip}`;

  const userInfo = await fetch(ipUserInfoUrl, {
    method: "GET",
    // cache it for 1 day
    headers: {
      "Cache-Control": "max-age=86400",
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      console.log("Error fetching country", err);
      return "unknown";
    });

  return userInfo;
}

export async function getUserInformation() {
  const ip = await retrieveUserIp();
  const userinfo = await retrieveUserInformation(ip);

  if (userinfo === "unknown") {
    return null;
  }

  return {
    ...userinfo,
    coords: getUserCoords(userinfo),
  };
}

export function getUserCoords(
  userinfo: UserInfo | "unknown"
): Coordinates | null {
  if (userinfo === "unknown") {
    return null;
  }

  if (userinfo.lat === undefined || userinfo.lon === undefined) {
    return null;
  }

  return [userinfo.lat, userinfo.lon];
}
