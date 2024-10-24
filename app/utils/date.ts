import { formatDistance as formatDistanceDateFNS } from "date-fns";

export function formatPublishedAt(date: string): Date {
  return new Date(`${date}T00:00:00`);
}

export function formatDistance(date: Date) {
  return formatDistanceDateFNS(date, new Date(), { addSuffix: true });
}
