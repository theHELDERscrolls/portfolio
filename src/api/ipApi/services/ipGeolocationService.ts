import type { IPGeolocation } from "@/types";
import { IpGeolocationClient } from "../client";

export class IpGeolocationService {
  private static api = new IpGeolocationClient().instance;

  public static async getUserLocation(): Promise<IPGeolocation | undefined> {
    try {
      const response = await this.api.get("/ipgeo");

      return response.data;
    } catch (error) {
      console.error("Ip Geolocation error:", error);
    }
  }
}
