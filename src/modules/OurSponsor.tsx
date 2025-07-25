import {
  IconLogoApple,
  IconLogoGoogle,
  IconLogoMicrosoft,
  IconSlack,
} from "../icons";

const OurSponsor = () => {
  return (
    <div className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-40 items-center">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-center">
        Our sponsors
      </h1>
      <div className="w-full mt-24 flex flex-col gap-y-24 lg:flex-row items-center justify-between">
        <div className="w-fit">
          <IconLogoApple height={71} />
        </div>
        <div className="flex gap-5 items-center w-fit">
          <IconLogoMicrosoft height={71} />
          <span className="font-semibold text-3xl text-gray-700">
            Microsoft
          </span>
        </div>
        <div className="flex gap-5 items-center w-fit">
          <IconSlack height={71} />
          <span className="font-semibold text-3xl text-gray-700">Slack</span>
        </div>
        <div className="w-fit">
          <IconLogoGoogle height={71} />
        </div>
      </div>
    </div>
  );
};

export default OurSponsor;
