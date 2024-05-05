// import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Input, Img } from "../../components";
import Footer from "../../components/Footer";
import HomepageHeader from "../../components/HomepageHeader";

export default function SigninPage() {
  return (
    <>
      <Helmet>
        <title>electromar</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-10 bg-white-A700">
        <HomepageHeader shopOne="Sign in" className="self-stretch" />
        <div className="container-xs flex justify-center px-[343px] md:p-5 md:px-5">
          <div className="flex w-full flex-col items-center gap-[33px] rounded-[16px] border border-solid border-blue_gray-100_01 bg-gray-100 px-8 pb-[31px] pt-8 sm:p-5">
            <Img
              src="images/img_header_logo.png"
              alt="headerlogo"
              className="h-[50px] w-[223px] object-contain"
            />
            <div className="flex flex-col items-center gap-6 self-stretch">
              <div className="flex flex-col items-center gap-[29px] self-stretch">
                <a href="#" className="self-start">
                  <Heading size="3xl" as="h1" className="!text-blue_gray-900">
                    Sign in
                  </Heading>
                </a>
                <div className="flex flex-col items-start gap-2 self-stretch">
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
                <Button
                  size="3xl"
                  shape="round"
                  className="w-full !rounded-[26px] font-inter font-bold sm:px-5"
                >
                  SIGN IN
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <a href="#" className="self-start">
                  <Text as="p">Don’t have an account?</Text>
                </a>
                <a href="#" className="self-end">
                  <Heading as="h2" className="!text-deep_orange-A700">
                    Sign Up
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
