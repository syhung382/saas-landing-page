import Button from "../components/buton/Button";
import { IconArrowRightIcon } from "../icons";
import { Theme } from "../utils/constants";

const CustomExtension = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: Theme.Primary.DarkBlue,
      }}
    >
      <div className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-40 flex flex-col lg:flex-row gap-20 lg:gap-4 items-center">
        <div
          className="2xl:w-[90%] xl:w-full lg:w-full flex flex-col text-center lg:text-left"
          style={{
            color: Theme.Secondary.White,
          }}
        >
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            Use as Extension
          </h2>
          <p className="text-lg mt-10">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <div className="fit mt-16 mx-auto lg:mx-0 ">
            <Button title="Let's Go" icon={<IconArrowRightIcon width={14} />} />
          </div>
        </div>
        <div className="xl:w-full lg:w-full md:w-[90%] mx-auto">
          <img
            src="/images/slider/slider-top.png"
            alt="slider"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomExtension;
