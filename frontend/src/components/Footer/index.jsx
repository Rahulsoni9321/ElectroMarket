// import React from "react";
import PropTypes from "prop-types";
import { Text, Img, Input, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center pt-[37px] pb-[38px] sm:py-5 border-gray-400 border border-solid bg-gray-300_04`}
    >
      <div className="container-xs flex justify-center md:p-5">
        <div className="flex w-full flex-col items-center">
          <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
            <div className="flex w-[32%] flex-col gap-[37px] md:w-full">
              <Img
                src="images/img_footer_logo.png"
                alt="footerlogo"
                className="h-[50px] w-[223px] object-contain"
              />
              <div className="flex flex-col gap-[19px]">
                <Text as="p" className="leading-[26px]">
                  The fastest and simple way to generate growing business
                  solutions with our products
                </Text>
                <div className="flex items-center gap-2.5">
                  <Img
                    src="images/img_lock_black_900_02.svg"
                    alt="lock"
                    className="h-[24px] w-[24px] self-start"
                  />
                  <Text as="p" className="self-end">
                    sunilkumarsaini6363@gmail.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex w-[31%] items-center justify-between gap-5 md:w-full sm:flex-col">
              <div className="flex flex-col gap-3">
                <Heading as="h6" className="!text-black-900_02">
                  Sitemap
                </Heading>
                <ul className="flex flex-col gap-[13px]">
                  <li>
                    <a href="Product" target="_blank" rel="noreferrer">
                      <Text as="p">Product</Text>
                    </a>
                  </li>
                  <li>
                    <a href="Services" target="_blank" rel="noreferrer">
                      <Text as="p">Services</Text>
                    </a>
                  </li>
                  <li>
                    <a href="Article" target="_blank" rel="noreferrer">
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
                    <a href="Contact" target="_blank" rel="noreferrer">
                      <Text as="p">Contact</Text>
                    </a>
                  </li>
                  <li>
                    <a href="FAQs" target="_blank" rel="noreferrer">
                      <Text as="p">FAQs</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex w-[19%] flex-col items-start gap-3.5 md:w-full">
              <Heading as="h6" className="!text-black-900_02">
                Connect With Us
              </Heading>
              <Input
                shape="round"
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
                <Img
                  src="images/img_akar_icons_linkedin_fill_black_900_02.svg"
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
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};
