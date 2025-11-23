import type { AxiosInstance } from "axios";
import axios from "axios";

const QUOTES_API_NINJA_BASE_URL = "https://api.api-ninjas.com/v2";

export class QuotesApiNinjaClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: QUOTES_API_NINJA_BASE_URL,
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    });
  }

  public get instance(): AxiosInstance {
    return this.axiosInstance;
  }
}
