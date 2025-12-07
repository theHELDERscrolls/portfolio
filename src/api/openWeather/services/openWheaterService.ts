import type { OpenWeather } from "@/types";
import { OpenWeatherClient } from "../client";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export class OpenWeatherService {
  private static api = new OpenWeatherClient().instance;

  public static async getWeatherByCoords(
    lat: string,
    lon: string
  ): Promise<OpenWeather | undefined> {
    if (!API_KEY) {
      console.error("Missing OpenWeather API key (VITE_OPEN_WEATHER_API_KEY)");
      return;
    }

    try {
      const response = await this.api.get("/weather", {
        params: {
          lat: lat,
          lon: lon,
          units: "metric",
          appid: API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Weather API error:", error);
    }
  }
}
