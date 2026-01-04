import { Svg } from "@/components";
import { useEffect, useState } from "react";

const USERNAME = "theHELDERscrolls";
const STORAGE_KEY = "lastGithubRepo";

export const GitHubLastRepoCard = () => {
  const [repoName, setRepoName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchLastRepo = async () => {
    try {
      const cachedRepo = sessionStorage.getItem(STORAGE_KEY);

      if (cachedRepo) {
        setRepoName(cachedRepo);
        return;
      }

      const res = await fetch(
        `https://api.github.com/users/${USERNAME}/repos?sort=pushed&per_page=1`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch GitHub repos");
      }

      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        const name = data[0].name;
        setRepoName(name);
        sessionStorage.setItem(STORAGE_KEY, name);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLastRepo();
  }, []);

  /* ===== Skeleton ===== */
  if (loading) {
    return (
      <div className="max-w-[400px] w-full h-[120px] rounded-xl border border-amber-500/10 bg-amber-800/10 animate-pulse" />
    );
  }

  /* ===== Error ===== */
  if (!repoName) {
    return (
      <div className="max-w-[400px] w-full h-[120px] rounded-xl border border-red-500/10 bg-red-800/10 flex items-center justify-center text-sm text-red-300">
        No repository data available
      </div>
    );
  }

  const repoUrl = `https://github.com/${USERNAME}/${repoName}`;

  /* ===== Final card ===== */
  return (
    <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group">
      <img
        src={`https://github-readme-stats-iota-ten-69.vercel.app/api/pin/?username=${USERNAME}&repo=${repoName}&title_color=FFB900&text_color=F5F5F5&icon_color=FFB900&border_color=FFB9001A&bg_color=973C001A&border_radius=12`}
        alt={`Last GitHub repository: ${repoName}`}
        loading="lazy"
        className="transition-all duration-300 ease-in-out border-2 border-transparent group-hover:border-amber-400 backdrop-blur-xs rounded-xl"
      />

      <Svg iconId="icon-share" className="absolute w-6 h-6 transition-all duration-300 ease-in-out sm:w-8 sm:h-8 sm:opacity-0 sm:translate-x-15 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 top-4 right-4 text-amber-400"/>
    </a>
  );
};
