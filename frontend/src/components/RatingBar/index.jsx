import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";

const RatingBar = ({
  children,
  className,
  starCount = 5,
  color = "grey",
  activeColor = "red",
  isEditable = false,
  ...restProps
}) => {
  return (
    <>
      <ReactStars
        edit={isEditable}
        classNames={className}
        count={starCount}
        isHalf={false}
        color={color}
        activeColor={activeColor}
        {...restProps}
        key={restProps.value || 1}
      />
      {children}
    </>
  );
};
RatingBar.propTypes = {
  children: PropTypes.string,
  starCount: PropTypes.string,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  isEditable: PropTypes.string,
  className: PropTypes.string,
};

export { RatingBar };
