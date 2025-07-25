import Button from "../components/buton/Button";
import { IconArrowRightIcon } from "../icons";
import { Theme } from "../utils/constants";

const WorkManagerment = () => {
  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-40 flex flex-col gap-20">
        <div className="w-full flex flex-col lg:flex-row gap-20 lg:gap-4 items-center">
          <div
            className="2xl:w-full xl:w-[94%] lg:w-full flex flex-col text-center lg:text-left"
            style={{
              color: Theme.Secondary.DarkGray,
            }}
          >
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
              Get More Done with whitepace
            </h2>
            <p className="text-lg mt-10">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <div className="fit mt-16 mx-auto lg:mx-0 ">
              <Button
                title="Try Whitepaper free"
                icon={<IconArrowRightIcon width={14} />}
              />
            </div>
          </div>
          <div className="2xl:w-[94%] xl:w-full lg:w-full md:w-[90%] mx-auto">
            <img
              src="/images/slider/slider-top.png"
              alt="slider"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-20 lg:gap-4 items-center">
          <div className="2xl:w-[94%] xl:w-full lg:w-full md:w-[90%] mx-auto hidden lg:block">
            <img
              src="/images/slider/work-together-image.png"
              alt="slider"
              className="w-full h-auto object-cover"
            />
          </div>
          <div
            className="2xl:w-full xl:w-[94%] lg:w-full flex flex-col text-center lg:text-left pl-10"
            style={{
              color: Theme.Secondary.DarkGray,
            }}
          >
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
              Work together
            </h2>
            <p className="text-lg mt-10">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <div className="fit mt-16 mx-auto lg:mx-0 ">
              <Button
                title="Try it now"
                icon={<IconArrowRightIcon width={14} />}
              />
            </div>
          </div>
          <div className="2xl:w-[94%] xl:w-full lg:w-full md:w-[90%] mx-auto lg:hidden">
            <img
              src="/images/slider/work-together-image.png"
              alt="slider"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkManagerment;
