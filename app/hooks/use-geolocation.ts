"use client";

import { useState, useEffect } from "react";

type UseGeoLocationOptions = {
  country?: string | false;
  api?: string;
};

/**
 * Hook to get the country of a visitor from their IP address
 *
 *  @source https://github.com/TechToThePeople/react-ipgeolocation
 */
const useGeoLocation = (options: UseGeoLocationOptions = {}) => {
  const [country, setCountry] = useState(options.country);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const api = options.api || "http://api.country.is";

  useEffect(() => {
    let isCancelled = false;

    if (country || country === false) return;
    async function fetchAPI() {
      setIsLoading(true);
      await fetch(api, { method: "GET" })
        .then((res) => {
          if (!res.ok) {
            console.log(res);
            throw Error(res.statusText);
            return null;
          }
          return res.json();
        })
        .then((res) => {
          console.log(res);
          if (res && res.country && !isCancelled) setCountry(res.country);
        })
        .catch((err) => {
          console.log("Error fetching country", err);
          setError(err);
        })
        .finally(() => setIsLoading(false));
    }
    fetchAPI();
    return () => {
      isCancelled = true;
    };
  }, []);

  return { country, error, isLoading };
};

export default useGeoLocation;
