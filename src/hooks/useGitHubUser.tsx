import { GitHubApiService } from "@/api";
import type { GitHubUser } from "@/types";
import { useCallback, useEffect, useState } from "react";

export const useGitHubUser = (userName: string) => {
  const [gitHubUser, setGitHubUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHubUser = useCallback(async () => {
    try {
      setError(null);

      const saved = sessionStorage.getItem("github_user");

      if (saved) {
        setGitHubUser(JSON.parse(saved));
        setLoading(false);
        return;
      }

      const data = await GitHubApiService.getUserProfile(userName);

      if (!data) {
        setError("No user data avilable.");
        return;
      }

      setGitHubUser(data);

      sessionStorage.setItem("github_user", JSON.stringify(data));
    } catch (error) {
      setError("No user data avilable.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [userName]);

  useEffect(() => {
    fetchGitHubUser();
  }, [fetchGitHubUser]);

  return { gitHubUser, loading, error };
};
