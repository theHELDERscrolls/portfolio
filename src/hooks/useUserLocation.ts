import { IpApiService } from "@/api";
import { useCallback, useEffect, useState } from "react";

const DEFAULT_COORDS = { lat: 37.9557275, lon: -3.49205561203722 }; 
const STORAGE_KEY = "user_coords";

export const useUserLocation = () => {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const isDefaultCoords = (c: { lat: number; lon: number }) =>
    c.lat === DEFAULT_COORDS.lat && c.lon === DEFAULT_COORDS.lon;

  const fetchUserLocation = useCallback(async () => {
    try {
      setError(null);

      // 1. Intentar leer del sessionStorage
      const saved = sessionStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        // Si lo guardado NO es la ubicación por defecto:
        // → usarla y no llamar a la API
        if (!isDefaultCoords(parsed)) {
          setCoords(parsed);
          setLoading(false);
          return;
        }
        // Si es la ubicacion por defecto, ignoramos y seguimos para reintentar obtener la real
      }

      // 2. Llamar a la API si:
      // - No hay nada en storage
      // - O lo que hay es la ubicación por defecto
      const data = await IpApiService.getUserLocation();

      if (!data) {
        setError("No data available.");

        // Si falla → usar la ubicación por defecto (pero no guardarla)
        setCoords(DEFAULT_COORDS);
        return;
      }

      const realCoords = { lat: data.latitude, lon: data.longitude };
      setCoords(realCoords);

      // Guardar SOLO SI NO ES LA UBICACIÓN POR DEFECTO
      if (!isDefaultCoords(realCoords)) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(realCoords));
      }
    } catch (error) {
      console.error(error);
      setError("No data available.");

      // Fallback: ubicación por defecto (pero NO guardar)
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
