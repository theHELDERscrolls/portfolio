import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

interface AppLoaderWrapperProps {
  children: React.ReactNode;
}

export const AppLoaderWrapper = ({ children }: AppLoaderWrapperProps) => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
      sessionStorage.setItem("visited", "true");
      setShowLoadingScreen(true);

      const timer = setTimeout(() => {
        setShowLoadingScreen(false);
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {children}

      {showLoadingScreen && (
        <div className="fixed inset-0 z-[9999]">
          <LoadingScreen />
        </div>
      )}
    </div>
  );
};
