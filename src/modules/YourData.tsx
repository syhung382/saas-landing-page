import Button from "../components/buton/Button";
import { IconArrowRightIcon } from "../icons";
import { Theme } from "../utils/constants";

const YourData = () => {
  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-40 flex flex-col lg:flex-row gap-20 lg:gap-4 items-center">
        <div className="2xl:w-[94%] xl:w-full lg:w-full md:w-[90%] mx-auto lg:hidden">
          <img
            src="/images/Element.png"
            alt="slider"
            className="w-full h-auto object-cover"
          />
        </div>
        <div
          className="2xl:w-full xl:w-[94%] lg:w-full flex flex-col text-center lg:text-left "
          style={{
            color: Theme.Secondary.DarkGray,
          }}
        >
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            100% your data
          </h2>
          <p className="text-lg mt-10">
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
          <div className="fit mt-16 mx-auto lg:mx-0 ">
            <Button
              title="Read more"
              icon={<IconArrowRightIcon width={14} />}
            />
          </div>
        </div>
        <div className="2xl:w-[94%] xl:w-full lg:w-full md:w-[90%] mx-auto hidden lg:block">
          <img
            src="/images/Element.png"
            alt="slider"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default YourData;
