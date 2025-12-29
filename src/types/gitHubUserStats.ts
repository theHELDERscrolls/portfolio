import * as z from "zod";

export const GitHubUserStatsSchema = z.object({
  name: z.string(),
  avatarUrl: z.string(),
  profileUrl: z.string(),

  totalCommits: z.number().int().nonnegative(),
  totalPullRequests: z.number().int().nonnegative(),
  totalIssues: z.number().int().nonnegative(),

  topLanguages: z.array(
    z.object({
      name: z.string(),
      bytes: z.number().int().nonnegative(),
    })
  ),
});

export type GitHubUserStats = z.infer<typeof GitHubUserStatsSchema>;
