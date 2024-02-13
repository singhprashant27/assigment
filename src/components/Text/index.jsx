import React from "react";

const sizeClasses = {
  txtMetropolisMedium10: "font-medium font-metropolis",
  txtMetropolisSemiBold12Green700: "font-metropolis font-semibold",
  txtMetropolisMedium12: "font-medium font-metropolis",
  txtMetropolisSemiBold32Red600: "font-metropolis font-semibold",
  txtMetropolisSemiBold12Red600: "font-metropolis font-semibold",
  txtMetropolisRegular16: "font-metropolis font-normal",
  txtMetropolisSemiBold12: "font-metropolis font-semibold",
  txtMetropolisSemiBold24: "font-metropolis font-semibold",
  txtMetropolisRegular12: "font-metropolis font-normal",
  txtMetropolisSemiBold32: "font-metropolis font-semibold",
  txtMetropolisMedium10WhiteA700: "font-medium font-metropolis",
  txtMetropolisSemiBold16: "font-metropolis font-semibold",
  txtMetropolisSemiBold16Gray90002: "font-metropolis font-semibold",
  txtManropeMedium14: "font-manrope font-medium",
  txtMetropolisSemiBold14: "font-metropolis font-semibold",
  txtMetropolisSemiBold12Gray90002: "font-metropolis font-semibold",
  txtMetropolisRegular16Gray80001: "font-metropolis font-normal",
  txtMetropolisMedium12Bluegray40001: "font-medium font-metropolis",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
