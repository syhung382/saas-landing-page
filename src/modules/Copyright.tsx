import {
  IconArrowDown,
  IconLogoFacebook,
  IconLogoLinkedin,
  IconLogoTwitter,
  IconNetwork,
} from "../icons";
import { Theme } from "../utils/constants";

const Copyright = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: Theme.Primary.DarkBlue,
      }}
    >
      <div
        className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-8 flex flex-col lg:flex-row gap-5 border-t border-gray-200 text-center md:text-left items-center md:items-start lg:items-center lg:justify-between "
        style={{
          color: Theme.Secondary.White,
        }}
      >
        <div className="flex flex-col md:flex-row gap-x-14 gap-y-5 justify-between w-full lg:w-fit">
          <div className="flex gap-1.5 items-center cursor-pointer w-fit mx-auto md:mx-0">
            <IconNetwork width={19} />
            <span className="text-[16px]">English</span>
            <IconArrowDown width={20} />
          </div>
          <span className="text-[16px] cursor-pointer">Terms & privacy</span>
          <span className="text-[16px] cursor-pointer">Security</span>
          <span className="text-[16px] cursor-pointer">Status</span>
          <span className="text-[16px] cursor-pointer">
            ©2021 Whitepace LLC.
          </span>
        </div>
        <div className="flex gap-8 items-center">
          <IconLogoFacebook height={17} />
          <IconLogoTwitter height={17} />
          <IconLogoLinkedin height={17} />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
