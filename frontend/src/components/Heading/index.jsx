import React from "react";

const sizes = {
  "3xl": "text-[26px] font-semibold md:text-2xl sm:text-[22px]",
  "2xl": "text-2xl font-semibold md:text-[22px]",
  "4xl": "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  "7xl": "text-[65px] font-semibold md:text-5xl",
  "6xl": "text-[56px] font-semibold md:text-5xl sm:text-[42px]",
  s: "text-base font-semibold",
  md: "text-lg font-semibold",
  xs: "text-sm font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
