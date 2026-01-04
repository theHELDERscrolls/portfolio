import { IpGeolocationService } from "@/api";
import { useCallback, useEffect, useState } from "react";

const DEFAULT_COORDS = { lat: 37.9557275, lon: -3.49205561203722 };
const STORAGE_KEY = "user_coords";

type Coords = { lat: number; lon: number };

export const useGeolocation = () => {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const isDefaultCoords = (c: Coords) =>
    c.lat === DEFAULT_COORDS.lat && c.lon === DEFAULT_COORDS.lon;

  const fetchUserLocation = useCallback(async () => {
    try {
      setError(null);

      // 1. Intentar leer del sessionStorage
      const saved = sessionStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed: Coords = JSON.parse(saved);

        // Si no son las coordenadas por defecto, usamos cache
        if (!isDefaultCoords(parsed)) {
          setCoords(parsed);
          setLoading(false);
          return;
        }
      }

      // 2. Llamar a la API
      const data = await IpGeolocationService.getUserLocation();

      if (!data) {
        setError("No data available.");
        setCoords(DEFAULT_COORDS);
        return;
      }

      const realCoords: Coords = {
        lat: Number(data.location.latitude),
        lon: Number(data.location.longitude),
      };

      setCoords(realCoords);

      // Guardar SOLO si no es la ubicación por defecto
      if (!isDefaultCoords(realCoords)) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(realCoords));
      }
    } catch (err) {
      console.error(err);
      setError("No data available.");
      setCoords(DEFAULT_COORDS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserLocation();
  }, [fetchUserLocation]);

  return { coords, loading, error };
};
