import type { SvgProp } from "../utils/interface";

const arrowRightIcon = ({ ...props }: SvgProp) => {
  return (
    <svg
      {...props}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66034 13.9216H25.8771"
        stroke="currentColor"
        strokeWidth="2.42168"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7694 1.81335L25.8778 13.9217L13.7694 26.0301"
        stroke="CurrentColor"
        strokeWidth="2.42168"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default arrowRightIcon;
