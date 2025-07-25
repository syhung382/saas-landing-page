import Button from "../components/buton/Button";
import { IconArrowDown, IconArrowRightIcon, IconMenu } from "../icons";
import { Theme } from "../utils/constants";

const Menu = () => {
  return (
    <>
      <div
        className="w-full"
        style={{
          backgroundColor: Theme.Primary.DarkBlue,
        }}
      >
        <div className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-5 gap-4 md:gap-5 lg:gap-8 flex  text-white items-center text-lg">
          {/* logo */}
          <div className="flex-1">
            <img
              src="/images/Logo-dark.png"
              alt="logo"
              className="w-48 cursor-pointer"
            />
          </div>
          {/* menu */}
          <div className="gap-8 hidden xl:flex">
            <div className="flex gap-3 items-center cursor-pointer">
              <span>Products</span>
              <IconArrowDown width={10} />
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
              <span>Solutions</span>
              <IconArrowDown width={10} />
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
              <span>Resources</span>
              <IconArrowDown width={10} />
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
              <span>Pricing</span>
              <IconArrowDown width={10} />
            </div>
          </div>
          {/* button */}
          <div className="hidden lg:flex gap-4">
            <Button title="Login" type="Secondary" />
            <Button
              title="Try Whitepaper free"
              icon={<IconArrowRightIcon width={15} />}
            />
          </div>

          <div className="xl:hidden">
            <IconMenu width={42} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
