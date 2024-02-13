import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg", square: "rounded-none" };
const variants = {
  outline: {
    red_600: "border-b-2 border-red-600 border-solid text-red-600",
    gray_300_01: "border border-gray-300_01 border-solid text-gray-900_02",
  },
  fill: {
    white_A700: "bg-white-A700 shadow-bs text-red-600",
    red_600: "bg-red-600 text-white-A700",
  },
};
const sizes = { xs: "p-3", sm: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "outline",
  color = "gray_300_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["red_600", "gray_300_01", "white_A700"]),
};

export { Button };
