// import React from "react";
import { Text, Button } from "./..";
import PropTypes from "prop-types";

export default function HomepageTab({
  buttontext1 = "Objet Collection",
  text1 = "Lifestyle Screens",
  text2 = "Monitors",
  text3 = "Air Care",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col items-center gap-[30px]`}
    >
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
        {text3 && (
          <Text size="2xl" as="p" className="tracking-[1.40px]">
            {text3}
          </Text>
        )}
      </div>
    </div>
  );
}

HomepageTab.propTypes = {
  buttontext1: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  className: PropTypes.string,
};
