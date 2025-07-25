import Button from "../components/buton/Button";
import { IconArrowRightIcon } from "../icons";
import { Theme } from "../utils/constants";

const AppExtension = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: Theme.Primary.DarkBlue,
      }}
    >
      <div className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-40 flex flex-col lg:flex-row gap-20 lg:gap-4 items-center">
        <div className="xl:w-full lg:w-full w-[70%] mx-auto ">
          <img
            src="/images/Apps.png"
            alt="slider"
            className="w-full h-auto object-cover"
          />
        </div>
        <div
          className="2xl:w-[90%] xl:w-full lg:w-full flex flex-col text-center lg:text-left"
          style={{
            color: Theme.Secondary.White,
          }}
        >
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            Work with Your Favorite Apps Using whitepace
          </h2>
          <p className="text-lg mt-10">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>
          <div className="fit mt-16 mx-auto lg:mx-0 ">
            <Button
              title="Read more"
              icon={<IconArrowRightIcon width={14} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppExtension;
