import React from "react";
import { Text, Button } from "./..";

export default function HomepageTab({
  buttontext1 = "Objet Collection",
  text1 = "Lifestyle Screens",
  text2 = "Monitors",
  text3,
  text4,
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex md:flex-col items-center gap-[30px]`}>
      <Button
        size="4xl"
        variant="outline"
        shape="square"
        color="undefined_undefined"
        className="w-full flex-1 tracking-[1.40px] md:self-stretch"
      >
        {buttontext1}
      </Button>
      <div className="flex px-2.5 pb-2.5 pt-[13px]">
        <Text size="2xl" as="p" className="tracking-[1.40px]">
          {text1}
        </Text>
      </div>
      <div className="flex px-2.5 pb-3 pt-[11px]">
        <Text size="2xl" as="p" className="tracking-[1.40px]">
          {text2}
        </Text>
      </div>
      <div className="flex px-2.5 pb-3 pt-[11px]">
        {!!text3 ? (
          <Text size="2xl" as="p" className="tracking-[1.40px]">
            {text3}
          </Text>
        ) : null}
      </div>
      <div className="flex px-2.5 pb-[11px] pt-3">
        {!!text4 ? (
          <Text size="2xl" as="p" className="tracking-[1.40px]">
            {text4}
          </Text>
        ) : null}
      </div>
    </div>
  );
}
