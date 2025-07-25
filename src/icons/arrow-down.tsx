import type { SvgProp } from "../utils/interface";

const arrowDown = ({ ...props }: SvgProp) => {
  return (
    <svg
      {...props}
      viewBox="0 0 25 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.80475 1.41846L12.7023 11.1052L23.5998 1.41846"
        stroke="currentColor"
        strokeWidth="2.42168"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default arrowDown;
