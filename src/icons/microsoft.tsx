import type { SvgProp } from "../utils/interface";

const microsoft = ({ ...props }: SvgProp) => {
  return (
    <svg
      {...props}
      viewBox="0 0 62 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.7617 30.1819H0.647125V0.736328H29.7617V30.1819Z"
        fill="#F1511B"
      />
      <path
        d="M61.9075 30.1811H32.7935V0.735596H61.9075V30.1811Z"
        fill="#80CC28"
      />
      <path
        d="M29.7609 62.7038H0.647125V33.2585H29.7609V62.7038Z"
        fill="#00ADEF"
      />
      <path
        d="M61.9075 62.7038H32.7935V33.2585H61.9075V62.7038Z"
        fill="#FBBC09"
      />
    </svg>
  );
};

export default microsoft;
