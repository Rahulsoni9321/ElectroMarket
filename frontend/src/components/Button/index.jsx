import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[28px]",
};
const variants = {
  fill: {
    gray_300_04: "bg-gray-300_04 text-black-900_02",
    white_A700: "bg-white-A700 text-black-900_02",
    deep_orange_A700: "bg-deep_orange-A700 text-white-A700",
  },
  outline: {
    deep_orange_A700: "border-deep_orange-A700 border-b-2 border-solid text-black-900_02",
  },
};
const sizes = {
  "4xl": "h-[54px] px-[11px] text-xl",
  xl: "h-[48px] px-0.5",
  xs: "h-[24px] px-px",
  lg: "h-[46px] px-[31px] text-base",
  "3xl": "h-[52px] px-[35px] text-base",
  "5xl": "h-[56px] px-[35px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "5xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["4xl", "xl", "xs", "lg", "3xl", "5xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_300_04", "white_A700", "deep_orange_A700"]),
};

export { Button };
