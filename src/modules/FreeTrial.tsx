import Button from "../components/buton/Button";
import {
  IconArrowRightIcon,
  IconLogoAndroid,
  IconLogoApple,
  IconLogoWindown,
} from "../icons";
import { Theme } from "../utils/constants";

const FreeTrial = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: Theme.Primary.DarkBlue,
      }}
    >
      <div
        className="w-full max-w-[610px] px-4 md:px-5 lg:px-8 2xl:px-56 py-40  lg:mx-auto xl:text-center lg:text-center md:text-left md:max-w-[60vw] "
        style={{
          color: Theme.Secondary.White,
        }}
      >
        <h1 className="text-4xl md:text-[54px] lg:text-6xl xl:text-7xl font-bold">
          Try Whitepace today
        </h1>
        <p className="text-lg mt-6 text-left lg:text-center">
          Get started for free. Add your whole team as your needs grow.
        </p>
        <div className="md:mx-0 lg:mx-auto mt-10 w-fit">
          <Button
            title="Try Taskey free"
            icon={<IconArrowRightIcon width={14} />}
          />
        </div>
        <p className="text-lg mt-10 text-left lg:text-center">
          On a big team? Contact sales
        </p>
        <div
          className="w-fit lg:mx-auto mx-0 flex gap-10 mt-10"
          style={{ color: Theme.Secondary.White }}
        >
          <IconLogoApple height={60} />
          <IconLogoWindown height={60} />
          <IconLogoAndroid height={60} />
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
