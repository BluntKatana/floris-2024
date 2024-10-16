import strava from "strava-v3";

// configure strava
strava.config({
  access_token: process.env.STRAVA_ACCESS_TOKEN!,
  client_id: process.env.STRAVA_CLIENT_ID!,
  client_secret: process.env.STRAVA_CLIENT_SECRET!,
  redirect_uri: process.env.STRAVA_REDIRECT_URI!,
});

// get strava stats
export async function getStravaStats() {
  return await strava.athletes.stats({
    id: process.env.STRAVA_ATHLETE_ID!,
  });
}
