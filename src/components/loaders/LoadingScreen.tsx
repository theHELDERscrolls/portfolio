import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(DrawSVGPlugin);

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen = ({ onFinish }: LoadingScreenProps) => {
  const firstScreenRef = useRef<HTMLDivElement>(null);
  const secondScreenRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !firstScreenRef.current || !secondScreenRef.current)
      return;

    const paths = svgRef.current.querySelectorAll("path");

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
    });

    // Dibuja el logo
    tl.fromTo(
      paths,
      { drawSVG: "0%", opacity: 0, strokeWidth: 6, stroke: "#E5E5E5" },
      { drawSVG: "100%", opacity: 1, duration: 3, stagger: 0.2 }
    );

    // Cambia color y añade glow
    tl.to(
      Array.from(paths).slice(2),
      {
        duration: 1,
        stroke: "#615FFF",
        filter: "drop-shadow(0px 0px 10px #7C86FF)",
      },
      "+=0.3"
    );

    // Desplaza first screen hacia arriba
    tl.to(firstScreenRef.current, {
      y: "-100%",
      duration: 1.5,
      ease: "power4.inOut",
    });

    // Desplaza second screen hacia arriba y termina loader
    tl.to(
      secondScreenRef.current,
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
        ref={firstScreenRef}
        className="absolute inset-0 z-20 flex items-center justify-center bg-neutral-950"
      >
        <svg
          ref={svgRef}
          width="636"
          height="440"
          viewBox="0 0 636 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:max-h-50 max-h-25"
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
        ref={secondScreenRef}
        className="absolute inset-0 z-10 flex items-center justify-center bg-indigo-900"
      ></div>
    </div>
  );
};
