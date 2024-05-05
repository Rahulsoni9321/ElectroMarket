// import React from "react";
import { Helmet } from "react-helmet";
import {
  Img,
  Text,
  Button,
  Heading,
  RatingBar,
  CheckBox,
} from "../../components";
import Footer from "../../components/Footer";
import HomepageHeader from "../../components/HomepageHeader";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function ProductGridPage() {
  return (
    <>
      <Helmet>
        <title>electromar</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-10 bg-white-A700">
        <HomepageHeader shopOne="Shop" />
        <div className="flex justify-center">
          <div className="container-xs flex items-start justify-center gap-10 md:flex-col md:p-5">
            <div className="flex w-[18%] flex-col items-start gap-3.5 pt-[7px] md:w-full">
              <Heading size="md" as="h1" className="!font-bold">
                Filters
              </Heading>
              <Accordion
                preExpanded={[0]}
                className="flex flex-col gap-3 self-stretch"
              >
                {[...Array(4)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelistb${i}`}>
                    <div className="flex flex-1 flex-col items-start gap-3">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="flex flex-wrap justify-between gap-5 self-stretch border-t border-solid border-gray-400_01 pb-[11px] pt-3">
                                  <Text
                                    as="p"
                                    className="!font-medium !text-black-900"
                                  >
                                    Brands
                                  </Text>
                                  {props?.expanded ? (
                                    <Img
                                      src="images/img_arrow_up_black_900_02.svg"
                                      alt="arrowup"
                                      className="h-[24px] w-[24px]"
                                    />
                                  ) : (
                                    <Img
                                      src="images/img_arrow_up_black_900_02.svg"
                                      alt="arrowdown"
                                      className="h-[24px] w-[24px] self-start"
                                    />
                                  )}
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex w-[50%] flex-col items-start gap-[19px] md:w-full">
                          <div className="flex flex-col gap-[18px] self-stretch">
                            <CheckBox
                              name="lg"
                              label="LG"
                              id="lg"
                              className="gap-4 text-base text-gray-700"
                            />
                            <CheckBox
                              name="samsung"
                              label="Samsung"
                              id="samsung"
                              className="gap-4 p-px text-base text-gray-700"
                            />
                            <CheckBox
                              name="panasonic"
                              label="Panasonic"
                              id="panasonic"
                              className="gap-4 text-base text-gray-700"
                            />
                            <CheckBox
                              name="whirlpool"
                              label="Whirlpool"
                              id="whirlpool"
                              className="gap-4 text-base text-gray-700"
                            />
                          </div>
                          <a href="#">
                            <Text as="p" className="!text-black-900 underline">
                              See all
                            </Text>
                          </a>
                        </div>
                      </AccordionItemPanel>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex flex-1 flex-col items-start gap-[23px] md:self-stretch">
              <Text as="p" className="!font-medium !text-black-900">
                34 Results
              </Text>
              <div className="grid grid-cols-3 gap-10 self-stretch md:grid-cols-2 sm:grid-cols-1">
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                  <Img
                    src="images/img_image_3_219x293.png"
                    alt="image"
                    className="h-[219px] object-cover"
                  />
                  <div className="flex flex-col gap-[23px]">
                    <div className="flex flex-col gap-2">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-medium leading-[27px] !text-black-900"
                      >
                        5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+
                        & Black Protection, 2024 Model
                      </Text>
                      <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">
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
                    <div className="flex flex-col items-start gap-[9px]">
                      <div className="flex flex-wrap gap-[7px]">
                        <Text size="xl" as="p" className="!text-gray-700">
                          MRP
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
                  </div>
                  <Button
                    shape="round"
                    className="w-full font-inter font-bold sm:px-5"
                  >
                    Add To Basket
                  </Button>
                </div>
                <div className="flex w-full flex-col items-center gap-[23px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                  <Img
                    src="images/img_image_3_219x293.png"
                    alt="imagethree"
                    className="h-[219px] w-full object-cover md:h-auto"
                  />
                  <div className="flex flex-col gap-2 self-stretch">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-medium leading-[27px] !text-black-900"
                    >
                      5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ &
                      Black Protection, 2024 Model
                    </Text>
                    <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">
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
                  <div className="flex flex-col items-start gap-[9px]">
                    <div className="flex flex-wrap gap-[7px]">
                      <Text size="xl" as="p" className="!text-gray-700">
                        MRP
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
                  <Button
                    shape="round"
                    className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                  >
                    Add To Basket
                  </Button>
                </div>
                <div className="flex w-full flex-col items-center gap-[23px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                  <Img
                    src="images/img_image_3_219x293.png"
                    alt="imagethree"
                    className="h-[219px] w-full object-cover md:h-auto"
                  />
                  <div className="flex flex-col gap-2 self-stretch">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-medium leading-[27px] !text-black-900"
                    >
                      5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ &
                      Black Protection, 2024 Model
                    </Text>
                    <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">
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
                  <div className="flex flex-col items-start gap-[9px]">
                    <div className="flex flex-wrap gap-[7px]">
                      <Text size="xl" as="p" className="!text-gray-700">
                        MRP
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
                  <Button
                    shape="round"
                    className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                  >
                    Add To Basket
                  </Button>
                </div>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                  <Img
                    src="images/img_image_3_219x293.png"
                    alt="imagethree"
                    className="h-[219px] object-cover"
                  />
                  <div className="flex flex-col gap-[23px]">
                    <div className="flex flex-col gap-2">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-medium leading-[27px] !text-black-900"
                      >
                        5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+
                        & Black Protection, 2024 Model
                      </Text>
                      <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">
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
                    <div className="flex flex-col items-start gap-[9px]">
                      <div className="flex flex-wrap gap-[7px]">
                        <Text size="xl" as="p" className="!text-gray-700">
                          MRP
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
                      <Heading size="4xl" as="h5">
                        ₹17,800
                      </Heading>
                    </div>
                  </div>
                  <Button
                    shape="round"
                    className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                  >
                    Add To Basket
                  </Button>
                </div>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                  <Img
                    src="images/img_image_3_219x293.png"
                    alt="imagethree"
                    className="h-[219px] object-cover"
                  />
                  <div className="flex flex-col gap-[23px]">
                    <div className="flex flex-col gap-2">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-medium leading-[27px] !text-black-900"
                      >
                        5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+
                        & Black Protection, 2024 Model
                      </Text>
                      <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">
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
                    <div className="flex flex-col items-start gap-[9px]">
                      <div className="flex flex-wrap gap-[7px]">
                        <Text size="xl" as="p" className="!text-gray-700">
                          MRP
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
                      <Heading size="4xl" as="h6">
                        ₹17,800
                      </Heading>
                    </div>
                  </div>
                  <Button
                    shape="round"
                    className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                  >
                    Add To Basket
                  </Button>
                </div>
                <div className="flex w-full flex-col items-center gap-[23px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                  <Img
                    src="images/img_image_3_219x293.png"
                    alt="imagethree"
                    className="h-[219px] w-full object-cover md:h-auto"
                  />
                  <div className="flex flex-col gap-2 self-stretch">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-medium leading-[27px] !text-black-900"
                    >
                      5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ &
                      Black Protection, 2024 Model
                    </Text>
                    <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">
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
                  <div className="flex flex-col items-start gap-[9px]">
                    <div className="flex flex-wrap gap-[7px]">
                      <Text size="xl" as="p" className="!text-gray-700">
                        MRP
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
                    <Heading size="4xl" as="h1">
                      ₹17,800
                    </Heading>
                  </div>
                  <Button
                    shape="round"
                    className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                  >
                    Add To Basket
                  </Button>
                </div>
                <div className="flex w-full flex-col gap-[22px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                  <Img
                    src="images/img_image_3_219x293.png"
                    alt="imagethree"
                    className="h-[219px] object-cover"
                  />
                  <div className="flex flex-col gap-[23px]">
                    <div className="flex flex-col gap-2">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-medium leading-[27px] !text-black-900"
                      >
                        5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+
                        & Black Protection, 2024 Model
                      </Text>
                      <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">
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
                    <div className="flex flex-col items-start gap-[9px]">
                      <div className="flex flex-wrap gap-[7px]">
                        <Text size="xl" as="p" className="!text-gray-700">
                          MRP
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
                      <Heading size="4xl" as="h1">
                        ₹17,800
                      </Heading>
                    </div>
                  </div>
                  <Button
                    shape="round"
                    className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                  >
                    Add To Basket
                  </Button>
                </div>
                <div className="flex w-full flex-col items-center gap-[23px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                  <Img
                    src="images/img_image_3_219x293.png"
                    alt="imagethree"
                    className="h-[219px] w-full object-cover md:h-auto"
                  />
                  <div className="flex flex-col gap-2 self-stretch">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-medium leading-[27px] !text-black-900"
                    >
                      5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ &
                      Black Protection, 2024 Model
                    </Text>
                    <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">
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
                  <div className="flex flex-col items-start gap-[9px]">
                    <div className="flex flex-wrap gap-[7px]">
                      <Text size="xl" as="p" className="!text-gray-700">
                        MRP
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
                    <Heading size="4xl" as="h1">
                      ₹17,800
                    </Heading>
                  </div>
                  <Button
                    shape="round"
                    className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                  >
                    Add To Basket
                  </Button>
                </div>
                <div className="flex w-full flex-col items-center gap-[23px] rounded-[30px] border border-solid border-gray-400_01 px-5 pb-6 pt-9 sm:py-5">
                  <Img
                    src="images/img_image_3_219x293.png"
                    alt="imagethree"
                    className="h-[219px] w-full object-cover md:h-auto"
                  />
                  <div className="flex flex-col gap-2 self-stretch">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-medium leading-[27px] !text-black-900"
                    >
                      5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ &
                      Black Protection, 2024 Model
                    </Text>
                    <div className="flex w-[57%] items-center justify-center gap-2 md:w-full">
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
                  <div className="flex flex-col items-start gap-[9px]">
                    <div className="flex flex-wrap gap-[7px]">
                      <Text size="xl" as="p" className="!text-gray-700">
                        MRP
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
                    <Heading size="4xl" as="h1">
                      ₹17,800
                    </Heading>
                  </div>
                  <Button
                    shape="round"
                    className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
                  >
                    Add To Basket
                  </Button>
                </div>
              </div>
              <div className="flex w-[31%] items-center gap-5 self-end md:w-full">
                <div className="flex items-center gap-1">
                  <Img
                    src="images/img_arrow_left.svg"
                    alt="arrowleft"
                    className="h-[24px] w-[24px]"
                  />
                  <Text size="md" as="p">
                    Previous
                  </Text>
                </div>
                <div className="flex flex-1 items-center justify-between gap-5">
                  <Text size="md" as="p">
                    1
                  </Text>
                  <Button
                    size="lg"
                    className="min-w-[49px] rounded-[10px] border border-solid border-black-900_02 font-medium"
                  >
                    2
                  </Button>
                  <Text size="md" as="p">
                    3
                  </Text>
                  <Text size="md" as="p">
                    4
                  </Text>
                </div>
                <div className="flex items-center gap-1">
                  <Text size="md" as="p">
                    Next
                  </Text>
                  <Img
                    src="images/img_arrow_right.svg"
                    alt="arrowright"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
