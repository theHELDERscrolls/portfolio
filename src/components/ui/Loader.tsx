import gsap from "gsap";
import { useEffect } from "react";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(DrawSVGPlugin);

interface LoaderProps {
  strokeColor?: string;
}

export const Loader = ({ strokeColor = "#E5E5E5" }: LoaderProps) => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(
      "svg path",
      {
        drawSVG: "0%",
        strokeWidth: 3,
        stroke: strokeColor,
      },
      { drawSVG: "100%", duration: 1 }
    );
  }, [strokeColor]);

  return (
    <div className="flex items-center justify-center">
      <svg
        viewBox="0 0 636 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-25 h-25"
      >
        <path
          d="M215.5 1C167.075 44.7387 140.925 75.2613 92.5 119L53.0001 255L176.5 136L215.5 1Z"
          stroke="black"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M305 168.5H168L44.83 285C31.2779 330.884 17.5945 377.403 1.00009 438L124 319.5L142.5 255H279.5L403 136L443.5 1L319 119L305 168.5Z"
          stroke="black"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M351.342 319.656L227 438.5L274 285L393.5 168.5L351.342 319.656Z"
          stroke="black"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M423 140.5L479 86.5H438L462 1H635L494 140.5L589 438.5L479 319.656L423 140.5Z"
          stroke="black"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
