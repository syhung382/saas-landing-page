import type { SvgProp } from "../utils/interface";

const menu = ({ ...props }: SvgProp) => {
  return (
    <svg
      {...props}
      viewBox="0 0 42 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2="42" y2="1" stroke="white" strokeWidth="2" />
      <line y1="13" x2="42" y2="13" stroke="white" strokeWidth="2" />
      <line y1="25" x2="42" y2="25" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default menu;
