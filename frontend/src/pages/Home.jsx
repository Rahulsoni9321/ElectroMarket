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

const data = [
  { smarttvone: "images/img_image_7_576x426.png", smarttv: "Smart TV" },
];
const data1 = [
  {
    image: "images/img_image_7_318x421.png",
    title: "Complete your space",
    subtitle: "TechVolt Objet Collection",
  },
  {
    image: "images/img_image_7_1.png",
    title: "Complete your space",
    subtitle: "TechVolt Objet Collection",
  },
  {
    image: "images/img_image_7_2.png",
    title: "Complete your space",
    subtitle: "TechVolt Objet Collection",
  },
];

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
        <div className="mt-20 flex justify-center self-stretch pb-10 pt-6 sm:py-5">
          <div className="container-xs flex flex-col gap-12 md:p-5">
            <div className="flex flex-col items-start gap-[11px]">
              <Heading size="6xl" as="h1">
                Picks For You
              </Heading>
              <HomepageTab
                buttontext1="Best Deal"
                text1="Most Popular"
                text2="Newest"
              />
            </div>
            <div className="flex gap-10 md:flex-col">
              <div className="flex w-full flex-col items-center gap-[23px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                <Img
                  src="images/img_image_6_350x386.png"
                  alt="image"
                  className="h-[350px] w-full object-cover md:h-auto"
                />
                <div className="flex flex-col gap-2 self-stretch">
                  <Text size="3xl" as="p" className="leading-9 !text-black-900">
                    5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ &
                    Black Protection, 2024 Model
                  </Text>
                  <div className="flex w-[43%] items-center justify-center gap-2 md:w-full">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      size={18}
                      className="flex flex-1 justify-between"
                    />
                    <Text as="p" className="!text-black-900">
                      3(122)
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
                      ₹85990
                    </Text>
                    <Text size="xl" as="p">
                      46% Off
                    </Text>
                  </div>
                  <Heading size="4xl" as="h2">
                    ₹17,800
                  </Heading>
                </div>
                <div className="flex gap-[15px] self-stretch">
                  <Button
                    shape="round"
                    className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
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
              <div className="flex w-full flex-col gap-[23px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                <Img
                  src="images/img_image_5.png"
                  alt="imagefive"
                  className="h-[350px] object-cover"
                />
                <div className="flex flex-col gap-2">
                  <Text size="3xl" as="p" className="leading-9 !text-black-900">
                    650L, Convertible Side-by-Side Refrigerator with Smart
                    Inverter Compressor, Smart Diagnosis
                  </Text>
                  <div className="flex w-[43%] items-center justify-center gap-2 md:w-full">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      size={18}
                      className="flex flex-1 justify-between"
                    />
                    <Text as="p" className="!text-black-900">
                      3(122)
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
                        ₹85990
                      </Text>
                      <Text size="xl" as="p">
                        46% Off
                      </Text>
                    </div>
                    <Heading size="4xl" as="h3">
                      ₹17,800
                    </Heading>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      shape="round"
                      className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
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
              <div className="flex w-full flex-col items-center gap-[23px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                <Img
                  src="images/img_image_3.png"
                  alt="imagethree"
                  className="h-[350px] w-full object-cover md:h-auto"
                />
                <div className="flex flex-col gap-2 self-stretch">
                  <Text size="3xl" as="p" className="leading-9 !text-black-900">
                    7Kg Front Load Washing Machine, Inverter Direct Drive,
                    Middle Black
                  </Text>
                  <div className="flex w-[43%] items-center justify-center gap-[7px] md:w-full">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      size={18}
                      className="flex flex-1 justify-between"
                    />
                    <Text as="p" className="!text-black-900">
                      3(122)
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
                      ₹85990
                    </Text>
                    <Text size="xl" as="p">
                      46% Off
                    </Text>
                  </div>
                  <Heading size="4xl" as="h4">
                    ₹17,800
                  </Heading>
                </div>
                <div className="flex gap-4 self-stretch">
                  <Button
                    shape="round"
                    className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
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
          <div className="container-xs flex flex-col gap-12 md:p-5">
            <div className="flex w-[64%] flex-col items-start gap-1 md:w-full">
              <Heading size="6xl" as="h2">
                HighLights
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
                    <div className="flex flex-col gap-6 rounded-[30px] border-2 border-solid border-gray-400 bg-gray-300_02">
                      <Img
                        src="images/img_image_7.png"
                        alt="imageseven"
                        className="h-[566px] rounded-tl-[30px] rounded-tr-[30px] object-cover"
                      />
                      <div className="flex flex-col items-center gap-[13px] pb-10 sm:pb-5">
                        <Heading size="4xl" as="h3">
                          Complete your space
                        </Heading>
                        <Text
                          size="3xl"
                          as="p"
                          className="!font-normal !text-gray-700"
                        >
                          TechVolt Objet Collection
                        </Text>
                        <Button
                          shape="round"
                          className="min-w-[170px] font-inter font-medium sm:px-5"
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
        <div className="container-xs mt-[71px] flex flex-col gap-[45px] md:p-5">
          <div className="flex flex-col items-start gap-1.5">
            <Heading size="6xl" as="h2">
              TechVolt Experience
            </Heading>
            <Text size="2xl" as="p" className="tracking-[1.40px]">
              Tips, guides and techy deep dives—straight from the source
            </Text>
          </div>
          <div className="flex gap-10 md:flex-col">
            {data.map((d, index) => (
              <div
                key={"list" + index}
                className="relative h-[576px] w-full md:h-auto"
              >
                <Img
                  src={d.smarttvone}
                  alt="smart_tv"
                  className="h-[576px] w-full rounded-[20px] object-cover"
                />
                <Heading
                  size="2xl"
                  as="h2"
                  className="absolute bottom-[6%] left-[8%] m-auto !text-white-A700"
                >
                  {d.smarttv}
                </Heading>
              </div>
            ))}
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
                  src="images/img_icon.svg"
                  alt="image"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                rightIcon={
                  <Img
                    src="images/img_frame_white_a700.svg"
                    alt="frame"
                    className="h-[24px] w-[24px]"
                  />
                }
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
                  <Img src="images/img_icon_black_900_02.svg" />
                </Button>
              </div>
              <Button
                size="lg"
                rightIcon={
                  <Img
                    src="images/img_frame.svg"
                    alt="frame"
                    className="h-[24px] w-[24px]"
                  />
                }
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
                  src="images/img_icon_black_900_02_48x48.svg"
                  alt="icon"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                rightIcon={
                  <Img
                    src="images/img_frame.svg"
                    alt="frame"
                    className="h-[24px] w-[24px]"
                  />
                }
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
                  src="images/img_icon_48x48.svg"
                  alt="icon"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                rightIcon={
                  <Img
                    src="images/img_frame.svg"
                    alt="frame"
                    className="h-[24px] w-[24px]"
                  />
                }
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
                  src="images/img_icon_1.svg"
                  alt="icon"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                rightIcon={
                  <Img
                    src="images/img_frame.svg"
                    alt="frame"
                    className="h-[24px] w-[24px]"
                  />
                }
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
                  src="images/img_volume.svg"
                  alt="volume"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                rightIcon={
                  <Img
                    src="images/img_frame.svg"
                    alt="frame"
                    className="h-[24px] w-[24px]"
                  />
                }
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
                  src="images/img_icon_2.svg"
                  alt="icon"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                rightIcon={
                  <Img
                    src="images/img_frame.svg"
                    alt="frame"
                    className="h-[24px] w-[24px]"
                  />
                }
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
                  src="images/img_icon_3.svg"
                  alt="icon"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <Button
                size="lg"
                rightIcon={
                  <Img
                    src="images/img_frame.svg"
                    alt="frame"
                    className="h-[24px] w-[24px]"
                  />
                }
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
                    src="images/img_footer_logo.png"
                    alt="footerlogo"
                    className="h-[50px] w-[223px] object-contain"
                  />
                  <div className="flex flex-col gap-[18px]">
                    <Text as="p" className="leading-[26px]">
                      The fastest and simple way to generate growing business
                      solutions with our products
                    </Text>
                    <div className="flex items-center gap-2.5 self-start">
                      <Img
                        src="images/img_lock_black_900_02.svg"
                        alt="lock"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end">
                        TechVolt@Gmail.com
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
                        src="images/img_frame_gray_700.svg"
                        alt="frame"
                        className="h-[24px] w-[24px]"
                      />
                    }
                    className="gap-[35px]"
                  />
                  <div className="flex w-[52%] justify-between gap-5 md:w-full">
                    <Img
                      src="images/img_bx_bxl_instagram_alt.svg"
                      alt="bxbxl"
                      className="h-[24px] w-[24px]"
                    />
                    <Img
                      src="images/img_akar_icons_twitter_fill.svg"
                      alt="akaricons"
                      className="h-[24px] w-[24px]"
                    />
                    <Button size="xs" shape="square" className="w-[24px]">
                      <Img src="images/img_akar_icons_linkedin_fill.svg" />
                    </Button>
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
