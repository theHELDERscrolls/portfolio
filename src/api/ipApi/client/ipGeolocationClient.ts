import type { AxiosInstance } from "axios";
import axios from "axios";

const IP_GEOLOCATION_BASE_URL = "https://api.ipgeolocation.io/v2";
const API_KEY = import.meta.env.VITE_IP_GEOLOCATION;

export class IpGeolocationClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: IP_GEOLOCATION_BASE_URL,
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
      params: {
        apiKey: API_KEY,
      },
    });
  }

  public get instance(): AxiosInstance {
    return this.axiosInstance;
  }
}
