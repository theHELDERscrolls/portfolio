import { OpenWeatherService } from "@/api";
import type { OpenWeather } from "@/types";
import { useCallback, useEffect, useState } from "react";

export const useOpenWeather = (lat: string, lon: string) => {
  const [weather, setWeather] = useState<OpenWeather | null>(null);
  const [loading, setLoaing] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async () => {
    try {
      setError(null);
      const data = await OpenWeatherService.getWeatherByCoords(lat, lon);

      if (!data) return null;

      setWeather(data);
    } catch (error) {
      setError("No data available.");
      console.error(error);
    } finally {
      setLoaing(false);
    }
  }, [lat, lon]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return { weather, loading, error };
};
