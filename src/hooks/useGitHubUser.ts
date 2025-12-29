import { GitHubApiService } from "@/api";
import type { GitHubUserStats } from "@/types";
import { useCallback, useEffect, useState } from "react";

const SESSION_STORAGE_KEY = "github_user_stats";

export const useGitHubUserStats = (userName: string) => {
  const [stats, setStats] = useState<GitHubUserStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHubStats = useCallback(async () => {
    try {
      setError(null);

      // 1. Intentamos recuperar de Session Storage
      const saved = sessionStorage.getItem(SESSION_STORAGE_KEY);

      if (saved) {
        setStats(JSON.parse(saved));
        setLoading(false);
        return;
      }

      // 2. Llamada única al servicio
      const data = await GitHubApiService.getUserStats(userName);

      if (!data) {
        setError("No GitHub stats available.");
        return;
      }

      // 3. Guardamos en estado y en sesión
      setStats(data);
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error(error);
      setError("No GitHub stats available.");
    } finally {
      setLoading(false);
    }
  }, [userName]);

  useEffect(() => {
    fetchGitHubStats();
  }, [fetchGitHubStats]);

  return { stats, loading, error };
};
