import type { AxiosInstance } from "axios";
import axios from "axios";

const IP_API_BASE_URL = "https://ipapi.co";

export class IpApiClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: IP_API_BASE_URL,
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    });
  }

  public get instance(): AxiosInstance {
    return this.axiosInstance;
  }
}
