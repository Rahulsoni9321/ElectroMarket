import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Slider, RatingBar } from "../components";
import HomepageHeader from "../components/HomepageHeader";
import HomepageHerosection from "../components/HomepageHerosection";
import HomepageTab from "../components/HomepageTab";

export default function HomepagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta name="description" content="Web site" />
      </Helmet>
      <div className="flex w-full flex-col items-center dark:bg-gray-800">
        <HomepageHeader shopOne="Shop" className="self-stretch" />
        <HomepageHerosection />
        <div className="mt-0 flex justify-center self-stretch pb-10 pt-1 sm:py-1 bg-slate-300">
          <div className="container-xs flex flex-col gap-12 md:p-5">
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
          </div>
        </div>

        <div className="container-xs mt-28 flex flex-col gap-[46px] md:p-5 bg-slate-100 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <Heading size="6xl" as="h2">
              Need help?
            </Heading>
            <Text size="2xl" as="p" className="tracking-[1.40px]">
              We&#39;re here to provide all the help you need.
            </Text>
          </div>
          <div className="grid grid-cols-4 gap-10 md:grid-cols-3 sm:grid-cols-1">
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

        <footer className="dark:bg-gray-900 self-stretch">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Brand Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Help center
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Discord Server
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Download
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      iOS
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Android
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Windows
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      MacOS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                © 2024 ElectroMarket. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
