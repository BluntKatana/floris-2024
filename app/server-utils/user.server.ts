import { Coordinates } from "@/app/about-floris/about-floris.constants";
import { headers } from "next/headers";

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
    ip = forwardedFor?.split(",").at(0) ?? "Unknown";
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

  return userinfo;
}

export function getUserCoords(
  userinfo: UserInfo | "unknown"
): Coordinates | undefined {
  if (userinfo === "unknown") {
    return undefined;
  }

  if (userinfo.lat === undefined || userinfo.lon === undefined) {
    return undefined;
  }

  return [userinfo.lat, userinfo.lon];
}
