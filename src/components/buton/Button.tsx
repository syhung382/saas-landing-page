import { Theme } from "../../utils/constants";
import type { ButtonProps } from "../../utils/interface";

const Button = ({ type, icon, title }: ButtonProps) => {
  return (
    <button
      type="button"
      className="px-6 py-4 rounded-md cursor-pointer flex gap-2 items-center"
      style={{
        backgroundColor:
          type === "Secondary"
            ? Theme.Secondary.Yellow
            : Theme.Primary.LightBlue,
        color:
          type === "Secondary" ? Theme.Primary.DarkBlue : Theme.Secondary.White,
        fontSize: 18,
      }}
    >
      {title} {icon}
    </button>
  );
};

export default Button;
