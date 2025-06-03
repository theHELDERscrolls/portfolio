import { useEffect, useState } from "react";

/**
 * Custom React hook that listens to a CSS media query and returns a boolean
 * indicating whether the query currently matches the user's viewport.
 *
 * This is useful for rendering different components or applying logic
 * based on screen size, orientation, resolution, etc.
 *
 * @param query - A valid CSS media query string (e.g., "(max-width: 550px)")
 * @returns A boolean value: `true` if the media query matches, otherwise `false`
 */

const useMediaQuery = (query: string): boolean => {
  // State to keep track of whether the media query currently matches
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a MediaQueryList object based on the provided query
    const mediaQuery = window.matchMedia(query);

    // This function will be called whenever the media query's match status changes
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches); // `e.matches` is true if the query matches, false otherwise
    };

    // Set the initial match status when the hook first runs
    setMatches(mediaQuery.matches);

    // Add an event listener to track changes to the media query match status
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup function to remove the event listener when the component unmounts
    // or if the `query` changes (triggering a re-run of the effect)
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]); // Re-run the effect only if the query string changes

  // Return the current match status
  return matches;
};

export default useMediaQuery;

/**
 * `window.matchMedia(query)` returns a MediaQueryList object with:
 *
 * - `.matches`: boolean indicating whether the query currently matches the viewport.
 * - `.media`: the media query string itself.
 *
 * You can listen to changes with:
 * - `addEventListener("change", callback)`
 *
 * This allows responsive logic in JavaScript, similar to CSS media queries.
 */
