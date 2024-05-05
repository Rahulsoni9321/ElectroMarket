import React from "react";
import { Button, Heading, Text, RatingBar, Img } from "./..";

export default function ProductDetailsColumnaddTo({
  p5star15splitaca = "5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model",
  threethousandonehundredtwentytwo = "3(122)",
  mrp = "MRP",
  oldprice = "₹85990",
  offer = "46% Off",
  price = "₹17,800",
  addToBasket = "Add To Basket",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full pt-9 pb-6 gap-[23px] px-5 sm:py-5 border-gray-400_01 border border-solid rounded-[30px]`}
    >
      <Img src="images/img_image_3_192x270.png" alt="image" className="h-[192px] w-full object-cover md:h-auto" />
      <div className="flex flex-col gap-2 self-stretch">
        <Text size="xl" as="p" className="!font-medium leading-[27px] !text-black-900">
          {p5star15splitaca}
        </Text>
        <div className="flex w-[61%] items-center justify-center gap-2 md:w-full">
          <RatingBar value={1} isEditable={true} size={18} className="flex flex-1 justify-between" />
          <Text as="p" className="!text-black-900">
            {threethousandonehundredtwentytwo}
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[9px]">
        <div className="flex flex-wrap gap-[7px]">
          <Text size="xl" as="p" className="!text-gray-700">
            {mrp}
          </Text>
          <Text size="xl" as="p" className="!text-gray-700 line-through">
            {oldprice}
          </Text>
          <Text size="xl" as="p">
            {offer}
          </Text>
        </div>
        <Heading size="4xl" as="h1">
          {price}
        </Heading>
      </div>
      <Button shape="round" className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5">
        {addToBasket}
      </Button>
    </div>
  );
}
