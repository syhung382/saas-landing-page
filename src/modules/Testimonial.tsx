import { useState } from "react";
import { IconQuote } from "../icons";
import { Theme } from "../utils/constants";
import type { testimonialSliderItemProps } from "../utils/interface";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: testimonialSliderItemProps[] = [
    {
      color: "light",
    },
    {
      color: "dark",
    },
    {
      color: "dark",
    },
  ];

  return (
    <div className="w-full px-4 md:px-5 lg:px-8 2xl:px-56 py-40 items-center">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-center">
        Our sponsors
      </h1>

      {/* desktop */}
      <div className="lg:grid lg:grid-cols-3 gap-8 mt-16 hidden">
        <div
          className="w-full border border-gray-200 rounded-lg p-10 flex flex-col"
          style={{
            boxShadow: "6px 6px 20px rgba(0, 0, 0, 0.1)",
            color: Theme.Primary.DarkBlue,
          }}
        >
          <div className="flex flex-col gap-8 pb-10 border-b ">
            <IconQuote width={86} />
            <p className="text-lg">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="mt-14 flex gap-10 items-center">
            <img
              src="/images/Avatar.png"
              alt="avatar"
              className="w-[95px] h-[95px] rounded-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-3.5">
              <span
                className="font-semibold text-2xl"
                style={{ color: Theme.Secondary.DarkGray }}
              >
                Oberon Shaw, MCH
              </span>
              <p className="text-[16px]">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>

        <div
          className="w-full border border-gray-200 rounded-lg p-10 flex flex-col"
          style={{
            boxShadow: "6px 6px 20px rgba(0, 0, 0, 0.1)",
            color: Theme.Secondary.White,
            backgroundColor: Theme.Primary.LightBlue,
          }}
        >
          <div className="flex flex-col gap-8 pb-10 border-b ">
            <IconQuote width={86} />
            <p className="text-lg">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="mt-14 flex gap-10 items-center">
            <img
              src="/images/Avatar.png"
              alt="avatar"
              className="w-[95px] h-[95px] rounded-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-3.5">
              <span
                className="font-semibold text-2xl"
                style={{ color: Theme.Primary.DarkBlue }}
              >
                Oberon Shaw, MCH
              </span>
              <p className="text-[16px]">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>

        <div
          className="w-full border border-gray-200 rounded-lg p-10 flex flex-col"
          style={{
            boxShadow: "6px 6px 20px rgba(0, 0, 0, 0.1)",
            color: Theme.Secondary.White,
            backgroundColor: Theme.Primary.LightBlue,
          }}
        >
          <div className="flex flex-col gap-8 pb-10 border-b ">
            <IconQuote width={86} />
            <p className="text-lg">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="mt-14 flex gap-10 items-center">
            <img
              src="/images/Avatar.png"
              alt="avatar"
              className="w-[95px] h-[95px] rounded-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-3.5">
              <span
                className="font-semibold text-2xl"
                style={{ color: Theme.Primary.DarkBlue }}
              >
                Oberon Shaw, MCH
              </span>
              <p className="text-[16px]">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* tablet */}
      <div className="mt-16 pb-20 relative w-full overflow-hidden lg:hidden md:block hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-x-20 px-4"
          style={{
            transform: `translateX(-${currentSlide * 40}vw)`,
            width: `${slides.length * 50}vw`,
          }}
        >
          {slides.map((item, index) => (
            <div
              key={index}
              className="w-[50vw] flex-shrink-0 flex justify-center"
            >
              <div
                className="w-full border border-gray-200 rounded-lg p-10 flex flex-col"
                style={{
                  boxShadow: "6px 6px 20px rgba(0, 0, 0, 0.1)",
                  color:
                    item.color === "light"
                      ? Theme.Primary.DarkBlue
                      : Theme.Secondary.White,
                  backgroundColor:
                    item.color === "light"
                      ? Theme.Secondary.White
                      : Theme.Primary.LightBlue,
                }}
              >
                <div className="flex flex-col gap-8 pb-10 border-b ">
                  <IconQuote width={86} />
                  <p className="text-lg">
                    Whitepate is designed as a collaboration tool for businesses
                    that is a full project management solution.
                  </p>
                </div>
                <div className="mt-14 flex gap-10 items-center">
                  <img
                    src="/images/Avatar.png"
                    alt="avatar"
                    className="w-[95px] h-[95px] rounded-full object-cover"
                  />
                  <div className="flex-1 flex flex-col gap-3.5">
                    <span
                      className="font-semibold text-2xl"
                      style={{
                        color:
                          item.color === "light"
                            ? Theme.Secondary.DarkGray
                            : Theme.Primary.DarkBlue,
                      }}
                    >
                      Oberon Shaw, MCH
                    </span>
                    <p className="text-[16px]">
                      Head of Talent Acquisition, North America
                    </p>
                  </div>
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
      <div className="mt-16 pb-20 relative w-full overflow-hidden md:hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-x-20 px-4"
          style={{
            transform: `translateX(-${currentSlide * 33.33}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((item, index) => (
            <div key={index} className="w-full max-w-[70%] flex justify-center">
              <div
                className="w-full border border-gray-200 rounded-lg p-10 flex flex-col"
                style={{
                  boxShadow: "6px 6px 20px rgba(0, 0, 0, 0.1)",
                  color:
                    item.color === "light"
                      ? Theme.Primary.DarkBlue
                      : Theme.Secondary.White,
                  backgroundColor:
                    item.color === "light"
                      ? Theme.Secondary.White
                      : Theme.Primary.LightBlue,
                }}
              >
                <div className="flex flex-col gap-8 pb-10 border-b ">
                  <IconQuote width={86} />
                  <p className="text-lg">
                    Whitepate is designed as a collaboration tool for businesses
                    that is a full project management solution.
                  </p>
                </div>
                <div className="mt-14 flex gap-10 items-center">
                  <img
                    src="/images/Avatar.png"
                    alt="avatar"
                    className="w-[95px] h-[95px] rounded-full object-cover"
                  />
                  <div className="flex-1 flex flex-col gap-3.5">
                    <span
                      className="font-semibold text-2xl"
                      style={{
                        color:
                          item.color === "light"
                            ? Theme.Secondary.DarkGray
                            : Theme.Primary.DarkBlue,
                      }}
                    >
                      Oberon Shaw, MCH
                    </span>
                    <p className="text-[16px]">
                      Head of Talent Acquisition, North America
                    </p>
                  </div>
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
  );
};

export default Testimonial;
