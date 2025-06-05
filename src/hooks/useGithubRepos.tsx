import { useEffect, useState } from "react";

/**
 * Custom hook to fetch the number of public GitHub repositories
 * for a given username.
 *
 * @param {string} username - GitHub username to fetch repositories for.
 * @returns {{
 *   repos: number | null,    // Number of repositories (null if not loaded or on error)
 *   loading: boolean,        // Whether the data is currently being fetched
 *   error: string | null     // Error message if fetch fails, null otherwise
 * }}
 *
 * @example
 * const { repos, loading, error } = useGithubRepos('PepePerez');
 */

const useGithubRepos = (username: string) => {
  // Holds the number of repositories
  const [repos, setRepos] = useState<number | null>(null);

  // Indicates if the fetch is in progress
  const [loading, setLoading] = useState<boolean>(true);

  // Stores error messages, if any
  const [error, setError] = useState<string | null>(null);

  // Effect that runs when the username changes
  useEffect(() => {
    // Function to fetch repository data
    const fetchRepos = async () => {
      try {
        setLoading(true); // Start loading
        setError(null); // Reset previous errors

        // Fetch user's public repositories from GitHub API
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );

        // Check if response is not OK (e.g., 404 or 500)
        if (!res.ok) {
          throw new Error(`GitHub API returned ${res.status}`);
        }

        // Parse the response as JSON
        const data = await res.json();

        // Store the number of repositories
        setRepos(data.length);
      } catch (error) {
        // Log and store error
        console.error("Error fetching repos:", error);
        setError("Repos not found.");
        setRepos(null);
      } finally {
        // Stop loading regardless of success or failure
        setLoading(false);
      }
    };

    // Trigger the fetch
    fetchRepos();
  }, [username]);

  // Return the current state of the fetch
  return { repos, loading, error };
};

export default useGithubRepos;
