import { IpApiService } from "@/api";
import { useEffect, useState } from "react";

export const useUserLocation = () => {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserLocation = async () => {
    try {
      const data = await IpApiService.getUserLocation();

      if (!data) return null;

      setCoords({ lat: data.latitude, lon: data.longitude });
    } catch (error) {
      setError("No data available.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  return { coords, loading, error };
};
