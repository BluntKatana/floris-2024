import { UserInfo } from "@/app/utils/user.server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  let ip = headers().get("x-real-ip");

  const forwardedFor = headers().get("x-forwarded-for");
  if (!ip && forwardedFor) {
    ip = forwardedFor?.split(",").at(0) ?? "Unknown";
  }

  const ipUserInfoUrl =
    process.env.NODE_ENV === "development" || !ip
      ? "http://ip-api.com/json/"
      : `http://ip-api.com/json/${ip}`;

  const userInfo = await fetch(ipUserInfoUrl, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res as UserInfo)
    .catch((err) => {
      console.log("Error fetching country", err);
      return "unknown" as const;
    });

  console.log(userInfo);

  return NextResponse.json(userInfo);
}

export type ApiUserInformationData = Awaited<ReturnType<typeof GET>>;
