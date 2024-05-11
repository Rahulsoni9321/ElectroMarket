// import React from "react";
import { Text, Img } from "./..";
import PropTypes from "prop-types";

export default function HomepageHeader({
  home = "Home",
  shop = "Shop",
  accessories = "Accessories",
  aboutus = "About Us",
  contactus = "Contact Us",
  homeOne = "Home",
  shopOne = "Product Details",
  arrowright,
  shopTwo,
  ...props
}) {
  return (
    <div {...props}>
      <header className="flex items-center justify-center self-stretch border-b border-solid border-gray-200 bg-slate-400 text-white py-10 sm:py-1">
        <div className="container-xs flex items-center justify-between gap-2 md:flex-col md:p-5">
          <ul className="flex flex-wrap items-center gap-10 pr-2.5 ">
            <li>
              <Img
                src="\public\assets\Electromarket.png"
                alt="headerlogo"
                className="h-[50px] object-contain object-left-top"
              />
            </li>
            <li>
              <a
                href="#"
                className="border-b-2 border-solid border-deep_orange-A700"
              >
                <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                  {home}
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="mb-[9px]">
                <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                  {shop}
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                  {accessories}
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                  {aboutus}
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text size="2xl" as="p" className="p-[11px] tracking-[1.40px]">
                  {contactus}
                </Text>
              </a>
            </li>
            <a href="#">
              <Img
                src="./public/assets/search-svgrepo-com.svg"
                alt="search"
                className="h-[32px] w-[32px]"
              />
            </a>
            <a href="#">
              <Img
                src="./public/assets/bag-shopping-svgrepo-com.svg"
                alt="bag"
                className="h-[32px] w-[32px]"
              />
            </a>
          </ul>
        </div>
      </header>
      <div className="flex justify-center self-stretch border-b border-solid border-gray-200 bg-white-A700 pb-[13px] pt-[15px]">
        <div className="container-xs flex md:p-5">
          <div className="flex flex-wrap items-start gap-1.5 sm:flex-col">
            <Text size="xl" as="p" className="capitalize !text-gray-700">
              {homeOne}
            </Text>
            <Img
              src="\public\assets\arrowright-svgrepo-com.svg"
              alt="arrowright"
              className="h-[24px] w-[24px] sm:w-full"
            />
            <Text
              size="xl"
              as="p"
              className="!font-medium capitalize !text-gray-700"
            >
              {shopOne}
            </Text>
            {!!arrowright ? (
              <Img
                src={arrowright}
                alt="arrowright"
                className="h-[24px] w-[24px] sm:w-full"
              />
            ) : null}
            {!!shopTwo ? (
              <Text size="xl" as="p" className="!font-medium capitalize">
                {shopTwo}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
HomepageHeader.propTypes = {
  home: PropTypes.string,
  shop: PropTypes.string,
  accessories: PropTypes.string,
  aboutus: PropTypes.string,
  contactus: PropTypes.string,
  homeOne: PropTypes.string,
  shopOne: PropTypes.string,
  arrowright: PropTypes.node, // or PropTypes.element, depending on the type of arrowright
  shopTwo: PropTypes.string,
};
