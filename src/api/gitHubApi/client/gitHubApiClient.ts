import type { AxiosInstance } from "axios";
import axios from "axios";

const GITHUB_BASE_URL = "https://api.github.com";

export class GitHubApiClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: GITHUB_BASE_URL,
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    });
  }

  public get instance(): AxiosInstance {
    return this.axiosInstance;
  }
}
