// import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, CheckBox } from "../../components";
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
        <title>ElectroMarket</title>
        <meta name="description" content="Web site" />
      </Helmet>
      <div className="flex w-full flex-col gap-10 bg-zinc-300">
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
                              name="g"
                              label="G"
                              id="lg"
                              className="gap-4 text-base text-gray-700"
                            />
                            <CheckBox
                              name="s"
                              label="g"
                              id="a"
                              className="gap-4 p-px text-base text-gray-700"
                            />
                            <CheckBox
                              name="p"
                              label="Pa"
                              id="s"
                              className="gap-4 text-base text-gray-700"
                            />
                            <CheckBox
                              name="w"
                              label="l"
                              id="ol"
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
              <div className="grid grid-cols-3 gap-10 self-stretch md:grid-cols-2 sm:grid-cols-1"></div>
              <div className="flex w-[31%] items-center gap-5 self-end md:w-full">
                <div className="flex items-center gap-1">
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

ProductGridPage.propTypes = {
  expanded: PropTypes.string,
};
