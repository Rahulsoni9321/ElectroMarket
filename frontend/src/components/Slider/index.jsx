import React from "react";
import PropTypes from "prop-types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = React.forwardRef(function Slider(
  {
    items = [],
    centerMode,
    magnifiedIndex = 0,
    activeSlideCSS = "scale-75",
    ...props
  },
  ref
) {
  const isSmall = (index) => {
    if (props?.activeIndex + magnifiedIndex >= items?.length) {
      return index !== props?.activeIndex + magnifiedIndex - items?.length;
    } else {
      return index !== props.activeIndex + magnifiedIndex;
    }
  };

  const slideItems = centerMode
    ? items?.map((child, index) => {
        if (isSmall(index)) {
          return React.cloneElement(child, {
            ...child.props,
            className: [child.props?.className, activeSlideCSS]
              .filter(Boolean)
              .join(" "),
          });
        }
        return React.cloneElement(child);
      })
    : items;

  return (
    <AliceCarousel
      items={slideItems}
      infinite
      ref={ref}
      {...props}
      touchTracking
      mouseTracking
      disableButtonsControls
    />
  );
});
Slider.propTypes = {
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number,
  centerMode: PropTypes.bool,
  magnifiedIndex: PropTypes.number,
  activeSlideCSS: PropTypes.string,
};
export { Slider };
