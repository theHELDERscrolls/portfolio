import type { AxiosInstance } from "axios";
import axios from "axios";

const OPENWEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";

export class OpenWeatherClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: OPENWEATHER_BASE_URL,
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    });
  }

  public get instance(): AxiosInstance {
    return this.axiosInstance;
  }
}
