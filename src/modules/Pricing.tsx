import { useState } from "react";
import Button from "../components/buton/Button";
import { IconCheck } from "../icons";
import { Theme } from "../utils/constants";
import type { PricingSliderItemProps } from "../utils/interface";

const Pricing = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: PricingSliderItemProps[] = [
    {
      title: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      color: "light",
    },
    {
      title: "Personal",
      price: "$11.99",
      description: "Keep home and family on track",
      color: "dark",
    },
    {
      title: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      color: "light",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-40 items-center text-center">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl">
          Choose Your Plan
        </h1>
        <p className="text-lg mt-10 xl:w-[70%] xl:mx-auto">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>

        {/* desktop */}
        <div className="mt-10 w-full lg:grid lg:grid-cols-3 gap-6 text-left items-center hidden">
          <div
            className="p-10 h-fit rounded-lg flex flex-col gap-6"
            style={{
              color: Theme.Secondary.DarkGray,
              border: `1px solid ${Theme.Secondary.Yellow}`,
            }}
          >
            <span className="text-2xl font-semibold">Free</span>
            <span className="font-bold text-4xl">$0</span>
            <span className="text-lg">Capture ideas and find them quickly</span>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px] flex-1">Sync unlimited devices</span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px]">10 GB monthly uploads</span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px]">200 MB max. note size</span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px]">
                Customize Home dashboard and access extra widgets
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px]">
                Connect primary Google Calendar account
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px]">
                Add due dates, reminders, and notifications to your tasks
              </span>
            </div>
            <div className="w-fit">
              <button
                type="button"
                className="px-6 py-4 rounded-md cursor-pointer flex gap-2 items-center"
                style={{ border: `1px solid ${Theme.Secondary.Yellow}` }}
              >
                Get started
              </button>
            </div>
          </div>

          <div
            className="px-10 py-20 rounded-lg flex flex-col gap-6"
            style={{
              color: Theme.Secondary.White,
              border: `1px solid ${Theme.Secondary.Yellow}`,
              backgroundColor: Theme.Primary.DarkBlue,
            }}
          >
            <span className="text-2xl font-semibold">Personal</span>
            <span
              className="font-bold text-4xl"
              style={{ color: Theme.Secondary.Yellow }}
            >
              $11.99
            </span>
            <span className="text-lg">Keep home and family on track</span>
            <div className="flex gap-5 items-center">
              <IconCheck
                width={18}
                height={18}
                className="flex-shrink-0"
                style={{ color: Theme.Secondary.Yellow }}
              />
              <span className="text-[16px] flex-1">Sync unlimited devices</span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck
                width={18}
                height={18}
                className="flex-shrink-0"
                style={{ color: Theme.Secondary.Yellow }}
              />
              <span className="text-[16px]">10 GB monthly uploads</span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck
                width={18}
                height={18}
                className="flex-shrink-0"
                style={{ color: Theme.Secondary.Yellow }}
              />
              <span className="text-[16px]">200 MB max. note size</span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck
                width={18}
                height={18}
                className="flex-shrink-0"
                style={{ color: Theme.Secondary.Yellow }}
              />
              <span className="text-[16px]">
                Customize Home dashboard and access extra widgets
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck
                width={18}
                height={18}
                className="flex-shrink-0"
                style={{ color: Theme.Secondary.Yellow }}
              />
              <span className="text-[16px]">
                Connect primary Google Calendar account
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck
                width={18}
                height={18}
                className="flex-shrink-0"
                style={{ color: Theme.Secondary.Yellow }}
              />
              <span className="text-[16px]">
                Add due dates, reminders, and notifications to your tasks
              </span>
            </div>
            <div className="w-fit">
              <Button title="Get started" />
            </div>
          </div>

          <div
            className="p-10 h-fit rounded-lg flex flex-col gap-6"
            style={{
              color: Theme.Secondary.DarkGray,
              border: `1px solid ${Theme.Secondary.Yellow}`,
            }}
          >
            <span className="text-2xl font-semibold">Organization</span>
            <span className="font-bold text-4xl">$49.99</span>
            <span className="text-lg">Capture ideas and find them quickly</span>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px] flex-1">Sync unlimited devices</span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px]">10 GB monthly uploads</span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px]">200 MB max. note size</span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px]">
                Customize Home dashboard and access extra widgets
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px]">
                Connect primary Google Calendar account
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <IconCheck width={18} height={18} className="flex-shrink-0" />
              <span className="text-[16px]">
                Add due dates, reminders, and notifications to your tasks
              </span>
            </div>
            <div className="w-fit">
              <button
                type="button"
                className="px-6 py-4 rounded-md cursor-pointer flex gap-2 items-center"
                style={{ border: `1px solid ${Theme.Secondary.Yellow}` }}
              >
                Get started
              </button>
            </div>
          </div>
        </div>

        {/* tablet */}
        <div className="relative w-full overflow-hidden mt-10 pb-20 lg:hidden md:block hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-x-20 px-4"
            style={{
              transform: `translateX(-${currentSlide * 55}vw)`,
              width: `${slides.length * 50}vw`,
            }}
          >
            {slides.map((item, index) => (
              <div
                key={index}
                className="w-[60vw] flex-shrink-0 flex justify-center"
              >
                <div
                  className="p-10 h-fit rounded-lg flex flex-col gap-6"
                  style={{
                    color:
                      item.color === "light"
                        ? Theme.Secondary.DarkGray
                        : Theme.Secondary.White,
                    border: `1px solid ${Theme.Secondary.Yellow}`,
                    backgroundColor:
                      item.color === "light"
                        ? Theme.Secondary.White
                        : Theme.Primary.DarkBlue,
                  }}
                >
                  <span className="text-2xl font-semibold">{item.title}</span>
                  <span
                    className="font-bold text-4xl"
                    style={{
                      color:
                        item.color === "light"
                          ? Theme.Secondary.DarkGray
                          : Theme.Secondary.Yellow,
                    }}
                  >
                    {item.price}
                  </span>
                  <span className="text-lg">{item.description}</span>
                  <div className="flex gap-5 items-center">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">Sync unlimited devices</span>
                  </div>
                  <div className="flex gap-5 items-center">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">10 GB monthly uploads</span>
                  </div>
                  <div className="flex gap-5 items-center">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">200 MB max. note size</span>
                  </div>
                  <div className="flex gap-5 items-center text-left">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">
                      Customize Home dashboard and access extra widgets
                    </span>
                  </div>
                  <div className="flex gap-5 items-center  text-left">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">
                      Connect primary Google Calendar account
                    </span>
                  </div>
                  <div className="flex gap-5 items-center  text-left">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">
                      Add due dates, reminders, and notifications to your tasks
                    </span>
                  </div>
                  <div className="w-fit">
                    <button
                      type="button"
                      className="px-6 py-4 rounded-md cursor-pointer flex gap-2 items-center"
                      style={{
                        border: `1px solid ${Theme.Secondary.Yellow}`,
                      }}
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-6 gap-3 py-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "scale-125" : ""
                }`}
                style={{
                  backgroundColor:
                    currentSlide === index
                      ? Theme.Primary.DarkBlue
                      : Theme.Primary.LightBlue,
                }}
              />
            ))}
          </div>
        </div>

        {/* mobile */}
        <div className="relative w-full overflow-hidden mt-10 pb-20 md:hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 33.33}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[70%] flex justify-center"
              >
                <div
                  className="p-10 h-fit rounded-lg flex flex-col gap-6"
                  style={{
                    color:
                      item.color === "light"
                        ? Theme.Secondary.DarkGray
                        : Theme.Secondary.White,
                    border: `1px solid ${Theme.Secondary.Yellow}`,
                    backgroundColor:
                      item.color === "light"
                        ? Theme.Secondary.White
                        : Theme.Primary.DarkBlue,
                  }}
                >
                  <span className="text-2xl font-semibold">{item.title}</span>
                  <span
                    className="font-bold text-4xl"
                    style={{
                      color:
                        item.color === "light"
                          ? Theme.Secondary.DarkGray
                          : Theme.Secondary.Yellow,
                    }}
                  >
                    {item.price}
                  </span>
                  <span className="text-lg">{item.description}</span>
                  <div className="flex gap-5 items-center">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">Sync unlimited devices</span>
                  </div>
                  <div className="flex gap-5 items-center">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">10 GB monthly uploads</span>
                  </div>
                  <div className="flex gap-5 items-center">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">200 MB max. note size</span>
                  </div>
                  <div className="flex gap-5 items-center text-left">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">
                      Customize Home dashboard and access extra widgets
                    </span>
                  </div>
                  <div className="flex gap-5 items-center  text-left">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">
                      Connect primary Google Calendar account
                    </span>
                  </div>
                  <div className="flex gap-5 items-center  text-left">
                    <IconCheck
                      width={18}
                      height={18}
                      className="flex-shrink-0"
                    />
                    <span className="text-[16px]">
                      Add due dates, reminders, and notifications to your tasks
                    </span>
                  </div>
                  <div className="w-fit">
                    <button
                      type="button"
                      className="px-6 py-4 rounded-md cursor-pointer flex gap-2 items-center"
                      style={{
                        border: `1px solid ${Theme.Secondary.Yellow}`,
                      }}
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-6 gap-3 py-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "scale-125" : ""
                }`}
                style={{
                  backgroundColor:
                    currentSlide === index
                      ? Theme.Primary.DarkBlue
                      : Theme.Primary.LightBlue,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
