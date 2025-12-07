import type { GitHubUser } from "@/types";
import { GitHubApiClient } from "../client";

export class GitHubApiService {
  private static api = new GitHubApiClient().instance;

  public static async getUserProfile(
    userName: string
  ): Promise<GitHubUser | undefined> {
    try {
      const response = await this.api.get(`/users/${userName}`);

      return response.data;
    } catch (error) {
      console.error("GitHub API error:", error);
    }
  }
}
