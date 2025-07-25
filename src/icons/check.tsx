import type { SvgProp } from "../utils/interface";

const check = ({ ...props }: SvgProp) => {
  return (
    <svg
      {...props}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.4178 35.6788V39.0207C75.4134 46.854 72.8769 54.4759 68.1867 60.7498C63.4965 67.0237 56.9039 71.6134 49.3922 73.8344C41.8804 76.0554 33.8519 75.7886 26.5041 73.074C19.1563 70.3594 12.8829 65.3423 8.61941 58.7709C4.35595 52.1996 2.33092 44.4261 2.84632 36.6099C3.36172 28.7936 6.38994 21.3534 11.4794 15.3988C16.5688 9.44415 23.4467 5.29423 31.0873 3.56793C38.728 1.84163 46.7219 2.63144 53.877 5.81956"
        stroke="currentColor"
        strokeWidth="4.84335"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M75.418 9.95996L39.0928 46.3214L28.1953 35.4239"
        stroke="currentColor"
        strokeWidth="4.84335"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default check;
