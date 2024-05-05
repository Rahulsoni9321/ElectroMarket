import React from "react";
import { Button, Img, Text, Heading, Slider } from "./..";

export default function HomepageHerosection({
  titletext = (
    <>
      Galaxy M55 5G
      <br />
      Must be a Monster
    </>
  ),
  descriptiontext = "Snapdragon 7 Gen 1 | 120Hz sAMOLED+",
  button = "Buy Now",
  ...props
}) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full mt-10 gap-10`}>
      <div className="container-xs flex w-full max-w-[1360px] rounded-[10px] bg-white-A700 md:p-5">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex rounded-[10px] bg-white-A700">
                <div className="flex h-[640px] w-full items-center rounded-[10px] bg-[url(/public/images/img_group_2.png)] bg-cover bg-no-repeat pb-[152px] pl-[63px] pr-14 pt-[181px] md:h-auto md:p-5">
                  <div className="flex w-[59%] flex-col items-start gap-9 md:w-full">
                    <Heading size="7xl" as="h1" className="w-full leading-[114.99%] !text-white-A700">
                      {titletext}
                    </Heading>
                    <Text size="xl" as="p" className="!font-medium !text-white-A700">
                      {descriptiontext}
                    </Text>
                    <Button
                      size="lg"
                      rightIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[24px] w-[24px]" />}
                      className="min-w-[167px] gap-2.5 rounded-md font-bold sm:px-5"
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
