import React from "react";
import { Button, Img, Text, Heading, Slider } from "./..";
import PropTypes from "prop-types";

export default function HomepageHerosection({
  titletext = (
    <>
      Arduino Uno
      <br />A Versatile Microcontroller Board
    </>
  ),
  descriptiontext = "Model Name ->	Rev 3 | RAM -> 32 KB | CPU Speed ->16 MHz",
  button = "Buy Now",
  ...props
}) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full mt-10 gap-10`}
    >
      <div className="container-xs flex w-full max-w-[1360px] rounded-[10px] bg-teal-200 hover:bg-stone-300 md:p-5">
        <Slider
          autoPlay
          autoPlayInterval={1000}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 1 },
          }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex rounded-[10px] bg-white-A700">
                <div className="flex h-[640px] w-full items-center rounded-[10px] bg-cover bg-no-repeat pb-[152px] pl-[63px] pr-14 pt-[181px] md:h-auto md:p-5">
                  <img
                    src="./public/Images/arduino.png"
                    className="object-fit-contain"
                    alt="Arduino Image"
                  />

                  <div className="flex w-[59%] flex-col items-start gap-9 md:w-full">
                    <Heading
                      size="7xl"
                      as="h1"
                      className="w-full leading-[114.99%] !text-white-A700"
                    >
                      {titletext}
                    </Heading>
                    <Text
                      size="xl"
                      as="p"
                      className="!font-medium !text-white-A700"
                    >
                      {descriptiontext}
                    </Text>
                    <Button
                      size="lg"
                      rightIcon={
                        <Img
                          src="\public\assets\right-svgrepo-com.svg"
                          alt="frame"
                          className="h-[24px] w-[24px]"
                        />
                      }
                      className="min-w-[167px] gap-2.5 rounded-md font-bold sm:px-5 bg-yellow-200 hover:bg-white"
                    >
                      {button}
                    </Button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
      <div className="container-xs px-[644px] md:p-5 md:px-5">
        <div className="flex h-[13px] w-[71px] justify-center" />
      </div>
    </div>
  );
}
HomepageHerosection.propTypes = {
  titletext: PropTypes.string,
  descriptiontext: PropTypes.string,
  button: PropTypes.string,
  className: PropTypes.string,
};
