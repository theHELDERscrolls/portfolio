import { useEffect, useState } from "react";
import { LoadingPage } from "../loading";

export const HomePage = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
      sessionStorage.setItem("visited", "true");
      setShowLoading(true);

      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative w-full h-dvh overflow-hidden">
      {showLoading && (
        <div className="absolute inset-0 z-50">
          <LoadingPage />
        </div>
      )}

      <div className="flex items-center justify-center w-full h-dvh bg-neutral-950 transition-opacity duration-700">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4sZBDVtneodnD0VXF1XcGOWVYuIJ5bmCqQ&s"
          alt="meme"
        />
      </div>
    </div>
  );
};
