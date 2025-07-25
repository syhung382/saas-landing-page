import type { SvgProp } from "../utils/interface";

const arrowRight = ({ ...props }: SvgProp) => {
  return (
    <svg
      {...props}
      viewBox="0 0 243 242"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_107_72928)">
        <circle cx="121.382" cy="112" r="36.3251" fill="#E6F1FE" />
      </g>
      <path
        d="M114.117 98.3201L128.464 112.668L114.117 127.015"
        stroke="#4F9CF9"
        strokeWidth="3.63251"
        strokeLinecap="square"
      />
      <defs>
        <filter
          id="filter0_d_107_72928"
          x="0.297989"
          y="0.602856"
          width="242.168"
          height="242.167"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="36.3251"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_107_72928"
          />
          <feOffset dy="9.6867" />
          <feGaussianBlur stdDeviation="60.5419" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_107_72928"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_107_72928"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default arrowRight;
