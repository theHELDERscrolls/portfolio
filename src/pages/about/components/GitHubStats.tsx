import { Svg } from "@/components";
import type { GitHubUserStats } from "@/types";

interface GitHubUserStatsProps {
  gitHubUserStats: GitHubUserStats;
}

export const GitHubStats = ({ gitHubUserStats }: GitHubUserStatsProps) => {
  const year = new Date().getFullYear();

  const stats = [
    {
      icon: "icon-commit",
      label: `Total Commits (${year}):`,
      value: gitHubUserStats.totalCommits,
    },
    {
      icon: "icon-pull-request",
      label: "Total PRs:",
      value: gitHubUserStats.totalPullRequests,
    },
    {
      icon: "icon-issue",
      label: "Total Issues:",
      value: gitHubUserStats.totalIssues,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:px-8 px-4 py-2 font-bold border h-50.5 border-amber-500/10 bg-amber-800/10 rounded-xl hover:shadow-[0_0_5px_#FFB900] transition-all duration-300 ease-in-out">
      <h3>
        <span className="text-amber-400">{gitHubUserStats.name}</span> GitHub
        Stats
      </h3>

      <div className="flex items-center justify-center flex-1 w-full gap-4 text-sm">
        <div className="flex flex-col items-center justify-center w-full gap-2">
          {stats.map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-2">
                <Svg iconId={icon} className="w-6 h-6 text-amber-400" />
                <p>{label}</p>
              </div>

              <span className="ml-4 text-amber-200">{value}</span>
            </div>
          ))}
        </div>

        <img
          src={gitHubUserStats.avatarUrl}
          alt={`${gitHubUserStats.name} profile image`}
          loading="lazy"
          className="hidden rounded-full h-25 w-25 aspect-square sm:block"
        />
      </div>
    </div>
  );
};
