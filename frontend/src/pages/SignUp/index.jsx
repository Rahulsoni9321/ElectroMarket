// import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, CheckBox, Input, Img } from "../../components";
import Footer from "../../components/Footer";
import HomepageHeader from "../../components/HomepageHeader";

export default function SignUpPage() {
  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta name="description" content="Web site" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-10 bg-white-A700">
        <HomepageHeader shopOne="Sign Up" className="self-stretch" />
        <div className="container-xs flex justify-center px-[343px] md:p-5 md:px-5">
          <div className="flex w-full flex-col items-center gap-[33px] rounded-[16px] border border-solid border-blue_gray-100_01 bg-gray-100 p-8 sm:p-5">
            <Img
              src="images/img_header_logo.png"
              alt="headerlogo"
              className="h-[50px] w-[223px] object-contain"
            />
            <div className="flex flex-col items-center gap-6 self-stretch">
              <div className="flex flex-col items-center gap-[30px] self-stretch">
                <a href="#" className="self-start">
                  <Heading size="3xl" as="h1" className="!text-blue_gray-900">
                    Sign Up
                  </Heading>
                </a>
                <div className="flex gap-4 self-stretch md:flex-col">
                  <div className="flex w-full flex-col items-start gap-2">
                    <Text as="p" className="!text-black-900">
                      First Name
                    </Text>
                    <Input
                      shape="round"
                      type="text"
                      name="firstName"
                      placeholder={`First name`}
                      className="!rounded-[24px] sm:pr-5"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-[7px]">
                    <Text as="p" className="!text-black-900">
                      Last Name
                    </Text>
                    <Input
                      shape="round"
                      type="text"
                      name="lastName"
                      placeholder={`Last name`}
                      className="!rounded-[24px] sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex gap-4 self-stretch md:flex-col">
                  <div className="flex w-full flex-col items-start gap-2">
                    <Text as="p" className="!text-black-900">
                      Email Address
                    </Text>
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`Email Address`}
                      className="!rounded-[24px] sm:pr-5"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-[7px]">
                    <Text as="p" className="!text-black-900">
                      <span className="text-black-900">Phone</span>
                      <span className="text-deep_orange-A700">*</span>
                    </Text>
                    <Input
                      shape="round"
                      type="number"
                      name="phone"
                      placeholder={`Enter phone number`}
                      prefix={
                        <Img
                          src="images/img_fi10597864.svg"
                          alt="fi_10597864"
                          className="h-[24px] w-[24px]"
                        />
                      }
                      className="gap-[35px] !rounded-[24px] sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[7px] self-stretch">
                  <Text as="p" className="!text-black-900">
                    Password
                  </Text>
                  <Input
                    shape="round"
                    type="password"
                    name="password"
                    placeholder={`Password`}
                    className="!rounded-[24px] sm:pr-5"
                  />
                </div>
                <a href="#" className="self-end">
                  <Text as="p" className="!font-medium">
                    Forgot Password?
                  </Text>
                </a>
                <CheckBox
                  name="checkmark"
                  label="By signing up I agree  to the Terms & Conditions and Privacy Policy"
                  id="checkmark"
                  className="gap-2 self-stretch py-1.5 pr-[35px] text-base text-gray-700 sm:pr-5"
                />
                <Button
                  size="3xl"
                  shape="round"
                  className="w-full !rounded-[26px] font-inter font-bold sm:px-5"
                >
                  SIGN UP
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <Text as="p">Already have account?</Text>
                <a href="#">
                  <Heading as="h2" className="!text-deep_orange-A700">
                    Sign In
                  </Heading>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer className="self-stretch" />
      </div>
    </>
  );
}
