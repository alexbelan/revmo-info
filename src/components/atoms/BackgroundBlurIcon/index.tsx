import React from "react";

interface BackgroundBlurIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const BackgroundBlurIcon: React.FC<BackgroundBlurIconProps> = ({
  width = 375,
  height = 503,
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 375 503"
      fill="none"
      className={className}
    >
      <g opacity="0.3" filter="url(#filter0_f_14_1417)">
        <circle cx="188" cy="237" r="86" fill="#7D9CFD" />
      </g>
      <defs>
        <filter
          id="filter0_f_14_1417"
          x="-78"
          y="-29"
          width="532"
          height="532"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="90"
            result="effect1_foregroundBlur_14_1417"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BackgroundBlurIcon;
