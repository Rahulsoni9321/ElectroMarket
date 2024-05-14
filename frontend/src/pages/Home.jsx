import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Button,
  Img,
  Input,
  Heading,
  Slider,
  RatingBar,
} from "../components";
import HomepageCompleteyour from "../components/HomepageCompleteyour";
import HomepageHeader from "../components/HomepageHeader";
import HomepageHerosection from "../components/HomepageHerosection";
import HomepageTab from "../components/HomepageTab";

const data1 = [];

export default function HomepagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <HomepageHeader shopOne="Shop" className="self-stretch" />
        <HomepageHerosection />
        <div className="mt-0 flex justify-center self-stretch pb-10 pt-1 sm:py-1 bg-slate-300">
          <div className="container-xs flex flex-col gap-12 md:p-5">
            {/* <div className="flex flex-col items-start gap-[11px]">
              <Heading size="6xl" as="h1">
                Picks For You
              </Heading>
              <HomepageTab
                buttontext1="Best Deal"
                text1="Most Popular"
                text2="Newest"
              />
            </div> */}
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              <div className="flex w-full flex-col items-center rounded-[30px] px-1 pb-1 pt-1 sm:py-1">
                <Img
                  src="\public\Images\Raspberry Pi 3.png"
                  alt="image"
                  className="h-min w-min"
                />
                <div className="flex flex-col gap-2 self-stretch">
                  <Text
                    size="3xl"
                    as="p"
                    className="leading-9 !text-black-900 text-center"
                  >
                    Raspberry PI 3 Model B+ Motherboard | BCM2837
                  </Text>
                  <div className="flex w-[43%] items-center justify-center gap-2 md:w-full">
                    <RatingBar
                      value={3.5}
                      isEditable={true}
                      size={18}
                      className="flex flex-1 justify-between"
                    />
                    <Text as="p" className="!text-black-900">
                      17(122)
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex flex-wrap gap-[7px]">
                    <Text size="xl" as="p" className="!text-gray-700">
                      MRP (Incl. of all taxes)
                    </Text>
                    <Text
                      size="xl"
                      as="p"
                      className="!text-gray-700 line-through"
                    >
                      ₹14,999
                    </Text>
                    <Text size="xl" as="p">
                      72% Off
                    </Text>
                  </div>
                  <Heading size="4xl" as="h2">
                    ₹4,195
                  </Heading>
                </div>
                <div className="flex gap-[15px] self-stretch">
                  <Button
                    shape="round"
                    className="w-80 border border-solid border-black-900_02 font-inter font-medium sm:px-1"
                  >
                    Learn More
                  </Button>
                  <Button
                    shape="round"
                    className="w-full font-inter font-bold sm:px-5"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center rounded-[30px] px-1 pb-1 pt-1 sm:py-1">
                <Img
                  src="\public\Images\breadboard1.png"
                  alt="imagefive"
                  className="h-min w-min"
                />
                <div className="flex flex-col gap-2">
                  <Text size="3xl" as="p" className="leading-9 !text-black-900">
                    Electronic Spices 400 Points Half Size Solderless Breadboard
                    for Prototype Circuit Pack of 1pcs
                  </Text>
                  <div className="flex w-[43%] items-center justify-center gap-2 md:w-full">
                    <RatingBar
                      value={2.5}
                      isEditable={true}
                      size={18}
                      className="flex flex-1 justify-between"
                    />
                    <Text as="p" className="!text-black-900">
                      22(122)
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[21px]">
                  <div className="flex flex-col items-start gap-2.5">
                    <div className="flex flex-wrap gap-[7px]">
                      <Text size="xl" as="p" className="!text-gray-700">
                        MRP (Incl. of all taxes)
                      </Text>
                      <Text
                        size="xl"
                        as="p"
                        className="!text-gray-700 line-through"
                      >
                        ₹199
                      </Text>
                      <Text size="xl" as="p">
                        40% Off
                      </Text>
                    </div>
                    <Heading size="4xl" as="h3">
                      ₹119
                    </Heading>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      shape="round"
                      className="w-80 border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                    >
                      Learn More
                    </Button>
                    <Button
                      shape="round"
                      className="w-full font-inter font-bold sm:px-5"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center rounded-[30px] px-1 pb-1 pt-1 sm:py-1">
                <Img
                  src="./public/Images/servomotor1.png"
                  alt="imagethree"
                  className="h-min w-min"
                />
                <div className="flex flex-col gap-2 self-stretch">
                  <Text size="3xl" as="p" className="leading-9 !text-black-900">
                    Drfeify RC Motor Servo, Black 17g Metal Gear Core Motor
                    Servo RC Model Car Upgrade Accessory with Install Screws
                    Parts
                  </Text>
                  <div className="flex w-[43%] items-center justify-center gap-[7px] md:w-full">
                    <RatingBar
                      value={4.8}
                      isEditable={true}
                      size={18}
                      className="flex flex-1 justify-between"
                    />
                    <Text as="p" className="!text-black-900">
                      36(122)
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    <Text size="xl" as="p" className="!text-gray-700">
                      MRP (Incl. of all taxes)
                    </Text>
                    <Text
                      size="xl"
                      as="p"
                      className="!text-gray-700 line-through"
                    >
                      ₹8,199
                    </Text>
                    <Text size="xl" as="p">
                      50% Off
                    </Text>
                  </div>
                  <Heading size="4xl" as="h4">
                    ₹4,099
                  </Heading>
                </div>
                <div className="flex gap-4 self-stretch">
                  <Button
                    shape="round"
                    className="w-80 border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                  >
                    Learn More
                  </Button>
                  <Button
                    shape="round"
                    className="w-full font-inter font-bold sm:px-5"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center self-stretch pb-10 pt-[31px] sm:py-5">
          <div className="container-xs flex flex-col gap-6 md:p-5">
            <div className="flex w-[64%] flex-col items-start gap-1 md:w-full">
              <Heading size="6xl" as="h2">
                HighLight
              </Heading>
              <HomepageTab
                text3="Air Care"
                text4="OLED evo"
                className="self-stretch"
              />
            </div>
            <div className="flex w-full max-w-[1360px]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
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
                    <div className="flex flex-col gap-6 rounded-[30px] border-2 border-solid bg-red-100 border-gray-400 bg-gray-300_02">
                      <Img
                        src="\public\Images\20.png"
                        alt="imageseven"
                        className="h-[200px] rounded-tl-[30px] rounded-tr-[30px] object-contain"
                      />
                      <div className="flex flex-col items-center gap-[13px] pb-10 sm:pb-5">
                        <Heading size="4xl" as="h3">
                          Starter Kit for Uno R3 Compatible with Arduino IDE
                          <span className="items-center text-xs">
                            (Images are for illustration purpose only)
                          </span>
                        </Heading>
                        <Button
                          shape="round"
                          className="border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                        >
                          Learn More
                        </Button>
                        <Button
                          shape="round"
                          className="min-w-[170px] font-inter font-medium sm:px-5 bg-orange-200 hover:bg-orange-400"
                        >
                          Buy now
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
            <div className="flex gap-12 md:flex-col">
              {data1.map((d, index) => (
                <HomepageCompleteyour {...d} key={"list1" + index} />
              ))}
            </div>
          </div>
        </div>

        <div className="container-xs mt-28 flex flex-col gap-[46px] md:p-5">
          <div className="flex flex-col items-start gap-1">
            <Heading size="6xl" as="h2">
              Need help?
            </Heading>
            <Text size="2xl" as="p" className="tracking-[1.40px]">
              We&#39;re here to provide all the help you need.
            </Text>
          </div>
          <div className="grid grid-cols-4 gap-10 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex w-full flex-col items-start gap-[50px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex flex-1 flex-col gap-2.5">
                  <Text
                    size="5xl"
                    as="p"
                    className="w-[81%] leading-[42px] !text-black-900 md:w-full"
                  >
                    <>
                      Product <br />
                      Registration
                    </>
                  </Text>
                  <Text as="p" className="leading-6 !text-gray-700">
                    Registering your product will help you get faster support.
                  </Text>
                </div>
                <Img
                  src="\public\assets\product reg.svg"
                  alt="image"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                className="min-w-[169px] gap-2.5 rounded-[24px] font-inter font-medium sm:px-5"
              >
                Learn More
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-[26px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
              <div className="flex items-start self-stretch">
                <div className="flex flex-1 flex-col gap-2.5">
                  <Text
                    size="5xl"
                    as="p"
                    className="leading-[42px] !text-black-900"
                  >
                    Product support
                  </Text>
                  <Text
                    as="p"
                    className="w-[95%] leading-6 !text-gray-700 md:w-full"
                  >
                    Find manual, troubleshoot and warranty of your TechVolt
                    product.
                  </Text>
                </div>
                <Button size="xl" shape="square" className="w-[48px]">
                  <Img src="\public\assets\product support.svg" />
                </Button>
              </div>
              <Button
                size="lg"
                className="min-w-[169px] gap-2.5 rounded-[24px] border border-solid border-black-900_02 font-inter font-medium sm:px-5"
              >
                Learn More
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-[74px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] md:gap-[55px] sm:gap-[37px] sm:p-5">
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex flex-1 flex-col gap-2.5">
                  <Text
                    size="5xl"
                    as="p"
                    className="w-[52%] leading-[42px] !text-black-900 md:w-full"
                  >
                    <>
                      Order
                      <br />
                      support
                    </>
                  </Text>
                  <Text as="p" className="leading-6 !text-gray-700">
                    Track your order and check order FAQ.
                  </Text>
                </div>
                <Img
                  src="\public\assets\order support.svg"
                  alt="icon"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                className="min-w-[169px] gap-2.5 rounded-[24px] border border-solid border-black-900_02 font-inter font-medium sm:px-5"
              >
                Learn More
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-[74px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] md:gap-[55px] sm:gap-[37px] sm:p-5">
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex flex-1 flex-col gap-2.5">
                  <Text
                    size="5xl"
                    as="p"
                    className="w-[51%] leading-[42px] !text-black-900 md:w-full"
                  >
                    <>
                      Repair
                      <br />
                      request
                    </>
                  </Text>
                  <Text as="p" className="leading-6 !text-gray-700">
                    Request repair service conveniently online.
                  </Text>
                </div>
                <Img
                  src="\public\assets\repair.svg"
                  alt="icon"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                className="min-w-[169px] gap-2.5 rounded-[24px] border border-solid border-black-900_02 font-inter font-medium sm:px-5"
              >
                Learn More
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-[35px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex flex-1 flex-col items-start gap-[7px]">
                  <Text size="5xl" as="p" className="!text-black-900">
                    Quick help
                  </Text>
                  <Text as="p" className="w-full leading-6 !text-gray-700">
                    Get instant help on shopping.
                  </Text>
                </div>
                <Img
                  src="\public\assets\quick help.svg"
                  alt="icon"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                className="min-w-[169px] gap-2.5 rounded-[24px] border border-solid border-black-900_02 font-inter font-medium sm:px-5"
              >
                Learn More
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-[35px] rounded-[24px] border border-solid border-gray-400 px-[21px] py-[33px] sm:p-5">
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex flex-1 flex-col items-start gap-1.5">
                  <Text size="5xl" as="p" className="!text-black-900">
                    WhatsApp
                  </Text>
                  <Text as="p" className="w-full leading-6 !text-gray-700">
                    Talk to our customer service via WhatsApp
                  </Text>
                </div>
                <Img
                  src="\public\assets\whatsapp.svg"
                  alt="volume"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                className="min-w-[169px] gap-2.5 rounded-[24px] border border-solid border-black-900_02 font-inter font-medium sm:px-5"
              >
                Learn More
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-[35px] rounded-[24px] border border-solid border-gray-400 px-[21px] pb-[33px] pt-8 sm:p-5">
              <div className="flex items-start gap-3 self-stretch">
                <div className="flex flex-1 flex-col items-start gap-2.5">
                  <Text size="5xl" as="p" className="!text-black-900">
                    Email us
                  </Text>
                  <Text as="p" className="w-full leading-6 !text-gray-700">
                    Send an Email to TechVolt Customer Service
                  </Text>
                </div>
                <Img
                  src="\public\assets\mail.svg"
                  alt="icon"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                className="min-w-[169px] gap-2.5 rounded-[24px] border border-solid border-black-900_02 font-inter font-medium sm:px-5"
              >
                Learn More
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-[35px] rounded-[24px] border border-solid border-gray-400 px-[21px] pb-[33px] pt-8 sm:p-5">
              <div className="flex items-start justify-center gap-2.5 self-stretch">
                <div className="flex flex-1 flex-col items-start gap-2.5">
                  <Text size="5xl" as="p" className="!text-black-900">
                    Call us
                  </Text>
                  <Text as="p" className="w-full leading-6 !text-gray-700">
                    Speak directly with our support representatives.
                  </Text>
                </div>
                <Img
                  src="\public\assets\call.svg"
                  alt="icon"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                className="min-w-[169px] gap-2.5 rounded-[24px] border border-solid border-black-900_02 font-inter font-medium sm:px-5"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <footer className="mt-20 flex items-center justify-center self-stretch border border-solid border-gray-400 bg-gray-300_04 pb-[38px] pt-[37px] sm:py-5">
          <div className="container-xs flex justify-center md:p-5">
            <div className="flex w-full flex-col items-center">
              <div className="flex items-start self-stretch md:flex-col">
                <div className="flex w-[37%] flex-col gap-[37px] md:w-full">
                  <Img
                    src="\public\Images\Electromarket.png"
                    alt="footerlogo"
                    className="h-[50px] w-[223px] object-contain"
                  />
                  <div className="flex flex-col gap-[18px]">
                    <div className="flex items-center gap-2.5 self-start">
                      <Img
                        src="\public\assets\mail.svg"
                        alt="lock"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end">
                        sunilkumarsaini6363@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="ml-[115px] flex flex-1 items-center justify-between gap-5 pr-[49px] md:ml-0 md:self-stretch md:pr-5 sm:flex-col">
                  <div className="flex flex-col gap-3">
                    <Heading as="h6" className="!text-black-900_02">
                      Sitemap
                    </Heading>
                    <ul className="flex flex-col gap-[13px]">
                      <li>
                        <a href="#">
                          <Text as="p">Product</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Services</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Article</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">About Us</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Heading as="h6" className="!text-black-900_02">
                      Information
                    </Heading>
                    <ul className="flex flex-col items-start gap-[13px]">
                      <li>
                        <a href="#">
                          <Text as="p">Privacy Policy</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Terms & Conditions</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Contact</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">FAQs</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ml-[66px] flex w-[22%] flex-col items-start gap-3.5 md:ml-0 md:w-full">
                  <Heading as="h6" className="!text-black-900_02">
                    Connect With Us
                  </Heading>
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`Enter email id`}
                    suffix={
                      <Img
                        src="\public\assets\arrowright-svgrepo-com.svg"
                        alt="frame"
                        className="h-[24px] w-[24px]"
                      />
                    }
                    className="gap-[35px]"
                  />
                  <div className="flex w-[52%] justify-between gap-5 md:w-full">
                    <Img
                      src="\public\assets\instagram_alt.svg"
                      alt="bxbxl"
                      className="h-[24px] w-[24px]"
                    />
                    <Img
                      src="\public\assets\twitter_fill.svg"
                      alt="akaricons"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[60px] h-px w-full self-stretch bg-gray-400_01" />
              <Text as="p" className="mt-[26px] !text-black-900_cc">
                © Copyright 2024 ElectroMarket. All rights reserved
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
