import { useEffect } from "react";
import gsap from "gsap";

export const LogoHeader = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      repeat: -1,
      yoyo: true,
    });

    tl.to(".path-indigo", {
      duration: 5,
      fill: "#615FFF",
      stroke: "none",
    });
  }, []);

  return (
    <div className="flex items-center justify-center gap-2">
      <svg
        viewBox="0 0 636 440"
        fill="#E5E5E5"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12.5 h-12.5"
      >
        <path
          d="M215.5 1C167.075 44.7387 140.925 75.2613 92.5 119L53.0001 255L176.5 136L215.5 1Z"
          stroke="transparent"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M305 168.5H168L44.83 285C31.2779 330.884 17.5945 377.403 1.00009 438L124 319.5L142.5 255H279.5L403 136L443.5 1L319 119L305 168.5Z"
          stroke="transparent"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          className="path-indigo"
          d="M351.342 319.656L227 438.5L274 285L393.5 168.5L351.342 319.656Z"
          stroke="transparent"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          className="path-indigo"
          d="M423 140.5L479 86.5H438L462 1H635L494 140.5L589 438.5L479 319.656L423 140.5Z"
          stroke="transparent"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>
      <span className="w-0.5 h-10 bg-indigo-500 rounded-full shadow shadow-indigo-300"></span>
      <h2 className="font-extrabold font-orbitron">HELDER RUIZ</h2>
    </div>
  );
};
