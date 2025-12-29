import type { GitHubUser, GitHubUserStats } from "@/types";
import { GitHubApiClient } from "../client";

interface GitHubRepo {
  name: string;
  fork: boolean;
  owner: {
    login: string;
  };
}

export class GitHubApiService {
  private static api = new GitHubApiClient().instance;

  public static async getUserStats(
    userName: string
  ): Promise<GitHubUserStats | undefined> {
    try {
      // 1. Usuario
      const user = await this.getUserProfile(userName);
      if (!user) return;

      // 2. Repositorios
      const repos = await this.getUserRepos(userName);
      if (!repos) return;

      // 3. Filtramos forks (criterio personal)
      const personalRepos = repos.filter((repo) => !repo.fork);

      // 4. Estadísticas
      const totalCommits = await this.getTotalCommits(personalRepos, userName);

      const topLanguages = await this.getTopLanguages(personalRepos);

      const totalPullRequests = await this.getPullRequestsCount(userName);
      const totalIssues = await this.getIssuesCount(userName);

      // 5. Resultado final
      return {
        name: user.name,
        avatarUrl: user.avatar_url,
        profileUrl: user.html_url,

        totalCommits,
        totalPullRequests,
        totalIssues,

        topLanguages,
      };
    } catch (error) {
      console.error("GitHub API error (getUserStats):", error);
    }
  }

  private static async getUserProfile(
    userName: string
  ): Promise<GitHubUser | undefined> {
    try {
      const response = await this.api.get(`/users/${userName}`);
      return response.data;
    } catch (error) {
      console.error("GitHub API error (getUserProfile):", error);
    }
  }

  private static async getUserRepos(
    userName: string
  ): Promise<GitHubRepo[] | undefined> {
    try {
      const response = await this.api.get(`/users/${userName}/repos`, {
        params: { per_page: 100 },
      });
      return response.data;
    } catch (error) {
      console.error("GitHub API error (getUserRepos):", error);
    }
  }

  private static async getTotalCommits(
    repos: GitHubRepo[],
    userName: string
  ): Promise<number> {
    let totalCommits = 0;

    for (const repo of repos) {
      try {
        const response = await this.api.get(
          `/repos/${repo.owner.login}/${repo.name}/commits`,
          {
            params: {
              author: userName,
              per_page: 1,
            },
          }
        );

        const linkHeader: string | undefined = response.headers?.link;

        // Si no hay paginación, contamos lo que venga
        if (!linkHeader) {
          totalCommits += response.data.length;
          continue;
        }

        // Buscamos la última página
        const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
        totalCommits += match ? Number(match[1]) : response.data.length;
      } catch {
        // Si un repo falla, no rompe todo
        continue;
      }
    }

    return totalCommits;
  }

  private static async getTopLanguages(
    repos: GitHubRepo[]
  ): Promise<{ name: string; bytes: number }[]> {
    const languageMap: Record<string, number> = {};

    for (const repo of repos) {
      try {
        const response = await this.api.get(
          `/repos/${repo.owner.login}/${repo.name}/languages`
        );

        const languages = response.data;

        for (const languageName in languages) {
          const bytes = languages[languageName];
          languageMap[languageName] = (languageMap[languageName] ?? 0) + bytes;
        }
      } catch {
        continue;
      }
    }

    return Object.entries(languageMap)
      .map(([name, bytes]) => ({ name, bytes }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, 5);
  }

  private static async getPullRequestsCount(userName: string): Promise<number> {
    try {
      const response = await this.api.get(`/search/issues`, {
        params: {
          q: `author:${userName} type:pr`,
        },
      });

      return response.data.total_count;
    } catch {
      return 0;
    }
  }

  private static async getIssuesCount(userName: string): Promise<number> {
    try {
      const response = await this.api.get(`/search/issues`, {
        params: {
          q: `author:${userName} type:issue`,
        },
      });

      return response.data.total_count;
    } catch {
      return 0;
    }
  }
}
