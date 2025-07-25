import type { SvgProp } from "../utils/interface";

const windownLogo = ({ ...props }: SvgProp) => {
  return (
    <svg
      {...props}
      viewBox="0 0 73 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_107_72896)">
        <path
          d="M0.142487 40.3323V61.4938L30.3537 65.832V40.3323H0.142487Z"
          fill="currentColor"
        />
        <path
          d="M30.3537 7.82776L0.142487 12.166V33.3275H30.3537V7.82776Z"
          fill="currentColor"
        />
        <path
          d="M72.7924 33.3267V1.37512L37.3651 6.45993V33.3267H72.7924Z"
          fill="currentColor"
        />
        <path
          d="M37.3651 67.1989L72.7924 72.2787V40.3322H37.3651V67.1989Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_107_72896">
          <rect
            width="72.6503"
            height="72.6503"
            fill="white"
            transform="translate(0.14444 0.503052)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default windownLogo;
