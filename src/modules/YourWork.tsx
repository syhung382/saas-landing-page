import Button from "../components/buton/Button";
import { IconArrowRightIcon } from "../icons";
import { Theme } from "../utils/constants";

const YourWork = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: Theme.Primary.DarkBlue,
      }}
    >
      <div
        className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-40  xl:mx-auto xl:text-center lg:text-left xl:max-w-[100vw] lg:max-w-[60vw] md:max-w-[80vw]"
        style={{
          color: Theme.Secondary.White,
        }}
      >
        <h1 className="text-4xl md:text-[54px] lg:text-6xl xl:text-7xl font-bold">
          Your work, everywhere you are
        </h1>
        <p className="text-lg mt-6 text-left lg:text-center">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
        <div className="lg:mx-0 xl:mx-auto mt-14 w-fit">
          <Button title="Try Taskey" icon={<IconArrowRightIcon width={14} />} />
        </div>
      </div>
    </div>
  );
};

export default YourWork;
