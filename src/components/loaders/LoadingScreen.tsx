import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(DrawSVGPlugin);

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen = ({ onFinish }: LoadingScreenProps) => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
    });

    tl.fromTo(
      "svg path",
      {
        drawSVG: "0%",
        strokeWidth: 6,
        stroke: "#E5E5E5",
        opacity: 0,
      },
      { drawSVG: "100%", duration: 3, stagger: 0.2, opacity: 1 }
    );

    tl.to("svg path:nth-child(n+3)", {
      duration: 1,
      stroke: "#615FFF",
      filter: "drop-shadow(0px 0px 10px #7C86FF)",
    });

    tl.to("#first-screen", { y: "-100%", duration: 1.5, ease: "power4.inOut" });

    tl.to(
      "#second-screen",
      {
        y: "-100%",
        duration: 1.5,
        ease: "power4.inOut",
        onComplete: () => {
          sessionStorage.setItem("hasSeenLoaderScreen", "true");
          onFinish();
        },
      },
      "-=1.4"
    );
  }, [onFinish]);

  return (
    <div className="relative w-full h-dvh overflow-hidden">
      {/* FIRST SCREEN */}
      <div
        id="first-screen"
        className="absolute inset-0 z-20 flex items-center justify-center bg-neutral-950"
      >
        <svg
          width="636"
          height="440"
          viewBox="0 0 636 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-h-50"
        >
          <path
            d="M215.5 1C167.075 44.7387 140.925 75.2613 92.5 119L53.0001 255L176.5 136L215.5 1Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M305 168.5H168L44.83 285C31.2779 330.884 17.5945 377.403 1.00009 438L124 319.5L142.5 255H279.5L403 136L443.5 1L319 119L305 168.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M351.342 319.656L227 438.5L274 285L393.5 168.5L351.342 319.656Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M423 140.5L479 86.5H438L462 1H635L494 140.5L589 438.5L479 319.656L423 140.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* SECOND SCREEN */}
      <div
        id="second-screen"
        className="absolute inset-0 z-10 flex items-center justify-center bg-indigo-900"
      ></div>
    </div>
  );
};
