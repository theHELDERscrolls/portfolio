import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

interface AppLoaderWrapperProps {
  children: React.ReactNode;
}

export const AppLoaderWrapper = ({ children }: AppLoaderWrapperProps) => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
      sessionStorage.setItem("visited", "true");
      setShowLoadingScreen(true);
    } else {
      setLoaderFinished(true);
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {loaderFinished && children}

      {showLoadingScreen && (
        <div className="fixed inset-0 z-[9999]">
          <LoadingScreen
            onFinish={() => {
              setShowLoadingScreen(false);
              setLoaderFinished(true);
            }}
          />
        </div>
      )}
    </div>
  );
};
