// import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import HomepageHeader from "../../components/HomepageHeader";
import ProductDetailsColumnaddTo from "../../components/ProductDetailsColumnaddTo";

const data = [
  {
    p5star15splitaca:
      "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
    threethousandonehundredtwentytwo: "3(122)",
    mrp: "MRP",
    oldprice: "₹85990",
    offer: "46% Off",
    price: "₹17,800",
    addToBasket: "Add To Basket",
  },
  {
    p5star15splitaca:
      "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
    threethousandonehundredtwentytwo: "3(122)",
    mrp: "MRP",
    oldprice: "₹85990",
    offer: "46% Off",
    price: "₹17,800",
    addToBasket: "Add To Basket",
  },
  {
    p5star15splitaca:
      "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
    threethousandonehundredtwentytwo: "3(122)",
    mrp: "MRP",
    oldprice: "₹85990",
    offer: "46% Off",
    price: "₹17,800",
    addToBasket: "Add To Basket",
  },
  {
    p5star15splitaca:
      "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
    threethousandonehundredtwentytwo: "3(122)",
    mrp: "MRP",
    oldprice: "₹85990",
    offer: "46% Off",
    price: "₹17,800",
    addToBasket: "Add To Basket",
  },
];

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[39px] bg-white-A700">
        <HomepageHeader
          arrowright="images/img_arrow_right_gray_700.svg"
          shopTwo="Shopping Cart"
        />
        <div className="flex justify-center">
          <Img
            className="container-xs h-[96px] md:h-auto md:p-5"
            src="images/img_stepper.svg"
            alt="stepper"
          />
        </div>
        <div className="flex justify-center">
          <div className="container-xs flex items-start justify-center gap-10 md:flex-col md:p-5">
            <div className="flex flex-1 items-start gap-10 md:flex-col md:self-stretch">
              <Img
                src="images/img_image_3_149x149.png"
                alt="imagefour"
                className="h-[94px] w-[10%] rounded-md object-cover md:w-full"
              />
              <div className="flex flex-1 flex-col items-end gap-[23px] md:self-stretch">
                <div className="flex flex-col gap-6 self-stretch">
                  <div className="flex items-start justify-between gap-5 md:flex-col">
                    <div className="flex flex-1 flex-col gap-4 md:self-stretch">
                      <div className="flex flex-col items-start gap-[9px]">
                        <Heading as="h1" className="w-full leading-6">
                          7Kg Front Load Washing Machine, Inverter Direct Drive,
                          Middle Black
                        </Heading>
                        <Text
                          size="xs"
                          as="p"
                          className="!font-medium !text-gray-700"
                        >
                          Fulfilment By: TechVolt India Electronics Pvt. Ltd.
                        </Text>
                      </div>
                      <div className="flex flex-col items-start gap-1.5">
                        <Text size="xs" as="p" className="!font-medium">
                          Free Delivery: By Wed, Apr 24th
                        </Text>
                        <Text size="xs" as="p" className="!font-medium">
                          Installation & Demo: By Thu, Apr 25th
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-[3px]">
                      <Heading size="md" as="h2">
                        ₹26490.00
                      </Heading>
                      <div className="flex flex-wrap gap-[7px] self-start">
                        <Text
                          size="xs"
                          as="p"
                          className="!font-medium !text-teal-400"
                        >
                          Save ₹14500.00
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-gray-700 line-through"
                        >
                          ₹40990.00
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-gray-300_03" />
                </div>
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <Heading size="xs" as="h3">
                    Price Breakdown
                  </Heading>
                  <div className="flex flex-col gap-1 self-stretch">
                    <div className="flex flex-wrap justify-between gap-5">
                      <Text
                        size="xs"
                        as="p"
                        className="!font-medium !text-gray-700"
                      >
                        Price (Inclusive of all taxes)
                      </Text>
                      <Text
                        size="xs"
                        as="p"
                        className="!font-medium !text-gray-700"
                      >
                        ₹40990.00
                      </Text>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5">
                      <Text
                        size="xs"
                        as="p"
                        className="!font-medium !text-gray-700"
                      >
                        Promotional Discount(s)
                      </Text>
                      <Text
                        size="xs"
                        as="p"
                        className="!font-medium !text-gray-700"
                      >
                        -₹14500.00
                      </Text>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5">
                      <Text
                        size="xs"
                        as="p"
                        className="!font-medium !text-gray-700"
                      >
                        Discount
                      </Text>
                      <Text
                        size="xs"
                        as="p"
                        className="!font-medium !text-gray-700"
                      >
                        -₹750.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] self-stretch">
                  <div className="h-px bg-gray-300_03" />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-1 items-start justify-between gap-5 rounded-md border border-solid border-gray-500 p-[17px] sm:flex-col">
                      <div className="flex items-start gap-5 sm:flex-col">
                        <Img
                          src="images/img_fi_11370591.svg"
                          alt="buy_more_save"
                          className="h-[36px] w-[36px] sm:w-full"
                        />
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!font-medium">
                            Buy More Save More
                          </Text>
                          <Text size="xs" as="p" className="!text-gray-700">
                            Get 5% off* on cart value for 2 or more eligible
                            products purchased together
                          </Text>
                        </div>
                      </div>
                      <Heading size="xs" as="h4" className="underline">
                        Add
                      </Heading>
                    </div>
                    <div className="flex flex-1 items-start justify-center rounded-md border border-solid border-gray-500 px-[15px] pb-[18px] pt-[15px] md:flex-col">
                      <div className="flex flex-1 items-start justify-center gap-5 md:self-stretch sm:flex-col">
                        <Img
                          src="images/img_insurance_a_cd07e9ed.svg"
                          alt="insurancea"
                          className="h-[36px] w-[36px] sm:w-full"
                        />
                        <div className="flex flex-col items-start gap-[3px]">
                          <Text as="p" className="!font-medium">
                            TechVolt Care+
                          </Text>
                          <div className="flex flex-col items-start gap-[5px]">
                            <Text size="xs" as="p" className="!text-gray-700">
                              Earn your peace of mind by availing our Extended
                              Warranty plans now
                            </Text>
                            <Text
                              size="xs"
                              as="p"
                              className="!text-gray-700 underline"
                            >
                              More Information
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Heading size="xs" as="h5" className="underline">
                        Add
                      </Heading>
                    </div>
                    <div className="flex flex-1 items-start justify-between gap-5 rounded-md border border-solid border-gray-500 px-[17px] pb-[18px] pt-[17px] sm:flex-col">
                      <div className="flex items-start gap-5 sm:flex-col">
                        <Img
                          src="images/img_1a_cart.png"
                          alt="1acart"
                          className="h-[36px] w-[36px] object-cover sm:w-full"
                        />
                        <div className="flex flex-col items-start gap-[3px]">
                          <Text as="p" className="!font-medium">
                            Exchange Offer
                          </Text>
                          <Text size="xs" as="p" className="!text-gray-700">
                            Trade in your old device & receive instant discount
                            on your order
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-gray-700 underline"
                          >
                            More Information
                          </Text>
                        </div>
                      </div>
                      <Heading size="xs" as="h6" className="underline">
                        Add
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Heading as="h6" className="self-end underline">
                    Add One More
                  </Heading>
                  <Img
                    src="images/img_fi_10514406.svg"
                    alt="fi10514406"
                    className="h-[24px] w-[24px] self-start"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-[39%] flex-col gap-[37px] rounded-[16px] border border-solid border-black-900_02 bg-gray-100 px-[23px] pb-6 pt-[23px] md:w-full sm:p-5">
              <div className="flex flex-col gap-[23px]">
                <div className="flex justify-between gap-5">
                  <div className="flex flex-col items-start gap-2">
                    <Heading size="2xl" as="h4">
                      Total
                    </Heading>
                    <Text as="p" className="!text-gray-700">
                      Includes GST*
                    </Text>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Heading size="2xl" as="h4">
                      ₹26490.00
                    </Heading>
                    <div className="flex flex-wrap gap-[7px] self-start">
                      <Text as="p" className="!text-gray-700 line-through">
                        ₹40990.00
                      </Text>
                      <Text as="p" className="!font-medium !text-teal-400">
                        Save ₹14500.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px]">
                  <div className="h-px bg-gray-400_01" />
                  <div className="flex items-center justify-between gap-5 rounded-md border border-solid border-black-900_02 bg-white-A700 px-4 py-[15px]">
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_fi_11370591.svg"
                        alt="fi11370591"
                        className="h-[30px] w-[30px]"
                      />
                      <Text
                        as="p"
                        className="self-end !font-light !text-gray-700"
                      >
                        Apply coupon code
                      </Text>
                    </div>
                    <Text as="p" className="self-end !font-inter !font-medium">
                      Apply
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[11px]">
                  <Heading as="h6">Price Breakup</Heading>
                  <div className="flex flex-col gap-1.5 self-stretch">
                    <div className="flex flex-wrap justify-between gap-5">
                      <Text as="p" className="!text-gray-700">
                        Price (Inclusive of all taxes)
                      </Text>
                      <Heading as="h6">₹40990.00</Heading>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5">
                      <Text as="p" className="!text-gray-700">
                        Discount
                      </Text>
                      <Heading as="h6" className="!text-teal-400">
                        -₹14500.00
                      </Heading>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-5">
                      <Text as="p" className="self-end !text-gray-700">
                        Shipping charges
                      </Text>
                      <Heading as="h6">₹0.00</Heading>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                size="3xl"
                shape="round"
                className="w-full !rounded-[26px] font-inter font-bold sm:px-5"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10 pt-[31px] sm:py-5">
          <div className="container-xs flex flex-col items-start gap-7 md:p-5">
            <Heading size="6xl" as="h2">
              Recently Viewed
            </Heading>
            <div className="flex gap-10 self-stretch md:flex-col">
              {data.map((d, index) => (
                <ProductDetailsColumnaddTo {...d} key={"productlist" + index} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
