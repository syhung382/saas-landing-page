import type { SvgProp } from "../utils/interface";

const gmail = ({ ...props }: SvgProp) => {
  return (
    <svg
      {...props}
      viewBox="0 0 74 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_107_72831)">
        <path
          d="M64.4623 9.08154H9.97461V63.5692H64.4623V9.08154Z"
          fill="#ECEFF1"
        />
        <path
          d="M37.2207 42.0563L64.4646 63.5698V21.0967L37.2207 42.0563Z"
          fill="#CFD8DC"
        />
        <path
          d="M66.734 9.08154H64.4636L37.2198 30.5951L9.97594 9.08154H7.70562C3.94596 9.08154 0.894653 12.1329 0.894653 15.8925V56.7583C0.894653 60.5179 3.94596 63.5692 7.70562 63.5692H9.97594V21.0961L37.2198 42.0511L64.4636 21.0915V63.5692H66.734C70.4936 63.5692 73.5449 60.5179 73.5449 56.7583V15.8925C73.5449 12.1329 70.4936 9.08154 66.734 9.08154Z"
          fill="#F44336"
        />
      </g>
      <defs>
        <clipPath id="clip0_107_72831">
          <rect
            width="72.6503"
            height="72.6503"
            fill="white"
            transform="translate(0.894531)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default gmail;
