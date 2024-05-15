import PropTypes from "prop-types";
const sizes = {
  "5xl": "text-[28px] font-normal md:text-[26px] sm:text-2xl",
  "6xl": "text-[32px] font-medium md:text-3xl sm:text-[28px]",
  xs: "text-xs font-normal",
  lg: "text-base font-normal",
  "2xl": "text-xl font-normal",
  "3xl": "text-2xl font-medium md:text-[22px]",
  "4xl": "text-[26px] font-medium md:text-2xl sm:text-[22px]",
  xl: "text-lg font-normal",
  md: "text-[15px] font-medium",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900_02 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
Text.propTypes = {
  children: PropTypes.string,
  as: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

export { Text };
