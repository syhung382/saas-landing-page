import Button from "../components/buton/Button";
import { IconArrowRightIcon } from "../icons";
import { Theme } from "../utils/constants";

const Footer = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: Theme.Primary.DarkBlue,
      }}
    >
      <div
        className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-40 mx-auto md:mx-0 xl:mx-auto"
        style={{
          color: Theme.Secondary.White,
        }}
      >
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-5 justify-between gap-20 text-center md:text-left"
          style={{ color: Theme.Secondary.White }}
        >
          <div className="flex flex-col gap-3.5">
            <div className="w-fit mx-auto md:mx-0">
              <img
                src="/images/Logo-dark.png"
                alt="logo"
                className="h-8 md:h-16 lg:h-8"
              />
            </div>
            <p className="text-lg max-w-[60%] lg:max-w-[100%] mx-auto md:mx-0">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <h4 className="text-lg font-bold">Product</h4>
            <span className="text-lg">Overview</span>
            <span className="text-lg">Pricing</span>
            <span className="text-lg">Customer stories</span>
          </div>
          <div className="flex flex-col gap-3.5">
            <h4 className="text-lg font-bold">Resources</h4>
            <span className="text-lg">Blog</span>
            <span className="text-lg">Guides & tutorials</span>
            <span className="text-lg">Help center</span>
          </div>
          <div className="flex flex-col gap-3.5">
            <h4 className="text-lg font-bold">Company</h4>
            <span className="text-lg">About us</span>
            <span className="text-lg">Careers</span>
            <span className="text-lg">Media kit</span>
          </div>
          <div className="flex flex-col gap-3.5">
            <h3 className="font-bold text-[28px]">Try It Today</h3>
            <p className="text-lg max-w-[70%] lg:max-w-[100%] mx-auto md:mx-0">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <div className="fit mx-auto md:mx-0">
              <Button
                title="Start today"
                icon={<IconArrowRightIcon width={14} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
