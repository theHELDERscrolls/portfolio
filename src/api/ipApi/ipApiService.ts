import type { IpApi } from "@/types";
import { IpApiClient } from "./ipApiClient";

export class IpApiService {
  private static api = new IpApiClient().instance;

  public static async getUserLocation(): Promise<IpApi | undefined> {
    try {
      const response = await this.api.get("/json");

      return response.data;
    } catch (error) {
      console.error("Ip API error:", error);
    }
  }
}
