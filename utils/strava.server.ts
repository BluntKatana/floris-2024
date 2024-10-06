import { StravaAthletesStats } from "./strava.constants";

export async function getStravaAthleteData() {
  return await fetch(
    `https://www.strava.com/api/v3/athletes/${process.env.STRAVA_ATHLETE_ID}/stats`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`,
      },
    }
  )
    .then((res) => res.json() as Promise<StravaAthletesStats>)
    .catch((err) => {
      console.error(err);
      return null;
    });
}
