import type { SvgProp } from "../utils/interface";

const quote = ({ ...props }: SvgProp) => {
  return (
    <svg
      {...props}
      viewBox="0 0 73 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M72.9615 11.4536L70.6308 0.736816C53.8491 1.50558 42.2162 8.48788 42.2162 29.0215V52.6567H71.5343V22.9508H60.4308C60.431 16.3622 64.5649 12.487 72.9615 11.4536Z"
        fill="currentColor"
      />
      <path
        d="M31.0559 11.4544L28.7252 0.737671C11.9435 1.50643 0.310547 8.48893 0.310547 29.0225V52.6577H29.6299V22.9516H18.5194C18.5194 16.363 22.6533 12.4879 31.0559 11.4544Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default quote;
